import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


export default categoryIcons = ({name , iconName}) => {

  return (
    <View style={{ flex: 1, flexDirection: "column" , alignItems :'center' }}>
      <Ionicons name={iconName} size={25} color="black" />
      <Text style={{fontSize : 12}}>{name}</Text>
    </View>
  );
};
