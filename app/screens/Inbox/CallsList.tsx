import IconButton from '@/components/IconButton';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import { getTypography } from '@/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const CallsList = () => {
  const [calls, setCalls] = useState([
    {
      id: '1',
      name: 'Lauralee Quintero',
      type: 'incoming', // incoming, outgoing, missed
      date: 'Dec 19, 2024',
      image:  require('@/assets/images/chat4.png'),
    },
    {
      id: '2',
      name: 'Tanner Stafford',
      type: 'outgoing',
      date: 'Dec 19, 2024',
      image: require('@/assets/images/chat2.png'),
    },
    {
      id: '3',
      name: 'Marci Senter',
      type: 'missed',
      date: 'Dec 19, 2024',
      image: require('@/assets/images/chat3.png'),
    },
    // Add more call data as necessary
  ]);

  const handleDelete = (id : any) => {
    setCalls(calls.filter(call => call.id !== id));
  };

  const renderRightActions = (progress : any, dragX : any, id : any) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>


        <Animated.View style={{ transform: [{ scale }] }}>
        <IconButton 
          disable={true}
          style={{width:50,height:50,borderRadius:25,backgroundColor:allColors.primary100}}>
          <MaterialCommunityIcons name="trash-can-outline" size={24} color={allColors.danger800} />
          </IconButton>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item } : any) => {
    const getIcon = (type : any) => {
      switch (type) {
        case 'incoming':
          return <MaterialCommunityIcons name="arrow-down" size={18} color="#2D9CDB" />;
        case 'outgoing':
          return <MaterialCommunityIcons name="arrow-up" size={18} color="#27AE60" />;
        case 'missed':
          return <MaterialCommunityIcons name="close" size={18} color="#EB5757" />;
        default:
          return null;
      }
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
      >
        <TouchableOpacity style={styles.callItem}>
          <Image source={item.image} style={styles.avatar} />
          <View style={styles.callInfo}>
            <Text style={styles.callName}>{item.name}</Text>
            <View style={styles.callDetails}>
              {getIcon(item.type)}
              <Text style={styles.callType}>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Text>
              <Text style={styles.callDate}>| {item.date}</Text>
            </View>
          </View>
          <IconButton 
          
          style={styles.callIcon}>
            <MaterialCommunityIcons name="phone-outline" size={24} color= {allColors.primary1000} />
          </IconButton>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <LinearGradient
    // Define the colors for the gradient
    colors={["#1C0D24", "#6A318A"]}
    // Apply the gradient at an angle of roughly 174 degrees
    start={{ x: 0.1, y: 0 }} // Starting point of the gradient
    end={{ x: 0.1, y: 1 }}
    style={{
      ...StyleSheet.absoluteFillObject,
      paddingTop: 18,
      paddingHorizontal: 15,
    }}
  >
    <FlatList
      data={calls}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.callList}
    />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  callList: {
    // padding: 16,
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 250, 251, 0.15)',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  callInfo: {
    flex: 1,
  },
  callName: {
    ...getTypography(16,26,allColors.text100,allFonts.URBANIST_Bold),

    marginBottom: 4,
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callType: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
  },
  callDate: {
    color: '#a3a3a3',
    fontSize: 14,
    marginLeft: 4,
  },
  callIcon: {
    // alignItems: 'flex-end',
    marginRight:-5,
    borderRadius:50,
    backgroundColor:allColors.primary100
  },
  deleteButton: {
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'center',
   
    borderRadius: 10,
    width: 80,
    height: '85%',
  },
});

export default CallsList;
