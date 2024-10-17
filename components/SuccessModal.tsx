import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SuccessIcon from '@/assets/svgs/successful_task.svg'
import { getTypography } from '@/styles';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import LongButton from './LongButton';

export default function SuccessModal({visible , title, subTitle, onPress,toggleModal}:any) {
 

  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={toggleModal}
    style={{backgroundColor:'red'}}
  >
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
       
          <SuccessIcon  />
      
        <Text style={styles.successText}>{title}</Text>
        <Text style={styles.messageText}>
         {subTitle}
        </Text>
        <LongButton onPress={onPress} title='Done' style={{width:200}} />
        
      </View>
    </View>
  </Modal>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  successText: {
    ...getTypography(24,32,allColors.text1000,allFonts.URBANIST_Bold),
    marginTop:20,
   
    marginBottom: 10,
    textAlign: 'center',
  },
  messageText: {
    ...getTypography(14,22,allColors.text1000,allFonts.URBANIST),


    textAlign: 'center',
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
