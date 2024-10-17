import TabBar from "@/components/TabBar";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  View
} from "react-native";
import SearchBar from "../HomeScreens/SearchBar";
import FaqCard from "@/components/FaqCard";

let FAQ_DATA =[
  {
    id:1,
  title:'What is Buddy Service?',
  subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},

{
  id:2,
title:'What is Buddy Service?',
subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},

{
  id:3,
title:'What is Buddy Service?',
subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

]


const FaqList = () => {


  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.1, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{
        //   ...StyleSheet.absoluteFillObject,
        //   paddingTop: 18,
        //   paddingHorizontal: 15,
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <TabBar
          data={["General", "Account", "Service", "Payment", "Appliance"]}
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
              allColors.text100,
              allFonts.URBANIST_SEMIBOLD
            ),
          }}
          selectedTabColor={allColors.primary1000}
          unSelectedTabColor={"rgba(249, 250, 251, 0.15)"}
          isRating={false}
          style={{
            //   marginTop:10,
            height: 40,
            paddingLeft: 0,

            //   backgroundColor: "red"
          }}
          tabStyle={{}}
        />

        <SearchBar
          filterBtn={false}
          style={{ marginHorizontal: 0, marginVertical: 0, marginBottom: 18 }}
        />

        {FAQ_DATA.map(item => {
          return(
            <FaqCard item={item}/>
          )
        })}

     
      </View>
    </LinearGradient>
  );
};

export default FaqList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    paddingHorizontal: 10,
  },

  btnContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 30,
    backgroundColor: "rgba(249, 250, 251, 0.15)",
  },

  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 16,

    marginBottom: 16,
  },
  btnText: {
    ...getTypography(16, 24, allColors.text100, allFonts.URBANIST_SEMIBOLD),
  },
  btn:{
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  description:{ ...getTypography(12, 20, "#F5F5F5", allFonts.URBANIST) }
});
