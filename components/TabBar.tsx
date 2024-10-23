import React, { Children, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text ,ScrollView} from "react-native";
import { allColors } from "@/constants/Colors";
import { getTypography } from "@/styles";
import { allFonts } from "@/constants/Fonts";
import { AntDesign } from "@expo/vector-icons";


const TabBar = ({
  data,
  tabStyle,
  selectedTextStyle,
  unSelectedTextStyle,
  textStyle,
  selectedTabColor,
  unSelectedTabColor,
  children,
  style,
  isRating
}: any) => {
  const [selectedTab, setSelectedTab] = useState<string>("All");

  return (
  
    <View>
        <ScrollView 
    showsHorizontalScrollIndicator={false}
    horizontal
    contentContainerStyle={[styles.container,style]}

    >
      {data.map((tab: any) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.button,

            tabStyle,
            {
              backgroundColor:
                selectedTab === tab ? selectedTabColor : unSelectedTabColor,
            },
          ]}
          onPress={() => setSelectedTab(tab)}
        >
       
       {isRating &&  <AntDesign name="star" size={16} color={
           selectedTab === tab ? selectedTextStyle.color : unSelectedTextStyle.color 
        } style={{marginRight:5}} />}

          <Text
            style={[

              selectedTab === tab ? selectedTextStyle : unSelectedTextStyle 
            
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    paddingHorizontal: 10,
    marginBottom: 18,
  
  },
  button: {
    // paddingVertical: 5,
    paddingHorizontal: 20,
    // padding:10,
    borderRadius: 25,
    marginRight: 10,
    alignItems:'center',
    justifyContent:'center'
  },
 
});

export default TabBar;
