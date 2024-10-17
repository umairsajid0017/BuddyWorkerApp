import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import { EvilIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
    Animated,
    StyleSheet,
    Text
} from "react-native";
  
  let contentHeight = 100;
  const FaqCard = ({item} : any) => {
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
  
 
  
    return(
        <Animated.View
        style={[styles.btnContainer, { padding: animatedPadding }]}
      >
        <PrimaryButton
          style={styles.btn}
          onPress={toggleExpand}
        >
          <Text style={styles.btnText}>{item.title}</Text>
  
          <EvilIcons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={24}
            color={allColors.white}
          />
        </PrimaryButton>
        <Animated.View style={[{ height: animatedHeight }]}>
          <Text
            style={styles.description}
          >
           {item.subTitle}
          </Text>
        </Animated.View>
      </Animated.View>
      )
  };
  
  export default FaqCard;
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 18,
      paddingHorizontal: 10,
    },
  
    btnContainer: {
      paddingHorizontal: 16,
      marginBottom: 16,
      borderRadius: 30,
      backgroundColor: "rgba(249, 250, 251, 0.15)",
    },
  
    notificationItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 50,
      paddingHorizontal: 16,
  
      marginBottom: 16,
    },
    btnText: {
      ...getTypography(16, 24, allColors.text100, allFonts.URBANIST_SEMIBOLD),
    },
    btn:{
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    description:{ ...getTypography(12, 20, "#F5F5F5", allFonts.URBANIST) }
  });
  