import BookingCard from "@/components/BookingCard";
import SuccessModal from "@/components/SuccessModal";
import NotFound from "@/components/NotFound";
import RawBottomSheet from "@/components/RawBottomSheet";
import TwoButtonsView from "@/components/TwoButtonsView";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { UPCOMING_BOOKINGS_DATA } from "@/data/data";
import { getTypography } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { createRef, useRef, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function UpcomingScreen() {
  const bottomSheetRef = useRef(null);
  const [item, setItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);


function toggleModal () {
  setModalVisible(!modalVisible)
}

  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.1, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{
        ...StyleSheet.absoluteFillObject,
        paddingTop: 18,
        paddingHorizontal: 12,
      }}
    >
      {UPCOMING_BOOKINGS_DATA.length === 0 ? (
        <NotFound
          title={"You have no upcoming booking"}
          subTitle={
            "You do not have a upcoming booking. Make a new booking by clicking the button below"
          }
        />
      ) : (
        <ScrollView>
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
                title1={"Cancel Booking"}
                title2={"Chat"}
                onPress1={() => {
                  setItem(item);
                  bottomSheetRef.current.open();
                }}
              />
            );
          })}
        </ScrollView>
      )}

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
            <TwoButtonsView title1={'Cancel'}
             title2={'Yes, Cancel Booking'}
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
