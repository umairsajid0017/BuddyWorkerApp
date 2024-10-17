import { allColors } from '@/constants/Colors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle,StyleProp , TextStyle } from 'react-native';

// Define the types for the props
interface PrimaryButtonProps {
  style?: StyleProp<ViewStyle>; /// Allow single ViewStyle or an array of ViewStyles
  children?: React.ReactNode; // Children nodes (e.g., Text, icons)
  onPress?: (event: GestureResponderEvent) => void; // Function to handle press events
  title?: string; // Optional title (not used in the component but could be used)
  activeOpacity?: number; // Opacity when button is pressed
}

// Define the component using the props interface
const LongButton: React.FC<PrimaryButtonProps> = ({  onPress, title, activeOpacity ,style, ...rest}) => (
  <TouchableOpacity
    style={[styles.button,style,]}
    onPress={onPress}
    activeOpacity={activeOpacity}
    {...rest}
  >
   <Text style={styles.buttonText}>{title}</Text>
    {/* Uncomment and use the title if needed */}
    {/* <Text style={styles.text}>{title}</Text> */}
  </TouchableOpacity>
);

// Optional styles (define them according to your needs)
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    backgroundColor:allColors.primary1000
  },
buttonText: {
    fontSize: 18,
    lineHeight: 26,
    color: allColors.text100,
    fontFamily: "Mulish",
  },
});

export default LongButton;
