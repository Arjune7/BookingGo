import { ScrollView, Text, View, Image } from "react-native";
import SPACING from "../config/SPACING";
import Ionicons from "@expo/vector-icons/Ionicons";

export default HostCard = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: "90%",
        marginVertical: 10,
        elevation: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            style={{
              height: SPACING * 10,
              width: SPACING * 10,
              borderRadius: SPACING * 5,
            }}
            source={require("../assets/images/Avatar.png")}
          />
          <Text style={{ fontSize: 30, fontWeight: "600" }}>Arjun</Text>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Host</Text>
        </View>

        <View style={{ flexDirection: "column", width: 100 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>9</Text>
          <Text style={{ fontSize: 10 }}>Reviews</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              justifyContent :'flex-start'
            }}
          >
            <Text
              style={{
                borderTopWidth: 0.5,
                fontSize: 20,
                fontWeight: "bold",
                width: 50,
              }}
            >
              5.0
            </Text>
            <Ionicons name="star" size={15} />
          </View>

          <Text style={{ fontSize: 10 }}>Rating</Text>

          <Text
            style={{
              borderTopWidth: 0.5,
              marginTop: 10,
              fontSize: 20,
              fontWeight: "bold",
              width: 50,
            }}
          >
            8
          </Text>
          <Text style={{ fontSize: 10 }}>Years of Hosting</Text>
        </View>
      </View>
    </View>
  );
};
