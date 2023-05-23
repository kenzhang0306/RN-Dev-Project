import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function FiltersScreen() {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
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
