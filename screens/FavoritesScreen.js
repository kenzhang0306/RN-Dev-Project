import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../store/slices/ThemeSlice";
import { setHeaderTitle } from "../store/slices/HeaderTitleSlice";

export default function FavoritesScreen({ navigation }) {
  //const navigation = useNavigation();
  const theme = useSelector(getMode);
  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("Favorites"));
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior

      //e.preventDefault();
      // Do something manually
      console.log(route.name);
      dispatch(setHeaderTitle("Favorites"));
    });

    return unsubscribe;
  }, [navigation]);

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "light" ? "white" : "black",
    },
    text: {
      color: theme === "light" ? "black" : "white",
      fontSize: 24,
    },
  });

  // useLayoutEffect(() => {
  //   dispatch(setHeaderTitle("Favorites"));
  //   navigation.setOptions({
  //     title: "Favorites",
  //   });
  // }, [navigation]);
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Favorites Screen</Text>
    </View>
  );
}
