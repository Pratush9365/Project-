import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import HomeScreen from "../../screens/home";
import DetailsScreen from "../../screens/productDetail";
import Images from "../../assets/images";
import Onboarding from "../../screens/tutorials";
import LoginScreen from "../../screens/Login";
import ForgotPassword from "../../screens/forgotPassword";
import ResetPassword from "../../screens/resetPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

function SplashScreen() {
  const navigation = useNavigation();



  useEffect(() => {
  const checkOnboarding = async () => {
    const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");
    if (hasSeenOnboarding) {
      navigation.replace("Login"); 
    } else {
      navigation.replace("Onboarding"); 
    }
  };

  const timer = setTimeout(checkOnboarding, 3000);
  return () => clearTimeout(timer);
}, [navigation]);

  return (
    <View style={styles.SplashContainer}>
      <View style={styles.ImagesSetup}>
      
     <Image source={Images.HeaderImage} style={styles.headerImages} />
      <Image source={Images.SplashImage} style={styles.ImageSize} />
        <Image source={Images.HeaderImage} style={styles.headerImages} />
      </View>
    </View>
  );
}

export default function StackNavigation() {
  return (
    <Stack.Navigator   screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
       <Stack.Screen name="Onboarding" component={Onboarding} /> 
       <Stack.Screen name="Login" component={LoginScreen}/>
       <Stack.Screen name="Reset" component={ResetPassword}/>
       <Stack.Screen name="Forgot" component={ForgotPassword}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


