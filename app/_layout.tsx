import React from 'react';
import { Slot } from 'expo-router';   // Expo Router's Slot component
import { Provider } from 'react-redux';
import { store } from '../redux/store';  // Adjust the path to your store

const Layout = () => {
  return (
    <Provider store={store}>
      {/* Slot will render the appropriate screen based on the route */}
      <Slot />
    </Provider>
  );
};

export default Layout;
