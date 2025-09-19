import Rootnavigation from "./src/navigator/rootNavigation";
import Toast from 'react-native-toast-message';
import toastConfig from "./src/screens/Login/toastMessage";
import UseAppFonts from "./src/assets/fonts";
import { Provider } from "react-redux";
import { store,persister } from "./src/redux/crud/store";
import NotificationScreen from "./src/screens/notification";
import { PersistGate } from "redux-persist/integration/react";



export default function App() {

const fontloaded=UseAppFonts();
if(!fontloaded){
  return null;
} 
    return(
    <>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persister}> */}
    <Rootnavigation/>
      {/* <NotificationScreen/> */}
      {/* </PersistGate> */}
    </Provider>
    
    
<Toast config={toastConfig} visibilityTime={3000} />
</>

      
    
        
    )
   
}
    








