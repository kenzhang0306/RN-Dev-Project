import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, AppearanceProvider } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Colors from "./constants/Colors";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { NativeWindStyleSheet } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";
import BottomTabNavigation from "./components/BottomTabNavigation";
import CustomHeaderButton from "./components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ThemeProvider } from "./ThemeMode/ThemeProvider";
import SettingsScreen from "./screens/SettingsScreen";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import DarkModeSwitch from "./components/DarkModeSwitch";
import { getHeaderTitle } from "./store/slices/HeaderTitleSlice";

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
      }
    };
    onLayoutRootView();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const screenOptions = {
    //headerShown: false,
    animation: "slide_from_right", // Change the animation type according to your preference
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
  };

  // const screenOptionsTab = ({ route }) => ({
  //   tabBarIcon: ({ color, size }) => {
  //     let iconName;

  //     if (route.name === "CategoriesTab") {
  //       iconName = "category";
  //     } else if (route.name === "FavoritesTab") {
  //       iconName = "favorite";
  //     }

  //     return <MaterialIcons name={iconName} size={size} color={color} />;
  //   },
  //   tabBarStyle: {
  //     height: 80, // Set the height of the tab bar
  //     backgroundColor: Colors.primaryColor,
  //   },
  //   tabBarLabelStyle: {
  //     //color: "red", // Set the color of the label text
  //     fontSize: 14,
  //   },
  //   tabBarActiveTintColor: "orange", // Set the color of active tabs
  //   tabBarInactiveTintColor: "gray", // Set the color of inactive tabs
  //   headerShown: false, // Remove the header for all screens
  // });

  // const CategoriesScreenTab = () => {
  //   return (
  //     <Tab.Navigator screenOptions={screenOptionsTab}>
  //       <Tab.Screen
  //         name="CategoriesTab"
  //         component={CategoriesScreen}
  //         options={{ tabBarLabel: "Categories" }}
  //       />
  //       <Tab.Screen
  //         name="FavoritesTab"
  //         component={FavoritesScreen}
  //         options={{ tabBarLabel: "Favorites" }}
  //       />
  //     </Tab.Navigator>
  //   );
  // };

  const renderHeaderRight = () => {
    return (
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

  const CategoriesScreenTab = () => {
    return <BottomTabNavigation />;
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#5b18ad"
          barStyle="dark-content"
        />

        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreenTab}
            options={{
              headerRight: () => <DarkModeSwitch />,
            }}
          />
          <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
