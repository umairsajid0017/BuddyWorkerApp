import { StyleSheet, Text, View,ScrollView, StatusBar, ActivityIndicator, FlatList, Button } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Categories from "../../screens/HomeScreens/Categories";
import TabBar from "@/components/TabBar";
import Card from "@/components/Card";
import { allColors } from "@/constants/Colors";
import { allFonts } from "@/constants/Fonts";
import { getTypography } from "@/styles";
import TopNavBar from "@/components/TopNavBar";
import { useLocalSearchParams } from "expo-router";
import useFetchServicesByCategory from "@/hooks/useFetchServicesByCategory";


const ShowServices = () => {


    const params = useLocalSearchParams();
    const {categoryId,categoryName} : any = params;

    const { services, loading, error, loadMore, hasMore } = useFetchServicesByCategory(categoryId);


//  const renderFooter = () => {
//     if (loading) return <ActivityIndicator />;
//     // if (!hasMore) return <Text>No more services</Text>;
//     return <Button title="Load More" onPress={loadMore} />;
//   };

  const renderItem = ({item} :any) =>{
    return(
        <Card
        item={item}
        imageStyle={{
          height: 170,
          width: 178,
          borderRadius: 32,
        }}
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 12,
          // width: 218,
          height: 170,
        }}
      />
    )
  } 

  return (
    <LinearGradient
      // Define the colors for the gradient
      colors={["#1C0D24", "#6A318A"]}
      // Apply the gradient at an angle of roughly 174 degrees
      start={{ x: 0.5, y: 0 }} // Starting point of the gradient
      end={{ x: 0.1, y: 1 }}
      style={{ flex:1 }}
    >
      <TopNavBar
       
        title={categoryName}
        style={{ padding: 10, marginTop: 40 , 
          
        }}

        backBtnWithTitle={true}
        messageNotification={true}
      />

<StatusBar
      barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
    />

{error ? <Text>{error}</Text> : null}
 
        <FlatList
        contentContainerStyle={{paddingVertical:10}}
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        // ListFooterComponent={renderFooter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />



    </LinearGradient>
  );
};

export default ShowServices;

const styles = StyleSheet.create({});
