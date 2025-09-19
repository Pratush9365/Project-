import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity, Alert,Image,ImageBackground} from "react-native";
import Images from "../../assets/images";
import icons from "../../assets/icons";
import UseAppFonts from "../../assets/fonts";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { userdata } from "./utils/staticData";



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[showPassword,setShowPassword]=useState(false)
  const[error,setError]=useState('')
  const [user,setUser]=useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  


  const fontsLoaded=UseAppFonts();
  if(!fontsLoaded){
    return null;
  }


  const handleLogin = async() => {
     if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
       setButtonDisabled(true);
      return;
    }


    const foundUser = userdata.find(
  (item) => item.email === email && item.password === password
);

    if(!foundUser){
       Toast.show({
        type:"error",
        text1:"Error",
        text2:"Invalid Credential",
        topOffset:40,
        position:"top"
         })
     setButtonDisabled(true);
      setTimeout(()=>{setButtonDisabled(false)},3000)
     return;
     
    }
  
 

   
  
    await AsyncStorage.setItem("userdata",JSON.stringify(userdata))
    setUser(userdata);
    Alert.alert('Loggin SuccessFull')
    
   
    navigation.navigate("Home");
  };

  



  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <View style={styles.container}>
     <View style={styles.containerItem}>
        
         <ImageBackground source={Images.HeaderImage} style={styles.backgroundImage}>
         <View style={styles.containerItem1}>
       
         <Image source={Images.SplashImage} style={styles.ImageStyle}/>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.Texts1}> Enter your credentials to access your account</Text>
      
        </View>
   </ImageBackground>
    
      </View>
      
      
     <View style={styles.emailHeader}>
      <Text style={styles.Texts}>Email Address </Text> 
        <TextInput
        placeholder="Email Address"
        value={email}
          onChangeText={(text) => {
    setEmail(text);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  }}
        style={[styles.input,error?styles.errorborder:null]}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    
  
      <Text style={styles.Texts}>Password</Text>
     
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
         style={styles.input}
      /><TouchableOpacity onPress={()=>setShowPassword(!showPassword)} hitSlop={{top:22,right:22,bottom:22,left:22}}>
      <Image source={icons.passwordSeen} style={styles.passwordicon}/>
      
      </TouchableOpacity>
    
      
     
    

      <TouchableOpacity
        onPress={() => navigation.navigate("Forgot")}
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      

      <TouchableOpacity style={[styles.loginBtn,isFormValid&&!buttonDisabled?styles.Visible:styles.notVisible]} onPress={handleLogin}  disabled={!isFormValid} >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    
     

      <Text style={styles.register}>
        Don’t have an account? 
        <Text  style={styles.registerText}
          onPress={() => navigation.navigate("Register")}>
          Register 
        </Text>
        <Text style={styles.register}> now</Text>
      </Text>
      </View>
    
      </View>
  );
}


