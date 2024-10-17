import ImagesSwiper from '@/components/ImagesSwiper';
import { OFFER_IMAGES_DATA } from '@/data/data';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const SpecialOffers = () => {

  return(
   <View style={{marginTop:-15}}>
     <ImagesSwiper data={OFFER_IMAGES_DATA}/>
   </View>
  )


  // return (
  //   <View style={styles.container}>
  //     <Image source={require('@/assets/images/Promo & Discount_1.png')} style={styles.image} />

     
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
   
    borderRadius: 15,
    // marginHorizontal: 20,
   
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode:'cover',
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 15,
  },
  offer: {
    fontSize: 30,
    color: 'white',
  },
  special: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 12,
  },
});

export default SpecialOffers;
