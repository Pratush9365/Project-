import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Images from '../../assets/images';
import icons from '../../assets/icons';
import styles from './styles';

const CustomDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <Image source={Images.ProfileImage} style={styles.profileImage} />
        </View>
      </View>

      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}> 
              <Image source={icons.HomeIcon} style={styles.icon}/>
            </View> 
            <Text style={styles.sectionText}>Home</Text>
            <Image source={icons.TextIcon} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={icons.DrawerShop} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Shop</Text>
            <Image source={icons.TextIcon} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={icons.DrawerSechdule} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Schedule</Text>
            <Image source={icons.TextIcon} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={icons.Notifiactions} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Reminders</Text>
            <Image source={icons.TextIcon} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={icons.Account} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>My Account</Text>
            <Image source={icons.TextIcon} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={icons.Notifiactions} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Notifications</Text>
            <Image source={icons.TextIcon} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
          "Logout",
          "Are you sure you want to exit the app?",
          [
            { text: "Cancel", onPress: () => navigation.navigate('HomeStack') },
            { text: "Yes", onPress: () => BackHandler.exitApp() }
          ]
        )}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={icons.Logout} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Logout</Text>
            <Image source={icons.TextIcon} style={styles.arrow}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default CustomDrawer;
