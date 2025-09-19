import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { CommonActions } from "@react-navigation/native"; 
import UseAppFonts from "../../assets/fonts";
import icons from "../../assets/icons";
import styles from "./styles";

export default function ResetPassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false); 
  const [visible1, setVisible1] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasUpperLower = /(?=.*[a-z])(?=.*[A-Z])/.test(password);

  const handleUpdate = () => {
    const isValid = hasMinLength && hasSpecialChar && hasNumber && hasUpperLower;

    if (!isValid) {
      Alert.alert("Invalid Password", "Please meet all the password requirements.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Mismatch", "Password and Confirm Password must be the same.");
      return;
    }

    Alert.alert("Success", "Password updated successfully!");

    
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  };

 
  const fontsLoaded = UseAppFonts();
  if (!fontsLoaded) {
    return null;
  }

  const isFormValid =
    hasMinLength &&
    hasNumber &&
    hasSpecialChar &&
    hasUpperLower &&
    password === confirmPassword;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Enter your new password below to complete the reset process.
      </Text>

      <Text style={styles.textStyle}>New Password</Text>
      <TextInput
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        maxLength={16}
        secureTextEntry={!visible1}
        style={styles.inputText}
      />
      <TouchableOpacity
        onPress={() => setVisible1(!visible1)}
        style={styles.iconstyle}
        hitSlop={{ top: 22, bottom: 22, left: 22, right: 22 }}
      >
        <Image source={visible1 ? icons.passwordSeen : icons.eyeOffIcon} style={styles.iconSize} />
      </TouchableOpacity>

      <Text style={styles.textStyle}>Confirm Password</Text>
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        maxLength={16}
        secureTextEntry={!visible}
        style={styles.inputText}
      />
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.iconstyle}
        hitSlop={{ top: 22, bottom: 22, left: 22, right: 22 }}
      >
        <Image source={visible ? icons.passwordSeen : icons.eyeOffIcon} style={styles.iconSize} />
      </TouchableOpacity>

     
      <View style={styles.conditions}>
        <Image
          source={
            password.length === 0 ? icons.ResetScreencircle : hasMinLength ? icons.conditionCheckicon : icons.ResetScreencircle
          }
        />
        <Text style={styles.conditionsText}>8 characters or above</Text>
      </View>

      <View style={styles.conditions1}>
        <Image
          source={
            password.length === 0 ? icons.ResetScreencircle : hasSpecialChar ? icons.conditionCheckicon : icons.ResetScreencircle
          }
        />
        <Text style={styles.conditionsText}>1 or more special characters</Text>
      </View>

      <View style={styles.conditions1}>
        <Image
          source={password.length === 0 ? icons.ResetScreencircle : hasNumber ? icons.conditionCheckicon : icons.ResetScreencircle}
        />
        <Text style={styles.conditionsText}>1 or more numbers</Text>
      </View>

      <View style={styles.conditions1}>
        <Image
          source={
            password.length === 0 ? icons.ResetScreencircle : hasUpperLower ? icons.conditionCheckicon : icons.ResetScreencircle
          }
        />
        <Text style={styles.conditionsText}>Upper and lowercase</Text>
      </View>

      <TouchableOpacity
        style={[styles.updateBtn, isFormValid && !buttonDisabled ? styles.btnVisible : styles.btnNotVisible]}
        onPress={handleUpdate}
        disabled={!isFormValid}
      >
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <View style={{ flexDirection: "row" }}>
          <Image source={icons.resetScreenBackbtn} style={styles.backBtn1} />
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
