import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import TopNavBar from "@/components/TopNavBar";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { CATEGORIES_DATA, UPCOMING_BOOKINGS_DATA } from "@/data/data";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import { StatusBar, StyleSheet, Text , Image, View, ScrollView} from "react-native";
import SearchBar from "../HomeScreens/SearchBar";
import BookingCard from "@/components/BookingCard";
import RawBottomSheet from "@/components/RawBottomSheet";
import { getTypography } from "@/styles";
import TwoButtonsView from "@/components/TwoButtonsView";
import SuccessModal from "@/components/SuccessModal";

const SeeAll = ({params} : any) => {
  const { SeeAll :id} = useLocalSearchParams();

  const bottomSheetRef = useRef(null);
  const [item, setItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal () {
    setModalVisible(!modalVisible)
  }

  console.warn(id)

   if(id === 'jobs_assigned'){
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
        
          title="All jobs assigned"
    

          style={{padding: 10,  marginTop: 40 ,  alignItems:'center',
            justifyContent:null}}
            backBtnWithTitle={true}
        />
      
            <View style={{padding:10,}}>
            {UPCOMING_BOOKINGS_DATA.map((item) => {
          return (
            <BookingCard
                key={item.id}
                item={item}
                screenName={"Upcoming"}
                buttonBG={allColors.primary200}
                textColor={allColors.primary1000}
                contentHeight={380}
                showButton={true}
                title1={"Reject Work"}
                title2={"Start Work"}
                onPress1={() => {
                  setItem(item);
                  bottomSheetRef.current.open();
                }}
              />
          );
        })}
            </View>

            <RawBottomSheet ref={bottomSheetRef} height={500}>
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
            Cancel Booking
          </Text>
          <BookingCard
            item={item}
            screenName={"Upcoming"}
            buttonBG={allColors.primary200}
            textColor={allColors.primary1000}
            contentHeight={380}
            showButton={false}
            style={{
              borderWidth: 1,
              borderColor: allColors.stroke,
            }}
            titleStyle={{ color: allColors.black }}
            subTitleStyle={{ color: allColors.black }}
          />

          <Text
            style={{
              marginTop: 10,

              textAlign: "center",
              ...getTypography(20, 28, "#212121", allFonts.URBANIST),
            }}
          >
            Are you sure want to cancel your service booking?
          </Text>

          <Text
            style={{
              marginTop: 10,
              marginBottom:15,

              textAlign: "center",
              ...getTypography(14, 22, "#424242", allFonts.URBANIST),
            }}
          >
            Only 80% of the money you can refund from your payment according to
            our policy
          </Text>
            <TwoButtonsView title1={'Cancel'} title2={'Yes, Cancel Booking'}
            onPress2={()=>{
            
              bottomSheetRef.current.close()
              toggleModal()
            }}
            style2={{flex:2}}/>

        </View>
      </RawBottomSheet>

      <SuccessModal 
      visible={modalVisible} 
      toggleModal={toggleModal}
      onPress={toggleModal}
      title={"Cancel Booking Successful!"}
      subTitle={" You have successfully canceled your service booking. 80% funds will be returned to your account."}
      
      />
  

      </LinearGradient>
    );
  }

  else if(id === 'upcoming_jobs'){
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
        
          title="All upcoming jobs"
    

          style={{padding: 10,  marginTop: 40 ,  alignItems:'center',
            justifyContent:null}}
            backBtnWithTitle={true}
        />
      
  
        <Card
          imageStyle={{
            height: 170,
            width: 178,
            borderRadius: 32,
          }}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 12,
            // width: 218,
            height: 170,
          }}
        />
      </LinearGradient>
    );
  }



};

export default SeeAll;

const styles = StyleSheet.create({

  imageContainer:{
    borderRadius: 15,
    // marginHorizontal: 20,
   
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
    // backgroundColor:'red'
  },

  image: {
    width: '100%',
    height: 180,
    resizeMode:'cover',
    borderRadius: 35,
    
  },

  categoryContainer:{
    flexDirection: "row", flexWrap: "wrap", marginBottom: 20,
    marginTop:15,
  },

  categoryTitle: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: allFonts.URBANIST_SEMIBOLD,
    color: allColors.text100,
    marginVertical:12,
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    backgroundColor: "rgba(249, 250, 251, 0.15)",
    borderRadius: 15,
  },


});
