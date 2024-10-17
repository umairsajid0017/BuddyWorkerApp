import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet,  TouchableOpacity,Dimensions,StatusBar, Animated, } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import {allColors} from "@/constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import BackgroundArtWork from '@/assets/svgs/Group 34713.svg'
import {router} from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


const Onboarding1 = ({ swiperRef ,activeIndex }:any) => {

    const opacityAnim = useRef(new Animated.Value(0)).current; // Initial opacity value

    useEffect(() => {
      if (activeIndex === 0) {
        // Fade in when this screen is active
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        // Fade out when leaving
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }, [activeIndex, opacityAnim]);
  
  
    return (
        <View style={[styles.container]}>
   
            <StatusBar barStyle="dark-content" />
            <BackgroundArtWork style={styles.backgroundSvg} />
            <View style={styles.foregroundContainer}>
                <Image source={require('@/assets/images/onboarding1.png')}
                style={{width:430,height:574,marginTop:30}}
                />
             
            </View>

               <View style={styles.textContainer}>
                <LinearGradient
                    // Gradient configuration
                    colors={['#1C0D24', '#6A318A']}
                    end={{ x: 0.5, y: 0 }}  // Corresponds to 0% in Figma
                    start={{ x: 0.5, y: 1 }}    // Corresponds to 100% in Figma
                    style={styles.background}
                />

                <View style={styles.paginationContainer}/>
              
           


                   <Text style={styles.title}>Easy access from your smartphone</Text>
                   <Text style={styles.subtitle}>
                       Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem.
                   </Text>

                 

                   <PrimaryButton
                    // onPress={handleNext}
                  onPress={() => swiperRef.current.scrollBy(1,false)}  // Move to next slide
                    // onPress={() => router.push('/screens/onboardingScreens/Onboarding2')}
                    style={styles.button}>
                    <AntDesign name="arrowright" size={24} color="white" />
                </PrimaryButton>
                   
             
               


            </View>



    </View>
);
};

const styles = StyleSheet.create({
    container: {

        // height :HEIGHT,
        // width: WIDTH,
        flex: 1,
        backgroundColor: allColors.white,
        // height:'100%'

        // ...StyleSheet.absoluteFillObject,



    },
    foregroundContainer: {
       // Ensures this container stays above the background
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundSvg: {
        position: 'absolute',  // Positions it behind other elements
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,

    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
       margin:100,

    },
    image: {
        // width: '100%',
        // height: '100%',
        // backgroundColor:'red'

    },
    textContainer: {
        height:'45%',
        width:WIDTH,
        position:'absolute',
         bottom:0,
        alignItems: 'center',
        paddingHorizontal: 20,
        // justifyContent:'center',
        // top:-50,


    },
    title: {
        fontSize: 32,
        // fontWeight: '700',
        color: allColors.text100,
        textAlign: 'center',
        fontFamily:'Urbanist-Bold',
        lineHeight:40,




},
    subtitle: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
        fontFamily:'Urbanist-Regular',
        lineHeight:22,


},
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:40,
        marginBottom:40,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: allColors.primary400,
        marginHorizontal: 4,
       
    },
    paginationDotActive: {
        width: 24,
        height: 8,
        borderRadius: 4,
        backgroundColor: allColors.primary1000,
        marginHorizontal: 4,
    },
    button: {
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center',
        backgroundColor: allColors.primary1000,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24,
    },
});

export default Onboarding1;
