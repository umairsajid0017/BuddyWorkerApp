import Card from "@/components/Card";
import NotFound from "@/components/NotFound";
import RawBottomSheet from "@/components/RawBottomSheet";
import TabBar from "@/components/TabBar";
import TopNavBar from "@/components/TopNavBar";
import TwoButtonsView from "@/components/TwoButtonsView";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { RECENT_SEARCH_DATA } from "@/data/data";
import { getTypography } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import SearchBar from "../HomeScreens/SearchBar";
import RecentSearches from "./RecentSearches";

import RangeSlider from "rn-range-slider";

import Notch from "../Slider/Notch";
import Rail from "../Slider/Rail";
import RailSelected from "../Slider/RailSelected";
import Thumb from "../Slider/Thumb";
import Label from "../Slider/label";
import BottomSheetView from "@/components/BottomSheetView";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { debounce } from "@/utils/HelperFunctions";
import { getSearch } from "@/utils/ApiCalls";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);

  const bottomSheetRef = useRef(null);
  const sheetRef = useRef(null);

  // const handleSearch = (text: string) => {
  //   setSearchQuery(text);
  //   if (text) {
  //     const filtered: any = RECENT_SEARCH_DATA.filter((item) =>
  //       item.toLowerCase().includes(text.toLowerCase())
  //     );
  //     setFilteredData(filtered);
  //   }
  // };

  const handleSearch = useCallback(
    debounce(async (query: string) => {
      if (!query) {
        setSearchResults([]);
        return;
      }

      try {
        setLoading(true);

        const res = await getSearch({ query });

        console.log(res.data)
        // setSearchResults(res.data);


        // if (res.status) {
        //  
       
        // } 
       
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    }, 500), // 500ms delay
    []
  );

  // Trigger the debounced search when searchQuery changes
  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);


  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value: any) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback(
    (lowValue: number, highValue: number) => {
      setLow(lowValue);
      setHigh(highValue);
    },
    []
  );

  const NoResultFound = () => {
    return (
      <View>
        <View
          style={{
            padding: 12,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[
              getTypography(20, 28, allColors.text100, allFonts.URBANIST_Bold),
            ]}
          >
            Results for
            <Text
              style={[
                getTypography(
                  20,
                  28,
                  allColors.primary1000,
                  allFonts.URBANIST_Bold
                ),
              ]}
            >
              {" "}
              "{searchQuery}"
            </Text>
          </Text>
          <Text
            style={[
              getTypography(
                16,
                24,
                allColors.primary1000,
                allFonts.URBANIST_SEMIBOLD
              ),
            ]}
          >
            0 found
          </Text>
        </View>

        <NotFound
          title={"Not Found"}
          subTitle={
            "Sorry, the keyword you entered cannot be found, please check again or search with another keyword."
          }
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView  style={{ ...StyleSheet.absoluteFillObject }}>
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{ ...StyleSheet.absoluteFillObject }}
    >
      <StatusBar
        barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
      />
      <TopNavBar
      backBtn={true}
        title="Search"
        style={{ padding: 10, marginTop: 40, alignItems:'center',
          justifyContent:null }}
       
      />

      <SearchBar
        editable={true}
        filterBtn={true}
        onChangeText={handleSearch}
        onFilterPress={() =>
        {  sheetRef.current?.expand()
          sheetRef.current?.snapToIndex(1)}
     }
      />

      {searchQuery === "" ? (
        <RecentSearches />
      ) : filteredData.length > 0 ? (
        <>
          <View
            style={{
              padding: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                getTypography(
                  20,
                  28,
                  allColors.text100,
                  allFonts.URBANIST_Bold
                ),
              ]}
            >
              Results for
              <Text
                style={[
                  getTypography(
                    20,
                    28,
                    allColors.primary1000,
                    allFonts.URBANIST_Bold
                  ),
                ]}
              >
                {" "}
                "{searchQuery}"
              </Text>
            </Text>
            <Text
              style={[
                getTypography(
                  16,
                  24,
                  allColors.primary1000,
                  allFonts.URBANIST_SEMIBOLD
                ),
              ]}
            >
              {filteredData.length} found
            </Text>
          </View>

          <Card
            imageStyle={{
              height: 170,
              width: 178,
              borderRadius: 32,
            }}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: 12,
              // width: 218,
              height: 170,
            }}
          />
        </>
      ) : (
        NoResultFound()
      )}

      <BottomSheetView ref={sheetRef}>
        <>
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
              Filter
            </Text>

            <Text
              style={{
                marginBottom: 15,

                ...getTypography(
                  20,
                  28,
                  allColors.text1000,
                  allFonts.URBANIST_Bold
                ),
              }}
            >
              Category
            </Text>

            <TabBar
              data={["All", "Cleaning", "Repairing", "Painting", "Laundry"]}
              style={{ paddingHorizontal: 0 , height: 40,}}
              textStyle={{
                ...getTypography(
                  14,
                  22,
                  allColors.danger100,
                  allFonts.URBANIST_SEMIBOLD
                ),
              }}
              selectedTabColor={allColors.secondary1000}
              selectedTextStyle={{
                ...getTypography(
                  14,
                  22,
                  allColors.text100,
                  allFonts.URBANIST_SEMIBOLD
                ),
              }}
              unSelectedTextStyle={{
                ...getTypography(
                  14,
                  22,
                  allColors.text900,
                  allFonts.URBANIST_SEMIBOLD
                ),
              }}
              unSelectedTabColor={"#F5F5F5"}
            />

<Text
              style={{
                marginBottom: 15,

                ...getTypography(
                  20,
                  28,
                  allColors.text1000,
                  allFonts.URBANIST_Bold
                ),
              }}
            >
              Price
            </Text>
              
              <RangeSlider
             
             min={min}
             max={max}
             low={16}
             high={56}
             step={1}
             disableRange={false}
             floatingLabel={true}
             renderThumb={renderThumb}
             renderRail={renderRail}
             renderRailSelected={renderRailSelected}
             renderLabel={renderLabel}
             renderNotch={renderNotch}
             onValueChanged={handleValueChange}
           />

            <Text
              style={{
                marginVertical: 15,

                ...getTypography(
                  20,
                  28,
                  allColors.text1000,
                  allFonts.URBANIST_Bold
                ),
              }}
            >
              Rating
            </Text>

            <TabBar
              data={["All", "5", "4", "3", "2", "1"]}
              style={{ paddingHorizontal: 0, height: 40, }}
              tabStyle={{ flexDirection: "row" }}
              selectedTabColor={allColors.secondary1000}
              isRating={true}
              selectedTextStyle={{
                ...getTypography(
                  14,
                  22,
                  allColors.text100,
                  allFonts.URBANIST_SEMIBOLD
                ),
              }}
              unSelectedTextStyle={{
                ...getTypography(
                  14,
                  22,
                  allColors.text900,
                  allFonts.URBANIST_SEMIBOLD
                ),
              }}
              unSelectedTabColor={"#F5F5F5"}
            />

            <TwoButtonsView
              title1={"Reset"}
              title2={"Filter"}
              onPress2={() => {
                sheetRef.current.close();
                toggleModal();
              }}
            />
          </View>
        
         
        </>
      </BottomSheetView>
    </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default Search;

const styles = StyleSheet.create({});
