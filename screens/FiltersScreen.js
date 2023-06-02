import { View, Text, StyleSheet, Switch, Animated } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../store/slices/ThemeSlice";
import Save from "../components/Save";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { setFilteredMeals } from "../store/slices/MealsSlice";

export default function FiltersScreen(props) {
  const { navigation } = props;
  const theme = useSelector(getMode);
  const dispatch = useDispatch();
  const animation = useRef(new Animated.Value(0)).current;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoesFree, setIsLactoesFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  //const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginHorizontal: 20 }}>
              {
                <Save
                  onSaveCallback={() => {
                    saveFilters();
                  }}
                />
              }
            </View>
            <View>
              <DarkModeSwitch />
            </View>
          </View>
        );
      },
    });
  }, [navigation, isGlutenFree, isLactoesFree, isVegan, isVegetarian]);

  const getSavedMessage = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 3000, // Adjust the duration as per your needs
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 5000, // Adjust the duration as per your needs
        useNativeDriver: true,
      }).start();
    });
  };

  //warp a function so that this function is cached by react and only recreated if its dependencies changed.
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoesFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    //console.log(appliedFilters);
    dispatch(setFilteredMeals(appliedFilters));
    getSavedMessage();
  }, [isGlutenFree, isLactoesFree, isVegan, isVegetarian]);

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

  const animatedStyle = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0],
          outputRange: [300, 200],
        }),
      },
    ],
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
      <Animated.View style={[styles.fadingContainer, animatedStyle]}>
        <Text style={styles.fadingText}>
          Your filtered meal is ready now!!!
        </Text>
      </Animated.View>
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
  fadingContainer: {
    padding: 20,
    backgroundColor: "green",
    borderRadius: 10,
  },
  fadingText: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
});
