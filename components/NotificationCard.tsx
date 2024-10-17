import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { allColors } from '@/constants/Colors'
import { allFonts } from '@/constants/Fonts'
import { getTypography } from '@/styles'

const NotificationCard = ({bgColor,title,subTitle,children,style} : any) => {
  return (
    <View style={[style,{ 
        

        borderRadius:15,
        flexDirection:'row',
        padding:12,
        alignItems:'center',
    
        backgroundColor:bgColor}]}>

           {children}             

         <View style={{ marginLeft: 12,height:55,justifyContent:'space-between' }}>
          <Text style={getTypography(18,26,allColors.text100,allFonts.URBANIST_Bold)}>{title}</Text>
          <Text 
          numberOfLines={1}
          ellipsizeMode='tail'
          style={[{width:250},getTypography(14,22,allColors.text100,allFonts.URBANIST)]}>
          {subTitle}
          </Text>
        </View>
    </View>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
    container:{

    },
    subtitle: {
        fontSize: 16,
        color: allColors.text100,
        fontFamily: allFonts.URBANIST,
        lineHeight: 24,
      },
      title: {
        fontSize: 32,
        color: allColors.text100,
        // textAlign: "center",
        fontFamily: allFonts.URBANIST_Bold,
        lineHeight: 40,
      },
})