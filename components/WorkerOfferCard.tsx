import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { getTypography } from "@/styles";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { AntDesign, Entypo, EvilIcons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "./PrimaryButton";
import { router } from "expo-router";
import TwoButtonsView from "./TwoButtonsView";

const WorkersOfferCard = ({item,style}:any) => {
  return (
    <View 

    style={[style,styles.card]}>
      
        <View style={{flexDirection:'row'}}>
        <Image
          source={require("../assets/images/AidFast.png")}
          style={{
            height:40,
            width:40,
            borderRadius:25,
          }}
          resizeMode="cover"
        />

<View style={{marginLeft:10,
    // backgroundColor:'red',
    
    }}>
<Text style={[getTypography(18,26,allColors.text100,allFonts.URBANIST_SEMIBOLD)]}>Jenny Wilson</Text>

<View style={{flexDirection:'row',alignItems:'center'}}>
     <AntDesign name="star" size={18} color={allColors.primary1000} />
       <Text style={[{marginLeft:10},getTypography(12,20,allColors.text100,allFonts.URBANIST)]}>4.9   |   6,182 reviews</Text>
     </View>
</View>


        </View>

        <Text style={[{marginVertical:12,},getTypography(36,44,allColors.primary1000,allFonts.URBANIST_Bold)]}>$220</Text>

        <TwoButtonsView title1={'Decline'} title2={'Chat'} 
       onPress2={() => router.push('/screens/ChatScreens/ChatScreen')} 
        />


  
        <Text style={[{position:'absolute',right:15,top:15},getTypography(18,26,allColors.text100,allFonts.URBANIST)]}>2.2 km</Text>

   
    </View>
  );
};

export default WorkersOfferCard;

const styles = StyleSheet.create({


  card: {
   
   
    backgroundColor: "rgba(249, 250, 251, 0.15)",
    borderRadius: 32,
    // paddingHorizontal: 10,
    // elevation: 5,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    margin: 12,
    // width: 218,
    height: 206,
    padding:15,
  },

  title: getTypography(32, 26, allColors.text100, allFonts.URBANIST_Bold),








});
