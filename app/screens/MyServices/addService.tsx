import RecordedVoice from "@/assets/svgs/recorded_voice.svg";
import { EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import BottomSheetView from "@/components/BottomSheetView";
import IconButton from "@/components/IconButton";
import InputBox from "@/components/InputBox";
import LongButton from "@/components/LongButton";
import TopNavBar from "@/components/TopNavBar";
import TwoButtonsView from "@/components/TwoButtonsView";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import {
  requestGalleryPermission,
  requestMicrophonePermission,
} from "@/utils/Permission";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";

const servicesList : any = [
  { id: "1", name: "House Cleaning" },
  { id: "2", name: "Painting" },
  { id: "3", name: "Car Repairing" },
  { id: "4", name: "Laundry service" },
  { id: "5", name: "Appliance Services" },
];

export default function PaymentMethodsScreen() {
  const [checked, setChecked] = useState(1); // Default PayPal checked
  const [description, setDescription] = useState(""); // Default PayPal checked
  const [animationValue] = useState(new Animated.Value(0)); // For waveform animation
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordedURI, setRecordedURI] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [waveData, setWaveData] = useState(new Array(20).fill(1));
  const [animationPlay, setAnimationPlay] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const translateXAnim = useRef(new Animated.Value(0)).current; // For moving wave

  const animationRef = useRef<LottieView>(null);
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const sheetRef = useRef(null);
  const [offerBudget, setOfferBudget] = useState("");

  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");

  const [form, setForm] = useState({
    serviceName: "",
    price: "",
    description: "",
    address: "",
  });




  const deleteImageFromArray = (path: any) => {
    const updatedArray = selectedImages.filter((image: any) => {
      return image.uri !== path;
    });
    setSelectedImages(updatedArray);
  };




  const pickImage = async () => {
    const galleryPermission = await requestGalleryPermission();
    if (!galleryPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImages([...selectedImages, ...result.assets]);
      // setSelectedImages(result.assets[0].uri);
    }
  };





  const handleInputChange = (field: any, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <GestureHandlerRootView style={{ ...StyleSheet.absoluteFillObject }}>
      <LinearGradient
        // Define the colors for the gradient
        colors={["#1C0D24", "#6A318A"]}
        // Apply the gradient at an angle of roughly 174 degrees
        start={{ x: 0.5, y: 0 }} // Starting point of the gradient
        end={{ x: 0.1, y: 1 }}
        style={{ ...StyleSheet.absoluteFillObject, padding: 15 }}
      >
        <StatusBar
          barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
        />

        <TopNavBar
          style={{ marginVertical: 30, marginBottom: 20 }}
          backBtnWithTitle={true}
          title="Add Service"
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 2 }}
        >
          <InputBox
            value={form.serviceName}
            label="Service Name"
            placeholder="First Name"
            onChangeText={(text: string) =>
              handleInputChange("serviceName", text)
            }
            style={{
              color: allColors.text100,
              borderRadius: 10,
              paddingHorizontal: 0,
            }}
            labelStyle={{
              color: allColors.text100,
              marginLeft: 2,
              marginBottom: 10,
            }}
            placeholderTextColor={"grey"}
          />

          
        <Text
          style={{
            marginBottom: 10,
            marginLeft: 2,


            ...getTypography(
              14,
              22,
              allColors.text100,
              allFonts.URBANIST_SEMIBOLD
            ),
  

          }}
        >
          Services
        </Text>

