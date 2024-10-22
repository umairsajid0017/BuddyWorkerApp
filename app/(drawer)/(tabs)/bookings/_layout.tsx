import { Tabs } from "expo-router";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import UpcomingScreen from "@/app/screens/BookingScreens/upcoming";
import CancelledScreen from "@/app/screens/BookingScreens/cancelled";
import CompletedScreen from "@/app/screens/BookingScreens/completed";

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import TopNavBar from "@/components/TopNavBar";


const Tab = createMaterialTopTabNavigator();

export default function Layout() {
  return (
    <LinearGradient
    // Define the colors for the gradient
    colors={["#1C0D24", "#6A318A"]}
    // Apply the gradient at an angle of roughly 174 degrees
    start={{ x: 0.5, y: 0 }} // Starting point of the gradient
    end={{ x: 0.1, y: 1 }}
    style={{ ...StyleSheet.absoluteFillObject }}
  >
    <TopNavBar
       
        
      title="My Orders"
      style={{ padding: 10, marginTop: 40,  }}
        menuBtnWithTitle={true}
        messageNotification={true}
    />

    <Tab.Navigator
      screenOptions={{
          //  tabBarItemStyle: {
          //               // width: 120,
          //               // backgroundColor:'red',
          //               // margin: 3,
          //               // padding:4.5
                    
          //           },
        tabBarStyle: {
          backgroundColor: 'transparent', // Tab background color
       
          elevation:0,
          borderBottomWidth:1,
          borderBottomColor:allColors.secondary700,
          marginHorizontal:10
          // marginBottom:32,
        },
        tabBarActiveTintColor: allColors.primary1000, // Active tab text color
        tabBarInactiveTintColor: allColors.text400, // Inactive tab text color
        tabBarIndicatorStyle: {
          backgroundColor: '#FF6A5C', // Indicator color (red underline)
          height: 1, // Indicator height (underline thickness)
          bottom:-1,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          lineHeight:22,
          fontFamily:allFonts.URBANIST_SEMIBOLD,
          // color:allColors.text400,
          textTransform: 'none', // Do not transform to uppercase
        },
        
      }}
    >
      <Tab.Screen name="Active" component={UpcomingScreen} />
      <Tab.Screen name="Done" component={CompletedScreen} />
      <Tab.Screen name="Cancelled" component={CancelledScreen} />
    </Tab.Navigator>
    </LinearGradient>
  );
}
