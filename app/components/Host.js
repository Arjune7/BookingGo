import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SPACING from "../config/SPACING";
import HostCard from "./HostCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export default Host = () => {
  const { width, height } = Dimensions.get("screen");
  return (
    <ScrollView style={{ marginTop: 20, flexDirection: "column" }}>
      <Text style={{ fontSize: 25, fontWeight: "600" }}>Meet your Host</Text>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <HostCard />
      </View>
      <View style={{ marginTop: 30, flexDirection: "column" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="language-outline" size={25} />
          <Text style={{ fontSize: 15 }}>
            Speaks English , French , Mandrain
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Ionicons name="heart-outline" size={25} />
          <Text style={{ fontSize: 15 }}>What makes my home unique</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <Ionicons name="people-outline" size={25} />
          <Text style={{ fontSize: 15 }}>For my Guest here</Text>
        </View>
        <Text style={{ marginTop: 20, fontSize: 15, lineHeight: 25 }}>
          After living abroad for 6 years, I have put down my suitcases in Lyon
          and I am delighted to welcome guests in our cocoon in the heart of the
          Presqu'ile. As a roommate with Laurianne and Marco, we will make you
          feel at home and share our favorite places.
        </Text>
        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
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
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            marginTop: 20,
            width : width * 0.3,
            borderRadius : 10,
          }}
        >
          <Text style={{ color: "white", padding: 10 }}>Message Host</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
