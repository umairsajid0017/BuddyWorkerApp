import { Tabs} from "expo-router";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { allColors } from "@/constants/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HomeDefault from '@/assets/svgs/Home_Default.svg'
import HomeVariant from '@/assets/svgs/Home_Variant.svg'
import AssignedVariant from '@/assets/svgs/assigned_Variant.svg'
import AssignedDefault from '@/assets/svgs/assigned_Default.svg'
import CartDefault from '@/assets/svgs/Cart_Default.svg'
import CartVariant from '@/assets/svgs/Cart_Variant.svg'
import ProfileDefault from '@/assets/svgs/Profile_Default.svg'
import ProfileVariant from '@/assets/svgs/Profile_Variant.svg'
import AnalyticsVariant from '@/assets/svgs/analytics_Variant.svg'
import AnalyticsDefault from '@/assets/svgs/analytics_Default.svg'

import  SearchFavourite from '@/assets/svgs/search-favorite.svg'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";


function CustomTabBarIcon({ focused, name }: any) {
  return (
    <View
      style={{
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome
        name={name}
        size={focused ? 26 : 24}
        color={focused ? "#fff" : "#888"}
      />
    </View>
  );
}

export default function TabLayout() {

  
const CustomTabBarButton = ({children, onPress} : any) => {

  return (
      <View style={{
        
        flex: 1,
         alignItems: 'center',
        backgroundColor: allColors.tertiary1000,
      //  width:'100%',
      // height:30,
      // borderRadius:25,
borderTopRightRadius:20,
borderTopLeftRadius:20,

// bottom:-30,
      
      }}>
       

     <View style={{  
      alignItems:'center',
      justifyContent:'center',
      top: -30,
      borderRadius:20,
      width:70,height:70,backgroundColor:allColors.secondary1000}}>
     <TouchableOpacity
              style={{
                
                  justifyContent: 'center',
                  alignItems: 'center',
                

                  width: 50,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: allColors.primary1000,
             
              }}
              onPress={onPress}>
                                      <SearchFavourite height={25} width={25} />

          </TouchableOpacity>
     </View>
     
      </View>
  );
};
  return (
 
    <View
    style={{ ...StyleSheet.absoluteFillObject ,backgroundColor:allColors.secondary1000}}
  >
    <StatusBar
      barStyle="light-content" // Set the text/icons to light content, use "dark-content" for dark text/icons
    />
        <Tabs
      
      screenOptions={{
        tabBarShowLabel: false,
        
       
      
        // tabBarActiveTintColor: allColors.primary100,
        
        tabBarStyle: {
          // bottom: 30,
          height: 60,
          // width:'100%',
          // borderWidth: 1,
          borderRadius: 50,
          // marginHorizontal: 10,
          justifyContent:'flex-start',
          alignItems:'flex-start',

          backgroundColor: 'transparent',
          // backgroundColor: 'green',
          borderTopWidth: 0,
          margin:10,
        },
        // tabBarLabelStyle: {
        //   fontSize: 12,
        //   fontWeight: "bold",
        //   marginBottom: 10,
        // },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        tabBarItemStyle:{
          borderTopLeftRadius:50,
          borderBottomLeftRadius:50,
          backgroundColor:allColors.tertiary1000},
          tabBarIcon: ({ focused }) => (

            focused ? <HomeVariant height={50} /> :

           
            <HomeDefault/>
          

          ),
        }}
      />

      <Tabs.Screen
        name="assigned"
        options={{
          headerShown: false,
        tabBarItemStyle:{
          
          borderTopRightRadius:25,
          
          backgroundColor:allColors.tertiary1000,},

          tabBarIcon: ({ focused }) => (
            focused ? <AssignedVariant height={50} /> :
          
            <AssignedDefault/>
          
          ),
        }}
      />


<Tabs.Screen
              name="search"
            
              options={{
                  headerShown: false,
                  tabBarItemStyle:{backgroundColor:allColors.tertiary1000,
                      height:35
            ,
            top:25,
            // borderTopLeftRadius:10,
            // borderTopRightRadius:10,


                  },
                  // tabBarIcon: ({focused}) => (
                  
                   
                  //    <View style={{backgroundColor:'red'
                  //     ,height:50,width:50,
                  //     top:-50,
                  //     borderRadius:10,
                  //     // borderWidth:5,borderColor:allColors.secondary1000
                      
                  //     }} >
                  //       <SearchFavourite height={25} width={25} />
                  //    </View>
                  

                
                   
                  // ),
                  tabBarButton: props => <CustomTabBarButton {...props} />,


                  // tabBarButton: props => <CustomTabBarButton {...props} />,
            
              }}
          />
           


      <Tabs.Screen
        name="analytics"
        options={{
          headerShown: false,
          tabBarItemStyle:{
            borderTopLeftRadius:25,
            backgroundColor:allColors.tertiary1000,},
          tabBarIcon: ({ focused }) => (
            focused ? <AnalyticsVariant height={50} /> :

          
               <AnalyticsDefault/>
           
           
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarItemStyle:{
            width:'100%',
            borderTopRightRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:allColors.tertiary1000,},
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            focused ? <ProfileVariant height={50} /> :

            <ProfileDefault/>
          ),
        }}
      />
    </Tabs>
   
</View>

   
  
  );
}
