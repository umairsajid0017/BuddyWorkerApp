import LongButton from '@/components/LongButton';
import SuccessModal from '@/components/SuccessModal';
import TopNavBar from '@/components/TopNavBar';
import { allColors } from '@/constants/Colors';
import { allFonts } from '@/constants/Fonts';
import { getTypography } from '@/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Keyboard } from 'react-native';


const Chat = () => {

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hi Jenny, good morning 😄',
      time: '10:00',
      sender: true, // true for current user (right side), false for recipient (left side)
    },
    {
      id: '2',
      text: 'I have booked your house cleaning service for December 23 at 10 AM 😄',
      time: '10:00',
      sender: true,
    },
    {
      id: '3',
      text: 'Hi, morning too Andrew!',
      time: '10:00',
      sender: false,
    },
    {
      id: '4',
      text: 'Yes, I have received your order. I will come on that date! 😁😁',
      time: '10:00',
      sender: false,
    },
    {
      id: '5',
      text: 'Good, thanks Jenny...',
      time: '10:01',
      sender: true,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);


  const [typedMessage, setTypedMessage] = useState(''); // State to track typed message
  const flatListRef = useRef(null); // Ref to the FlatList


  function toggleModal () {
    setModalVisible(!modalVisible)
  }

  // Function to handle sending the message
  const handleSendMessage = () => {
    if (typedMessage.trim()) {
      const newMessage = {
        id: String(messages.length + 1),
        text: typedMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: true,
      };

      setMessages([...messages, newMessage]); // Add the new message to the messages array
      setTypedMessage(''); // Clear the input field
      Keyboard.dismiss(); // Dismiss the keyboard
      // Scroll to the end after the new message is added
      setTimeout(() => {
        if (flatListRef.current) {
          flatListRef.current.scrollToEnd({ animated: true });
        }
      }, 100);
    }
  };
  const renderMessage = ({ item } : any) => (
    <View
      style={[
        styles.messageContainer,
        item.sender ? styles.senderMessage : styles.receiverMessage,
      ]}
    >
      <Text style={[
            item.sender ? styles.senderMessageText : styles.receiverMessageText,
        ]}>{item.text}</Text>
      <Text style={  [item.sender ? styles.senderMessageTime : styles.receiverMessageTime,]}>{item.time}</Text>
    </View>
  );

  return (
    <LinearGradient
    // Define the colors for the gradient
    colors={["#1C0D24", "#6A318A"]}
    // Apply the gradient at an angle of roughly 174 degrees
    start={{ x: 0.5, y: 0 }} // Starting point of the gradient
    end={{ x: 0.1, y: 1 }}
    style={{ ...StyleSheet.absoluteFillObject , }}
  >
    <StatusBar
      barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
      // backgroundColor="#6200EE"
    />
    <TopNavBar
      title={"Jenny Wilson"}
      backBtnWithTitle={true}
      phoneDot={true}
      style={{
        padding: 10,
        marginTop: 30,
      }}
    />
    
   <View style={{flexDirection:'row',
    
    borderWidth:1,
    borderColor:allColors.stroke,
    margin:15,
    borderRadius:25,
    paddingHorizontal:20,justifyContent:'space-between',alignItems:'center'}}>
   <View>
      <Text style={{...getTypography(16,22,allColors.text100,allFonts.URBANIST_Bold)}}>Cleaning</Text>
      <Text style={{...getTypography(12,22,allColors.text100,allFonts.URBANIST)}}>$200</Text>
    </View>
    <LongButton 
    onPress={toggleModal}
    title={'accept'} style={{width:120,height:40}}/>


   </View>

    <View style={styles.container}>
  

      {/* Chat messages */}
      <FlatList
         ref={flatListRef} // Attach the ref to the FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesList}
      />

      {/* Input area */}
      <View style={styles.inputContainer}>
       
       <View style={{

        backgroundColor:'#ffff',
        flexDirection:'row',
       
       

        borderWidth:1.5,
        borderColor:allColors.stroke,
        borderRadius:15,
        flex: 1,
        marginRight:8,

       }}>
       <TextInput
       selectionColor={allColors.primary1000}
        multiline={true}
        // numberOfLines={6}
        style={styles.input} placeholder="Message..." placeholderTextColor={allColors.text500}
           value={typedMessage}
           onChangeText={(text) => setTypedMessage(text)} // Update typed message state
 
        
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="image-outline" size={28} color="#9E9E9E" style={styles.iconButton} />
        </TouchableOpacity>
       </View>

        {typedMessage.trim() ? (
          <TouchableOpacity onPress={handleSendMessage}>
            <MaterialCommunityIcons name="send" size={28} color="#fff" style={styles.iconButtonSend} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <MaterialCommunityIcons name="microphone-outline" size={28} color="#fff" style={styles.iconButtonMic} />
          </TouchableOpacity>
        )}
     
      </View>
    </View>

    <SuccessModal 
      visible={modalVisible} 
      toggleModal={toggleModal}
      onPress={() => {
        toggleModal();
        router.replace('/(drawer)/(tabs)/bookings')
      }}
      title={"Cancel Booking Successful!"}
      subTitle={" You have successfully canceled your service booking. 80% funds will be returned to your account."}
      
      />

    </LinearGradient>
  );
};

export default Chat;


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#3a0a54', // Same as main background, or use gradient
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  chatTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    marginLeft: 16,
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  messageContainer: {
    maxWidth: '75%',
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    alignSelf: 'flex-start', // Default for receiver messages (left side)
  },
  senderMessage: {
    backgroundColor: allColors.primary1000, // Orange bubble for sender
    alignSelf: 'flex-end',
  },
  receiverMessage: {
    backgroundColor: allColors.text200, // White bubble for receiver
  },
  senderMessageText: {
   ...getTypography(16,22,allColors.white,allFonts.URBANIST)
  },

  receiverMessageText: {
    ...getTypography(16,22,allColors.text1000,allFonts.URBANIST)

  },
  senderMessageTime:{
    ...getTypography(14,22,allColors.white,allFonts.URBANIST),
    textAlign: 'right',
    marginTop: 4,

  },

  receiverMessageTime:{
    ...getTypography(14,22,allColors.text600,allFonts.URBANIST),
    textAlign: 'right',
    marginTop: 4,

  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
    paddingVertical:12,
    // backgroundColor: '#fff',
    // borderRadius: 30,
    marginHorizontal:12,
  
  

  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    // paddingHorizontal: 10,
    paddingVertical: 6,
    // borderRadius: 50,
    // backgroundColor: 'red',
    // marginVertical:10,
    marginLeft:15,
    minHeight: 50,
    maxHeight: 150,
   
   
  },
  iconButton: {
    padding: 8,
    marginHorizontal: 5,
  },
  iconButtonMic: {
    padding: 8,
    backgroundColor: '#FF8F6B',
    borderRadius: 50,
  },
  iconButtonSend: {
    padding: 8,
    backgroundColor: '#FF8F6B',
    borderRadius: 50,
  },
});

