import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Header from "./header";
import ServiceDetails from "./servicedetails";
import AboutSection from "./aboutSection";
import { LinearGradient } from "expo-linear-gradient";
import PopularServices from "@/app/screens/HomeScreens/PopularServices";
import SectionHeading from "@/app/screens/HomeScreens/SectionHeading";
import PhotoSection from "./photoSection";
import { getTypography } from "@/styles";
import { allColors } from "@/constants/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { allFonts } from "@/constants/Fonts";
import TabBar from "@/components/TabBar";
import ReviewCard from "@/components/ReviewCard";
import { router } from "expo-router";
import TwoButtonsView from "@/components/TwoButtonsView";
import RawBottomSheet from "@/components/RawBottomSheet";
import DropDownPicker from "react-native-dropdown-picker";
import label from "../Slider/label";
import BottomSheetView from "@/components/BottomSheetView";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const servicesList = [
  { id: "1", name: "House Cleaning" },
  { id: "2", name: "Painting" },
  { id: "3", name: "Car Repairing" },
  { id: "4", name: "Laundry service" },
  { id: "5", name: "Appliance Services" },
];

const index = () => {
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const sheetRef = useRef(null);

  function getContent() {
    return (
   
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
          Start Booking
        </Text>

        <Text
          style={{
            marginBottom: 10,

            ...getTypography(
              16,
              22,
              allColors.text900,
              allFonts.URBANIST_SEMIBOLD
            ),
          }}
        >
          Service
        </Text>

        <DropDownPicker
          selectedItemContainerStyle={{
            backgroundColor: allColors.primary100,
          }}
          TickIconComponent={({ style }) => (
            <MaterialIcons
              name="check"
              size={24}
              color={allColors.primary1000}
            />
          )}
          dropDownDirection="BOTTOM"
          // listMode="MODAL"
          placeholder={"Enter Service you want"}
          placeholderStyle={{
            color: allColors.tertiary300,
            // fontWeight: "bold"
          }}
          textStyle={{
            color: "#666666",
            // fontWeight: "bold"
          }}
          style={{
            borderWidth: 1,
            borderColor: allColors.stroke,

            borderRadius: 25,
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#fff",
          }}
          schema={{
            label: "name",
            value: "id",
          }}
          searchable={false}
          open={open}
          value={serviceId}
          items={servicesList}
          setOpen={setOpen}
          setValue={setServiceId}

          //setVehicleMake={setVehicleMake}
        />

        <TwoButtonsView
          // style={{marginTop:100}}
          title1={"Cancel"}
          title2={"Continue"}
          onPress2={() => {
            router.push("/screens/BookingScreens/PlaceOrder");
          }}
          style2={{ flex: 2 }}
        />
      </View>
    
    );
  }

  return (
    <GestureHandlerRootView style={{ ...StyleSheet.absoluteFillObject }}>
   
 <ScrollView>
     <Header />
      <LinearGradient
        // Define the colors for the gradient
        colors={["#1C0D24", "#6A318A"]}
        // Apply the gradient at an angle of roughly 174 degrees
        start={{ x: 0.5, y: 0 }} // Starting point of the gradient
        end={{ x: 0.1, y: 1 }}
        style={{ flex: 1, paddingHorizontal: 10 }}
      >
        <ServiceDetails />

        <AboutSection
          onBook={() => {
            sheetRef.current?.expand();
            sheetRef.current?.snapToIndex(0);
          }}
        />

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

        <View style={{ marginTop: 20 }} />

        <SectionHeading heading="Photos & Videos"
          onPress={() =>
            router.push({
              pathname: "/screens/SeeAllScreens/[SeeAll]",
              params: { SeeAll: "jobs_assigned" },
            })
          }
          isSeeAll={true}
        
        />

        <PhotoSection />

        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <AntDesign name="star" size={18} color={allColors.primary1000} />
          <Text
            style={[
              { marginLeft: 10 },
              getTypography(12, 20, allColors.text100, allFonts.URBANIST),
            ]}
          >
            4.9 | 6,182 reviews
          </Text>

          <Text style={styles.seeAll}>See all</Text>
        </View>

        <TabBar
          data={["All", "5", "4", "3", "2", "1"]}
          style={{ paddingHorizontal: 0 }}
          tabStyle={{
            height: 40,
            flexDirection: "row",
            borderWidth: 2,
            borderColor: allColors.primary1000,
          }}
          isRating={true}
          selectedTextStyle={{
            ...getTypography(
              14,
              22,
              allColors.text100,
              allFonts.URBANIST_SEMIBOLD
            ),
          }}
          unSelectedTextStyle={{
            ...getTypography(
              14,
              22,
              allColors.primary1000,
              allFonts.URBANIST_SEMIBOLD
            ),
          }}
          unSelectedTabColor={"transparent"}
          selectedTabColor={allColors.primary1000}
        />

        <ReviewCard />

      </LinearGradient>

    </ScrollView>
    <BottomSheetView ref={sheetRef}>{getContent()}</BottomSheetView>

    </GestureHandlerRootView>


  
   
  );
};

export default index;

const styles = StyleSheet.create({
  seeAll: {
    color: allColors.primary1000,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: allFonts.URBANIST,
    position: "absolute",
    right: 0,
  },
});
