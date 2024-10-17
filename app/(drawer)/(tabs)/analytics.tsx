import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
import TopNavBar from "../../../components/TopNavBar";
import SearchBar from "../../screens/HomeScreens/SearchBar";
import SpecialOffers from "../../screens/HomeScreens/SpecialOffers";
import Categories from "../../screens/HomeScreens/Categories";
import PopularServices from "../../screens/HomeScreens/PopularServices";
import SectionHeading from "../../screens/HomeScreens/SectionHeading";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import { getTypography } from "@/styles";
import { allFonts } from "@/constants/Fonts";
import BookingCard from "@/components/BookingCard";
import { UPCOMING_BOOKINGS_DATA } from "@/data/data";
import RawBottomSheet from "@/components/RawBottomSheet";
import TwoButtonsView from "@/components/TwoButtonsView";
import SuccessModal from "@/components/SuccessModal";
import IconButton from "@/components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import BarGraph from "@/components/BarGraph";

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

const AnalyticsTab = () => {
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
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );

  function toggleModal () {
    setModalVisible(!modalVisible)
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
          <Card title="Assigned Jobs" value={dashboardData.assignedJobs} />
         <Card title="Total Jobs Done" value={`${(dashboardData.totalJobsDone / 1000).toFixed(2)}k`} />

        </View>

        <View style={styles.chartContainer}>
        <View style={styles.roundedCorners}>
          
        <BarGraph/>

        </View>
        </View>





        <View style={styles.statsCard}>
            <IconButton
              disable={true}
              style={{ backgroundColor: allColors.primary100 }}
            >
              <Ionicons
                name="wallet-outline"
                size={24}
                color={allColors.primary1000}
              />
            </IconButton>
            <Text style={styles.cardTitle}>Total Spend</Text>
            <Text style={styles.cardValue}>$ 3,461.00</Text>
          </View>

      
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
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#37256B',
    // flex: 1,
    padding: 10,
    // ...StyleSheet.absoluteFillObject,
  },
  chartContainer: {
    // padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  roundedCorners: {
    borderRadius: 16, // Round corners of the entire chart container
    overflow: 'hidden', // Ensure content respects the borderRadius
   
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
  statsCard: {
    backgroundColor: "rgba(249, 250, 251, 0.15)",
    borderRadius: 10,
    padding: 15,
    width: "48%",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardTitle: {
    ...getTypography(16, 24, allColors.text100, allFonts.URBANIST),

    marginTop: 10,
  },
  cardValue: {
    ...getTypography(18, 24, allColors.text100, allFonts.URBANIST_Bold),
    marginTop: 5,
  },
});

export default AnalyticsTab;
