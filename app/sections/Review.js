import { ScrollView, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card from "../components/Card";
import ShowMoreButton from "../components/ShowMoreButton";

export default Reviews = () => {
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="star" size={20} style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>4.90 </Text>
        <Ionicons
          name="ellipse"
          size={5}
          style={{ marginRight: 5, marginLeft: 5 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>180 Reviews</Text>
      </View>
      <ScrollView style={{ marginTop: 30 , marginBottom : 10 }} horizontal>
        <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
      <ShowMoreButton />
    </ScrollView>
  );
};
