import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { PieChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import TopNavBar from "@/components/TopNavBar";
import { LinearGradient } from "expo-linear-gradient";
import { allColors } from "@/constants/Colors";
import IconButton from "@/components/IconButton";
import { getTypography } from "@/styles";
import { allFonts } from "@/constants/Fonts";
import BarGraph from "@/components/BarGraph";

const screenWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Complete",
    population: 40,
    color: "#fc7359",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Pending",
    population: 20,
    color: "#fe9564",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Over due",
    population: 15,
    color: "#ffb086",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];



export default function Dashboard() {


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
      <TopNavBar
    
        messageNotification={true}
        userInfo={true}
        backBtn={true}
        style={{
          padding: 10,

          marginTop: 40,
        }}
      />

      <ScrollView style={styles.container}>
        {/* Stats Cards */}
        <View style={styles.statsRow}>
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
          <View style={styles.statsCard}>
            <IconButton
              disable={true}
              style={{ backgroundColor: allColors.secondary100 }}
            >
              <FontAwesome
                name="cube"
                size={24}
                color={allColors.secondary1000}
              />
            </IconButton>
            <Text style={styles.cardTitle}>Total Orders</Text>
            <Text style={styles.cardValue}>164</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statsCard}>
            <IconButton
              disable={true}
              style={{ backgroundColor: allColors.warning100 }}
            >
              <MaterialCommunityIcons
                name="clock-outline"
                size={24}
                color={allColors.warning800}
              />
            </IconButton>
            <Text style={styles.cardTitle}>Pending Orders</Text>
            <Text style={styles.cardValue}>24</Text>
          </View>
          <View style={styles.statsCard}>
            <IconButton
              disable={true}
              style={{ backgroundColor: allColors.danger200 }}
            >
              <MaterialCommunityIcons
                name="timer-outline"
                size={24}
                color={allColors.danger800}
              />
            </IconButton>
            <Text style={styles.cardTitle}>Over Due</Text>
            <Text style={styles.cardValue}>33</Text>
          </View>
        </View>

        {/* Pie Chart */}

        <PieChart
          data={data}
          width={screenWidth - 20}
          height={180}
          chartConfig={{
            color: () => `rgba(255, 255, 255, 0.5)`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          center={[10, 10]}
          absolute
          style={{
            backgroundColor: "rgba(249, 250, 251, 0.15)",
            borderRadius: 10,
          }}
        />

        {/* Bar Chart */}
        <View style={{flexDirection:'row', paddingHorizontal: 10}}>
        
     
      

<BarGraph/>
        </View>
       
      
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 15,
    paddingBottom: 50,
    marginTop:25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    color: "white",
    fontSize: 18,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconButtons: {
    flexDirection: "row",
  },
  bellIcon: {
    marginLeft: 15,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
  chartTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    // marginVertical: 15,
    // textAlign: "center",


    // marginBottom: 10,
    // textAlign: 'left',
    // marginLeft: 20
  },
});
