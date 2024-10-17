import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Brick from "@/assets/svgs/Brick.svg";
import Tap from "@/assets/svgs/Non-potable Water.svg";
import Painting from "@/assets/svgs/Painting A Wall.svg";
import Chef from "@/assets/svgs/chef.svg";
import Plumber from "@/assets/svgs/plumber.svg";
import SolderingIron from "@/assets/svgs/soldering_iron.svg";
import TruckHeavy from "@/assets/svgs/Truck_heavy.svg";
import TruckLight from "@/assets/svgs/Truck_light.svg";
import { router } from "expo-router";

const categories = [
  { id:4, name: "Electrician", icon: <SolderingIron /> },
  {id:3, name: "Plumber", icon: <Plumber /> },
  { id:1,name: "Mason", icon: <Brick /> },
  { id:9,name: "Painter", icon: <Painting /> },
  { id:15,name: "Cook", icon: <Chef /> },
  { id:4,name: "Trans - Light", icon: <TruckLight /> },
  { id:4,name: "Trans - Heavy", icon: <TruckHeavy /> },
  { id:4,name: "Non Drinking", icon: <Tap /> },
];



const Categories = () => {
  return (
    <View style={styles.container}>
      {categories.map((item) => {
        return (
          <PrimaryButton 
          onPress={() => 
            router.push({ pathname: "/screens/Services/ShowServices",
            params: { 
              categoryId: item.id , 
              categoryName:item.name

            } }) }
          style={{ margin: 6 }}>
            <View style={styles.category}>{item.icon}</View>
            <Text style={styles.title}>{item.name}</Text>
          </PrimaryButton>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", marginBottom: 20 },
  title: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: allFonts.URBANIST_SEMIBOLD,
    color: allColors.text100,
    marginVertical:12,
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    backgroundColor: "rgba(249, 250, 251, 0.15)",
    borderRadius: 15,
  },

});

export default Categories;
