import React, {useCallback} from 'react';
import {View, StyleSheet, Dimensions, StatusBar, Text, Image} from 'react-native';
import BackgroundArtWork from '../assets/svgs/Group 34713.svg'
import Logo from '../assets/svgs/logo.svg'
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';



const Index = () => {
    const router = useRouter();
    const [fontsLoaded] = useFonts({
        'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
        'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
        'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
        'Mulish': require('../assets/fonts/Mulish-Regular.ttf')
    });


    useEffect(() => {
        StatusBar.setBarStyle('light-content');
       setTimeout(() => {
            // Navigate to the onboarding screen after the delay
            // router.replace('/screens/onboardingScreens/Onboarding1');
            router.replace('/screens/onboardingScreens/OnboardingSwiper');
            // router.replace('/screens/Dashboard/dashboard');
            // router.replace("/(tabs)/home");
            // router.replace("/(drawer)/(tabs)/home");
            // router.replace("/screens/BookingScreens/WorkerOffers");
            // router.replace("/screens/BookingScreens/PlaceOrder");
        }, 3000); // 3-second delay


    }, []);



    return (

    <LinearGradient
                // Define the colors for the gradient
                colors={['#1C0D24', '#6A318A']}
                // Apply the gradient at an angle of roughly 174 degrees
                start={{ x: 0.5, y: 0 }}         // Starting point of the gradient
                end={{ x: 0.1, y: 1 }}
                style={styles.background}
           >

                <Logo
                    height={150}
                    width={150}
                />
                <BackgroundArtWork style={styles.backgroundSvg} />


            </LinearGradient>





    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: 'center',
        alignItems:'center',
        padding:15,
        backgroundColor: 'red'

    },
    background: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,

    },
    backgroundSvg: {
        position: 'absolute',  // Positions it behind other elements
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
});

export default Index;
