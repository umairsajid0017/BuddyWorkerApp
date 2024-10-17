import { View, Text } from 'react-native'
import React from 'react'
import { getTypography } from '@/styles'
import { allColors } from '@/constants/Colors'
import { allFonts } from '@/constants/Fonts'
import SearchNotFound from '@/assets/svgs/search_not_found.svg'

const NotFound = ({title,subTitle,titleStyle,subTitleStyle,svgStyle} : any) => {
  return (
    <View>
          <SearchNotFound
          style={[{ 
            // backgroundColor: "red",
             alignSelf: "center",
            marginLeft:15,
            },svgStyle]}
        />

        <Text
          style={[
            getTypography(24, 32, allColors.text100, allFonts.URBANIST_Bold),
            { textAlign: "center", marginTop: 24 },
            titleStyle,

          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            getTypography(16, 24, allColors.text100, allFonts.URBANIST),
            { textAlign: "center", marginTop: 12 },
            subTitleStyle,

          ]}
        >
          {subTitle}
        </Text>
    </View>
  )
}

export default NotFound