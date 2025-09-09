
import React, { useState } from "react";
import {StyleSheet,View,Text,TouchableOpacity,Image,Pressable} from "react-native";
import Checkbox from "expo-checkbox";
import Modal from "react-native-modal";// You have To have to use Modal 3rd Party Modal with A Command 
import { SafeAreaView } from "react-native-safe-area-context";

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
      <Modal style={{ justifyContent:"flex-end", margin:0}} animationIn="slideInUp"
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
                <Text style={{color:"blue",fontSize:18,position:"absolute",bottom:10,left:54}}>Reset</Text>
              </TouchableOpacity>

              <Pressable style={styles.applyButton} onPress={()=>SetModalVisible(false)} onPressIn={()=>setSelectedFilters([])}>
                <Text style={{ color: "white",fontSize:18,position:"absolute",bottom:10,left:60 }}>Apply</Text>
              </Pressable>
            </View>
          </View>
          </SafeAreaView>
      </Modal>
     </View>
  );
};

const styles = StyleSheet.create({


  modalContainer: {
    backgroundColor: "white",
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     padding: 20,
     paddingBottom:20
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  filterText: {
    fontSize: 15,
    marginLeft: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    borderColor:22,
    gap:43,

  },
  resetButton: {
    flex:1,
    borderWidth: 1,
    width:"5%",
    height:"10%",
    borderColor: "#001279",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 24,
  },
  applyButton: {
    flex:1,
    boarderwidth:1,
     width:"5%",
    height:"10%",
    backgroundColor: "#001279",
    paddingVertical: 21,
    paddingHorizontal: 30,
    borderRadius: 34,
  },
});

export default FilterModal;
