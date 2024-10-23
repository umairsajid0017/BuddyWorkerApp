import { Text, View ,StyleSheet, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { UPCOMING_BOOKINGS_DATA } from '@/data/data';
import NotFound from '@/components/NotFound';
import BookingCard from '@/components/BookingCard';
import { allColors } from '@/constants/Colors';


export default function CompletedScreen() {
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
          title={"You have no completed booking"}
          subTitle={
            "You do not have a completed booking. Make a new booking by clicking the button below"
          }
        />
      ) : (
        <ScrollView>
          {UPCOMING_BOOKINGS_DATA.map((item) => {
            return <BookingCard 
            key={item.id}
            item={item}
             screenName={"Completed"} 
             badgeTextColor={allColors.success800}
             badgeBackgroundColor={allColors.success300}
             badgeTitle={"Completed"}

            contentHeight={750}
            title1={'Book Again'}
            title2={'View Receipt'}
            showButton={true}

            />;
          })}
        </ScrollView>
      )}
    </LinearGradient>
  );
}
