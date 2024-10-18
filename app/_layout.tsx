import React from "react";
import { Slot } from "expo-router"; // Expo Router's Slot component
import { Provider } from "react-redux";
import { store } from "../redux/store"; // Adjust the path to your store
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Host, Portal } from 'react-native-portalize';

const Layout = () => {
  return (

    <Provider store={store}>
        <GestureHandlerRootView>
          <Host>


        {/* Slot will render the appropriate screen based on the route */}
        <Slot />
        </Host>
   
    </GestureHandlerRootView>


    </Provider>

  );
};

export default Layout;
