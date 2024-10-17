import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Onboarding1 from './Onboarding1'
import Swiper from 'react-native-swiper';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
import Onboarding4 from './Onboarding4';
import { allColors } from '@/constants/Colors';

const OnboardingSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide
    const swiperRef = useRef(null);  // Reference to control Swiper

  return (
    <>
    <Swiper
    ref={swiperRef}
    // loop={false}
  
    dotStyle={styles.dotStyle}
    activeDotStyle={styles.activeDotStyle}
    paginationStyle={{bottom:"39%"}}
    // showsButtons={false}  // Optional: Disable built-in buttons
    // onIndexChanged={(index) => setActiveIndex(index)} // Update active index when slide changes
  >
    <Onboarding1 swiperRef={swiperRef}  activeIndex={activeIndex} />
    <Onboarding2  swiperRef={swiperRef}  activeIndex={activeIndex} />
    <Onboarding3  swiperRef={swiperRef}  activeIndex={activeIndex} />
   
    {/* You can add the rest of your screens here like Onboarding2, Onboarding3, etc. */}
  </Swiper>

  </>
  )
}

export default OnboardingSwiper

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginHorizontal: 20,
    },
    dotStyle: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: allColors.primary400,
      marginHorizontal: 4,
    },
    activeDotStyle: {
      width: 24,
        height: 6,
        borderRadius: 4,
        backgroundColor: allColors.primary1000,
        marginHorizontal: 4,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor:'red'
      },
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Default dot color
      },
  });