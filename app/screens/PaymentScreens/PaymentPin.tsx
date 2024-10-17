import BackButton from "@/components/BackButton";
import { allFonts } from "@/constants/Fonts";
import {
  doPasswordsMatch,
  validatePassword
} from "@/utils/validationUtils";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import BackgroundArtWork from "@/assets/svgs/Group 34713.svg";
import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import VerifyEmailLogo from '@/assets/svgs/Frame 2087325189.svg'
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import TopNavBar from "@/components/TopNavBar";

// Define the dimensions
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

// Define the component
const PaymentPin: React.FC = () => {

   const [otp, setOtp] = useState<string[]>(["", "", "", "",]);
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const params = useLocalSearchParams();
  const {screenname} = params;




  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handlePhoneChange = (text: string) => {
    setPhone(text);
  };

  const isAnyFieldEmpty = () => {

    const otpString = otp.join('');
    if (otpString.length === 6) {
      return false;
    } else {
      return true;
    }
 
  };

  const handlePasswordCreation = () => {
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
      newErrors.confirmPassword =
        "Your password must have at least one symbol & 8 or more characters.";
      valid = false;
    }

    if (valid && !doPasswordsMatch(password, confirmPassword)) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);

    // if (valid) {
    //   Alert.alert("Success", "Sign Up Successful!");
    // } else {
    //   Alert.alert("Error", "Please correct the errors in the form.");
    // }
  };

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];

    if (text.length === 1) {
      // Update the current input value
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to the next input if there is a value and it's not the last one
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];

      if (newOtp[index] === "") {
        // Only move back if the current field is empty
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        // Clear the value in the current input field
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleVerify = () => {


    screenname === 'ForgotPasswordScreen' ? 
    
    router.push({ pathname: "/screens/AuthScreens/CreatePasswordScreen",
      params: { screenname: 'ForgotPasswordScreen' } }) : router.replace("/home")

  };

  const handleResend = () => {
    Alert.alert("Code Resent", "A new verification code has been sent to your phone.");
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
      <TopNavBar
      style={{
        alignItems:'center',
        justifyContent:null
        // marginVertical: 30
       }}
    backBtn={true}

      title="Pin"
    />

        <View style={{ alignSelf: "flex-start" }}>
          <Text style={styles.title}>Enter Your Pin</Text>
          <Text style={styles.subtitle}>
          Enter your Pin code to cancel booking
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
     
        <VerifyEmailLogo height={180} width={180}/>

        <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={value}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onChangeText={(text) => handleChange(text, index)}
            autoFocus={index === 0} // Auto focus on the first input
          />
        ))}
      </View>

        <Text style={[styles.termsText, { textAlign: "center", fontSize: 14 }]}>
        Enter your PIN to cancel booking
          
        </Text>

        <PrimaryButton
          onPress={() => (isAnyFieldEmpty() ? null : handleVerify())}
          style={[
            styles.primaryButton,
            isAnyFieldEmpty()
              ? { backgroundColor: allColors.primary300 }
              : { backgroundColor: allColors.primary1000 },
          ]}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </PrimaryButton>

      
      </View>

      <BackgroundArtWork style={styles.backgroundSvg} />
    </LinearGradient>
  );
};


export default PaymentPin;

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

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
    width: '100%',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderColor: allColors.stroke,
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 14,
    lineHeight:22,
    fontFamily:allFonts.URBANIST,
    color:allColors.text900,
    backgroundColor: allColors.white,
    margin:5,
  },
  bottomContainer: {
    height: "55%",
    width: WIDTH,
    position: "absolute",
    bottom: 0,

    paddingHorizontal: 20,
    // paddingTop: 50,
    backgroundColor: allColors.white,
    zIndex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    // justifyContent:'center',
    alignItems:'center',
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
    marginVertical: 25,
  },
});

