import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: "center",
      },
  title: { 
    marginLeft:20,
    fontSize: 24, 
    fontWeight: "700",
    fontFamily:"Medium",
     marginBottom: 10,
    color:colors.Blue_green
    
    },iconstyle:{width:20,
        height:20,
        position:"absolute",
        right:18
    },
    
        textStyle:{
            marginBottom:10,
            fontFamily:"Medium",
            fontWeight:"500",
            fontSize:14, 
            marginLeft:20,
        },
        

    
    iconSize:{
        width:20,
        height:20,
       
    },iconStyle2:{
      position:"absolute",
      right:18

    },
    
    
    subtitle: { 
      marginLeft:20,
      fontSize: 18,
      fontWeight:"400",
      fontFamily:"Regular",
      color: "#555",
      marginBottom: 20
     },TextStyle:{
        marginBottom:10,
        fontFamily:"Medium",
        fontWeight:"500",
        fontSize:14,
        marginTop:16, 
        marginLeft:20,
        },
     
  input: {
    marginHorizontal:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
   backgroundColor:colors.white
   ,paddingTop:12,
   paddingBottom:12,
   paddingRight:50,
   paddingLeft:20,
   borderRadius:12,
   borderWidth:1,
   borderColor:colors.black152D4012
  },
  updateBtn: {
    justifyContent:"center",
    alignItems: "center",
    marginTop:24,
    backgroundColor: colors.MediumBlue,
    paddingTop:18,
    paddingBottom:18,
    paddingRight:56,
    borderRadius: 60,
    paddingLeft:56,
    marginHorizontal:20,
  },
  updateText: { 
    color: colors.white, fontSize: 16, fontWeight: "600",fontFamily:"SemiBold" },
  
  backBtn:{
    marginTop:24,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:18,
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:18,
    borderWidth:1,
    borderRadius:60,
    borderColor:colors.MediumBlue,
    marginHorizontal:20


  },backBtn1:{
    width:22,
    height:22
},
    backText: { 
      marginLeft:10,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
       color: colors.MediumBlue,
      fontSize:16,
      fontWeight:"600" ,
      fontFamily:"SemiBold"
    }, inputText: {
    fontFamily:"Regular",
    fontWeight:"400",
    fontSize:16
},conditions:{
    flexDirection:"row",
    marginTop:24,
    marginLeft:20
},conditionsText:{
    marginLeft:12
},conditions1:{
    flexDirection:"row",
    marginTop:17,
    marginLeft:20
},
});

export default styles;