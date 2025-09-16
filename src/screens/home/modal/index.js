
import React, { useState } from "react";
import {StyleSheet,View,Text,TouchableOpacity,Image,Pressable} from "react-native";
import Checkbox from "expo-checkbox";
import Modal from "react-native-modal";// You have To have to use Modal 3rd Party Modal with A Command 
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const FilterModal = ({ children,Modalvisible,SetModalVisible , modalContainer}) => {

  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    { id: 1, label: "Less Than $10" },
    { id: 2, label: "Less Than $20" },
    { id: 3, label: "Less Than $50" },
  ];

  const toggleFilter = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== id));
    } else {
      setSelectedFilters([...selectedFilters, id]);
    }
  };

  const resetFilters = () => {
    setSelectedFilters([]);
  };


  return (
    <View >
      <Modal style={{ justifyContent:"flex-end",}} animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={Modalvisible}
        onRequestClose={() => SetModalVisible(false)}
        onBackdropPress={()=>SetModalVisible(false)}
        backdropOpacity={0.6}
        useNativeDriver
        backdropColor="rgba(8,16,23,1)">
           <SafeAreaView edges={['top']} style={{ backgroundColor: "transparent" }}>
        
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filter</Text>

            <Text style={styles.sectionTitle}>Price</Text>

            {filters.map((item) => (
              <View key={item.id} style={styles.filterRow}>
                <Checkbox
                  value={selectedFilters.includes(item.id)}
                  onValueChange={() => toggleFilter(item.id)}
                />
                <Text style={styles.filterText}>{item.label}</Text>
              </View>
            ))}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
                <Text style={styles.textStyle1}>Reset</Text>
              </TouchableOpacity>

              <Pressable style={styles.applyButton} onPress={()=>SetModalVisible(false)} onPressIn={()=>setSelectedFilters([])}>
                <Text style={styles.textStyle}>Apply</Text>
              </Pressable>
            </View>
          </View>
          </SafeAreaView>
      </Modal>
     </View>
  );
};


export default FilterModal;
