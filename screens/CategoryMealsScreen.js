import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryMealsScreen(props) {
  const route = useRoute();
  //Since the route parameters may not always be available, we use the optional chaining operator (?.) to avoid potential errors if the parameters are undefined.
  const itemId = route.params?.categoryId;
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === itemId
  );
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="Go Back!"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Text>
        Item ID: {itemId}, Category Title: {selectedCategory.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
