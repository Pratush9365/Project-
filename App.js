import React from 'react';
import { StyleSheet, View, Text, BackHandler, Alert,TouchableOpacity,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  HomeScreen from "./HomeScreen";
import ShopScreen from './Shop';
import ScheduleScreen from './Schedule';
import RemainderScreen from './Remainder';
import MyAccountScreen from './MyAccount';
import NotificationScreen from './Notification';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import DetailsScreen from './DetailsScreen';
import Cart from './Cart';
import CustomDrawer from './Custom_drawer';


const HomeStack=createStackNavigator();
function Home(){
  return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name='Home' component={HomeScreen}/>
      <HomeStack.Screen name='Details' component={DetailsScreen}/>
    </HomeStack.Navigator>
  )
}
const Drawer = createDrawerNavigator();
  export default function App() {
  
    
  return (
  
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props)=><CustomDrawer {...props}/>}>  
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Shop" 
        component={ShopScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Schedule" 
        component={ScheduleScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar" size={size} color={color} />
          ),
          drawerLabelStyle:({})=>(
            <View></View>
          )
        }}
      />
      <Drawer.Screen 
        name="Reminder" 
        component={RemainderScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="alarm" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="MyAccount" 
        component={MyAccountScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Notification" 
        component={NotificationScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Cart" 
        component={Cart} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="notifications" size={size} color={color} />
          ),
        }}
      />
   
    </Drawer.Navigator>
  </NavigationContainer>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
 
  Header:{
    flexDirection:"column"
  }
});
    








