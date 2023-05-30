import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import CategoryGridTile from "../components/CategoryGridTile";
import { useSelector, useDispatch } from "react-redux";
import { getMode } from "../store/slices/ThemeSlice";
import { setHeaderTitle } from "../store/slices/HeaderTitleSlice";

export default function CategoriesScreen(props) {
  const navigation = useNavigation();
  const theme = useSelector(getMode);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("drawerItemPress", (e) => {
      // Prevent default behavior
      //e.preventDefault();
      console.log("pressed");

      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: "Meal Categories",
  //   });
  // }, [navigation]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("tabPress", (e) => {
  //     //e.preventDefault();
  //     // Do something manually
  //     dispatch(setHeaderTitle("Meal Categories"));
  //   });

  //   return unsubscribe;
  // }, [navigation]);

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
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
