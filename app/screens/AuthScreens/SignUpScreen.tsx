import BackgroundArtWork from "@/assets/svgs/Group 34713.svg";
import Logo from "@/assets/svgs/logo.svg";
import Checkbox from "@/components/CheckBox";
import InputBox from "@/components/InputBox";
import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { setEmail, setName, setPhone } from "@/redux/slices/registerSlice";
import { RootState } from "@/redux/store";
import { validateEmail, validateName, validatePhoneNumber } from "@/utils/validationUtils";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";


// Define the dimensions
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

// Define the component
const SignUpScreen: React.FC = () => {
  const router = useRouter();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const {name, email, phone, errorMessage } = useSelector((state: RootState) => state.register);


  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  
  });



  const handleNameChange = (text: string) => {
    dispatch(setName(text))

    // setName(text);
  };

  const handleEmailChange = (text: string) => {
    dispatch(setEmail(text))

    // setEmail(text);
 
  };

  const handlePhoneChange = (text: string) => {
    dispatch(setPhone(text))

    // setPhone(text);

  };



  const isAnyFieldEmpty = () => {
    if (name !== '' && email !== '' && phone !== '' &&  isChecked) {
 
      return false


    } else {
      return true
    }
  };

  const handleSignUp = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', checkbox: '' };

    // Validate name
    if (!validateName(name)) {
      newErrors.name = 'Name must be between 2-50 characters and contain only alphabets.';
      valid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format.';
      valid = false;
    }

    // Validate phone
    if (!validatePhoneNumber(phone)) {
      newErrors.phone = 'Invalid phone number.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Alert.alert('Success', 'Sign Up Successful!');
      router.push('/screens/AuthScreens/CreatePasswordScreen')

    } 
    // else {
    //   Alert.alert('Error', 'Please correct the errors in the form.');
    // }
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
        <Logo height={64} width={64} style={{ marginBottom: 24 }} />
        <Text style={styles.subtitle}>Get started for free</Text>
        <Text style={styles.title}>Signup now and Enjoy Benefits</Text>

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
          value={name}
          label="Name"
          placeholder="Your name"
          iconName="person-outline"
          onChangeText={handleNameChange}
        />
         {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
        <InputBox
          value={email}

          label="Email"
          placeholder="Your email address"
          iconName="mail-outline"
          keyboardType="email-address"
          onChangeText={handleEmailChange}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        {errorMessage.email ? <Text style={styles.errorText}>{errorMessage.email}</Text> : null}


        <InputBox
          value={phone}

          label="Number"
          placeholder="Your mobile number"
          iconName="call-outline"
          keyboardType="phone-pad"
          onChangeText={handlePhoneChange}
        />
 {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
 {errorMessage.phone ? <Text style={styles.errorText}>{errorMessage.phone}</Text> : null}

        <View style={{ flexDirection: "row" }}>
          <Checkbox  
          isChecked={isChecked}
          onPress={() => setIsChecked(!isChecked)} />

          <Text style={[styles.termsText, { left: -12 }]}>
            Creating an account means you're okay with our
            <Text style={[styles.termsText, { color: allColors.primary1000 }]}>
              Terms of Service, Privacy Policy,
            </Text>
            <Text style={styles.termsText}> and our default</Text>
            <Text style={[styles.termsText, { color: allColors.primary1000 }]}>
              {" "}
              Notification Settings.
            </Text>
          </Text>
        </View>

        <PrimaryButton
          onPress={() => handleSignUp()}
          style={[styles.primaryButton, isAnyFieldEmpty() ? { backgroundColor: allColors.primary300,} :  { backgroundColor: allColors.primary1000} ]}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </PrimaryButton>

      <View style={{flexDirection:'row',justifyContent:'center'}}>
      <Text style={[styles.termsText, { textAlign: "center", fontSize: 14 }]}>
          Already have an account?
        </Text>
        <PrimaryButton onPress={() => router.push('/screens/AuthScreens/SiginScreen')}>
        <Text
            style={[
              styles.termsText,
              { color: allColors.primary1000, fontSize: 14 },
            ]}
          >
            Sign In.
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
    color: allColors.danger800,
    marginTop: -10,
    marginBottom: 10,
    fontSize: 12,
    lineHeight:20,
    fontFamily:allFonts.URBANIST
  },
  bottomContainer: {
    height: "55%",
    width: WIDTH,
    position: "absolute",
    bottom: 0,

    paddingHorizontal: 20,
    paddingTop: 25,
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
    marginVertical:12,
  },
});

export default SignUpScreen;

