import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import React, { useState } from "react";
import CATEGORIES from "../config/CATEGORIES";
import COLORS from "../config/COLORS";
import TOURS from "../config/TOURS";
import ADVANTURES from "../config/ADVANTURES";
import SPACING from "../config/SPACING";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchBar from "../components/HomeScreenComponents/SearchBar";
import HostCard from "../components/HostCard";
import CategoryView from "../components/HomeScreenComponents/CategoryView";
import DestinationCard from "../components/HomeScreenComponents/DestinationCard";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const handleCardPress = (destination) => {
    // Navigate to the desired page based on the destination
    navigation.navigate("TourPage", { destination });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: height * 0.04,
          }}
        >
          <SearchBar />
          <CategoryView />
        </View>
        <ScrollView style={{ marginTop: 20 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <DestinationCard onCardPress={handleCardPress} />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
