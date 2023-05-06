import { View, Text, Image, Dimensions } from "react-native";
import SPACING from "../config/SPACING";

export default Card = () => {
    const {width , height} = Dimensions.get('screen')
  return (
    <View style={{ borderWidth: 1, borderRadius: 10 }}>
      <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
        <Image
          style={{
            height: SPACING * 4,
            width: SPACING * 4,
            borderRadius: SPACING * 5,
          }}
          source={require("../assets/images/Avatar.png")}
        />
        <View style={{ flexDirection: "column", marginBottom: 10 }}>
          <Text style={{ fontSize: 20 }}>Arjun</Text>
          <Text style={{ fontSize: 10 }}>March 2023</Text>
        </View>
      </View>
      <Text style={{ padding: 10, width : width * 0.7}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit
      </Text>
    </View>
  );
};
