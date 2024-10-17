import TopNavBar from '@/components/TopNavBar';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import { getTypography } from '@/styles';
import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Keyboard, Dimensions } from 'react-native';
import CallDotSvg from '@/assets/svgs/call_dots.svg'
import IconButton from '@/components/IconButton';

const CallScreen = () => {


  return (
    <LinearGradient
    // Define the colors for the gradient
    colors={["#1C0D24", "#6A318A"]}
    // Apply the gradient at an angle of roughly 174 degrees
    start={{ x: 0.5, y: 0 }} // Starting point of the gradient
    end={{ x: 0.1, y: 1 }}
    style={{ ...StyleSheet.absoluteFillObject , }}
  >
    <StatusBar
      barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
      // backgroundColor="#6200EE"
    />
    <TopNavBar
      title={"Jenny Wilson"}
      backBtnWithTitle={true}
    
      style={{
        padding: 10,
        marginTop: 30,
      }}
    />
   
   <View style={{
    marginTop:15,
    marginBottom:80,
    
    position:'relative',alignItems:'center',justifyContent:'center'}}>
   <CallDotSvg  style={{alignSelf:'center'}}/>


<Image
style={{
  position:'absolute',

  width:150,height:150,borderRadius:80,borderWidth:8,borderColor:allColors.primary1000}}

source={require('@/assets/images/house_cleaning_booking.png')}/>
   </View>
    

    <Text
     style={{textAlign:'center',marginBottom:20,...getTypography(32,38,allColors.text100,allFonts.URBANIST_Bold)}}>
    Jenny Wilson
    </Text>

    <Text
     style={{textAlign:'center',marginBottom:20,...getTypography(18,25,allColors.text100,allFonts.URBANIST)}}>

    04:38 minutes
    </Text>

    <View  style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-around',

      // backgroundColor:'red',
      width:Dimensions.get('screen').width/1.4,
      marginTop:80,

    }}>

      <IconButton style={{width:60,height:60,borderRadius:30,backgroundColor:allColors.danger800}}>
      <Entypo name="circle-with-cross" size={32} color={allColors.white} />
      </IconButton>

      <IconButton style={{width:60,height:60,borderRadius:30,backgroundColor:allColors.info600}}>
      <MaterialIcons name="videocam-off" size={32} color={allColors.white} />
      </IconButton>

      <IconButton style={{width:60,height:60,borderRadius:30,backgroundColor:allColors.secondary700}}>
      <MaterialIcons name="volume-up" size={32} color={allColors.white} />
    
      </IconButton>


    </View>


    </LinearGradient>
  );
};

export default CallScreen;


const styles = StyleSheet.create({

});

