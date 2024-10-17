import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import NotificationCard from "@/components/NotificationCard";
import PaymentSVG from "@/assets/svgs/payment_notification.svg";
import ServiceSVG from "@/assets/svgs/service_notification.svg";
import AccountSVG from "@/assets/svgs/account_created_notification.svg";
import Menu from "@/assets/svgs/menu.svg";
import Message from "@/assets/svgs/message.svg";
import BackBtn from "@/assets/svgs/back_btn.svg";
import OfferNotification from "@/assets/svgs/offer_notification.svg";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import { router } from "expo-router";
import TopNavBar from "@/components/TopNavBar";


const ShowNotifications = () => {
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
        style={{ marginVertical: 30 , alignItems:'center',
          justifyContent:null}}
    
        title="Notifications"
        backBtn={true}

      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[
            getTypography(
              18,
              26,
              allColors.text100,
              allFonts.URBANIST_SEMIBOLD
            ),
            { marginBottom: 24 },
          ]}
        >
          Today
        </Text>
        <NotificationCard
          style={{}}
          bgColor={"rgba(254, 114, 95, 0.25)"}
          title={"Payment Successful!"}
          subTitle={"You have made a services payment"}
        >
          <PaymentSVG />
        </NotificationCard>

        <NotificationCard
          style={{ marginTop: 24 }}
          bgColor={"rgba(249, 250, 251, 0.15)"}
          title={"New Category Services!"}
          subTitle={"Now the plumbing service is available"}
        >
          <ServiceSVG />
        </NotificationCard>

        <Text
          style={[
            getTypography(
              18,
              26,
              allColors.text100,
              allFonts.URBANIST_SEMIBOLD
            ),
            { marginTop: 24 },
          ]}
        >
          Yesterday
        </Text>

        <NotificationCard
          style={{ marginTop: 24 }}
          bgColor={"rgba(254, 114, 95, 0.25)"}
          title={"Today’s Special Offers"}
          subTitle={"You get a special promo today!"}
        >
          <OfferNotification />
        </NotificationCard>

        <Text
          style={[
            getTypography(
              18,
              26,
              allColors.text100,
              allFonts.URBANIST_SEMIBOLD
            ),
            { marginTop: 24 },
          ]}
        >
          Jul 22, 2024
        </Text>

        <NotificationCard
          style={{ marginTop: 24 }}
          bgColor={"rgba(249, 250, 251, 0.15)"}
          title={"Credit Card Connected!"}
          subTitle={"Credit Card has been linked!"}
        >
          <PaymentSVG />
        </NotificationCard>

        <NotificationCard
          style={{ marginTop: 24 }}
          bgColor={"rgba(249, 250, 251, 0.15)"}
          title={"Account Setup Successful!"}
          subTitle={"Your account has been created!"}
        >
          <AccountSVG />
        </NotificationCard>
      </ScrollView>
    </LinearGradient>
  );
};

export default ShowNotifications;

const styles = StyleSheet.create({});
