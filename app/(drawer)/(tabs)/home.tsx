import BookingCard from "@/components/BookingCard";
import RawBottomSheet from "@/components/RawBottomSheet";
import SuccessModal from "@/components/SuccessModal";
import TwoButtonsView from "@/components/TwoButtonsView";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { UPCOMING_BOOKINGS_DATA } from "@/data/data";
import { getTypography } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import TopNavBar from "../../../components/TopNavBar";
import PopularServices from "../../screens/HomeScreens/PopularServices";
import SectionHeading from "../../screens/HomeScreens/SectionHeading";
import WorkersOfferCard from "@/components/WorkerOfferCard";

// Define the type for your dashboard data
type DashboardData = {
  totalEarnings: number;
  jobsDone: number;
  averageRating: number;
  jobsAvailable: number;
  assignedJobs: number;
  totalJobsDone: number;
};

// Dummy data (this can be replaced by fetched data)
const initialData: DashboardData = {
  totalEarnings: 410.89,
  jobsDone: 215,
  averageRating: 4.3,
  jobsAvailable: 56,
  assignedJobs: 215,
  totalJobsDone: 1650,
};

const HomeTab = () => {
  const router = useRouter();
  const bottomSheetRef = useRef(null);
  const [item, setItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const [dashboardData, setDashboardData] =
    useState<DashboardData>(initialData);

  const Card: React.FC<{ title: string; value: string | number }> = ({
    title,
    value,
  }) => (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#FF9284", "#FE725F"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{
        // // ...StyleSheet.absoluteFillObject,
        // // padding: 15,
        // backgroundColor: allColors.primary1000, // Matching the card color
        // borderRadius: 24,
        // // padding: 20,
        // // margin: 5,
        // // width: Dimensions.get("screen").width / 2 - 20,
        // height: 142,
        // // alignItems: "center",
        // justifyContent: "space-around",
        // marginBottom:15,

        ...styles.card,
      }}
    >
      <Image
        style={{
          width: Dimensions.get("screen").width / 2 - 20,
          height: 142,
          borderRadius: 24,
        }}
        source={require("@/assets/images/box1.png")}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          // ...StyleSheet.absoluteFillObject,
          // padding: 15,

          // borderRadius: 24,
          padding: 20,
          // margin: 5,
          // width: Dimensions.get("screen").width / 2 - 20,
          // height: 142,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </LinearGradient>
  );

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{ flex: 1 }}
    >
      <TopNavBar
        messageNotification={true}
        userInfo={true}
        menuBtn={true}
        style={{
          padding: 10,

          marginTop: 40,
        }}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            // flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            // padding: 16,
            // backgroundColor: 'red',
          }}
        >
          <Card
            title="Total Earnings"
            value={`$${dashboardData.totalEarnings}`}
          />
          <Card title="Jobs Done" value={dashboardData.jobsDone} />
          <Card title="Average Rating" value={dashboardData.averageRating} />
          <Card title="Jobs Available" value={dashboardData.jobsAvailable} />
        </View>

        <SectionHeading
          heading="Customer Offers"
          onPress={() =>
            router.push({
              pathname: "/screens/SeeAllScreens/[SeeAll]",
              params: { SeeAll: "jobs_assigned" },
            })
          }
          isSeeAll={false}
        />

        {UPCOMING_BOOKINGS_DATA.map((item: any) => {
          return (
       <WorkersOfferCard/>
          );
        })}
{/* 
        <SectionHeading
          heading="Upcoming Jobs"
          onPress={() =>
            router.push({
              pathname: "/screens/SeeAllScreens/[SeeAll]",
              params: { SeeAll: "upcoming_jobs" },
            })
          }
          isSeeAll={true}
        />

        <PopularServices /> */}
      </ScrollView>

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
              marginBottom: 15,

              textAlign: "center",
              ...getTypography(14, 22, "#424242", allFonts.URBANIST),
            }}
          >
            Only 80% of the money you can refund from your payment according to
            our policy
          </Text>
          <TwoButtonsView
            title1={"Cancel"}
            title2={"Yes, Cancel Booking"}
            onPress2={() => {
              bottomSheetRef.current.close();
              toggleModal();
            }}
            style2={{ flex: 2 }}
          />
        </View>
      </RawBottomSheet>

      <SuccessModal
        visible={modalVisible}
        toggleModal={toggleModal}
        onPress={toggleModal}
        title={"Cancel Booking Successful!"}
        subTitle={
          " You have successfully canceled your service booking. 80% funds will be returned to your account."
        }
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#37256B',
    // flex: 1,
    padding: 10,
    // ...StyleSheet.absoluteFillObject,
  },

  card: {
    backgroundColor: allColors.primary1000, // Matching the card color
    borderRadius: 24,
    // padding: 20,
    margin: 5,
    width: Dimensions.get("screen").width / 2 - 20,
    height: 142,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    ...getTypography(18, 26, allColors.text100, allFonts.URBANIST),
  },
  value: {
    ...getTypography(36, 44, allColors.text100, allFonts.URBANIST_Bold),
  },
});

export default HomeTab;
