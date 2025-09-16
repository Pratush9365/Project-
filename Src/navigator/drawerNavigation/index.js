import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from '../stackNavigation';
import ShopScreen from '../../screens/shop/index.js';
import ScheduleScreen from '../../screens/schedule/index.js';
import ReminderScreen from '../../screens/reminder/index.js';
import MyAccountScreen from '../../screens/myAccount.js';
import NotificationScreen from '../../screens/notification';
import Cart from '../../screens/cart';
import CustomDrawer from './CustomDrawer.js';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
 export default function DrawarNavigation(){
  


      return (
  
    <Drawer.Navigator initialRouteName="HomeStack" drawerContent={(props)=><CustomDrawer {...props}/>}>  
      <Drawer.Screen 
        name="HomeStack" 
        component={StackNavigation} 
        options={{
          headerShown: false,
          
        }} 
      />
      <Drawer.Screen 
        name="Shop" 
        component={ShopScreen} 
       
      />
      <Drawer.Screen 
        name="Schedule" 
        component={ScheduleScreen} 
        
        
      />
      <Drawer.Screen 
        name="Reminder" 
        component={ReminderScreen} 
        
      
      />
      <Drawer.Screen 
        name="MyAccount" 
        component={MyAccountScreen} 
      
      />
      <Drawer.Screen 
        name="Notification" 
        component={NotificationScreen} 
      
      />
      <Drawer.Screen 
        name="Cart" 
        component={Cart} 
      
      />
   
    </Drawer.Navigator>
  
);
}
