import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function MealDetailScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Go Back!"
        onPress={() => {
          props.navigation.popToTop();
        }}
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
