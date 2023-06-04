import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: "80%",
        marginVertical: 10,
        elevation: 10,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}>
        <Ionicons name="search" size={20} style={{ alignSelf: "center" }} />
        <View style={{ flex: 1, flexDirection: "column", marginLeft: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Where To?</Text>
          <Text style={{ fontSize: 10 }}>Destination, City, Landmark</Text>
        </View>
        <Ionicons
          name="ellipsis-horizontal-circle-outline"
          size={25}
          style={{ alignSelf: "center" }}
          
        />
      </View>
    </View>
  );
};
