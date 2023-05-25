import { View, Text, Button, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MealDetailScreen(props) {
  const route = useRoute();
  const title = route.params?.ItemDetails.title;
  const ingredients = route.params?.ItemDetails.ingredients;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Go Back!"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Text>{title}</Text>
      {ingredients.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
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
