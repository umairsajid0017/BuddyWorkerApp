import PrimaryButton from '@/components/PrimaryButton';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, View , Text } from 'react-native';

const SectionHeading = ({heading,onPress,style ,isSeeAll} : any) => {
  return (
    <View style={[styles.container,style]}>
      <Text style={styles.headingName}>{heading}</Text>
     {isSeeAll &&  <PrimaryButton 
      onPress={onPress}
      style={{
        // backgroundColor:'green',

      width:100,
      height:'100%',
      alignItems:'center',
      justifyContent:'flex-end',
      flexDirection:'row'


        // height:28,

      }}>
      <Text style={styles.seeAll}>See all</Text>

      </PrimaryButton>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height:55,
    marginBottom:10,
    paddingHorizontal:2,
    // paddingVertical:20,
    // backgroundColor:'red'

  },
  headingName: {
   
    color: allColors.text100,
    fontSize:20,
    lineHeight:28,
    fontFamily:allFonts.URBANIST_Bold,
    marginLeft: 10,
  },

  seeAll: {
   
    color: allColors.primary1000,
    fontSize:16,
    lineHeight:24,
    fontFamily:allFonts.URBANIST,
    marginRight:5,

    
  },
});

export default SectionHeading;
