import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Image} from "react-native";
import colors from "../../utils/colors";
import UseAppFonts from "../../assets/fonts";
import icons from "../../assets/icons";
import styles from "./styles";

export default function ResetPassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible1,setVisible1]= useState(false);

  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasUpperLower = /(?=.*[a-z])(?=.*[A-Z])/.test(password);
  const passwordsMatch = password && password === confirmPassword;





  const handleUpdate = () => {
    if (validatePassword()) {
      Alert.alert("Success", "Password updated successfully!");
      navigation.replace("Login");
    }
  };



  const fontsLoaded=UseAppFonts();
  if(!fontsLoaded){
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
      Enter your new password below to complete the reset process.
      </Text>
     
    <Text style={styles.textStyle}>New Password</Text>
   
 <View style={styles.input}>
      <TextInput
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!visible1}
        style={styles.inputText}
        />
         <TouchableOpacity onPress={() => setVisible1(!visible1)} style={styles.iconStyle2}>
    <Image
      source={visible1 ? icons.passwordSeen : icons.eyeOffIcon} 
      style={styles.iconSize}
    />
  </TouchableOpacity>
         </View>
        
      
     
    <Text style={styles.TextStyle}>Confirm Password</Text>
    <View style={styles.input}>
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!visible}
        style={styles.inputText}
      />
       <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.iconStyle2}>
    <Image
      source={visible ? icons.passwordSeen : icons.eyeOffIcon} 
      style={styles.iconSize}
    />
  </TouchableOpacity>
    </View>
    
      
        <View style={styles.conditions}>
           <Image 
    source={
      password.length === 0 
        ? icons.ResetScreencircle 
        : hasMinLength 
          ? icons.conditionCheckicon 
          : icons.ResetScreencircle 
    } 
  />
          <Text style={styles.conditionsText}>8 characters or above</Text>
        </View>
        <View style={styles.conditions1}>
          <Image 
    source={
      password.length === 0 
        ? icons.ResetScreencircle 
        : hasSpecialChar
          ? icons.conditionCheckicon 
          : icons.ResetScreencircle 
    } 
  />
          <Text style={styles.conditionsText}>1 or more special characters</Text>
        </View>
        <View style={styles.conditions1}>
          <Image 
    source={
      password.length === 0 
        ? icons.ResetScreencircle 
        : hasNumber
          ? icons.conditionCheckicon 
          : icons.ResetScreencircle 
    } 
  />
          <Text style={styles.conditionsText}>1 or more numbers</Text>
        </View>
        <View style={styles.conditions1}>
          <Image 
    source={
      password.length === 0 
        ? icons.ResetScreencircle 
        : hasUpperLower

          ? icons.conditionCheckicon 
          : icons.ResetScreencircle 
    } 
  />
          <Text style={styles.conditionsText}>Upper and lowercase</Text>
        </View>
      

     

      <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.backBtn}onPress={() => navigation.goBack()}>
        <View style={{flexDirection:"row"}}>
        <Image source={icons.resetScreenBackbtn} style={styles.backBtn1}/>
        <Text style={styles.backText}>Back</Text>
          </View>
      </TouchableOpacity>
      
    </View>
  );
}


