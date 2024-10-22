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
import FloatingActionButton from "@/components/FloatingActionButton";
import { router } from "expo-router";
import UpcomingScreen from "../BookingScreens/upcoming";
import { UPCOMING_BOOKINGS_DATA } from "@/data/data";
import BookingCard from "@/components/BookingCard";

const MyServices = () => {
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
        style={{ marginVertical: 30, }}
      
          backBtnWithTitle={true}


        title="My Services"
      />

      {/* Notification settings list */}
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}>
    {UPCOMING_BOOKINGS_DATA.map((item) => {
            return (
              <BookingCard
                key={item.id}
                item={item}
                screenName={"Started"}
                buttonBG={allColors.primary200}
                textColor={allColors.primary1000}
                contentHeight={380}
                showButton={true}
                title1={"Reject Work"}
                title2={"Start Work"}
                // onPress1={() => {
                //   setItem(item);
                //   bottomSheetRef.current.open();
                // }}
              />
            );
          })}

      </ScrollView>

    

    <FloatingActionButton    onPress={() =>
            router.push("/screens/MyServices/addService")
          }/>

    </LinearGradient>
  );
};

const NotificationItem = ({ title, value, onValueChange }: any) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationText}>{title}</Text>
    <Switch
      trackColor={{ false: "#767577", true: "#8e44ad" }}
      thumbColor={value ? "#ffffff" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onValueChange}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#361657",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    paddingHorizontal: 16,

    borderRadius: 30,
    backgroundColor: "rgba(249, 250, 251, 0.15)",

    marginBottom: 16,
  },
  notificationText: {
    ...getTypography(16, 24, allColors.text100, allFonts.URBANIST_SEMIBOLD),
  },
  saveButton: {
    backgroundColor: "#fc7359",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MyServices;
