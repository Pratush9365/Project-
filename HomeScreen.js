import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {StyleSheet,Text,View,TouchableOpacity,Image,FlatList,TextInput, Pressable,} from "react-native";
import { useState, useRef } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FilterModal from "./Modal";
import DATA from "./Dynamic_data";

export default function HomeScreen({ navigation }) {
  const flatListRef = useRef(null);
  const [selectedId, setSelectedId] = useState(2);
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]); 

  const Slide = [
    { id: 1, title: "Washes" },
    { id: 2, title: "Washbooks" },
    { id: 3, title: "Gift Cards" },
    { id: 4, title: "MemberShip" },
  ];
  useFonts({
    "Montserrat":require('./assets/Montserrat/static/Montserrat-Medium.ttf'),
    "Montserrat1" :require('./assets/Montserrat/static/Montserrat-Bold.ttf'),
    "Montserrat2" :require('./assets/Montserrat/static/Montserrat-SemiBold.ttf'),
    "Montserrat3":require('./assets/Montserrat/static/Montserrat-Medium.ttf')
    
    
  })
//   if (!fontsLoaded) {
//   return null; 
// }

 
  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, { id: item.id, quantity: 1 }]);
   
    
  };

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.tabButton,
        selectedId === item.id && styles.activeTabButton,
      ]}
      onPress={() => setSelectedId(item.id)}
    >
      <Text
        style={[
          styles.tabText,
          selectedId === item.id && styles.activeTabText,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderItem1 = ({ item }) => {
    const itemCount =
      cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

    return (
      <View style={styles.card}>
          <Pressable onPress={()=>navigation.navigate('Details',{ item1:item,
            handleAddToCart,cartItems:cartItems,feature:item.features,category:item.category,category1:item.category1,price:item.price
          })}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.category}>{item.category1}</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.featuresContainer}>
          {item.features.map((feature, index) => (
            <View key={index} style={styles.featureRow}>
              <Text style={styles.check}>✔</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <View style={styles.footer1}>
            <Text style={{ color: "#464646e5", fontWeight: "500", fontFamily:"Montserrat2" }}>
              {item.rate}
            </Text>
            <Text style={[styles.price, { marginTop: 6, fontFamily:"Montserrat1"}]}>{item.price}</Text>
          </View>

          <View>
            {itemCount === 0 ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddToCart(item)}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>

              </TouchableOpacity>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: 100,
                }}
              >
                <TouchableOpacity onPress={() => handleDecrement(item.id)} hitSlop={23}>
                  <Text style={{ fontSize: 52, color: "#1976D2" }}>-</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  {itemCount}
                </Text>

                <TouchableOpacity onPress={() => handleIncrement(item.id)} hitSlop={23}>
                  <Text style={{ fontSize: 26, color: "#1976D2" }}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Pressable>
      </View>
    );
  };

  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  


  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <TouchableOpacity  hitSlop={6}  onPress={() => navigation.openDrawer()}>
            <Image
              source={require("./assets/Menu-Icon-PNG.png")}
              style={styles.menuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.text1}>Selected Site</Text>
            <Text style={styles.text}>Graphene Xtreme 1 ▾</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", }}>
            <Text style={[styles.badgeText,{position:"absolute",left:19,bottom:14,}]}>{totalCount}</Text>
            <Image
              source={require("./assets/icons8-cart-50.png")}
              style={{ width: 24, height: 24, }}
            />
          </View>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <FlatList
          ref={flatListRef}
          data={Slide}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.searchRow}>
        <TextInput placeholder="Search" style={styles.inputBox} />
        <TouchableOpacity
          style={styles.filterIcon}
          onPressIn={() => setVisible(true)}
        >
          <Icon name="filter" size={20} color="#000" />
        </TouchableOpacity>
      </View>
        <Text style={{marginLeft:20,fontFamily:"Montserrat3",fontWeight:"500"}}> 12 MemberShip Found</Text>
       
      
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem1}
        contentContainerStyle={{ padding: 16 }}
      />
      <FilterModal Modalvisible={visible} SetModalVisible={setVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFF",
  },
  headerContainer: {
    backgroundColor: "#1976D2",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 30,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily:"Montserrat2"
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginTop: 2,
    fontFamily:"Montserrat2"
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    marginRight: 6,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#F1F4F9",
    marginHorizontal: 6,
    borderWidth:0.8,
    borderColor:"#929292ff"
  },
  activeTabButton: {
    backgroundColor: "#1976D2",
    borderColor:"#ffff"
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily:"Montserrat2"
  },
  activeTabText: {
    color: "#fff",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  inputBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#E6EAF3",
  },
  filterIcon: {
    marginLeft: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E6EAF3",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor:"#1976D2"
  },
  category: {
    backgroundColor: "#E6F0FF",
    color: "#1976D2",
    fontWeight: "600",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginInline:4,
    fontFamily:"Montserrat2"
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
    color: "#222",
    fontFamily:"Montserrat1"
  },
  featuresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginVertical: 4,
  },
  check: {
    color: "#1E88E5",
    fontSize: 16,
    marginRight: 6,
  },
  featureText: {
    fontSize: 14,
    color: "#555",
    fontFamily:"Montserrat",
      
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#a59999ff",
    paddingTop: 12,
  },
  footer1: {
    flexDirection: "column",
    marginTop: 3,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  button: {
    backgroundColor: "#1E88E5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
