import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export default function MealDetailScreen(props) {
  const route = useRoute();
  const title = route.params?.ItemDetails.title;
  const ingredients = route.params?.ItemDetails.ingredients;
  const navigation = useNavigation();

  const renderHeaderRight = () => {
    return (
      // <TouchableNativeFeedback
      //   onPress={() => {
      //     //TODO
      //     props.navigation.popToTop();
      //   }}
      // >
      //   <Text style={{ marginRight: 10 }}>Custom Button</Text>
      // </TouchableNativeFeedback>

      //you can add multiple items
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => {
            // Handle button press here
          }}
        />
      </HeaderButtons>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: renderHeaderRight,
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
