import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { getTypography } from '@/styles';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';

const ReviewCard = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Profile picture and name */}
      <View style={styles.userInfo}>
        <Image
          source={require('@/assets/images/chat1.png')} // Placeholder for profile image
          style={styles.profilePic}
        />
        <View style={styles.nameAndRating}>
          <Text style={styles.userName}>Lauralee Quintero</Text>
          <View style={styles.rating}>
            <AntDesign name="star" size={14} color= {allColors.primary1000} />
            <Text style={styles.ratingText}>5</Text>
          </View>
        </View>
       <View  style={styles.ellipsis} >
       <Ionicons name="ellipsis-horizontal" size={15} color="#fff"/>
       </View>
      </View>

      {/* Review Text */}
      <Text style={[styles.reviewText,getTypography(14,22,allColors.text100,allFonts.URBANIST),]}>
        Awesome! this is what I was looking for, I recommend to everyone ❤️❤️❤️
      </Text>

      {/* Likes and Timestamp */}
      <View style={styles.footer}>
        <View style={styles.likes}>
          <FontAwesome name="heart" size={16} color="#FF5A5F" />
          <Text style={[styles.likeCount,getTypography(12,20,allColors.text100,allFonts.URBANIST)]}>724</Text>
        </View>
        <Text style={[styles.timestamp,getTypography(12,20,allColors.text400,allFonts.URBANIST),]}>3 weeks ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    paddingTop:0,
   
    width: '100%',
    alignSelf: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameAndRating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: getTypography(16,24,allColors.text100,allFonts.URBANIST_Bold),
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth:2,
    height:35,
    width:60,
    // padding:10,
    borderRadius:25,
    borderColor:allColors.primary1000

  },
  ratingText: {
    ...getTypography(12,20,allColors.primary1000,allFonts.URBANIST_SEMIBOLD),
 
    marginLeft: 5,
  },
  ellipsis: {
    marginLeft: 10,
    width:30,
    height:30,
    borderRadius:15,
    borderWidth:2,
    borderColor: allColors.text100,
    alignItems:'center',
    justifyContent:'center',
    
  },
  reviewText: {

    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    color: '#fff',
    marginLeft: 5,
  },
  timestamp: {
    color: '#aaa',
    fontSize: 12,
  },
});

export default ReviewCard;
