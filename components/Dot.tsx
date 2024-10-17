import { allColors } from '@/constants/Colors';
import React from 'react';
import { View, StyleSheet,StyleProp, ViewStyle } from 'react-native';


interface DotProps {
    style?: StyleProp<ViewStyle>; // Optional style prop
}

const Dot : React.FC<DotProps> = (props) => {
    return <View style={[styles.dot,props.style]} />;
};

const styles = StyleSheet.create({
    dot: {
        width: 3,
        height: 3,
        borderRadius: 1.5, // half of width and height
        backgroundColor: allColors.white,
    },
});

export default Dot;
