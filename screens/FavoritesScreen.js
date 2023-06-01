import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../store/slices/ThemeSlice";
import { setHeaderTitle } from "../store/slices/HeaderTitleSlice";
import { getFavoriteMeals } from "../store/slices/MealsSlice";
import MyText from "../components/MyText";
import MealList from "../components/MealList";

export default function FavoritesScreen({ navigation }) {
  //const navigation = useNavigation();
  const theme = useSelector(getMode);
  const route = useRoute();
  const dispatch = useDispatch();
  const favMeals = useSelector(getFavoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View
        style={{
          ...styles.screen,
          ...{ backgroundColor: theme === "light" ? "white" : "black" },
        }}
      >
        <MyText style={{ color: theme === "light" ? "black" : "white" }}>
          No favorite meals found.
        </MyText>
      </View>
    );
  }

  return (
    <View
      style={{
        ...styles.screen,
        ...{ backgroundColor: theme === "light" ? "white" : "black" },
      }}
    >
      <MealList listData={favMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
