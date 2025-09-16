import React, { use, useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Image, Pressable} from "react-native";
import colors from "../../utils/colors";
import { userdata } from "../Login/utils/staticData";
import Images from "../../assets/images";
import icons from "../../assets/icons";
import UseAppFonts from "../../assets/fonts";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [Modalvisible,SetModalVisible]=useState(false);

  const validateEmail = (text) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(text);
  };

  const handleVerify = () => {
    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    } const foundUser=userdata.find((item)=>
    item.email===email)
    if(foundUser){
      SetModalVisible(true)
     
     
    }
   else{
 Alert.alert('This User is not in the List')
    
   }
  };
  const fontloaded=UseAppFonts();
  if(!fontloaded){
    return null;
  }
  

  return (
    <View style={styles.container}>
    
      <View style={styles.container1}>
      <Pressable onPress={()=>navigation.navigate('Login')}>
     <View style={styles.backicon}>
      <Image source={icons.backIcon} style={styles.imageSize}/>
      </View>
      </Pressable>
      <Text style={styles.title}>Forgot Password?</Text>
     
       </View>
        <Text style={styles.subtitle}>
       No worries! Enter your account email below to receive a password reset link
      </Text>
      <Text style={styles.email}>Email Address</Text>
      
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
       
       
      <TouchableOpacity style={styles.verifyBtn} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
        <Modal 
        style={{justifyContent:"flex-end",margin:0,}}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={Modalvisible}
        onRequestClose={() => SetModalVisible(false)}
        onBackdropPress={()=>SetModalVisible(false)}
        backdropOpacity={0.6}
        useNativeDriver
        backdropColor="rgba(8,16,23,1)" >
          <SafeAreaView style={{backgroundColor:"tranparent"}}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
            <Image source={Images.MailBox} style={styles.mailImage}/>
            </View>
            <View style={styles.textContainer}>
          <Text style={styles.modalText}>Link Send to your email</Text>
          <Text style={styles.modalText2}>A Password reset link has been Sent to 
            <Text style={styles.emailText}> {email} </Text>
            </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Reset")} 
            style={styles.loginbtn}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>



        </Modal>
     
    </View>
  );
}

