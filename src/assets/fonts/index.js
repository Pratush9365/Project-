import { useFonts } from "expo-font";
function UseAppFonts(){
const  [fontsLoaded]=useFonts({
    "Regular":require('./Montserrat/static/Montserrat-Regular.ttf'),
    "Bold" :require('./Montserrat/static/Montserrat-ExtraBold.ttf'),
    "SemiBold" :require('./Montserrat/static/Montserrat-SemiBold.ttf'),
    "Medium":require('./Montserrat/static/Montserrat-Medium.ttf')
     
    
  })
  return fontsLoaded
}
export default UseAppFonts;