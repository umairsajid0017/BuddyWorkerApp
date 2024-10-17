import {
  Text,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { RECENT_SEARCH_DATA } from "@/data/data";
import { EvilIcons } from "@expo/vector-icons";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";

const RecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState([...RECENT_SEARCH_DATA]);

  const removeRecentSearch = async (search: string) => {
    const filteredData = recentSearches.filter((item) => item !== search);
    setRecentSearches(filteredData);
  };

  return (
    <View style={{ flex: 1,}}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 15,
          // backgroundColor:'green',
          borderBottomWidth:1,
          borderBottomColor:allColors.stroke,
          paddingBottom:20,
          marginBottom:20,
        }}
      >
        <Text style={[getTypography(20,28,allColors.text100,allFonts.URBANIST_Bold)]}
        >Recent</Text>

        <PrimaryButton>
          <Text style={[getTypography(16,24,allColors.primary1000,allFonts.URBANIST)]}>Clear All</Text>
        </PrimaryButton>
      </View>
      <ScrollView>
        {recentSearches.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={ {
                flexDirection: "row",
                // paddingVertical: 5,
                padding: 12,
                alignItems: "center",
                // margin:1,
                // marginTop:10,
              }} 
            >
              <EvilIcons color={allColors.primary100} name="clock" size={25} />
              <View
                style={{
                  width: 250,
                  marginHorizontal: 10,
                }}
              >
                <Text 
                style={[getTypography(18,26,allColors.text100,allFonts.URBANIST)]}
                >{item}</Text>
              </View>

              <TouchableHighlight
                underlayColor={"transparent"}
                style={{
                  borderWidth:1.5,
                  borderColor:allColors.tertiary100,

                  position: "absolute",
                  right: 12,
                  padding:5,
                  borderRadius: 10,
                  
                }}
                onPress={() => removeRecentSearch(item)}
              >
                <EvilIcons color={allColors.tertiary100} name="close" size={18} />
              </TouchableHighlight>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RecentSearches;
