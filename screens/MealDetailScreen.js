import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyText from "../components/MyText";
import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen(props) {
  const route = useRoute();
  const mealId = route.params?.ItemDetails.id;
  const title = route.params?.ItemDetails.title;
  const ingredients = route.params?.ItemDetails.ingredients;
  const navigation = useNavigation();

  const selectedMeal = MEALS.find((meal) => mealId === meal.id);

  const renderHeaderRight = () => {
    return (
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

  const ListItem = (props) => {
    return (
      <View style={styles.listItem}>
        <MyText>{props.children}</MyText>
      </View>
    );
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.details}>
        <MyText>{selectedMeal.duration} min</MyText>
        <MyText>{selectedMeal.complexity.toUpperCase()}</MyText>
        <MyText>{selectedMeal.affordbaility.toUpperCase()}</MyText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => {
        return <ListItem key={index}>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => {
        return <ListItem key={index}>{step}</ListItem>;
      })}

      {/* <View style={styles.screen}>
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
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
    //height: "15%",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#CCC",
    borderWidth: 1,
    padding: 10,
  },
});
