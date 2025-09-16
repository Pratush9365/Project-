import colors from "../../utils/colors";
import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
    SplashContainer:{
          flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.MediumBlue

    },ImagesSetup:{
        flexDirection:"column",
        justifyContent:"space-between",
       alignItems:"center",
    },
    
headerImages: {
  width: 442.53, 
  height: 385.53,
  resizeMode: "contain",
  alignSelf: "center",

},

    
    
    ImageSize:{
        marginTop:63.47,
        marginBottom:40.47,
        width:120,
        height:120,
        borderRadius:12

    }
})
export default styles;