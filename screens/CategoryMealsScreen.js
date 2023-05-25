import { View, Text, Button, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

export default function CategoryMealsScreen(props) {
  const route = useRoute();
  const navigation = useNavigation();
  //Since the route parameters may not always be available, we use the optional chaining operator (?.) to avoid potential errors if the parameters are undefined.
  const itemId = route.params?.categoryId; //得到頁面導航的跳轉參數
  const itemTitle = route.params?.categoryTitle;
  // const selectedCategory = CATEGORIES.find(
  //   (category) => category.id === itemId
  // );

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(itemId) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: itemTitle,
    });
  }, [navigation]);

  const renderMealItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
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
