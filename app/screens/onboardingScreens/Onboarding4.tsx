import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from "@/components/PrimaryButton";
import { allColors } from "@/constants/Colors";
import BackgroundArtWork from '@/assets/svgs/Group 34713.svg';
import Logo from "@/assets/svgs/logo.svg";

// Define the dimensions
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

// Define the component
const Onboarding4 = ({ swiperRef }:any) => {
    const router = useRouter();
    return (
        <LinearGradient
            colors={['#1C0D24', '#6A318A']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.1, y: 1 }}
            style={styles.background}
        >
            <StatusBar barStyle="light-content" />
            <Logo
                height={150}
                width={150}
                style={{ marginBottom: 25 }}
            />
            <Text style={styles.title}>
                Welcome {'\n'} to Buddies App
            </Text>
            <Text style={styles.subtitle}>
                Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem.
            </Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton
                onPress={() => router.replace("/(drawer)/(tabs)/home")}
                style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Explore the App</Text>
                </PrimaryButton>

                <PrimaryButton
                 onPress={() => router.push('/screens/AuthScreens/MainScreen')}
                style={[styles.primaryButton, { backgroundColor: allColors.secondary900 }]}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </PrimaryButton>
            </View>
            <BackgroundArtWork style={styles.backgroundSvg} />
        </LinearGradient>
    );
};

// Define the styles
const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    } ,
    backgroundSvg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    } ,
    buttonContainer: {
        width: WIDTH,
        height: 120,
        paddingHorizontal: 15,
        position: 'absolute',
        bottom: 25,
        justifyContent: 'space-between',
    } ,
    title: {
        fontSize: 36,
        color: allColors.text100,
        textAlign: 'center',
        fontFamily: 'Urbanist-Bold',
        lineHeight: 44,
    } ,
    subtitle: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Urbanist-Regular',
        lineHeight: 22,
    } ,
    buttonText: {
        fontSize: 18,
        lineHeight: 26,
        color: allColors.text100,
        fontFamily: 'Mulish',
    } ,
    primaryButton: {
        flexDirection: 'row',
        backgroundColor: allColors.primary1000,
        width: '100%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    } ,
});

export default Onboarding4;
