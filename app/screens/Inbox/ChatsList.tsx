import FloatingActionButton from '@/components/FloatingActionButton';
import IconButton from '@/components/IconButton';
import TopNavBar from '@/components/TopNavBar';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import { getTypography } from '@/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Animated, StatusBar } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const ChatsList = () => {
    const [chats, setChats] = useState( [
        {
          id: '1',
          name: 'Lauralee Quintero',
          message: 'I have booked your house ...',
          time: '13.29',
          unreadCount: 2,
          image: require('@/assets/images/chat1.png'), // Replace with actual image URL or require statement
        },
        {
          id: '2',
          name: 'Tanner Stafford',
          message: 'I have booked your house ...',
          time: '13.29',
          unreadCount: 3,
          image:  require('@/assets/images/chat2.png'),
        },
        {
          id: '3',
          name: 'Marci Senter',
          message: 'I have booked your house ...',
          time: '13.29',
          unreadCount: 0,
          image:  require('@/assets/images/chat3.png'),
        },
        {
          id: '4',
          name: 'Pedro Huard',
          message: 'I have booked your house ...',
          time: 'Yesterday',
          unreadCount: 2,
          image:  require('@/assets/images/chat4.png'),
        },
        {
          id: '5',
          name: 'Lauralee Quintero',
          message: 'How are you?',
          time: 'Dec 20, 2024',
          unreadCount: 0,
          image:  require('@/assets/images/chat5.png'),
        },
        {
          id: '6',
          name: 'Francene Vandyne',
          message: 'I have booked your house ...',
          time: '13.29',
          unreadCount: 0,
          image:  require('@/assets/images/chat1.png'),
        },
      ]
    )

    const router = useRouter()

  const handleDelete = (id : any) => {
    setChats(chats.filter(item => item.id !== id));
  };

  const renderRightActions = (progress : any, dragX : any, id : any) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
        <Animated.View style={{transform: [{ scale }] }}>
          <IconButton 
          disable={true}
          style={{width:50,height:50,borderRadius:25,backgroundColor:allColors.primary100}}>
          <MaterialCommunityIcons name="trash-can-outline" size={24} color={allColors.danger800} />
          </IconButton>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item } : any) => (
    <Swipeable
    renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
  >
    <TouchableOpacity
    onPress={() => router.push('/screens/ChatScreens/ChatScreen')}
  
    style={styles.chatItem}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <View style={styles.chatMeta}>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCount}>{item.unreadCount}</Text>
          </View>
        )}
        <Text style={styles.chatTime}>{item.time}</Text>

      </View>
    </TouchableOpacity>

    </Swipeable>
  );

  return (

    <LinearGradient
    // Define the colors for the gradient
    colors={["#1C0D24", "#6A318A"]}
    // Apply the gradient at an angle of roughly 174 degrees
    start={{ x: 0.5, y: 0 }} // Starting point of the gradient
    end={{ x: 0.1, y: 1 }}
    style={{ ...StyleSheet.absoluteFillObject }}
  >
      <StatusBar
        barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
      />
    <TopNavBar

      searchDot={true}
      backBtnWithTitle={true}
      title="Inbox"
      style={{ padding: 10, marginTop: 40,  }}
       

    />


    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.chatList}
    />
    {/* <FloatingActionButton/> */}

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  chatList: {
    paddingTop: 18,
      paddingHorizontal: 15,
    // padding: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 250, 251, 0.15)',
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
  

  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {

    ...getTypography(16,26,allColors.text100,allFonts.URBANIST_Bold),
    marginBottom: 4,
  },
  chatMessage: {
    ...getTypography(14,22,allColors.text500,allFonts.URBANIST),
   
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  chatTime: {
    color: '#a3a3a3',
    fontSize: 12,
  },
  unreadBadge: {
    backgroundColor: '#f85c70',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 5,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '85%',
    borderRadius: 10,
   
  },
});

export default ChatsList;
