import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { allFonts } from "@/constants/Fonts";
import { allColors } from "@/constants/Colors";
import Filter from "@/assets/svgs/Filter.svg";
import PrimaryButton from "@/components/PrimaryButton";

const SearchBar = ({ editable, onChangeText,onFilterPress,style,filterBtn }: any) => {
  return (
 
    <View style={[styles.container,style]}>
      <Image
        source={require("@/assets/images/search-status.png")}
        style={{ width: 20, height: 20 }}
      />
      <TextInput
        onChangeText={onChangeText}
        editable={editable}
        style={styles.input}
        placeholder="Search here"
        placeholderTextColor={allColors.text100}
      />
      <PrimaryButton onPress={onFilterPress}>
   {filterBtn &&   <Filter style={{ right: -5 }} />}
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(243, 244, 246, 0.25)",
    height: 50,

    padding: 10,
    borderRadius: 25,
    marginVertical: 20,
    // marginTop:35,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    color: allColors.text100,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: allFonts.URBANIST,

    marginLeft: 10,
  },
});

export default SearchBar;
