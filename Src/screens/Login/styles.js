import { StyleSheet } from "react-native";
import colors from "../../utils/colors";




const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor:colors.white 
  },containerItem:{
    flex:0.35,
    backgroundColor:colors.MediumBlue

  },backgroundImage:{
    width: 442.53, 
  height: 385.53,
  resizeMode: "cover",
  alignSelf: "center",
  },ToastsStyle:{
    backgroundColor:colors.red,
    color:colors.white

  },Visible:{
    opacity:1,
  },notVisible:{
   opacity:0.5
  },
  
  containerItem1:{
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"flex-start",
    position:"absolute",
    bottom:12,
    left:15, 
   

  },ImageStyle:{
    width:68,
    height:68,
    marginBottom:23,
    marginLeft:18
  },
  title: { 
     marginBottom:8,
    color:colors.white,
    fontSize: 24, 
    fontWeight: "700", 
     textAlign: "left",
    fontFamily:"Bold",

    marginLeft:20
  },Texts1:{
    fontFamily:"Regular",
    fontWeight:"400",
    color:colors.white,
    lineHeight:"100%",
    marginLeft:20,
    marginRight:32

  },
  input: {
   flexDirection:"row",
   borderRadius:12,
   borderWidth:1,
   padding:20,
   gap:10,
   fontFamily:"Regular",
   borderColor:colors.paleBlue,
   },errorborder:{
    borderColor:colors.red

   },
   
   
   input1:{
    flexDirection:"row",
   borderRadius:12,
   borderWidth:1,
   padding:12.5,
   gap:8,
   borderColor:colors.paleBlue,
   justifyContent:"space-between",
   alignItems:"center",
   zIndex:10
        
   },
  forgot: { 
    marginTop:16,
    fontWeight:"500",
    fontSize:14,
    fontFamily:"Medium",
    textAlign: "right", 
    color: colors.MediumBlue,
    borderBottomWidth:1,
    alignSelf: "flex-end",
    marginBottom: 24,
  borderColor:colors.MediumBlue
 },
  loginBtn: {
    backgroundColor: colors.MediumBlue,
    paddingTop:18,
    paddingBottom:18,
    paddingRight:56,
    paddingLeft:56,
    borderRadius: 8,
    borderRadius:60,
    alignItems: "center",
  },
  loginText: { 
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    fontFamily:"SemiBold"
   },
  register: { 
    marginTop: 152,
     textAlign: "center", 
     fontSize: 16 ,
     fontWeight:"500",
     fontFamily:"Medium",
    
    },registerText:{
      fontSize:16,
      fontsweight:"600",
      fontFamily:"SemiBold",
      color:colors.MediumBlue,
      borderBottomWidth:5
        },
  Texts:{
    fontSize:14,
    fontWeight:"500",
    fontFamily:"Medium",
    color:colors.Blue_green,
    margin:10

  },emailHeader:{
    flex:0.55,
    marginTop:32,
    marginLeft:20,
    marginRight:20,
  },
  
  passwordicon:{
    width:20,
    height:20,
    position:"absolute",
    right:12,
    bottom:18
  },
  errorText: {
  color: "red",
  fontSize: 14,
  marginTop: 6,
  marginLeft: 4,
},
});
export default styles;