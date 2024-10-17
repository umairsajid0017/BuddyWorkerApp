import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { allColors } from '@/constants/Colors';
import {AntDesign} from '@expo/vector-icons';
import { router } from 'expo-router';




const BackButton = () => {


  return (
  
      <TouchableOpacity  onPress={() => router.back()}  style={styles.container}>
     <AntDesign name="arrowleft" size={24} color={allColors.text100} />
      </TouchableOpacity>
   
   
  );
};

const styles = StyleSheet.create({
 
  container: {
    marginRight: 10,
    width:48,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"rgba(249, 250, 251, 0.15)",
    borderRadius:16,
    


  },
  text: {
    color: 'gray',
  },
});

export default BackButton;
