import { allColors } from '@/constants/Colors';
import React, { useRef, useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions , Text ,Image} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const ImagesSwiper = ({data,style} : any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;



  // useEffect(() => {
  //   animatedValues.forEach((anim : any, index : number) => {
  //     Animated.timing(anim, {
  //       toValue: activeIndex === index ? 1 : 0,
  //       duration: 300,
  //       useNativeDriver: false,
  //     }).start();
  //   });
  // }, [activeIndex]);

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_ : any, i: number) => {
          const dotWidth = animatedValues[i].interpolate({
            inputRange: [0, 1],
            outputRange: [8, 20], // Inactive and active dot widths
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                { width: dotWidth, opacity: activeIndex === i ? 1 : 0.5 },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
   
 <View>
       <Swiper
       loop={true}
       autoplay={true}
       horizontal
        // onIndexChanged={(index) => setActiveIndex(index)}
  
        height={200}
        // paginationStyle={{bottom:-15,}}
        dot={
          <View style={{
              width: 5,
              height: 5,
              borderRadius: 4,
              margin: 5,
              backgroundColor: '#D1D3D4',
              top: 30,

          }} />
      }

      activeDot={
          <View
              style={{
                  width: 20,
                  height: 5,
                  borderRadius: 5,
                  margin: 5,
                  backgroundColor: allColors.danger100,
                  top: 30,
              }}/>
      }
       
       
      >
        {data.map((item : any, i : number) => (
          <Image source={item.image} style={styles.image} resizeMode="cover" />



 
        ))}
      </Swiper>
 </View>
    
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSwiper: {
    height: 200,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
    //
},
  image: {
    // width: '100%',
    // height: 180,
    // resizeMode:'cover',
    // borderRadius: 35,

    width: '100%',
    height: '100%',
  },
  slide: {
    width:'auto'
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007aff',
    marginHorizontal: 4,
  },
  invisibleDot: {
    width: 0,
    height: 0,
  },
});

export default ImagesSwiper;
