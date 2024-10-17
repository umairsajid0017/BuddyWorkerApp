import React from "react";
import {
  StyleSheet,
  View
} from "react-native";

import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";

const LoaderScreen = () => {
  const router = useRouter();




  return (
  <View style={{flex:1}}>
    <LottieView
                //ref={animation}
                style={{
                    width: 500,
                    height: 500,
                    backgroundColor: '#eee',
                  }}
                source={require('@/assets/animations/dots-loader.json')}
                autoPlay={true}
                loop={true}
            />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "red",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  backgroundSvg: {
    position: "absolute", // Positions it behind other elements
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  heartLottie: {
    height: 150,
        width:150,
    backgroundColor:'red'
},
});

export default LoaderScreen;
