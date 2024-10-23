import React, { useRef, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import ReviewCard from "@/components/ReviewCard";
import TabBar from "@/components/TabBar";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TopNavBar from "@/components/TopNavBar";

const servicesList = [
  { id: "1", name: "House Cleaning" },
  { id: "2", name: "Painting" },
  { id: "3", name: "Car Repairing" },
  { id: "4", name: "Laundry service" },
  { id: "5", name: "Appliance Services" },
];

const Reviews = () => {
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const sheetRef = useRef(null);

  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{
        // flex:1,
        ...StyleSheet.absoluteFillObject,
        paddingTop: 18,
        paddingHorizontal: 12,
      }}
    >
      <StatusBar
        barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
      />

      <TopNavBar
        style={{ marginTop: 30 }}
        backBtnWithTitle={true}
        title="Reviews"
      />

      <ScrollView>

      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <AntDesign name="star" size={18} color={allColors.primary1000} />
        <Text
          style={[
            { marginLeft: 10 },
            getTypography(12, 20, allColors.text100, allFonts.URBANIST),
          ]}
        >
          4.9 | 6,182 reviews
        </Text>

        <Text style={styles.seeAll}>See all</Text>
      </View>

      <TabBar
        data={["All", "5", "4", "3", "2", "1"]}
        style={{ paddingHorizontal: 0 }}
        tabStyle={{
          height: 40,
          flexDirection: "row",
          borderWidth: 2,
          borderColor: allColors.primary1000,
        }}
        isRating={true}
        selectedTextStyle={{
          ...getTypography(
            14,
            22,
            allColors.text100,
            allFonts.URBANIST_SEMIBOLD
          ),
        }}
        unSelectedTextStyle={{
          ...getTypography(
            14,
            22,
            allColors.primary1000,
            allFonts.URBANIST_SEMIBOLD
          ),
        }}
        unSelectedTabColor={"transparent"}
        selectedTabColor={allColors.primary1000}
      />

        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

        </ScrollView>

    </LinearGradient>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  seeAll: {
    color: allColors.primary1000,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: allFonts.URBANIST,
    position: "absolute",
    right: 0,
  },
});
