import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import Menu from "@/assets/svgs/menu.svg";
import Message from "@/assets/svgs/message.svg";
import BellSvg from "@/assets/svgs/bell.svg";
import BellButton from "@/assets/svgs/bell_button.svg";
import HorizontalDotButton from "@/assets/svgs/horizontal_dots_btn.svg";
import SearchButton from "@/assets/svgs/search_btn.svg";
import BackBtn from "@/assets/svgs/back_btn.svg";
import PhoneButton from "@/assets/svgs/phone_button.svg";
import PrimaryButton from "@/components/PrimaryButton";
import { router } from "expo-router";
import { getTypography } from "@/styles";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import IconButton from "./IconButton";

function showUserInfo() {
  return (
    <View style={styles.userInfo}>
      <View style={{ height: 45, width: 45,
         marginRight: 10,
       
         }}>
        <Image
          source={require('@/assets/images/profile.png')}
          style={styles.avatar}
        />
        <View
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            height: 12,
            width: 12,
            borderWidth: 1.6,
            borderColor: allColors.white,
            backgroundColor: "rgba(14, 173, 105, 1)",
            borderRadius: 6,
          }}
        />
      </View>

      <View>
        <Text numberOfLines={1} style={styles.greeting}>Hello, 👋</Text>
        <Text numberOfLines={1} style={styles.name}>Sandy Allen</Text>
      </View>
    </View>
  );
}

const TopNavBar = ({
  menuBtnWithTitle,
  backBtn,
  menuBtn,
  messageNotification,
  searchDot,
  dotBtn,
  style,
  title,
  backBtnWithTitle,
  bothRightBtns,
  userInfo,
  phoneDot,
}: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          // flex: 1,
          // backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      {menuBtn && (
        <PrimaryButton
          // onPress={() => router.push('/drawer')}
          // onPress={(): void => router.openDrawer()}
          onPress={(): void => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <Menu height={45} width={45} />
        </PrimaryButton>
      )}

      {backBtn && (
        <PrimaryButton onPress={() => router.back()}>
          <BackBtn height={45} width={45} />
        </PrimaryButton>
      )}

      {backBtnWithTitle && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryButton onPress={() => router.back()}>
            <BackBtn height={45} width={45} />
          </PrimaryButton>

          <Text
            // numberOfLines={1}
            // ellipsizeMode="tail"
            style={[
              getTypography(18, 28, allColors.text100, allFonts.URBANIST_Bold),
              {
                marginLeft: 12,
                // backgroundColor:'red',
                // width:Dimensions.get('screen').width/2
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}

      {menuBtnWithTitle && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryButton
            onPress={(): void => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Menu height={45} width={45} />
          </PrimaryButton>

          <Text
            // numberOfLines={1}
            // ellipsizeMode="tail"
            style={[
              getTypography(18, 28, allColors.text100, allFonts.URBANIST_Bold),
              {
                marginLeft: 12,
                // backgroundColor:'red',
                // width:Dimensions.get('screen').width/2
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}

      {title && backBtn && (
        <Text
          // numberOfLines={1}
          // ellipsizeMode="tail"
          style={[
            getTypography(18, 28, allColors.text100, allFonts.URBANIST_Bold),
            {
              marginLeft: 12,
              // backgroundColor:'red',
              // width:Dimensions.get('screen').width/2
            },
          ]}
        >
          {title}
        </Text>
      )}

      {userInfo && showUserInfo()}

      {messageNotification && (
        <View style={{ flexDirection: "row" }}>
          <PrimaryButton onPress={() => router.push("/screens/Inbox")}>
            <Message height={45} width={45} style={{ marginRight: 10 }} />
          </PrimaryButton>
          <PrimaryButton
            onPress={() => router.push("/screens/ShowNotifications")}
          >
            <BellButton height={45} width={45} />
          </PrimaryButton>
        </View>
      )}

      {searchDot && (
        <View style={{ flexDirection: "row" }}>
          <PrimaryButton onPress={() => router.push("/screens/Inbox")}>
            <SearchButton height={45} width={45} style={{ marginRight: 10 }} />
          </PrimaryButton>
          <PrimaryButton
            onPress={() => router.push("/screens/ShowNotifications")}
          >
            <HorizontalDotButton height={45} width={45} />
          </PrimaryButton>
        </View>
      )}


{phoneDot && (
        <View style={{ flexDirection: "row" }}>
          <PrimaryButton onPress={() => router.push("/screens/ChatScreens/CallScreen")}>
            <PhoneButton height={45} width={45} style={{ marginRight: 10 }} />
          </PrimaryButton>
          <PrimaryButton
            onPress={() => router.push("/screens/ShowNotifications")}
          >
            <HorizontalDotButton height={45} width={45} />
          </PrimaryButton>
        </View>
      )}

      {dotBtn && (
        <PrimaryButton>
          <HorizontalDotButton height={45} width={45} />
        </PrimaryButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#37256B",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    minWidth:200,
    // left: -20,
    // backgroundColor:'red'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    color: allColors.text100,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: allFonts.URBANIST,
  },
  name: {
    color: allColors.text100,
    fontSize: 18,
    lineHeight: 24,
    fontFamily: allFonts.URBANIST_Bold,
  },
  icons: {
    flexDirection: "row",
    // width: 50,
  },
});

export default TopNavBar;
