import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from 'rn-range-slider'; // Import the rn-range-slider



// Main PriceSlider component
const PriceSlider = () => {
  const [low, setLow] = useState(16);  // Initial low price value
  const [high, setHigh] = useState(56); // Initial high price value

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Price</Text>
      <Slider
        min={10}
        max={100}
        step={1}
        floatingLabel
      
      />
      <View style={styles.priceDisplay}>
        <Text style={styles.priceText}>${low}</Text>
        <Text style={styles.priceText}>${high}</Text>
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceText: {
    fontSize: 16,
    color: '#6A1B9A', // Matches the purple color in your image
    fontWeight: 'bold',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#6A1B9A',
    borderColor: '#FFF',
    borderWidth: 2,
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E0E0E0',
  },
  railSelected: {
    height: 4,
    backgroundColor: '#6A1B9A',
    borderRadius: 2,
  },
  labelContainer: {
    backgroundColor: '#6A1B9A',
    borderRadius: 5,
    padding: 5,
  },
  labelText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  notch: {
    width: 8,
    height: 8,
    backgroundColor: '#6A1B9A',
  },
});

export default PriceSlider;
