import BackgroundArtWork from "@/assets/svgs/Group 34713.svg";
import Logo from "@/assets/svgs/logo.svg";
import InputBox from "@/components/InputBox";
import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { login } from "@/utils/ApiCalls";

import { LOGIN, SERVICES } from "@/utils/Urls";
import { validateEmail } from "@/utils/validationUtils";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";

// Define the dimensions
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

// Define the component
const SiginScreen: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    message: "",
  });

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePhoneChange = (text: string) => {
    setPhone(text);
  };

  const isAnyFieldEmpty = () => {
    if (email !== "" && password !== "") {
      return false;
    } else {
      return true;
    }
  };

  const handleSignin = async () => {
    setStatus(false)
    let valid = true;
    const newErrors = { email: "", message: "" };


    // Validate email
    if (!validateEmail(email)) {
        newErrors.email ="Invalid email format.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setIsLoading(true);

      const res = await login({ email, password });

      if (res.status) {
        router.replace("/(drawer)/(tabs)/home");
      } else {
       setStatus(true)

        // newErrors.message = res.message;
        console.log("response ", res);
      }


      setErrors(newErrors);

    


      // Alert.alert('Success', 'Sign Up Successful!');
    }
  };

  console.log(errors)

  return (
    <LinearGradient
      colors={["#1C0D24", "#6A318A"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.1, y: 1 }}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.section1}>
        <Logo height={64} width={64} style={{ marginBottom: 24 }} />
        <Text style={styles.subtitle}>Good to see you</Text>
        <Text style={styles.title}>Welcome Back</Text>

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
      </View>

      <View style={styles.bottomContainer}>
        <InputBox
          label="Email"
          placeholder="Your email address"
          iconName="mail-outline"
          keyboardType="email-address"
          onChangeText={handleEmailChange}
          style={status ? { borderColor: allColors.danger800 } : null}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        <InputBox
          type="password"
          label="Password"
          placeholder="Your password "
          iconName="lock-closed-outline"
          keyboardType="default"
          onChangeText={(text: any) => setPassword(text)}
          style={status  ? { borderColor: allColors.danger800 } : null}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: status ? "space-between" : "flex-end",
          }}
        >
          {status ? (
            <Text style={styles.errorText}>Invalid email or password</Text>
          ) : null}

          <PrimaryButton
            onPress={() =>
              router.push("/screens/AuthScreens/ForgotPasswordScreen")
            }
          >
            <Text style={[styles.errorText]}>Forget Password?</Text>
          </PrimaryButton>
        </View>

        <PrimaryButton
          onPress={() => handleSignin()}
          style={[
            styles.primaryButton,
            isAnyFieldEmpty()
              ? { backgroundColor: allColors.primary300 }
              : { backgroundColor: allColors.primary1000 },
          ]}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </PrimaryButton>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
      <Text style={[styles.termsText, { textAlign: "center", fontSize: 14 }]}>
      Don’t have an account?
        </Text>
        <PrimaryButton onPress={() => router.push('/screens/AuthScreens/SignUpScreen')}>
        <Text
            style={[
              styles.termsText,
              { color: allColors.primary1000, fontSize: 14 },
            ]}
          >
            Sign Up.
          </Text>
          </PrimaryButton>
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
    paddingHorizontal: 10,
  },
  errorText: {
    marginTop: -10,
    marginBottom: 10,

    color: allColors.danger800,
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
    marginTop: 65,
    paddingHorizontal: 10,
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
    marginVertical: 28,
  },
});

export default SiginScreen;
