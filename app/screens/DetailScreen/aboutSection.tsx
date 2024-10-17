import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PrimaryButton from '@/components/PrimaryButton'
import { allColors } from '@/constants/Colors'
import { getTypography } from '@/styles'
import { allFonts } from '@/constants/Fonts'
import TwoButtonsView from '@/components/TwoButtonsView'
import { router } from 'expo-router'

const aboutSection = ({onBook} : any) => {
  return (
    <View style={{marginBottom:16}}>
      <Text style={styles.title}>About me</Text>
      <Text
      style={[getTypography(14,22,allColors.text100,allFonts.URBANIST)]}
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nisi ut aliquip. Read more...</Text>
   
   <TwoButtonsView
    title1={'Message'} 
   title2= {'Book'}
   onPress1={() => router.push('/screens/Inbox')}
   onPress2={onBook}
   />


 
    </View>
  )
}

export default aboutSection

const styles = StyleSheet.create({

    
    title: getTypography(20,28,allColors.text100,allFonts.URBANIST_Bold),


})