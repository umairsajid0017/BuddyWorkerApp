import { allColors } from '@/constants/Colors';
import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const Thumb = () => {
  return <View style={styles.rootHigh} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: '#7f7f7f',
    backgroundColor: '#aaaaaa',
  },
  rootHigh: {
    width:25,
    height: 25,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: allColors.secondary1000,
    backgroundColor: allColors.text100,
  },
});

export default memo(Thumb);
