import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';


// Microphone permission
export const requestMicrophonePermission = async () => {
  const { status } = await Audio.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Microphone permission is required to use this feature.');
  }
  return status === 'granted';
};

// Camera permission
export const requestCameraPermission = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    alert('Camera permission is required to use this feature.');
  }
  return status === 'granted';
};

// Gallery permission
export const requestGalleryPermission = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert('Gallery permission is required to use this feature.');
  }
  return status === 'granted';
};

// Location permission
export const requestLocationPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Location permission is required to use this feature.');
  }
  return status === 'granted';
};

