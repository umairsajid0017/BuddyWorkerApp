import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import ChatSvg from "@/assets/svgs/chat_btn.svg";
import PrimaryButton from "./PrimaryButton";
import TwoButtonsView from "./TwoButtonsView";
import RightBigImageGrid from "./RightBigImageGrid";
import LeftBigImageGrid from "./LeftBigImageGrid";
import LongButton from "./LongButton";

const ExpandableServiceCard = ({
  showButton,
  style,
  item,
  bookAgain,
  screenName,
  textColor,
  buttonBG,
  contentHeight,
  onPress1,
  onPress2,
  title1,
  title2,
  title,
  titleStyle,
  subTitleStyle
}: any) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedPadding = useRef(new Animated.Value(0)).current; // Animated value for padding

  const toggleExpand = () => {
    if (expanded) {
      // Collapse: animate height and padding
      Animated.parallel([
        Animated.timing(animatedHeight, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(animatedPadding, {
          toValue: 0, // Collapse padding to 0
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      // Expand: animate height and padding
      Animated.parallel([
        Animated.timing(animatedHeight, {
          toValue: contentHeight,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(animatedPadding, {
          toValue: 10, // Expand padding to 10
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
    setExpanded(!expanded);
  };

  return (
    <Animated.View style={[styles.card,style, { padding: animatedPadding }]}>
      {/* Card Header */}
      <View style={styles.row}>
        {/* Image */}
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode="cover"
        />

        {/* Info */}
        <View style={styles.info}>
          <View style={styles.textContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.cardTitle,titleStyle]}
            >
              {item.title}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.cardSubTitle,subTitleStyle]}
            >
              {item.description}
            </Text>
          </View>

          {/* Buttons */}
          {showButton && (
            <View style={styles.buttonRow}>
                      <View
                style={[styles.completedButton, { backgroundColor: buttonBG }]}
              >
                <Text
                  style={[styles.completedButtonText, { color: textColor }]}
                >
                  {screenName}
                </Text>
              </View>
              
              <TouchableOpacity
                onPress={toggleExpand}
                style={styles.detailsButton}
              >
                <Text style={styles.detailsButtonText}>
                  {expanded ? "Show Less" : "Assigned"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

      
         <Text style={{position: "absolute",
    right: 12,
    top: 10,...getTypography(18,28,allColors.primary1000,allFonts.URBANIST_Bold)}}>
          $15/hr
         </Text>
        
      </View>

      {/* Animated expandable content */}
      <Animated.View style={[styles.cardDetail, { height: animatedHeight }]}>
        <View
          style={{
            paddingTop: 20,
            marginTop: 20,
            borderTopWidth: 1,
            borderTopColor: "#EEEEEE",
          }}
        >
          {/* Date, Time, Location */}
          <View style={styles.infoBlock}>
            <Text style={styles.detailLabel}>Date & Time:</Text>
            <Text style={styles.detailValue}>
              Dec 23, 2024 | 10:00 - 12:00 AM
            </Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.detailLabel}>Location:</Text>
            <Text style={styles.detailValue}>
              267 New Avenue Park, New York
            </Text>
          </View>

          {screenName === "Completed" && (
            <View>
              {/* Before Images */}
              <Text style={styles.imageSectionTitle}>Before Image</Text>
              <RightBigImageGrid />

              {/* After Images */}
              <Text style={styles.imageSectionTitle}>After Image</Text>
              <LeftBigImageGrid />
            </View>
          )}

          {(screenName === "Started" || screenName === "Cancelled") && (
            <Image
              source={require("@/assets/images/map_view.png")}
              style={styles.mapImage}
              resizeMode="cover"
            />
          )}

          {screenName !== "Cancelled" && (
            <TwoButtonsView
              onPress1={onPress1}
              onPress2={onPress2}
              title1={title1}
              title2={title2}
            />
          )}

          {screenName === "Cancelled" && (
            <LongButton title={"Book Again"} onPress={bookAgain} />
          )}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(249, 250, 251, 0.15)",
    // padding: 20,
    borderRadius: 32,
    marginVertical: 10,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    // elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    maxWidth: 180,
  },
  cardImage: {
    width: 124,
    height: 126,
    borderRadius: 20,
    marginRight: 10,
  },

  mapImage: {
    width: "auto",
    height: 180,
    borderRadius: 20,
    marginVertical: 10,
  },
  info: {
    flex: 1,
    // backgroundColor:'red'
  },
  cardTitle: {
    ...getTypography(18, 26, allColors.text100, allFonts.URBANIST_SEMIBOLD),
    marginBottom: 3,
  },
  cardSubTitle: {
    ...getTypography(12, 20, allColors.text100, allFonts.URBANIST),
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
  },
  completedButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  completedButtonText: {
    ...getTypography(12, 20, allColors.primary1000, allFonts.URBANIST),
  },
  detailsButton: {
    backgroundColor: allColors.secondary200,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  detailsButtonText: {
    ...getTypography(12, 20, allColors.secondary1000, allFonts.URBANIST),
  },
  cardDetail: {
    overflow: "hidden",
    // marginTop: 10,
    // backgroundColor: 'red',

    // borderRadius: 10,
  },
  scrollContent: {
    // paddingBottom: 20,
  },
  infoBlock: {
    marginBottom: 10,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailLabel: {
    ...getTypography(14, 19, allColors.text200, allFonts.URBANIST),
  },
  chatIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  detailValue: {
    ...getTypography(16, 22, allColors.text100, allFonts.URBANIST_SEMIBOLD),
  },
  imageSectionTitle: {
    ...getTypography(18, 26, allColors.white, allFonts.URBANIST_Bold),

    marginVertical: 10,
  },
  imageGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gridImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  bookButton: {
    backgroundColor: "#C4B5FD",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  receiptButton: {
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  receiptButtonText: {
    color: "#F87171",
    fontWeight: "bold",
  },
});

export default ExpandableServiceCard;
