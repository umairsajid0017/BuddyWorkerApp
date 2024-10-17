import { useRef, useState, type ReactElement, type ReactNode } from "react";

import { Drawer } from "expo-router/drawer";
import TopNavBar from "@/components/TopNavBar";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Switch,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IconButton from "@/components/IconButton";
import { allColors } from "@/constants/Colors";
import { router } from "expo-router";
import ArrowLeft from "@/assets/svgs/arrow-left.svg";
import HomeSvg from "@/assets/svgs/Home.svg";
import ProfileSvg from "@/assets/svgs/profile.svg";
import LanguageSvg from "@/assets/svgs/language.svg";
import LockSvg from "@/assets/svgs/lock.svg";
import KeySquareSvg from "@/assets/svgs/key-square.svg";
import EyeSvg from "@/assets/svgs/eye.svg";
import InfoSvg from "@/assets/svgs/info.svg";
import BellSvg from "@/assets/svgs/bell.svg";
import CalendarSvg from "@/assets/svgs/calendar-2.svg";
import LogoutSvg from "@/assets/svgs/logout.svg";
import { getTypography } from "@/styles";
import { allFonts } from "@/constants/Fonts";
import TwoButtonsView from "@/components/TwoButtonsView";
import RawBottomSheet from "@/components/RawBottomSheet";
import PrimaryButton from "@/components/PrimaryButton";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function CustomDrawerContent(props: any) {
  const [darkMode, setDarkMode] = useState(true);
  const bottomSheetRef = useRef(null);

  return (
    <ScrollView>
      <View style={styles.drawerContainer}>
        {/* Drawer Header */}
        <View style={styles.header}>
          <IconButton
            style={{
              backgroundColor: "rgba(17, 24, 39, 0.08)",
            }}
            onPress={() => router.back()}
          >
            <ArrowLeft color={allColors.black} />
          </IconButton>

          <Text style={styles.profileTitle}>Profile</Text>
        </View>

        {/* User Info */}

            <PrimaryButton 
              onPress={() => router.push("/(drawer)/(tabs)/profile")}
            >
            <LinearGradient
          // Define the colors for the gradient
          colors={["#1C0D24", "#6A318A"]}
          // Apply the gradient at an angle of roughly 174 degrees
          start={{ x: 0.5, y: 0.1 }} // Starting point of the gradient
          end={{ x: 0.5, y: 0.8 }}
          style={styles.userInfo}
        >
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=3" }} // Replace with your image
            style={styles.userImage}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.userName}>Ahmad Akram</Text>
            <Text style={styles.userRole}>User</Text>
          </View>
        </LinearGradient>
            </PrimaryButton>

        {/* Drawer Items */}

        <TouchableOpacity
          onPress={() => router.push("/screens/Dashboard/dashboard")}
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: allColors.primary100,
            }}
            // onPress={() => router.back()}
          >
            <HomeSvg color={allColors.primary1000} />
          </IconButton>
          <Text style={styles.drawerItemText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/screens/ProfileScreens/EditProfile")}
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: allColors.secondary100,
            }}
            onPress={() => router.back()}
          >
            <ProfileSvg color={allColors.secondary1000} />
          </IconButton>
          <Text style={styles.drawerItemText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/screens/Calender/MyCalender")}
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: allColors.success200,
            }}
            onPress={() => router.back()}
          >
            <CalendarSvg color={allColors.success800} />
          </IconButton>

          <Text style={styles.drawerItemText}>My Calendar</Text>
        </TouchableOpacity>

        {/* Dark Mode Switch */}
        <View style={styles.drawerItem}>
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: allColors.tertiary100,
            }}
            onPress={() => router.back()}
          >
            <EyeSvg color={allColors.tertiary900} />
          </IconButton>
          <Text style={styles.drawerItemText}>Dark Mode</Text>

          <Switch
            trackColor={{ false: "#767577", true: "#8e44ad" }}
            thumbColor={darkMode ? "#ffffff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setDarkMode}
            value={darkMode}
            style={{ marginLeft: 60 }}
          />
        </View>

        {/* Other Drawer Items */}
        <TouchableOpacity
          onPress={() => router.push("/screens/Language")}
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: allColors.info200,
            }}
          >
            <LanguageSvg color={allColors.info800} />
          </IconButton>
          <Text style={styles.drawerItemText}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push("/screens/AuthScreens/CreatePasswordScreen")
          }
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: "rgba(246, 238, 255, 1)",
            }}
          >
            <KeySquareSvg color={"rgba(120, 27, 228, 1)"} />
          </IconButton>
          <Text style={styles.drawerItemText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/screens/AuthScreens/VerifyAccount")}
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: "#FFEEEE",
            }}
          >
            <KeySquareSvg color={"#E41B1B"} />
          </IconButton>
          <Text style={styles.drawerItemText}>Verify Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push("/screens/NotificationScreens/NotificationSettings")
          }
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: allColors.secondary100,
            }}
          >
            <BellSvg color={allColors.secondary1000} />
          </IconButton>
          <Text style={styles.drawerItemText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/screens/PrivacyPolicy/PrivacyPolicy")}
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: allColors.success200,
            }}
          >
            <LockSvg />
          </IconButton>
          <Text style={styles.drawerItemText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/screens/HelpCenter")}
          style={styles.drawerItem}
        >
          <IconButton
            disable={true}
            style={{
              height: 40,
              width: 40,
              marginRight: 15,
              backgroundColor: "rgba(250, 163, 30, 0.08)",
            }}
          >
            <InfoSvg />
          </IconButton>
          <Text style={styles.drawerItemText}>Help Center</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={() => bottomSheetRef.current.open()}
          style={styles.logoutButton}
        >
          <LogoutSvg />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <RawBottomSheet ref={bottomSheetRef} height={250}>
        <>
          <View
            style={{
              // backgroundColor:'red',
              padding: 20,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: allColors.stroke,
                paddingBottom: 20,
                marginBottom: 20,
                textAlign: "center",
                ...getTypography(
                  24,
                  32,
                  allColors.text1000,
                  allFonts.URBANIST_Bold
                ),
              }}
            >
              Logout
            </Text>

            <Text
              style={{
                marginBottom: 15,
                textAlign: "center",

                ...getTypography(16, 28, "#212121", allFonts.URBANIST),
              }}
            >
              Are you sure want to logout?
            </Text>

            <TwoButtonsView
              title1={"Cancel"}
              title2={"Yes, Logout"}
              onPress2={() => {
                bottomSheetRef.current.close();
              }}
            />
          </View>
        </>
      </RawBottomSheet>
    </ScrollView>
  );
}

