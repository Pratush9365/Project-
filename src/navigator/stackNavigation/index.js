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
import SplashScreen from "../../screens/splash";
const Stack = createStackNavigator();



export default function StackNavigation() {
  return (
    <Stack.Navigator  initialRouteName="Splash"  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
       <Stack.Screen name="Onboarding" component={Onboarding} /> 
       <Stack.Screen name="Login" component={LoginScreen}/>
       <Stack.Screen name="Forgot" component={ForgotPassword}/>
       <Stack.Screen name="Reset" component={ResetPassword}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


