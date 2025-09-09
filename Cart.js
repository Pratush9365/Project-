import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = () => {
  return (
    <View style={styles.cartContainer}>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Icon name="cart" size={45} />
      <View style={{width:30}}/>
      <Text style={styles.Tittle}>Cart Screen</Text>
       
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
cartContainer:{
 flex:1,
 justifyContent:"center",
 alignItems:"center"

},Tittle:{
  fontSize:45,
  fontWeight:"600",
  marginBottom:34,
  

}})

export default Cart;
