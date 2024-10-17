import RecordedVoice from "@/assets/svgs/recorded_voice.svg";
import {
  EvilIcons,
  Ionicons
} from "@expo/vector-icons";
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
  View
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


  // Simulated waveform animation moving from right to left
  const startWaveAnimation = () => {
    translateXAnim.setValue(100); // Start position (off-screen)
    Animated.loop(
      Animated.timing(translateXAnim, {
        toValue: -100, // Move left (off-screen)
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  };

  function getContent() {
    return (
      <View
        style={{
          // backgroundColor:'red',
          padding: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            borderBottomWidth: 1,
            borderBottomColor: allColors.stroke,
            paddingBottom: 20,
            marginBottom: 20,
            textAlign: "center",
            ...getTypography(
              24,
              32,
              allColors.text1000,
              allFonts.URBANIST_Bold
            ),
          }}
        >
          Offer your budget
        </Text>

     
    
        <InputBox
        value={offerBudget}
        label="Offer Budget"
        placeholder="Enter your offering budget"
        onChangeText={(text: string) => setOfferBudget(text)}
        style={{ color: allColors.text900 ,marginBottom:5}}
        labelStyle={{ color: allColors.text900 }}
        placeholderTextColor={allColors.tertiary300}
        keyboardType={'numeric'}
      />

<Text
          style={{
            marginLeft:10,
           
    
            ...getTypography(
              12,
              32,
              allColors.primary1000,
              allFonts.URBANIST
            ),
          }}
        >
          Recommeded budget $200
        </Text>





        <TwoButtonsView
          // style={{marginTop:100}}
          title1={"Cancel"}
          title2={"Find Worker"}
          onPress2={() => {
            router.push("/screens/BookingScreens/WorkerOffers");
          }}
          style2={{ flex: 2 }}
        />
      </View>
    );
  }

  const deleteImageFromArray = (path: any) => {
    const updatedArray = selectedImages.filter((image: any) => {
      return image.uri !== path;
    });
    setSelectedImages(updatedArray);
  };

  const startRecordingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const startRecording = async () => {
    const micPermission = await requestMicrophonePermission();
    if (!micPermission) return;

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording:", err);
    }
  };

  const stopRecording = async () => {
    if (recording) {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedURI(uri);
      setRecording(null);
    }
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

  const handlePress = () => {
    // if (!isRecording) {
    //   startWaveAnimation(); // Start wave animation
    //   await startRecording(); // Start actual recording
    // } else {
    //   stopWaveAnimation(); // Stop wave animation
    //   await stopRecording(); // Stop recording
    // }
    setIsRecording(!isRecording);
    // setAnimationPlay(!animationPlay);
    // animationRef.current?.play(0, 25);
    // animationRef.current?.autoPlay();
  };

  const handlePlayAnimation = () => {
    // Play the animation
  };

  const simulateWaveData = () => {
    setInterval(() => {
      const newWaveData = Array(20)
        .fill(1)
        .map(() => Math.random() * 30 + 10); // Generate random heights for waveforms
      setWaveData(newWaveData);
    }, 300); // Update wave every 300ms
  };

  const stopWaveAnimation = () => {
    translateXAnim.stopAnimation(); // Stop the moving animation
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
        dotBtn={true}
        title="Place an order"
      />

      <ScrollView>
        <View style={[styles.card]}>
          <Image
            source={require("../../../assets/images/AidFast.png")}
            style={{ width: "100%", height: 180, borderRadius: 20 }}
            resizeMode="cover"
          />

          <View
            style={{
              padding: 16,

              paddingTop: 5,
              justifyContent: "space-between",

              flexDirection: "row",
              // backgroundColor:'red'
            }}
          >
            <View>
              <Text
                style={[
                  { marginVertical: 5 },
                  getTypography(
                    18,
                    26,
                    allColors.text100,
                    allFonts.URBANIST_SEMIBOLD
                  ),
                ]}
              >
                AID FAST
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <EvilIcons
                  name="location"
                  size={20}
                  color={allColors.text100}
                />
                <Text
                  style={[
                    { marginLeft: 5 },
                    getTypography(12, 20, allColors.text100, allFonts.URBANIST),
                  ]}
                >
                  F9, Islamabad Main Market
                </Text>
              </View>
            </View>

            <Text
              style={[
                { marginVertical: 5 },
                getTypography(
                  18,
                  24,
                  allColors.primary1000,
                  allFonts.URBANIST_Bold
                ),
              ]}
            >
              Starting At: $20
            </Text>
          </View>
        </View>

        <InputBox
          value={description}
          label="Description"
          placeholder="Write details"
          onChangeText={(text: string) => setDescription(text)}
          style={{
            textAlignVertical: "top",
            paddingVertical: 10,
            borderRadius: 10,
            color: allColors.text100,
            height: 100,
            marginTop: 10,
          }}
          labelStyle={{ color: allColors.text100 }}
          placeholderTextColor={allColors.text500}
          multiline={true}
        />

        <Text
          style={{
            ...getTypography(
              14,
              22,
              allColors.text100,
              allFonts.URBANIST_SEMIBOLD
            ),
          }}
        >
          Detailed Audio
        </Text>

        <View
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
          {isRecording ? (
            <View
              style={{
                // backgroundColor:'red',
                alignItems: "center",
                justifyContent: "center",
                height: 120,
                flexDirection: "row",
              }}
            >
              {isStop ? (
                <RecordedVoice
                  style={{
                    // backgroundColor:'green',
                    marginHorizontal: 10,
                  }}
                />
              ) : (
                <LottieView
                  ref={animationRef}
                  style={{
                    // flex:1,
                    width: 300,
                    height: 200,
                    //  backgroundColor: '#eee',
                  }}
                  source={require("@/assets/animations/waves.json")}
                  autoPlay={true}
                  loop={true} // Keep looping if needed
                />
              )}

              <IconButton
                onPress={() => setIsStop(!isStop)}
                // disable={true}
                style={{
                  borderRadius: 25,
                  marginRight: 15,
                  backgroundColor: allColors.primary1000,
                }}
              >
                <Ionicons
                  name="stop-circle-outline"
                  size={24}
                  color={allColors.white}
                />
              </IconButton>
            </View>
          ) : (
            <IconButton
              onPress={handlePress}
              // disable={true}
              style={{
                borderRadius: 25,
                marginRight: 15,
                backgroundColor: allColors.primary1000,
              }}
            >
              <Ionicons name="mic" size={24} color={allColors.white} />
            </IconButton>
          )}
        </View>

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
              <EvilIcons color={allColors.text100} name={"camera"} size={25} />

              <Text style={{ color: "white" }}>Add more</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Continue Button */}
        <LongButton
          title={"Continue"}
            onPress={() =>{
              sheetRef.current?.expand();
              sheetRef.current?.snapToIndex(1);
            }}
        />
      </ScrollView>

      <BottomSheetView ref={sheetRef}>{getContent()}</BottomSheetView>
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
