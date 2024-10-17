import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { getTypography } from "@/styles";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { AntDesign, Entypo, EvilIcons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "./PrimaryButton";
import { router } from "expo-router";

const Card = ({item,style,imageStyle}:any) => {
  return (
    <PrimaryButton 
    onPress={() => router.push('/screens/DetailScreen')}
    style={[style,styles.card]}>
      
        <Image
          source={require("../assets/images/job1.png")}
          style={imageStyle}
          resizeMode="cover"
        />

      <View style={{padding:12,marginTop:5,}}>
     

       <Text style={[{marginVertical:5},getTypography(18,26,allColors.text100,allFonts.URBANIST_SEMIBOLD)]}>{item?.name || "Garage Cleaning" }</Text>

       <View style={{flexDirection:'row',alignItems:'center'}}>
       <EvilIcons name="location" size={20} color={allColors.text100} />

       <Text
       numberOfLines={1}
       
       style={[{marginLeft:5,width:120},getTypography(12,20,allColors.text100,allFonts.URBANIST)]}>{item?.address || "F9, Islamabad Main Market"}</Text>
       </View>

       <Text style={[{marginVertical:5},getTypography(24,32,allColors.primary1000,allFonts.URBANIST_Bold)]}>${item?.price || '15'} /hr</Text>
       


      </View>

   
    </PrimaryButton>
  );
};

export default Card;

const styles = StyleSheet.create({


  card: {
   
   
    backgroundColor: "rgba(249, 250, 251, 0.15)",
    borderRadius: 32,
    // paddingHorizontal: 10,
    // elevation: 5,
  },

  title: getTypography(32, 26, allColors.text100, allFonts.URBANIST_Bold),








});
