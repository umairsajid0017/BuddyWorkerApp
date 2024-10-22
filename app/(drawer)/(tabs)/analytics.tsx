import BarGraph from "@/components/BarGraph";
import BottomSheetView from "@/components/BottomSheetView";
import IconButton from "@/components/IconButton";
import InputBox from "@/components/InputBox";
import LongButton from "@/components/LongButton";
import SuccessModal from "@/components/SuccessModal";
import TwoButtonsView from "@/components/TwoButtonsView";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
import RawBottomSheet from "@/components/RawBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Portal } from "react-native-portalize";
import DropDownPicker from "react-native-dropdown-picker";

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

const servicesList = [
  { id: "1", name: "al falah bank" },
  { id: "2", name: "askri bank" },
  { id: "3", name: "al habib bank" },
  { id: "4", name: "habib bank" },
  { id: "5", name: "allied bank" },
];

const AnalyticsTab = () => {
  const router = useRouter();
  const bottomSheetRef = useRef(null);
  const [item, setItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const sheetRef = useRef(null);
  const [offerBudget, setOfferBudget] = useState("");
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");

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

...styles.card

    }}
  >
                <Image
                style={{
                  width: Dimensions.get("screen").width / 2 - 20,
                  height: 142,
                      borderRadius: 24,

                }}
                source={require("@/assets/images/box1.png")} />

                <View 
             style={{
              position:'absolute',
              top:0,
              right:0,
              bottom:0,
              left:0,
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
       Withdrawal Amount
        </Text>

        <LinearGradient
          // Define the colors for the gradient
          colors={["#FF9284", "#FE725F"]}
          // Apply the gradient at an angle of roughly 174 degrees
          start={{ x: 0.5, y: 0 }} // Starting point of the gradient
          end={{ x: 0.1, y: 1 }}
          style={{
            // ...StyleSheet.absoluteFillObject,
            // padding: 15,
            backgroundColor: allColors.primary1000, // Matching the card color
            borderRadius: 24,
            // padding: 20,
            // margin: 5,
            // width: Dimensions.get("screen").width / 2 - 20,
            height: 142,
            // alignItems: "center",
            justifyContent: "space-around",
            marginBottom:15,
          }}
        >
          <Image source={require("@/assets/images/box2.png")} />

            <View 
             style={{
              position:'absolute',
              top:0,
              right:0,
              bottom:0,
              left:0,
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
            <Text
            style={{
        
              ...getTypography(
                36,
                44,
                allColors.text100,
                allFonts.URBANIST_Bold
              ),
            }}
          >
            $410.89
          </Text>
          <Text
            style={{
              ...getTypography(18, 26, allColors.text100, allFonts.URBANIST),
            }}
          >
            Available for withdrawl
          </Text>
            </View>

    
        </LinearGradient>

        <InputBox
          value={offerBudget}
          label="Offer Budget"
          placeholder="Enter your offering budget"
          onChangeText={(text: string) => setOfferBudget(text)}
          style={{ color: allColors.text900, }}
          labelStyle={{ color: allColors.text900 }}
          placeholderTextColor={allColors.tertiary300}
          keyboardType={"numeric"}
       
        />

<Text style={[styles.label]}>Select Account</Text>
       
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
          title2={"Withdraw Amount"}
          onPress2={() => {
            sheetRef.current?.close();
            // sheetRef.current?.snapToIndex(-1);
           toggleModal()
          }}
          style2={{ flex: 2 }}
        />
      </View>
    );
  }

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
            marginBottom: 15,
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
          <Card
            title="Total Jobs Done"
            value={`${(dashboardData.totalJobsDone / 1000).toFixed(2)}k`}
          />
        </View>

        <Text
          style={{
            marginLeft: 10,
            marginBottom: 15,
            ...getTypography(16, 24, allColors.text100, allFonts.URBANIST_Bold),
          }}
        >
          Orders Summary
        </Text>

        <View style={styles.chartContainer}>
          <View style={styles.roundedCorners}>
            <BarGraph />
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
              color={allColors.warning800}
            />
          </IconButton>
          <Text style={styles.cardTitle}>Available for withdrawl</Text>
          <Text style={styles.cardValue}>$ 3,461.00</Text>
        </View>

        <LongButton
          title={"Withdraw Now"}
          onPress={() => {
            // bottomSheetRef.current?.open()
            sheetRef.current?.expand();
            sheetRef.current?.snapToIndex(2);
          }}
        />
      </ScrollView>
      {/* <RawBottomSheet ref={bottomSheetRef} height={500}>
      {getContent()}
        </RawBottomSheet> */}
        <Portal>

      <BottomSheetView ref={sheetRef}>{getContent()}</BottomSheetView>

      </Portal>

      <SuccessModal
        visible={modalVisible}
        toggleModal={toggleModal}
        onPress={toggleModal}
        title={"Withdrawal Completed Successful!"}
        // subTitle={
        //   " You have successfully canceled your service booking. 80% funds will be returned to your account."
        // }
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
    // backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  roundedCorners: {
    borderRadius: 16, // Round corners of the entire chart container
    overflow: "hidden", // Ensure content respects the borderRadius   
  },

  card: {
    // backgroundColor: allColors.primary1000, // Matching the card color
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
    borderRadius: 16,
    marginHorizontal: 10,
    padding: 15,
    marginVertical: 25,
    // width: "48%",
    justifyContent: "center",
    // alignItems: 'center',
  },
  cardTitle: {
    ...getTypography(16, 24, allColors.text100, allFonts.URBANIST),

    marginTop: 10,
  },
  cardValue: {
    position: "absolute",
    right: 10,

    ...getTypography(25, 44, allColors.text100, allFonts.URBANIST_Bold),
    // marginTop: 5,
  },
  label: {
    fontSize: 14,
    color: allColors.text900,
    fontFamily: allFonts.URBANIST_SEMIBOLD,
    lineHeight: 22,
    marginBottom: 4,
    marginLeft: 10,
  },
});

export default AnalyticsTab;
