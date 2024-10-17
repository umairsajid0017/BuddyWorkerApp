import BackButton from "@/components/BackButton";
import InputBox from "@/components/InputBox";
import { allFonts } from "@/constants/Fonts";
import {
  validateEmail
} from "@/utils/validationUtils";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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

// Define the dimensions
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

// Define the component
const ForgotPasswordScreen: React.FC = () => {
  const router = useRouter();
 
  const [email, setEmail] = useState("");
 
  const [errors, setErrors] = useState({
    email: "",
     });


  const isAnyFieldEmpty = () => {
    if (email !== "" ) {
      return false;
    } else {
      return true;
    }
  };

  const handlePasswordCreation = () => {
    let valid = true;
    const newErrors = { email: ""};

    // Validate name
    if (!validateEmail(email)) {
        newErrors.email = "Invalid email format.";
      valid = false;
    }


       setErrors(newErrors);

    if (valid) {
      router.push({ pathname: "/screens/AuthScreens/VerifyEmailScreen",
        params: { screenname: 'ForgotPasswordScreen' } });


        // router.push({ pathname: "/authScreens/VerifyEmailScreen", params: { id: 86, other: "anything you want here" } });
    //  router.push('/authScreens/VerifyEmailScreen')
    //  router.push('/authScreens/LoaderScreen')
    } 

  };

  return (
    <LinearGradient
      colors={["#1C0D24", "#6A318A"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.1, y: 1 }}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.section1}>
        <BackButton />

        <View style={{ alignSelf: "flex-start" }}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
          A a code will be sent to the given email, please take a look on your email.
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <InputBox
         label="Email"
          placeholder="Your email address"
          iconName="mail-outline"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
         
        />

        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

     
        <PrimaryButton
    
          onPress={() =>  isAnyFieldEmpty() ? null : handlePasswordCreation()}
          style={[
            styles.primaryButton,
            isAnyFieldEmpty()
              ? { backgroundColor: allColors.primary300 }
              : { backgroundColor: allColors.primary1000 },
          ]}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </PrimaryButton>

        <Text style={[styles.termsText, { textAlign: "center", fontSize: 14 }]}>
        Remember your password?
          <Text
            style={[
              styles.termsText,
              { color: allColors.primary1000, fontSize: 14 },
            ]}
          >
            Sign In.
          </Text>
        </Text>
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
    paddingHorizontal: 10,
  },
  errorText: {
    color: allColors.danger800,
    marginTop: -10,
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 20,
    fontFamily: allFonts.URBANIST,
  },
  bottomContainer: {
    height: "55%",
    width: WIDTH,
    position: "absolute",
    bottom: 0,

    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: allColors.white,
    zIndex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    // justifyContent:'center',
    // top:-50,
  },
  policyText: {
    color: allColors.text100,
    lineHeight: 22,
    fontFamily: allFonts.URBANIST,
  },

  termsText: {
    color: allColors.text800,
    lineHeight: 20,
    fontSize: 12,
    fontFamily: allFonts.URBANIST,
  },

  dot: { height: 8, width: 8, borderRadius: 4, marginHorizontal: 12 },
  socialBtnsSection: {
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    marginTop: 24,
    // backgroundColor:'red',
    zIndex: 1,
  },

  policySection: {
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
    marginRight: 12,
  },
  section1: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 25,

    // backgroundColor: "red",
    zIndex: 1,
    justifyContent: "space-between",
    height: "35%",
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
  },
  subtitle: {
    fontSize: 16,
    color: allColors.text100,
    fontFamily: allFonts.URBANIST,
    lineHeight: 24,
  },
  title: {
    fontSize: 32,
    color: allColors.text100,
    // textAlign: "center",
    fontFamily: allFonts.URBANIST_Bold,
    lineHeight: 40,
  },
  label: {
    fontSize: 14,
    color: allColors.text900,
    fontFamily: allFonts.URBANIST,
    marginTop: 10,
    lineHeight: 22,
    marginBottom: 4,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 26,
    color: allColors.text100,
    fontFamily: "Mulish",
  },
  primaryButton: {
    flexDirection: "row",

    width: "100%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
});

export default ForgotPasswordScreen;