export default function Layout(): ReactNode {
  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      <StatusBar
        barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
        // backgroundColor="#6200EE"
      />
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#fff", // Customize background color
            // width: 250,               // Drawer width
            borderTopRightRadius: 25, // Rounded top-right corner
            borderBottomRightRadius: 25, // Rounded bottom-right corner
            // marginVertical:10
          },
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    // flex: 1,
    padding: 16,
    paddingVertical: 10,
    justifyContent: "center",
    // alignItems:'center',
    borderRadius: 10,
    // backgroundColor:'red',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25, // Rounded bottom-right corner

    // elevation:5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 25,
    marginTop: 25,
    // backgroundColor:'red'
  },
  backButton: {
    marginRight: 10,
  },
  profileTitle: {
    ...getTypography(20, 28, allColors.text900, allFonts.URBANIST_Bold),
    marginLeft: 15,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 16,
    flexDirection: "row",
    padding: 12,
    marginTop: 20,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: allColors.text100,
    // marginBottom: 10,
  },
  userName: {
    ...getTypography(16, 24, allColors.text100, allFonts.URBANIST_SEMIBOLD),
  },
  userRole: {
    ...getTypography(12, 22, allColors.text100, allFonts.URBANIST),
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#ddd',
    // backgroundColor:'red',
    // marginVertical:10,
  },
  drawerItemText: {
    ...getTypography(16, 24, allColors.text900, allFonts.URBANIST_SEMIBOLD),
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: allColors.primary1000,
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  logoutButtonText: {
    ...getTypography(18, 26, allColors.text100, allFonts.MULISH),
    marginLeft: 10,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
