import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default ShowMore = () => {
  return (
    <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 15,
          textDecorationLine: "underline",
        }}
      >
        Show More
      </Text>
      <Ionicons name="chevron-forward-outline" size={15} />
    </View>
  );
};
