import { Text, View,StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NotFound from '@/components/NotFound';
import { UPCOMING_BOOKINGS_DATA } from '@/data/data';
import BookingCard from '@/components/BookingCard';
import { allColors } from '@/constants/Colors';
import { router } from 'expo-router';


export default function CancelledScreen() {
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
        paddingHorizontal: 12,
      }}
    >
      {UPCOMING_BOOKINGS_DATA.length === 0 ? (
        <NotFound
          title={"You have no upcoming booking"}
          subTitle={
            "You do not have a upcoming booking. Make a new booking by clicking the button below"
          }
        />
      ) : (
        <ScrollView>
          {UPCOMING_BOOKINGS_DATA.map((item) => {
            return <BookingCard
            key={item.id}
            item={item} 
            screenName={"Cancelled"}
            badgeTitle={"Cancelled"}
            badgeBackgroundColor={ allColors.primary200}
            badgeTextColor={allColors.primary1000}
  
            contentHeight={300}
            bookAgain={()=> router.push('/screens/PaymentScreens/PaymentMethods')}
            showButton={true}
        
          
            
            />;
          })}
        </ScrollView>
      )}
    </LinearGradient>
  );
}