<DropDownPicker
          selectedItemContainerStyle={{
            backgroundColor: allColors.primary100,
          }}

          arrowIconStyle={{
            // width: 100,
            // height: 100,
            backgroundColor:'white',
            borderRadius:10,
            
          }}
          // selectedItemLabelStyle={{
          //   color:'red'
          // }}
          // containerStyle={{

          //   backgroundColor: allColors.primary100,


          // }}
     
          TickIconComponent={({ style }) => (
            <MaterialIcons
              name="check"
              size={24}
              color={allColors.primary1000}
            />
          )}
          dropDownDirection="BOTTOM"
          // listMode="MODAL"
          placeholder={"Choose service category"}
          placeholderStyle={{
            color: 'grey',
            // fontWeight: "bold"
          }}
          textStyle={{
            color: allColors.black,
            // fontWeight: "bold"
          }}
          labelStyle={{
            fontWeight: "bold",
            color: allColors.text100,

          }}
          style={{
            borderWidth: 1,
            borderColor: allColors.stroke,

            borderRadius: 10,
            padding: 10,
            marginBottom: 15,
            backgroundColor: 'transparent',
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

          <InputBox
            value={form.price}
            label="Price"
            placeholder="Mention your service charges (in dollar)"
            onChangeText={(text: any) => handleInputChange("price", text)}
            style={{
              color: allColors.text100,
              borderRadius: 10,
              paddingHorizontal: 0,
            }}
            labelStyle={{
              color: allColors.text100,
              marginLeft: 2,
              marginBottom: 10,
            }}
            placeholderTextColor={"grey"}
            keyboardType={"numeric"}
          />

          <InputBox
            value={form.address}
            label="Address"
            placeholder="Your address"
            onChangeText={(text: any) => handleInputChange("address", text)}
            style={{
              color: allColors.text100,
              borderRadius: 10,
              paddingHorizontal: 0,
            }}
            labelStyle={{
              color: allColors.text100,
              marginLeft: 2,
              marginBottom: 10,
            }}
            placeholderTextColor={"grey"}
          />

          <InputBox
            value={description}
            label="Description"
            placeholder="Write details"
            onChangeText={(text: any) => handleInputChange("description", text)}
            style={{
              textAlignVertical: "top",
              paddingVertical: 10,
              borderRadius: 10,
              color: allColors.text100,
              height: 100,
              marginTop: 10,
              paddingHorizontal: 0,
            }}
            labelStyle={{ color: allColors.text100, marginLeft: 2 }}
            placeholderTextColor={allColors.text500}
            multiline={true}
          />

          {/* <Text
        style={{
          ...getTypography(
            14,
            22,
            allColors.text100,
            allFonts.URBANIST_SEMIBOLD
          ),
        }}
      >
      Upload Video
      </Text>
      <TouchableOpacity
        style={{
          //   marginHorizontal: 13,
          marginVertical: 15,
          paddingLeft: 10,
          height: 120,
          borderWidth: 1.5,
          borderRadius: 10,
          borderStyle: "dashed",
          borderColor: allColors.primary1000,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          disable={true}
          style={{
            borderRadius: 25,
            marginRight: 15,
            backgroundColor: allColors.primary1000,
          }}
        >
          <Ionicons name="videocam-outline" size={24} color={allColors.white} />
        </IconButton>
      </TouchableOpacity> */}

          <Text
            style={{
              marginTop: 16,
              ...getTypography(
                14,
                22,
                allColors.text100,
                allFonts.URBANIST_SEMIBOLD
              ),
            }}
          >
            Upload Images
          </Text>
          {selectedImages.length === 0 && (
            <TouchableOpacity
              onPress={pickImage}
              style={{
                //   marginHorizontal: 13,
                marginVertical: 15,
                paddingLeft: 10,
                height: 120,
                borderWidth: 1.5,
                borderRadius: 10,
                borderStyle: "dashed",
                borderColor: allColors.primary1000,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                disable={true}
                style={{
                  borderRadius: 25,
                  marginRight: 15,
                  backgroundColor: allColors.primary1000,
                }}
              >
                <Ionicons
                  name="image-outline"
                  size={24}
                  color={allColors.white}
                />
              </IconButton>
            </TouchableOpacity>
          )}

          {selectedImages.length > 0 && (
            <View
              style={{
                flexDirection: "row",
                marginVertical: 15,
                padding: 10,
                // paddingLeft: 10,

                borderWidth: 1.5,
                borderRadius: 10,
                borderStyle: "dashed",
                borderColor: allColors.primary1000,
                // alignItems: "center",
                // justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {selectedImages.map((image: any) => {
                return (
                  <View
                    style={{
                      margin: 5,
                    }}
                    key={image?.uri}
                  >
                    <Image
                      // || IMAGE_BASE_URL + image.image_name
                      source={{ uri: image.uri }}
                      style={{ width: 70, height: 70 }}
                    />
                    <TouchableHighlight
                      activeOpacity={0.6}
                      underlayColor="transparent"
                      style={{
                        // padding: 5,
                        // borderRadius: 12,
                        position: "absolute",
                        top: 1,
                        right: 1,
                        zIndex: 99999,
                        width: 25,
                        height: 25,
                        borderRadius: 15,
                        alignItems: "center",
                        justifyContent: "center",
                        // opacity: 0.5,
                        backgroundColor: allColors.danger800,
                      }}
                      onPress={() => deleteImageFromArray(image?.uri)}
                    >
                      <Ionicons
                        name="close-circle-outline"
                        size={20}
                        color={allColors.white}
                      />
                    </TouchableHighlight>
                  </View>
                );
              })}

              <TouchableOpacity
                style={{
                  margin: 5,
                  //marginHorizontal:18,
                  // paddingVertical: 15,
                  //paddingLeft:10,
                  width: 70,
                  height: 70,
                  borderWidth: 1,
                  borderRadius: 1,
                  borderStyle: "dashed",
                  borderColor: allColors.stroke,
                  // flexDirection: 'row',
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={pickImage}
              >
                <EvilIcons
                  color={allColors.text100}
                  name={"camera"}
                  size={25}
                />

                <Text style={{ color: "white" }}>Add more</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Continue Button */}
          <LongButton
            title={"Add"}
            onPress={() => { }}
          />
        </ScrollView>

    
      </LinearGradient>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A0E65",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  card: {
    backgroundColor: "rgba(249, 250, 251, 0.15)",
    borderRadius: 32,
    marginBottom: 20,
    // paddingHorizontal: 10,
    // elevation: 5,
  },

  title: getTypography(32, 26, allColors.text100, allFonts.URBANIST_Bold),

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginLeft: 20,
  },
  refundText: {
    ...getTypography(18, 26, allColors.text100, allFonts.URBANIST_SEMIBOLD),
    marginBottom: 20,
  },
  paymentMethodsContainer: {
    backgroundColor: "#5D1975",
    borderRadius: 12,
    paddingVertical: 10,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: 15,

    borderRadius: 30,
    backgroundColor: "rgba(249, 250, 251, 0.15)",

    marginBottom: 16,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  paymentInfo: {
    flex: 1,
    marginLeft: 10,
  },
  paymentLabel: {
    color: "white",
    fontSize: 16,
  },
  cardNumber: {
    color: "white",
    fontSize: 14,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 20,
  },
  amountText: {
    ...getTypography(18, 26, allColors.text100, allFonts.URBANIST_SEMIBOLD),
  },
  continueButton: {
    backgroundColor: "#FF7F56",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1E0F47",
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middleButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FF7F56",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 20,
  },
  waveformContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
  },

  waveformBar: {
    width: 5,
    backgroundColor: "#FFD1D1",
    borderRadius: 5,
  },

  audioContainer: {
    width: "90%",
    height: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5c297f", // Matches the purple background in the image
    padding: 10,
    flexDirection: "row", // Allows horizontal layout with waveform and button
  },
});
