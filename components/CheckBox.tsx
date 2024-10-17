import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { allColors } from '@/constants/Colors';


interface CheckboxProps {
  isChecked: boolean;
  onPress: () => void;
}

const Checkbox : React.FC<CheckboxProps> = ({isChecked,onPress}) => {


  return (
  
      <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <Ionicons name= {isChecked ? "checkbox" : "square-outline"} size={24} color={'grey'} />
      </TouchableOpacity>
   
   
  );
};

const styles = StyleSheet.create({
 
  checkboxContainer: {
    marginRight: 10,
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'


  },
  text: {
    color: 'gray',
  },
});

export default Checkbox;
