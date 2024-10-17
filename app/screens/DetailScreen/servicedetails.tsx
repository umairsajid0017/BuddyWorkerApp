import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { getTypography } from '@/styles';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';

const HouseCleaningScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jenny Wilson</Text>
       <MaterialCommunityIcons name="bookmark-minus-outline" size={28} color={allColors.primary1000} />
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          {/* <Text style={styles.name}>Jenny Wilson</Text> */}

          <View style={{flexDirection:'row',alignItems:'center',
            // marginLeft:10,
            
            }}>
            <AntDesign name="star" size={18} color={allColors.primary1000} />
              <Text style={[{
                marginLeft:10

              },getTypography(12,20,allColors.text100,allFonts.URBANIST)]}>4.9   |   6,182 reviews</Text>
            </View>



        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
            
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>Cleaning</Text>
        </View>

        <View style={styles.locationRow}>
          <MaterialIcons name="location-on" size={20} color={allColors.primary1000} style={{marginRight:5,}}/>
          <Text style={styles.location}>255 Grand Park Avenue, New York</Text>
        </View>
        </View>

            <View style={{flexDirection:'row',alignItems:'center',}}>
            <Text style={[styles.price,{marginRight:10,}]}>$20</Text>
            <Text style={styles.floorPrice}>(Floor price)</Text>
            </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:24,
    // backgroundColor:'red',
    borderBottomWidth:1,
    borderBottomColor:allColors.stroke,


    // flex: 1,
    // padding: 10,
    // backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: getTypography(24,32,allColors.text100,allFonts.URBANIST_Bold),
  card: {
    // backgroundColor: '#1c1c1e',
    // padding: 16,
    borderRadius: 8,
    marginBottom: 20,

  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,

  },
  name: getTypography(20,28,allColors.primary1000,allFonts.URBANIST_Bold),
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 14,
  },
  tagContainer: {
    // marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: allColors.primary200,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  tag: getTypography(12,20,allColors.primary1000,allFonts.URBANIST),
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
    // marginTop: 16,
  },
  location: getTypography(14,22,allColors.text100,allFonts.URBANIST),
  price: getTypography(32,40,allColors.primary1000,allFonts.URBANIST_Bold),
  floorPrice: getTypography(14,22,allColors.text100,allFonts.URBANIST),
});

export default HouseCleaningScreen;
