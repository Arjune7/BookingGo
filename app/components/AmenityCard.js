import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default AmenityCard = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        borderWidth: 0.5,
        padding: 20,
        borderRadius: 10,
        width: 120,
        height: 120,
        gap: 20,
      }}
    >
      <Ionicons name="bed" size={40} />
      <Text style={{ fontSize: 15 }}> 1 bed</Text>
    </View>
  );
};
