import Rootnavigation from "./src/navigator/rootNavigation";
import Toast from 'react-native-toast-message';
import toastConfig from "./src/screens/Login/toastMessage";
import UseAppFonts from "./src/assets/fonts";


export default function App() {

const fontloaded=UseAppFonts();
if(!fontloaded){
  return null;
} 
    return(
    <>
    <Rootnavigation/>
    
<Toast config={toastConfig} visibilityTime={3000} />
</>

      
    
        
    )
   
}
    








