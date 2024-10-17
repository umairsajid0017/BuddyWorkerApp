import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // For icons
import ArrowLeft from '@/assets/svgs/arrow-left.svg'
import MessageText from '@/assets/svgs/message-text.svg'
import NotificationBing from '@/assets/svgs/notification-bing.svg'
import { allColors } from "@/constants/Colors";
import IconButton from "@/components/IconButton";
import { router } from "expo-router";


const AidFastScreen = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/images/AidFast.png")}
      style={{
        // width: '100%',
    

        // ...StyleSheet.absoluteFillObject,
        height: 350,
        
        marginBottom:-5,
    
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" />

    

<View style={{marginTop:25,padding:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

      <IconButton onPress={() => router.back()}>
      <ArrowLeft color={allColors.black}/>
     </IconButton>


          <View style={{flexDirection:'row',}}>
          <IconButton style={{marginRight:12}}>
     <MessageText color={allColors.black}/>
     </IconButton>

     <IconButton>
     <NotificationBing color={allColors.black}/>
     </IconButton>
          </View>
   
</View>



    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",

    backgroundColor: "transparent",

    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 50, // For top padding (adjust based on your header height)
    paddingHorizontal: 16,
  },
  statusBarImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 100, // Adjust the height as needed to cover the status bar
    zIndex: -1, // Make sure the image is behind other content
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    padding: 8,
  },
  iconButtons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
    padding: 8,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 4,
    fontFamily: "sans-serif-light", // You can use custom fonts here
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30, // Adjust this based on your footer
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
});

export default AidFastScreen;
