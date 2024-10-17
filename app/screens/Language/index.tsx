import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { getTypography } from "@/styles";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import LongButton from "@/components/LongButton";
import PrimaryButton from "@/components/PrimaryButton";
import RadioButton from "@/components/RadioButton";
import { router } from "expo-router";
import TopNavBar from "@/components/TopNavBar";

const Languages = [
  {
    id: 1,
    label: "English (US)",
  
  },
  {
    id: 2,
    label: "English (UK)",
  
  },
  {
    id: 3,
    label: "Mandarin",
   
  },
  {
    id: 4,
    label: "Arabic",
   
  },
  {
    id: 5,
    label: "Hindi",
   
  },
  {
    id: 6,
    label: "Latin",
   
  },
  {
    id: 7,
    label: "Spanish",
   
  },
  {
    id: 8,
    label: "Bengali",
   
  },
  {
    id: 9,
    label: "Russian",
   
  },
 
];

export default function LanguageScreen() {
  const [checked, setChecked] = useState(1); // Default PayPal checked

  return (

    <LinearGradient
    // Define the colors for the gradient
    colors={["#1C0D24", "#6A318A"]}
    // Apply the gradient at an angle of roughly 174 degrees
    start={{ x: 0.5, y: 0 }} // Starting point of the gradient
    end={{ x: 0.1, y: 1 }}
    style={{ ...StyleSheet.absoluteFillObject, padding: 15 }}
  >
    <StatusBar
      barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
    />

    <TopNavBar
      style={{ marginVertical: 30, }}
      backBtnWithTitle={true}
      

      title="Language"
    />
  
   

      {/* Refund Message */}
      <Text style={styles.refundText}>
      Suggested
      </Text>

        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        {Languages.map((lng) => (
          <PrimaryButton
          onPress={() => setChecked(lng.id)}
          key={lng.id} style={styles.paymentMethod}>
            
            <View style={styles.paymentInfo}>
              <Text style={styles.paymentLabel}>{lng.label}</Text>
              {/* {method.cardNumber && (
                <Text style={styles.cardNumber}>{method.cardNumber}</Text>
              )} */}
            </View>

            <RadioButton
              status={checked === lng.id ? "checked" : "unchecked"}
            //   onPress={() => setChecked(method.id)}
            //   color="#FF7F56"
            />
          </PrimaryButton>
        ))}
        </ScrollView>



      {/* Continue Button */}
      <LongButton title={'Save Changes'} 
    //   onPress={() => router.push('/screens/PaymentScreens/PaymentPin')}
      />
   
    
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
    paddingHorizontal:15,

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
    color: "white",
    fontSize: 16,
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
