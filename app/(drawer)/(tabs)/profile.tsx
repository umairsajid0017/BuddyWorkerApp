import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import PopularServices from "../../screens/HomeScreens/PopularServices";
import { getTypography } from "@/styles";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import SectionHeading from "../../screens/HomeScreens/SectionHeading";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import TopNavBar from "@/components/TopNavBar";

const ProfileTab = () => {
  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{ ...StyleSheet.absoluteFillObject, padding: 10 }}
    >
      <TopNavBar
       
      
        style={{  marginTop: 40 , 
         
        }}
        title="My Profile"
        menuBtnWithTitle={true}
        messageNotification={true}
      
      />

        <ScrollView>
        <View style={styles.profileHeader}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://app.explorerbees.com/media/images/placeholder_user.png" }} // Replace with actual image URL
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIconWrapper}>

          <FontAwesome name="camera" size={18} color={allColors.primary1000}  />

          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Smith Elvin</Text>
      </View>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        {renderDetail("First Name", "John")}
        {renderDetail("Last Name", "Doe")}
        {renderDetail("Date of Birth", "11/27/96")}
        {renderDetail("Email", "johndoe123@gmail.com")}
        {renderDetail("Country", "United States")}
        {renderDetail("Number", "0334 0050391")}
        {renderDetail("National ID No", "3922 56679995 01")}
        {renderDetail("Gender", "Male")}
        {renderDetail("Address", "267 New Avenue Park, New York")}
      </View>

     
      <SectionHeading
         heading="Services"
          onPress={() =>
            router.push({
              pathname: "/screens/SeeAllScreens/[SeeAll]",
              params: { SeeAll: "Services" },
            })
          }
        />

      <PopularServices />
        </ScrollView>
   

    </LinearGradient>
  );
};

const renderDetail = (label : any, value : any) => (
  <View style={styles.detailRow}>
    <Text
      style={getTypography(
        14,
        22,
        allColors.text100,
        allFonts.URBANIST_SEMIBOLD
      )}
    >
      {label}
    </Text>
    <Text style={getTypography(12, 20, allColors.text100, allFonts.URBANIST)}>
      {value}
    </Text>
  </View>
);

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 24,
  },
  imageWrapper: {
    // position: "relative",
    marginBottom: 10,
    // backgroundColor:'red',
    borderRadius: 80,
    borderWidth: 4,
    alignItems:'center',
    justifyContent:'center',
    // padding:5,
    width: 135,
    height: 135,
    borderColor: allColors.primary900,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,

  
  },
  cameraIconWrapper: {
    position: "absolute",
    bottom: 10,
    right: -3,
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    padding: 6,
    borderWidth:2,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
   
  },
  cameraIcon: {
    width: 24,
    height: 24,
    resizeMode:'cover'
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  detailsContainer: {
    borderRadius: 8,
    padding: 16,
    // backgroundColor:'red',
    marginBottom:24,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderBottomColor:'#755B83',
    borderTopColor:'#755B83'
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    color: "#fff",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
