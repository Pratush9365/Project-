import colors from "../../utils/colors";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F4F9FF"
  },
  header:{
    marginTop:20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 25,
    marginHorizontal:10,
    alignItems:"center"
  },
  headercontainer:{
    alignItems:"center"
  },
 
  profileImage:{
    width:80,
    height:80,
    borderRadius:50,
    marginBottom:10
  },
  name:{
    fontSize:18,
    fontWeight:"700",
    color:"#1A1A1A"
  },
  email:{
    fontSize:14,
    color:"#666",
    marginTop:2
  },
  card:{
    marginTop:15,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginHorizontal:10,
    paddingVertical:5
  },
  Secton:{
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:14,
    paddingHorizontal:15,
    borderBottomWidth:1,
    borderBottomColor:"#E5E5E5"
  },
  ImagesBackground:{
    width:40,
    height:40,
    borderRadius:20, 
    backgroundColor:"#E6F0FF",
    justifyContent:"center",
    alignItems:"center",
    marginRight:12
  },
  icon:{
    width:22,
    height:22,
    tintColor:"#3A7DFF"
  },
  sectionText:{
    flex:1,
    fontSize:16,
    fontWeight:"500",
    color:"#1A1A1A"
  },
  arrow:{
    width:12,
    height:12,
    tintColor:"#999"
  }
});
export default styles;