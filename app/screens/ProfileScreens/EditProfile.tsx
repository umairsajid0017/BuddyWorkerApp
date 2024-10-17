import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import TopNavBar from "@/components/TopNavBar";
import { LinearGradient } from "expo-linear-gradient";
import { allColors } from "@/constants/Colors";
import InputBox from "@/components/InputBox";
import LongButton from "@/components/LongButton";

const EditProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    dob: "12/04/1998",
    email: "john.doe@example.com",
    country: "United States",
    number: "0334 0050391",
    nationalID: "3922 56679995 01",
    gender: "Male",
    address: "267 New Avenue Park, New York",
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleInputChange = (field : any, value : any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{ ...StyleSheet.absoluteFillObject , }}
    >
      <StatusBar
        barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
        // backgroundColor="#6200EE"
      />
      <TopNavBar

        title={"Edit Profile"}
        backBtn={true}

        style={{
          padding: 10,
          marginTop: 30,
          alignItems:'center',
          justifyContent:null
        }}
      />

      <ScrollView contentContainerStyle={{padding:10}}>
        
      <View style={styles.profileHeader}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: "https://app.explorerbees.com/media/images/placeholder_user.png",
            }} // Replace with actual image URL
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIconWrapper}>
            <FontAwesome
              name="camera"
              size={18}
              color={allColors.primary1000}
            />
          </TouchableOpacity>
        </View>
      </View>

      <InputBox
        value={form.firstName}
        label="First Name"
        placeholder="First Name"
        onChangeText={(text: string) => handleInputChange("firstName", text)}
        style={{ color: allColors.text100 }}
        labelStyle={{ color: allColors.text100 }}
        placeholderTextColor={"grey"}
      />

      <InputBox
        value={form.lastName}
        label="Last Name"
        placeholder="Last Name"
        onChangeText={(text: any) => handleInputChange("lastName", text)}
        style={{ color: allColors.text100 }}
        labelStyle={{ color: allColors.text100 }}
        placeholderTextColor={"grey"}
      />

      <InputBox
        value={form.dob}
        label="Date of Birth"
        placeholder="Date of Birth"
        onChangeText={(text: any) => handleInputChange("dob", text)}
        style={{ color: allColors.text100 }}
        labelStyle={{ color: allColors.text100 }}
        placeholderTextColor={"grey"}
      />

      <InputBox
        value={form.email}
        label="Email"
        placeholder="Email"
        onChangeText={(text: any) => handleInputChange("email", text)}
        style={{ color: allColors.text100 }}
        labelStyle={{ color: allColors.text100 }}
        placeholderTextColor={"grey"}
      />

      <InputBox
        value={form.country}
        label="Country"
         placeholder="Country"
        onChangeText={(text: any) => handleInputChange("country", text)}
        style={{ color: allColors.text100 }}
        labelStyle={{ color: allColors.text100 }}
        placeholderTextColor={"grey"}
      />

      
         <InputBox
         value={form.number}
          label="Number"
          placeholder="Your mobile number"
          iconName="call-outline"
          keyboardType="phone-pad"
          onChangeText={(text : any) => handleInputChange("number", text)}
          style={{ color: allColors.text100 }}
          labelStyle={{ color: allColors.text100 }}
          placeholderTextColor={"grey"}
          iconColor={allColors.tertiary100}
          />

       <InputBox
        value={form.nationalID}
          label="National ID No"
            placeholder="Your cnic number"
          iconName="card-outline"
          keyboardType="phone-pad"
          onChangeText={(text : any) => handleInputChange("nationalID", text)}
          style={{ color: allColors.text100 }}
          labelStyle={{ color: allColors.text100 }}
          placeholderTextColor={"grey"}
          iconColor={allColors.tertiary100}
          />


<InputBox
        value={form.gender}
          label="Gender"
            placeholder="Your gender"
          onChangeText={(text : any) => handleInputChange("gender", text)}
          style={{ color: allColors.text100 }}
          labelStyle={{ color: allColors.text100 }}
          placeholderTextColor={"grey"}
        
          />


<InputBox
        value={form.address}
          label="Address"
            placeholder="Your address"
          onChangeText={(text : any) => handleInputChange("address", text)}
          style={{ color: allColors.text100 }}
          labelStyle={{ color: allColors.text100 }}
          placeholderTextColor={"grey"}
        
          />

          <LongButton title="Save Changes"/>
      </ScrollView>


    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C2B",
    padding: 16,
  },
  cameraIconWrapper: {
    position: "absolute",
    bottom: 10,
    right: -3,
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    // position: "relative",
    marginBottom: 10,
    // backgroundColor:'red',
    borderRadius: 80,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    // padding:5,
    width: 135,
    height: 135,
    borderColor: allColors.primary900,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  profileHeader: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: -10,
    backgroundColor: "#FF6C44",
    borderRadius: 20,
    padding: 8,
  },
  input: {
    backgroundColor: "#2C2C4B",
    borderRadius: 10,
    padding: 16,
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#FF6C44",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
