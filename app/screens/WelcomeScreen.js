import {
  Dimensions,
  Image,
  ImageBackground,
  View,
  Text,
  Animated,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import Ionicons from "@expo/vector-icons/Ionicons";
const pic = require("../assets/images/logo4.png");

export default WelcomeScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("screen");
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 3500);

    return () => clearTimeout(timer);
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
        <Image
          source={pic}
          style={{
            resizeMode: "center",
          }}
        />
      </View>
    </SafeAreaView>
  );
};
