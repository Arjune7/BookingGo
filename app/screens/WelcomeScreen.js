import {
  Dimensions,
  Image,
  ImageBackground,
  View,
  Text,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@expo/vector-icons/Ionicons";
const pic = require("../assets/images/logo4.png");

export default WelcomeScreen = () => {
  const { width, height } = Dimensions.get("screen");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          marginTop: height * 0.25,
        }}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image
            source={pic}
            style={{
              resizeMode: "center",
            }}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
