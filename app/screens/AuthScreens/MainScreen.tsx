import Dot from "@/components/Dot";
import { allFonts } from "@/constants/Fonts";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import BackgroundArtWork from "@/assets/svgs/Group 34713.svg";
import Logo from "@/assets/svgs/logo.svg";

// Define the dimensions
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

// Define the component
const MainAuthScreen: React.FC = () => {

  const router = useRouter();

  return (
    <LinearGradient
      colors={["#1C0D24", "#6A318A"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.1, y: 1 }}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.letStartSection}>
        <Logo height={112} width={112} style={{ marginBottom: 25 }} />
        <Text style={styles.title}>Let's Get Started!</Text>
        <Text style={styles.subtitle}>
          Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
          laoreet id sem.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton 
          onPress={() => router.push('/screens/AuthScreens/SignUpScreen')}

        style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </PrimaryButton>

        <PrimaryButton
         onPress={() => router.push('/screens/AuthScreens/SiginScreen')}
          style={[
            styles.primaryButton,
            {
              marginTop: 16,
              backgroundColor: allColors.secondary900,
            },
          ]}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </PrimaryButton>

        <View style={styles.socialBtnsSection}>
          <PrimaryButton style={styles.socialBtn}>
            <AntDesign name="google" size={24} color={allColors.white} />
          </PrimaryButton>

          <PrimaryButton style={styles.socialBtn}>
            <AntDesign name="instagram" size={24} color={allColors.white} />
          </PrimaryButton>

          <PrimaryButton style={styles.socialBtn}>
            <FontAwesome5 name="facebook" size={24} color={allColors.white} />
          </PrimaryButton>
        </View>


        <View style={styles.policySection}>
          <Text style={styles.policyText}>
          Privacy Policy
          </Text>
          <Dot style={styles.dot}/>
          <Text style={styles.policyText}> 
          Terms of Service
          </Text> 
        </View>

      </View>
      <BackgroundArtWork style={styles.backgroundSvg} />
    </LinearGradient>
  );
};

// Define the styles
const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    // alignItems: 'center',
    padding: 15,
  },
  policyText:{color:allColors.text100,lineHeight:22,fontFamily:allFonts.URBANIST},

  dot:{height:8,width:8,borderRadius:4,marginHorizontal:12,},
  socialBtnsSection: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 32,

  },

  policySection:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 32,
  },
  socialBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    width: 56,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: allColors.text100,
    marginRight:12,
  },
  letStartSection: { 
    marginTop:80,
    justifyContent: "center", 
    alignItems: "center"
   },
  backgroundSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    width: WIDTH,
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 25,
    justifyContent: "space-between",
    zIndex:1,
  },
  title: {
    fontSize: 36,
    color: allColors.text100,
    textAlign: "center",
    fontFamily: "Urbanist-Bold",
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Urbanist-Regular",
    lineHeight: 22,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 26,
    color: allColors.text100,
    fontFamily: "Mulish",
  },
  primaryButton: {
    flexDirection: "row",
    backgroundColor: allColors.primary1000,
    width: "100%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainAuthScreen;
