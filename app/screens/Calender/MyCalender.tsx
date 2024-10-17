import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import TopNavBar from '@/components/TopNavBar';
import { LinearGradient } from 'expo-linear-gradient';
import { allColors } from '@/constants/Colors';
import SectionHeading from '../HomeScreens/SectionHeading';
import NotFound from '@/components/NotFound';
import { getTypography } from '@/styles';
import { allFonts } from '@/constants/Fonts';
import { UPCOMING_BOOKINGS_DATA } from '@/data/data';
import BookingCard from '@/components/BookingCard';
import TwoButtonsView from '@/components/TwoButtonsView';
import RawBottomSheet from '@/components/RawBottomSheet';
import CancelBookingModal from '@/components/SuccessModal';

const MyCalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const bottomSheetRef = useRef(null);
  const [item, setItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);


  const onDayPress = (day : any) => {
    setSelectedDate(day.dateString);
  };

  function toggleModal () {
    setModalVisible(!modalVisible)
  }

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
     
      title={"My Calendar"}
      backBtnWithTitle={true}
      dotBtn={true}
      style={{
        padding: 10,
        marginTop: 30,
      }}
    />
    
      {/* Calendar */}
  
    <ScrollView style={styles.container}>
    <Calendar
        style={{
            // borderWidth: 1,
            // borderColor: 'gray',
            // height: 350,
            backgroundColor:'rgba(249, 250, 251, 0.15)',
            marginTop:10,
            borderRadius:16,
            marginBottom:20,
            
          }}
          theme={{
            calendarBackground: 'tranparent',
            textSectionTitleColor: 'white',
            dayTextColor: 'white',
            todayTextColor: '#fc7359',
            selectedDayBackgroundColor: '#fc7359',
            selectedDayTextColor: 'white',
            arrowColor: '#fc7359',
            monthTextColor: 'white',
            textDisabledColor: '#4c3c62',
          }}
        
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: allColors.primary1000,
            },
          }}
        />

        <SectionHeading 
            isSeeAll={ selectedDate !== '' ? true : false }
        style={{paddingHorizontal:0 }} heading={
            selectedDate !== '' ?
             'Service Booking (3)' :
            'Service Booking (0)'}/>

      {selectedDate !== '' ?   
        
        UPCOMING_BOOKINGS_DATA.map((item) => {
            return (
              <BookingCard
                key={item.id}
                item={item}
                screenName={"Upcoming"}
                buttonBG={allColors.primary200}
                textColor={allColors.primary1000}
                contentHeight={380}
                showButton={true}
                title1={"Cancel Booking"}
                title2={"Chat"}
                onPress1={() => {
                  setItem(item);
                  bottomSheetRef.current.open();
                }}
              />
            );
          }) :

          <NotFound
          title={"You have no service booking"}
          subTitle={
            "You don't have a service booking on this date"
          }
          svgStyle={{marginTop:-15}}
          titleStyle={{marginTop:10,...getTypography(20,28,allColors.text100,allFonts.URBANIST_SEMIBOLD)}}
          subTitleStyle={{marginTop:10,...getTypography(14,22,allColors.text200,allFonts.URBANIST)}}
        />  
        
        }


<RawBottomSheet ref={bottomSheetRef} height={500}>
        <View
          style={{
            // backgroundColor:'red',
            padding: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              borderBottomWidth: 1,
              borderBottomColor: allColors.stroke,
              paddingBottom: 20,
              marginBottom: 20,
              textAlign: "center",
              ...getTypography(
                24,
                32,
                allColors.text1000,
                allFonts.URBANIST_Bold
              ),
            }}
          >
            Cancel Booking
          </Text>
          <BookingCard
            item={item}
            screenName={"Upcoming"}
            buttonBG={allColors.primary200}
            textColor={allColors.primary1000}
            contentHeight={380}
            showButton={false}
            style={{
              borderWidth: 1,
              borderColor: allColors.stroke,
            }}
            titleStyle={{ color: allColors.black }}
            subTitleStyle={{ color: allColors.black }}
          />

          <Text
            style={{
              marginTop: 10,

              textAlign: "center",
              ...getTypography(20, 28, "#212121", allFonts.URBANIST),
            }}
          >
            Are you sure want to cancel your service booking?
          </Text>

          <Text
            style={{
              marginTop: 10,
              marginBottom:15,

              textAlign: "center",
              ...getTypography(14, 22, "#424242", allFonts.URBANIST),
            }}
          >
            Only 80% of the money you can refund from your payment according to
            our policy
          </Text>
            <TwoButtonsView title1={'Cancel'} title2={'Yes, Cancel Booking'}
            onPress2={()=>{
            
              bottomSheetRef.current.close()
              toggleModal()
            }}
            style2={{flex:2}}/>

        </View>
      </RawBottomSheet>
 
    </ScrollView>

    <CancelBookingModal visible={modalVisible} toggleModal={toggleModal}/>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#361657',
    paddingHorizontal: 12,
    // paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendarContainer: {
    // backgroundColor: 'red',
    borderRadius: 20,
    // padding: 10,
    marginBottom: 30,
  },
  bookingContainer: {
    backgroundColor: '#512889',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  bookingTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  noBooking: {
    alignItems: 'center',
  },
  noBookingImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  noBookingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noBookingSubText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default MyCalendarScreen;
