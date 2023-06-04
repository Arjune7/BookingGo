import { ScrollView, View, Text } from "react-native";
import CategoryIcons from "./CategoryIcons";
import { useEffect, useState } from "react";
import axios from "axios";

export default CategoryView = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://booking-go-backend-production.up.railway.app/destinations/getCategories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{ flex: 1, flexDirection: "row", gap: 30, paddingHorizontal: 5 }}
      >
        {categories.map((category , index) => {
          return (
            <CategoryIcons key={index} name={category.name} iconName={category.iconName}/>
          );
        })}
      </View>
    </ScrollView>
  );
};
