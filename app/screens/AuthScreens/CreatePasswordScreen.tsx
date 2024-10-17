import BackgroundArtWork from "@/assets/svgs/Group 34713.svg";
import BackButton from "@/components/BackButton";
import InputBox from "@/components/InputBox";
import PrimaryButton from "@/components/PrimaryButton";
import { allFonts } from "@/constants/Fonts";
import {
  doPasswordsMatch,
  validatePassword
} from "@/utils/validationUtils";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { allColors } from "@/constants/Colors";
import { Register } from "@/utils/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "@/redux/slices/registerSlice";
import { RootState } from "@/redux/store";

// Define the dimensions
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

// Define the component
const CreatePasswordScreen: React.FC = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();



  const params = useLocalSearchParams();
  const {name, email, phone, errorMessage } = useSelector((state: RootState) => state.register);

  // console.log('params',params)
  const {screenname } = params;




  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
   
  });



  const isAnyFieldEmpty =  () => {
    if (password !== "" && confirmPassword !== "") {
      return false;
    } else {
      return true;
    }
  };

  const handlePasswordCreation = async () => {
    let valid = true;
    const newErrors = { password: "", confirmPassword: "" };

    // Validate name
    if (!validatePassword(password)) {
      newErrors.password =
        "Your password must have at least one symbol & 8 or more characters.";
      valid = false;
    }

    // Validate email
    if (!validatePassword(confirmPassword)) {
      newErrors.confirmPassword = "Your password must have at least one symbol & 8 or more characters.";
      valid = false;
    }

    if (valid && !doPasswordsMatch(password, confirmPassword)) {
        newErrors.confirmPassword = "Passwords do not match.";
        valid = false;
      }
      
    setErrors(newErrors);

    if (valid) {

      const res = await Register({
        name,
        email,
        phone,
        password
      })

      console.log('register ', res)

      if(!res.status){
        dispatch(setErrorMessage(res.errors));
        router.back()
      }
      else{
        // router.push("/screens/AuthScreens/VerifyEmailScreen")

 screenname === 'ForgotPasswordScreen' ? 
      router.push("/screens/AuthScreens/SiginScreen") : router.push("/screens/AuthScreens/VerifyEmailScreen")

      }

  
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
          <Text style={styles.title}>Create Password</Text>
          <Text style={styles.subtitle}>
            Your password must have at least one symbol & 8 or more characters.
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <InputBox
          type="password"
          label="Password"
          placeholder="New password "
          iconName="lock-closed-outline"
          keyboardType="default"
          onChangeText={(text : any) => setPassword(text)}
          style={errors.confirmPassword === 'Passwords do not match.' ? {borderColor:allColors.danger800} : null}
        />

        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <InputBox
          type="password"
          label="Confirm password"
          placeholder="Confirm password"
          iconName="lock-closed-outline"
          keyboardType="default"
          onChangeText={(text : any) => setConfirmPassword(text)}
          style={errors.confirmPassword === 'Passwords do not match.' ? {borderColor:allColors.danger800} : null}
        />

        {errors.confirmPassword ? (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
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
          Already have an account?
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

export default CreatePasswordScreen;
