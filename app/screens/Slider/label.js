import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import { getTypography } from '@/styles';
import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Label = ({ text, ...restProps }) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>${text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width:50,
    alignItems: 'center',
    padding: 8,
    backgroundColor: allColors.secondary1000,
    borderRadius: 4,
  },
  text: {
    ...getTypography(12,14,allColors.text100,allFonts.URBANIST_Bold)
   
  },
});

export default memo(Label);