import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import TopNavBar from "@/components/TopNavBar";
import LongButton from "@/components/LongButton";
import { getTypography } from "@/styles";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";

const PrivacyPolicy = () => {
  // States for each switch
  const [generalNotification, setGeneralNotification] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibrate, setVibrate] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(true);
  const [promoDiscount, setPromoDiscount] = useState(true);
  const [payments, setPayments] = useState(false);
  const [appUpdates, setAppUpdates] = useState(true);
  const [newServiceAvailable, setNewServiceAvailable] = useState(false);
  const [newTipsAvailable, setNewTipsAvailable] = useState(true);

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
        style={{ marginVertical: 30,  }}
          backBtnWithTitle={true}
        title="Privacy Policy"
      />

    <ScrollView>
    <Text style={styles.title}>
      1. Types of Data We Collect
      </Text>

      <Text style={styles.des}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <Text style={styles.title}>
      2. Use of Your Personal Data
      </Text>

      <Text style={styles.des}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <Text style={styles.title}>
      3. Disclosure of Your Personal Data
      </Text>

      <Text style={styles.des}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

    </ScrollView>

    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  title:{
    ...getTypography(18,26,allColors.text100,allFonts.URBANIST_SEMIBOLD)
  },
  des:{
    ...getTypography(14,22,"#E0E0E0",allFonts.URBANIST),
    marginVertical:10,

  }
});

export default PrivacyPolicy;
