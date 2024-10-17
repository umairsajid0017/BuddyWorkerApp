import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { allColors } from "@/constants/Colors";

const RadioButton = ({ status }: any) => {
  return status === "checked" ? (
    <View
      style={{
        borderWidth: 2,
        borderColor: allColors.primary1000,
        backgroundColor: allColors.text100,
        height: 20,
        width: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: allColors.primary1000,
          height: 10,
          width: 10,
          borderRadius: 5,
          alignItems: "center",
        }}
      />
    </View>
  ) : (
    <View
      style={{
        backgroundColor: allColors.text100,
        height: 20,
        width: 20,
        borderRadius: 10,
      }}
    />
  );
};

export default RadioButton;

const styles = StyleSheet.create({});
