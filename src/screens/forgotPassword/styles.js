import colors from "../../utils/colors";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
     backgroundColor:"#f0eeeeff",
   },
   container1:{
    flexDirection:"column",
    justifyContent:"center",
    marginLeft:20
},email:{
    marginHorizontal:20,
    fontWeight:"500",
    fontFamily:"Medium",
    fontSize:14,
    color:colors.Blue_green
},modalView:{
    backgroundColor:colors.white,
    borderTopLeftRadius:20,
    borderTopRightRadius:20

},modalContainer:{
    justifyContent:"center",
    alignItems:"center",
    width:56,
    height:56,
    borderRadius:55.27,
    backgroundColor:colors.paleBlue,
    marginBottom:20,
    marginLeft:20,
    marginTop:32
},mailImage:{
    width:32,
    height:32,
},textContainer:{
    marginHorizontal:20
},modalText:{
    fontWeight:600,
    fontSize:20,
    color:colors.Blue_green,
    fontFamily:"SemiBold"
},modalText2:{
    marginTop:16,
    fontSize:16,
     fontWeight:"400",
     fontSize:16,
     fontFamily:"Regular",
    lineHeight:24
},emailText:{
    fontSize:16,
    fontWeight:"700",
    color:colors.Blue_green,
    fontFamily:"Bold",
    lineHeight:24
},loginbtn:{
    paddingTop:18,
    paddingBottom:18,
    paddingRight:56,
    paddingLeft:56,
    borderRadius:60,
    backgroundColor:colors.MediumBlue,
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:20,
    marginTop:22,
    marginBottom:13
},loginText:{
    fontWeight:"600",
    fontSize:16,
    color:colors.white
},

title: { 
    marginTop:64,
    fontSize: 24,
    fontWeight: "700",
    fontFamily:"Bold",
    marginBottom: 10 },
  subtitle: { 
    marginHorizontal:20,
    fontSize: 16,
    color: colors.Blue_green,
    marginBottom: 20,
    fontWeight:"400",
    fontFamily:"Regular",
    lineHeight:26
   },
   backicon:{
    width:48,
    height:48,
    borderRadius:28,
    backgroundColor:colors.white,
    justifyContent:"center",
    alignItems:"center",
    marginTop:79,
   },imageSize:{
    width:24,
    height:24

   },
  input: {
    fontSize:16,
    fontWeight:"400",
    fontFamily:"Regular",
    marginTop:10,
    marginHorizontal:20,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:12,
    backgroundColor:colors.white,
},
  verifyBtn: {
    marginTop:24,
    backgroundColor: colors.MediumBlue,
    marginHorizontal:20,
    paddingTop:18,
    paddingBottom:18,
    paddingRight:56,
    paddingLeft:56,
    borderRadius: 60,
    alignItems: "center",
  },
  verifyText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "600",
    fontFamily:"SemiBold"
   },
});
export default styles;