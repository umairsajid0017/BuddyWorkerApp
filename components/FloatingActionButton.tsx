import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { allColors } from '@/constants/Colors';


const FloatingActionButton = ({onPress,style} : any) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn,style]}>
       <AntDesign name="plus" size={24} color={allColors.white} />
    </TouchableOpacity>
  )
}

export default FloatingActionButton

const styles = StyleSheet.create({
    btn:{
        borderRadius: 50,
        position: "absolute",
        backgroundColor: allColors.primary1000,
        padding: 15,
        bottom: 20,
        right: 20
    }
})
