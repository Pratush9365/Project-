import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity,} from "react-native";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { useFonts } from "expo-font";





export default function DetailsScreen({ route }) {
   const{item1,handleAddtocart,cartItems,features,category,category1,price}=route.params;
   const cartcount= cartItems.find((item)=>item.id===item1.id)?.quantity ||0;
const navigation = useNavigation();
     
const imageSection = {
    type: "Image",
    src: require("./assets/Membership.png"),
  };

  const header = {
    type: "header",
    subtitle: "Unlimited Washes • Unlimited Visits",
    price: "$43.24",
    Data: "Reedmable and available on the following sites",
  };

  const services = {
    type: "services",
    data : item1.features
  };

  const description = {
    type: "description",
    text: `Papa Bear Carwash is dedicated to strong relationships,
a genuine love for the community, and quality that knows no end.
We feel that these three components are our formula for success,
that if we build our culture on an inclusive.`,
  };

  const redeem = {
    type: "instructions",
    steps: [
      "Drive to selected car wash location.",
      "Enter the VIP lane.",
      "Wait for the License Plate Recognition to scan your plate.",
      "The gate will automatically open for you to enjoy your wash!",
    ],
  };

  // const button = { type: "button" };

  const sections = [imageSection,header,services,description,redeem];
   useFonts({
    "Montserrat":require('./assets/Montserrat/static/Montserrat-Medium.ttf'),
    "Montserrat1" :require('./assets/Montserrat/static/Montserrat-Bold.ttf'),
    "Montserrat2" :require('./assets/Montserrat/static/Montserrat-SemiBold.ttf'),
    "Montserrat3":require('./assets/Montserrat/static/Montserrat-Medium.ttf')
    
    
  })
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "Image":
        return (
          <View style={styles.section1}>
            <View style={styles.image}>
              <Image source={require("./assets/Membership.png")} />
            </View>
          </View>
        );

      case "header":
        return (
          <View style={styles.section}>
          
              <View style={styles.card}>
                <Text style={styles.badge}>{item1.category}</Text>
                <Text style={[styles.badge, { marginLeft: 8 }]}>{item1.category1}</Text>
              </View>

              <Text style={styles.title}>{item1.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>

              <Text style={styles.label}>Price</Text>
              <Text style={styles.price}>{item1.price}</Text>

              <View style={styles.redeem}>
                <Text style={styles.redeemText}>
                  Redeemable and available on the following sites
                </Text>
                <Image
                  style={styles.arrow}
                  source={require("./assets/Icon.png")}
                />
              </View>
          </View>
        );
      case "services":
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Service Includes</Text>

            <View style={styles.servicesContainer}>
              {item.data.map((s, i) => (
                <View key={i} style={styles.row}>
                  <View style={styles.Check}>
                    <Image
                      style={{ width: 14, height: 14 }}
                      source={require("./assets/check.png")}
                    />
                  </View>
                  <Text style={styles.text}>{s}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      case "description":
        return (
          <View style={styles.section}>
           
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.text}>{item.text}</Text>
          </View>
        );

      case "instructions":
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Redeem Instructions</Text>
              {item.steps.map((step, i) => (
                <Text key={i} style={styles.text}>
                  {i + 1}. {step}
                </Text>
              ))}
          
          </View>
        );
      
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <Pressable onPress={() => navigation.goBack('Home')}>
              <Image
                source={require("./assets/chevron-left.png")}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
          </View>

          <Text style={{ fontSize: 26, color: "#152D40", fontWeight: "600" ,fontFamily:"Montserrat2"}}>
            Detail
          </Text>

          <View style={{ width: 40 }} />
        </View>
      </View>

      <FlatList
        data={sections}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

       <View style={[styles.headercontainer,{paddingBottom:20,}]}>
        {cartcount===0 ?(<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Cart")}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.buttonText}>Add To Cart</Text>
              </View>
            </TouchableOpacity>):(<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Cart")}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.buttonText}>Go To Cart</Text>
              </View>

          </TouchableOpacity> )}
          </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F0FF",
  },
  headercontainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingBottom: 10,
    paddingTop: 40,
  
  },


  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: "#E6F0FF",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "#2A7BBB",
    
    borderRadius: 10,
  },
  section: {
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    marginHorizontal: 20,
    paddingHorizontal:16
  },
  section1: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  card2: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  card3: {
    marginVertical: 20,
    marginHorizontal:20
  },
  Description: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#E6F0FF",
    color: "#1976D2",
    fontWeight: "600",
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    fontFamily:"Montserrat2"
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#152D40",
    marginTop: 12,
    fontFamily:"Montserrat2"
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    fontFamily:"Montserrat3"
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#152D40",
    marginTop: 12,
    fontFamily:"Montserrat2-"
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginTop: 4,
    fontFamily:"Montserrat1"
  },
  redeem: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E6F0FF",
    borderRadius: 12,
    padding: 14,
  },
  redeemText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#152D40",
    flex: 1,
    fontFamily:"Montserrat3"
  },
  arrow: {
    fontSize: 18,
    color: "#152D40",
    marginLeft: 8,
  },
  sectionTitle: {
    marginTop: 20,
    marginleft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#152D40",
    marginBottom: 16,
    rowGap: 18,
    fontFamily:"Montserrat2"
  },

  row: {
    flexDirection: "row",    
   alignItems: "center",
    width:"40%",
    marginBottom:16,
    paddingHorizontal:2
  },
  Check: {
    width: 24,
    height: 24,
    marginRight: 10,
    borderRadius: 40,
    backgroundColor: "#E6F0FF",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    color: "#152D40",
    lineHeight: 31,
    fontFamily:"Montserrat2"
  },

  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  button: {
    marginBottom:20,
    marginHorizontal:20,
    backgroundColor: "#2A7BBB",
    padding: 12,
    borderRadius: 30,
  },
});
