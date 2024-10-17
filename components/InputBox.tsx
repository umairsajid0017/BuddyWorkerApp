import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  StyleProp, ViewStyle
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { allFonts } from "@/constants/Fonts";
import { allColors } from "@/constants/Colors";

// interface InputProps extends TextInputProps {
//   label: string;
//   placeholder: string;
//   iconName: any;
//   type?: string;
//   style?: StyleProp<ViewStyle>;
// }

// : React.FC<InputProps>

const InputBox = ({
  
  label,
  placeholder,
  iconName,
  keyboardType,
  type,
  style,
  labelStyle,
  placeholderTextColor,
  iconColor,
  value,
  ...rest

}: any) => {
  const [isSecurePassword, setIsSecurePassword] = useState(false);

  return (
    <>
      <Text style={[styles.label,labelStyle]}>{label} </Text>
      <View style={[styles.inputContainer,style]}>
        <Ionicons
          name={iconName}
          size={20}
          color={iconColor ? iconColor : allColors.tertiary1000}
          style={styles.icon}
        />
        <TextInput
        value={value}
       
          selectionColor={allColors.secondary1000}
          style={[styles.input,style]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={isSecurePassword}
        
          
          {...rest}
        />
        {type === "password" && (
          <TouchableOpacity
          style={{
            // backgroundColor:'red',
            alignItems:'center',
            justifyContent:'center',
            right:-10,width:50,height:40}}
            onPress={() => setIsSecurePassword(!isSecurePassword)}
          >
            <Feather 
            
             name={isSecurePassword ? "eye" : "eye-off"}
                size={15} color="black" />
            
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor:'green',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#EAECF0",
    borderRadius: 25,
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    color: allColors.text900,
    fontFamily: allFonts.URBANIST_SEMIBOLD,
    lineHeight: 22,
    marginBottom: 4,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: allFonts.URBANIST,
    color: allColors.text900,
  },
});

export default InputBox;
