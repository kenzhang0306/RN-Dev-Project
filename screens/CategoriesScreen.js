import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function CategoriesScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate("CategoryMeals");
          //props.navigation.replace("CategoryMeals"); //replce can use in login as we dont wanna user go back to login screen
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
