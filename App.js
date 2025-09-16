import Rootnavigation from "./Src/navigator/rootNavigation";
import Toast from 'react-native-toast-message';
import toastConfig from "./Src/screens/Login/toastMessage";
import UseAppFonts from "./Src/assets/fonts";


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
    








