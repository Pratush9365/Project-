import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

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



export default Cart;
