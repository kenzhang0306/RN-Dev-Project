import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen(props) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Meal Categories",
    });
  }, [navigation]);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        data={itemData}
        onSelectCallback={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
