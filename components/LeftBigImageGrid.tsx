import { Dimensions, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const images = [
    { id: 1, uri: 'https://t4.ftcdn.net/jpg/01/99/16/13/360_F_199161361_DtqBSN8yoJosh3ch1cQ1AXA6FBzOCXbF.jpg' },
    { id: 2, uri: 'https://media.istockphoto.com/id/1365606525/photo/shot-of-a-bucket-of-cleaning-supplies.jpg?s=612x612&w=0&k=20&c=_Xz3e-_WGlQC2zXstHaK_AI9N76LNag_KbRioNlM1hQ=' },
    { id: 3, uri: 'https://www.shutterstock.com/image-photo/trolley-cleaning-supplies-office-260nw-2397850635.jpg' },
    { id: 4, uri: 'https://static01.nyt.com/images/2020/03/20/opinion/20Land/20Land-articleLarge.jpg?quality=75&auto=webp&disable=upscale' },
    { id: 5, uri: 'https://t4.ftcdn.net/jpg/03/06/99/87/360_F_306998742_5awR6uVsZ8dRNdHHnj0tnm4sGUDBAxQ5.jpg' },
    { id: 6, uri: 'https://plus.unsplash.com/premium_photo-1676810459656-ce0b050e9ccd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2luZG93JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D' },
  ];
const numColumns = 2;
const screenWidth = Dimensions.get('window').width;

const firstColumnWidth = (screenWidth / 2) - 16;
const secondColumnWidth = firstColumnWidth;

const LeftBigImageGrid = () => {
  return (
    <View style={styles.row}>
    {/* First Column with One Large Image */}
    <View style={styles.column}>
      <Image
        source={{ uri: images[0].uri }}
        style={[styles.largeImage, { width: firstColumnWidth -20 }]}
        resizeMode="cover"
      />
    </View>

    {/* Second Column with Two Smaller Images */}
    <View style={styles.column}>
      <Image
        source={{ uri: images[1].uri }}
        style={[styles.smallImage, { width: secondColumnWidth,
          height: screenWidth * 0.7/2, 
          // height: firstColumnWidth / 2 
      
      }]}
        resizeMode="cover"
      />
      <Image
        source={{ uri: images[2].uri }}
        style={[styles.smallImage, { width: secondColumnWidth,
          height: screenWidth * 0.7/2-10, 
          
          // height: firstColumnWidth / 2
      
      }]}
        resizeMode="cover"
      />
    </View>
  </View>
  )
}

export default LeftBigImageGrid

const styles = StyleSheet.create({
    gridContainer: {
        // padding: 8,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      largeImage: {
        height: screenWidth * 0.7, // Adjust height as needed
        borderRadius: 12,
        marginBottom: 8,
      },
      smallImage: {
        borderRadius: 12,
        marginBottom: 8,
      },
})