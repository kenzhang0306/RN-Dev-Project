import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { getFavoriteMeals } from "../store/slices/MealsSlice";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

export default function MealList(props) {
  const favoriteMeals = useSelector(getFavoriteMeals);
  const navigation = useNavigation();

  const renderMealItem = ({ item }) => {
    // For changing the favorite icon.
    // When we get a single item, we check if it's a favorite
    const isFavorite = favoriteMeals.some((meal) => meal.id === item.id);
    // console.log(isFavorite);

    // DON'T FORGET RETURN
    return (
      <MealItem
        data={item}
        onSelectCallback={(itemData) => {
          navigation.navigate("MealDetail", {
            ItemDetails: itemData,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id} // Modern versions of RN automatically detect the key. Thus, keyExtractor is not needed!
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
