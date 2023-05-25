import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function MealDetailScreen(props) {
  const route = useRoute();

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Go Back!"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Text>{route.params?.ItemDetails.title}</Text>
      {route.params?.ItemDetails.ingredients.map((item, index) => {
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
