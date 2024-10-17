import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from './PrimaryButton'
import { allFonts } from '@/constants/Fonts'
import { allColors } from '@/constants/Colors'
import { getTypography } from '@/styles'

const TwoButtonsView = ({onPress1,onPress2 ,style, title1,title2,style1,style2} : any) => {
  return (
    <View style={[styles.container,style]}>
    <PrimaryButton 
    onPress={onPress1}
    style={[styles.btn,style1]}>
        <Text style={[getTypography(18,26,allColors.primary1000,allFonts.MULISH)]}>{title1}</Text>
    </PrimaryButton>

    <PrimaryButton 
    onPress={onPress2}
    
    style={[styles.btn,{backgroundColor:allColors.primary1000,borderStyle:'solid',},style2]}>
        <Text style={[getTypography(18,26,allColors.text100,allFonts.MULISH)]}>{title2}</Text>
    </PrimaryButton>
   </View>
  )
}

export default TwoButtonsView

const styles = StyleSheet.create({

    container:{flexDirection:'row',
        // flex:1,
        // backgroundColor:'red',
        marginTop:10},

    btn:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:allColors.primary1000,
        padding:10,
        borderRadius:25,

        flex:1,
        margin:3
        // backgroundColor:allColors.primary1000,

    },
})