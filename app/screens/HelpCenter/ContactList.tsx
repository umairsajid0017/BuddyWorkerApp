import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Headphone from '@/assets/svgs/headphone.svg'
import Facebook from '@/assets/svgs/facebook.svg'
import Twitter from '@/assets/svgs/twitter.svg'
import Whatsapp from '@/assets/svgs/whatsapp.svg'
import Instagram from '@/assets/svgs/instagram.svg'
import Globe from '@/assets/svgs/globe.svg'
import { LinearGradient } from "expo-linear-gradient";

import { getTypography } from "@/styles";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import LongButton from "@/components/LongButton";
import PrimaryButton from "@/components/PrimaryButton";
import RadioButton from "@/components/RadioButton";
import { router } from "expo-router";
import TopNavBar from "@/components/TopNavBar";
import IconButton from "@/components/IconButton";

const ContactsData = [
  {
    id: 1,
    label: "Customer Service",
    icon: <Headphone/>, // replace with your image path
  },
  {
    id: 2,
    label: "WhatsApp",
    icon: <Whatsapp/>, // replace with your image path
  },
  {
    id: 3,
    label: "Website",
    icon:<Globe/>, // replace with your image path
  },
  {
    id: 4,
    label: "Facebook",
    icon: <Facebook/>, // replace with your image path
   
  },

  {
    id: 5,
    label: "Twitter",
    icon: <Twitter/>, // replace with your image path
   
  },
  {
    id: 6,
    label: "Instagram",
    icon: <Instagram/>, // replace with your image path
   
  }

];

export default function ContactList() {


  return (

    <LinearGradient
    // Define the colors for the gradient
    colors={["#1C0D24", "#6A318A"]}
    // Apply the gradient at an angle of roughly 174 degrees
    start={{ x: 0.5, y: 0 }} // Starting point of the gradient
    end={{ x: 0.1, y: 1 }}
    style={{ ...StyleSheet.absoluteFillObject, padding: 15 }}
  >


      {ContactsData.map((method) => (
          <PrimaryButton
      
          key={method.id} style={styles.paymentMethod}>
            <IconButton disable={true} style={{
              height:40,
              width:40,
              backgroundColor:allColors.primary200}}>
            {method.icon}
            </IconButton>
            
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentLabel}>{method.label}</Text>
            
            </View>

        
          </PrimaryButton>
        ))}

  
 
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A0E65",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 20,
  },
  refundText: {
   
    ...getTypography(18,26,allColors.text100,allFonts.URBANIST_SEMIBOLD),
    marginBottom: 20,
  },
  paymentMethodsContainer: {
    backgroundColor: "#5D1975",
    borderRadius: 12,
    paddingVertical: 10,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height:60,
    paddingHorizontal:20,

    borderRadius: 30,
    backgroundColor:'rgba(249, 250, 251, 0.15)',

    marginBottom:16,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  paymentInfo: {
    flex: 1,
    marginLeft: 10,
  },
  paymentLabel: {
...getTypography(18,26,allColors.text100,allFonts.URBANIST_Bold)
  },
  cardNumber: {
    color: "white",
    fontSize: 14,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 20,
  },
  amountText: {
    ...getTypography(18,26,allColors.text100,allFonts.URBANIST_SEMIBOLD),

  },
  continueButton: {
    backgroundColor: "#FF7F56",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1E0F47",
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middleButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FF7F56",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 20,
  },
});
