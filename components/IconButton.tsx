import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { allColors } from '@/constants/Colors'

const IconButton = ({children,style,onPress,disable}:any) => {
  return (
    <TouchableOpacity
    disabled={disable}
    onPress={onPress}
    style={[styles.container,style]}>
      {children}
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:allColors.text100,
        borderRadius:15,
        width:45,height:45, 
     alignItems:'center', justifyContent:'center'

    }
})