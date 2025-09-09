import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const ScheduleScreen = () => {
    return (
        <View style={styles.screen}>
             <Text style={styles.text}>📅 Schedule Screen</Text>
           </View>
    );
}

const styles = StyleSheet.create({
     screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
  },
    

})

export default ScheduleScreen;
