import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <Image source={require('./assets/business-man.png')} style={styles.profileImage} />
        </View>
      </View>

      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}> 
              <Image source={require('./assets/icons8-home-24.png')} style={styles.icon}/>
            </View> 
            <Text style={styles.sectionText}>Home</Text>
            <Image source={require('./assets/Icon.png')} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={require('./assets/icons8-home-24.png')} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Shop</Text>
            <Image source={require('./assets/Icon.png')} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={require('./assets/icons8-home-24.png')} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Schedule</Text>
            <Image source={require('./assets/Icon.png')} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={require('./assets/icons8-home-24.png')} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Reminders</Text>
            <Image source={require('./assets/Icon.png')} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={require('./assets/icons8-home-24.png')} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>My Account</Text>
            <Image source={require('./assets/Icon.png')} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={require('./assets/icons8-home-24.png')} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Notifications</Text>
            <Image source={require('./assets/Icon.png')} style={styles.arrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(
          "Logout",
          "Are you sure you want to exit the app?",
          [
            { text: "Cancel", onPress: () => navigation.navigate("Home") },
            { text: "Yes", onPress: () => BackHandler.exitApp() }
          ]
        )}>
          <View style={styles.Secton}>
            <View style={styles.ImagesBackground}>
              <Image source={require('./assets/icons8-home-24.png')} style={styles.icon}/>
            </View>
            <Text style={styles.sectionText}>Logout</Text>
            <Image source={require('./assets/Icon.png')} style={styles.arrow}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F9FF"
  },
  header:{
    marginTop:20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 25,
    marginHorizontal:10,
    alignItems:"center"
  },
  headercontainer:{
    alignItems:"center"
  },
  profileImage:{
    width:80,
    height:80,
    borderRadius:50,
    marginBottom:10
  },
  name:{
    fontSize:18,
    fontWeight:"700",
    color:"#1A1A1A"
  },
  email:{
    fontSize:14,
    color:"#666",
    marginTop:2
  },
  card:{
    marginTop:15,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginHorizontal:10,
    paddingVertical:5
  },
  Secton:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:14,
    paddingHorizontal:15,
    borderBottomWidth:1,
    borderBottomColor:"#E5E5E5"
  },
  ImagesBackground:{
    width:40,
    height:40,
    borderRadius:20, 
    backgroundColor:"#E6F0FF",
    justifyContent:"center",
    alignItems:"center",
    marginRight:12
  },
  icon:{
    width:22,
    height:22,
    tintColor:"#3A7DFF"
  },
  sectionText:{
    flex:1,
    fontSize:16,
    fontWeight:"500",
    color:"#1A1A1A"
  },
  arrow:{
    width:12,
    height:12,
    tintColor:"#999"
  }
});

export default CustomDrawer;
