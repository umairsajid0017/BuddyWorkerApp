import React, {useCallback, useState} from 'react';
import {View, Text, ScrollView,StyleSheet} from 'react-native';
import Slider from 'rn-range-slider';

import Thumb from './Slider/Thumb';
import Rail from './Slider/Rail';
import RailSelected from './Slider/RailSelected';
import Notch from './Slider/Notch';
import Label from './Slider/label';
import TextButton from './Slider/TextButton';



const SliderScreen = () => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [floatingLabel, setFloatingLabel] = useState(false);

  const renderThumb = useCallback(
    () => <Thumb name={'high'} />,
    [],
  );
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value  => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);
  const toggleRangeEnabled = useCallback(
    () => setRangeDisabled(!rangeDisabled),
    [rangeDisabled],
  );
  const setMinTo50 = useCallback(() => setMin(50), []);
  const setMinTo0 = useCallback(() => setMin(0), []);
  const setMaxTo100 = useCallback(() => setMax(100), []);
  const setMaxTo500 = useCallback(() => setMax(500), []);
  const toggleFloatingLabel = useCallback(
    () => setFloatingLabel(!floatingLabel),
    [floatingLabel],
  );

  return (
    <ScrollView>
      <View style={styles.root}>
        
        <Slider
          style={styles.slider}
          min={min}
          max={max}
          // low={16} 
          // high={56} 
          step={1}
          disableRange={false}
          floatingLabel={false}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
        <View style={styles.horizontalContainer}>
          <Text style={styles.valueText}>{low}</Text>
          <Text style={styles.valueText}>{high}</Text>
        </View>
        <View style={styles.horizontalContainer}>
          <TextButton
            text="Toggle floating"
            containerStyle={styles.button}
            onPress={toggleFloatingLabel}
          />
          <TextButton
            text={rangeDisabled ? 'Enable range' : 'Disable range'}
            containerStyle={styles.button}
            onPress={toggleRangeEnabled}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <TextButton
            text="Set min to 0"
            containerStyle={styles.button}
            onPress={setMinTo0}
          />
          <TextButton
            text="Set min to 50"
            containerStyle={styles.button}
            onPress={setMinTo50}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <TextButton
            text="Set max to 100"
            containerStyle={styles.button}
            onPress={setMaxTo100}
          />
          <TextButton
            text="Set max to 500"
            containerStyle={styles.button}
            onPress={setMaxTo500}
          />
        </View>
        <View style={{height: 1000}} />
      </View>
    </ScrollView>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({
    root: {
      alignItems: 'stretch',
      padding: 25,
      flex: 1,
      backgroundColor: '#555',
      
    },
    slider: {
      backgroundColor:'red'
    },
    button: {
    },
    header: {
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 12,
    },
    horizontalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    valueText: {
      width: 50,
      color: 'white',
      fontSize: 20,
    },
  });