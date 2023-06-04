import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import SPACING from "../../config/SPACING";
import COLORS from "../../config/COLORS";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default DestinationCard = ({ onCardPress }) => {
  const [destinations, setDestinations] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://booking-go-backend-production.up.railway.app/destinations/getAll"
      );
      setDestinations(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);


  const { width, height } = Dimensions.get("screen");

  return (
    <View style={{ padding: 2 }}>
      {destinations.map((destination, index) => {
        return (
          <View style={{ marginBottom: 35 }}>
            <TouchableOpacity
              style={{
                width: width * 0.85,
                height: height * 0.35,
                backgroundColor: COLORS.white,
                borderRadius: SPACING,
                marginBottom: SPACING,
              }}
              key={index}
              onPress={() => onCardPress(destination)}
            >
              <Image
                source={{ uri: destination.Photos }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: SPACING,
                }}
              />
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontWeight: "500", fontSize: 15 }}>
                {destination.name}
              </Text>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Ionicons name="star" size={15} color={COLORS.orange} />
                <Text
                  style={{ fontWeight: "500", marginRight: 10, fontSize: 15 }}
                >
                  {destination.rating}
                </Text>
              </View>
            </View>
            <Text>Stay with Melo</Text>
            <Text>9 - 15 oct</Text>
            <Text>{destination.price} per night</Text>
          </View>
        );
      })}
    </View>
  );
};
