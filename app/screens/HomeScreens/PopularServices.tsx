import Card from '@/components/Card';
import TabBar from '@/components/TabBar';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import useFetchServicesByCategory from '@/hooks/useFetchServicesByCategory';
import { getTypography } from '@/styles';
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';


const PopularServices = () => {
  const { services, loading, error, loadMore, hasMore } = useFetchServicesByCategory('1');


  const renderItem = ({item} :any) =>{
    return(
      <Card 
      item={item}
      imageStyle={{
        height: 132,
        width: 218,
        borderRadius: 20,
      }}
      style={{
         width: 218,
      height: 260,
      marginRight: 15,
  
  
  
      }} />
    )
  } 
  return (
    <View>
    


      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
        contentContainerStyle={{paddingVertical:10}}
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        // ListFooterComponent={renderFooter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />


  
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: '#47357A',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    color: '#A3A3A3',
    fontSize: 12,
  },
  price: {
    color: 'white',
    fontSize: 16,
  },
});

export default PopularServices;
