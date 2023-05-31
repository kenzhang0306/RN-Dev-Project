import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";
import { getMode } from "../store/slices/ThemeSlice";

export default function FiltersScreen() {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoesFree, setIsLactoesFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const theme = useSelector(getMode);

  const handleValueChange = (value, type) => {
    switch (type) {
      case "glutenFree":
        setIsGlutenFree(value);
        console.log(type);
        break;
      case "lactoseFree":
        setIsLactoesFree(value);
        console.log(type);
        break;
      case "vegan":
        setIsVegan(value);
        console.log(type);
        break;
      case "vegetarian":
        setIsVegetarian(value);
        console.log(type);
        break;
      default:
        return;
    }
  };

  const FilterSwitch = (props) => {
    return (
      <View style={styles.filterContainer}>
        <Text style={{ color: theme === "light" ? "black" : "white" }}>
          {props.label}
        </Text>
        <Switch
          trackColor={{ false: "grey", true: Colors.primaryColor }}
          thumbColor={theme === "dark" ? "#f5dd4b" : Colors.accentColor}
          value={props.state}
          onValueChange={(value) => {
            console.log(value);
            props.onValueChangeCallback(value);
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        ...styles.screen,
        ...{
          backgroundColor: theme === "light" ? "white" : "black",
        },
      }}
    >
      <Text
        style={{
          ...styles.title,
          ...{ color: theme === "light" ? "black" : "white" },
        }}
      >
        Available Filters / Restrictions
      </Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onValueChangeCallback={(newValue) => {
          handleValueChange(newValue, "glutenFree");
        }}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoesFree}
        onValueChangeCallback={(newValue) => {
          handleValueChange(newValue, "lactoseFree");
        }}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onValueChangeCallback={(newValue) => {
          handleValueChange(newValue, "vegan");
        }}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onValueChangeCallback={(newValue) => {
          handleValueChange(newValue, "vegetarian");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40%",
    marginVertical: 20,
  },
});
