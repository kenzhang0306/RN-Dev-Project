import { View, Text, Button, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

export default function CategoryMealsScreen(props) {
  const route = useRoute();
  const navigation = useNavigation();
  //Since the route parameters may not always be available, we use the optional chaining operator (?.) to avoid potential errors if the parameters are undefined.
  const itemId = route.params?.categoryId; //得到頁面導航的跳轉參數
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === itemId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [navigation]);

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
        Item ID: {itemId}, Category Title: {selectedCategory.title}, Router
        Params:
        {route.params?.categoryTitle}
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
