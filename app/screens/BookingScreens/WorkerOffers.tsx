import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, StyleSheet } from "react-native";

import TopNavBar from '@/components/TopNavBar';
import WorkerOfferCard from '@/components/WorkerOfferCard';


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
      <StatusBar
        barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
      />
    <TopNavBar

      messageNotification={true}
      backBtnWithTitle={true}
      title="Workers Offers"
      style={{ padding: 10, marginTop: 40,  }}
       

    />

    <WorkerOfferCard/>

    <WorkerOfferCard/>

    <WorkerOfferCard/>



    </LinearGradient>
 
  );
}
