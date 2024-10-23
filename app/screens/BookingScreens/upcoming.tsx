import BookingCard from "@/components/BookingCard";
import SuccessModal from "@/components/SuccessModal";
import NotFound from "@/components/NotFound";
import RawBottomSheet from "@/components/RawBottomSheet";
import TwoButtonsView from "@/components/TwoButtonsView";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { UPCOMING_BOOKINGS_DATA } from "@/data/data";
import { getTypography } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { createRef, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import IconButton from "@/components/IconButton";
import { requestGalleryPermission } from "@/utils/Permission";
import * as ImagePicker from "expo-image-picker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheetView from "@/components/BottomSheetView";
import { Portal } from "react-native-portalize";

export default function UpcomingScreen() {
  const bottomSheetRef = useRef(null);
  const workDoneBottomSheet = useRef(null);

  const [item, setItem] = useState();
  const [isStarted, setIsStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState<any>([]);

  const [startedBookings, setStartedBookings] = useState<
    Record<number, boolean>
  >({});

  const handleStartWork = (id: number) => {
    setStartedBookings((prev) => ({
      ...prev,
      [id]: true, // Mark this item as started
    }));
  };

  function toggleModal() {
    workDoneBottomSheet.current?.close();

    setModalVisible(!modalVisible);

  }

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

  const deleteImageFromArray = (path: any) => {
    const updatedArray = selectedImages.filter((image: any) => {
      return image.uri !== path;
    });
    setSelectedImages(updatedArray);
  };

  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.1, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{
        ...StyleSheet.absoluteFillObject,
        paddingTop: 18,
        paddingHorizontal: 12,
      }}
    >
      {UPCOMING_BOOKINGS_DATA.length === 0 ? (
        <NotFound
          title={"You have no upcoming booking"}
          subTitle={
            "You do not have a upcoming booking. Make a new booking by clicking the button below"
          }
        />
      ) : (
        <ScrollView>
          {UPCOMING_BOOKINGS_DATA.map((item) => {
            const isStarted = startedBookings[item.id]; // Check if the item is started
            return (
              <BookingCard
                key={item.id}
                item={item}
                screenName={"active"}
                badgeTitle={isStarted ? "Started" : "Not started"}
                badgeBackgroundColor={
                  isStarted ? allColors.success300 : allColors.primary200
                }
                badgeTextColor={
                  isStarted ? allColors.success800 : allColors.primary1000
                }
                contentHeight={380}
                showButton={true}
                title1={"Reject Work"}
                title2={isStarted ? "Mark as done" : "Start Work"}
                onPress1={() => {
                  setItem(item);
                  bottomSheetRef.current.open();
                }}
                onPress2={() => {
                  if (isStarted) {
                    workDoneBottomSheet.current?.expand();
                    workDoneBottomSheet.current?.snapToIndex(1);
                  } else {
                    // Otherwise, mark the work as started
                    handleStartWork(item.id);
                  }
                }}
              />
            );
          })}
        </ScrollView>
      )}

      <RawBottomSheet ref={bottomSheetRef} height={500}>
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
            Cancel Booking
          </Text>
          <BookingCard
            item={item}
            screenName={"Upcoming"}
            buttonBG={allColors.primary200}
            textColor={allColors.primary1000}
            contentHeight={380}
            showButton={false}
            style={{
              borderWidth: 1,
              borderColor: allColors.stroke,
            }}
            titleStyle={{ color: allColors.black }}
            subTitleStyle={{ color: allColors.black }}
          />

          <Text
            style={{
              marginTop: 10,

              textAlign: "center",
              ...getTypography(20, 28, "#212121", allFonts.URBANIST),
            }}
          >
            Are you sure want to cancel your service booking?
          </Text>

          <Text
            style={{
              marginTop: 10,
              marginBottom: 15,

              textAlign: "center",
              ...getTypography(14, 22, "#424242", allFonts.URBANIST),
            }}
          >
            Only 80% of the money you can refund from your payment according to
            our policy
          </Text>
          <TwoButtonsView
            title1={"Cancel"}
            title2={"Yes, Cancel Booking"}
            onPress2={() => {
              bottomSheetRef.current.close();
              toggleModal();
            }}
            style2={{ flex: 2 }}
          />
        </View>
      </RawBottomSheet>

      <Portal>
        <BottomSheetView ref={workDoneBottomSheet} type={"ScrollView"}>
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
              Uploaded Progress
            </Text>

            <Text
              style={{
                marginTop: 16,
                ...getTypography(
                  14,
                  22,
                  allColors.text900,
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
                    borderColor: 'grey',
                    // flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={pickImage}
                >
                  <EvilIcons
                    color={'grey'}
                    name={"camera"}
                    size={25}
                  />

                  <Text style={{ color: 'grey' }}>Add more</Text>
                </TouchableOpacity>
              </View>
            )}

            <TwoButtonsView
              title1={"Cancel"}
              title2={"Completed"}
              onPress2={() => {
                bottomSheetRef.current.close();
                toggleModal();
              }}
              style2={{ flex: 2 }}
            />
          </View>
        </BottomSheetView>
      </Portal>

      <SuccessModal
        visible={modalVisible}
        toggleModal={toggleModal}
        onPress={toggleModal}
        title={"Order Completed Successful!"}
        subTitle={
          " You have successfully canceled your service booking. 80% funds will be returned to your account."
        }
      />
    </LinearGradient>
  );
}
