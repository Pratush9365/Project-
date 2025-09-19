import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Images from '../../assets/images';

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

export default SplashScreen