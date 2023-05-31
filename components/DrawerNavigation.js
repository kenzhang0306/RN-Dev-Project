import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import DarkModeSwitch from "./DarkModeSwitch";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import FiltersScreen from "../screens/FiltersScreen";
import CustomHeaderButton from "./HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DrawerNavigation() {
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const stackScreenOptions = {
    // headerShown: false,
    animation: "slide_from_right", // Change the animation type according to your preference
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
  };

  const CategoriesStackNavigator = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen
          name="Meal Categories"
          component={CategoriesScreen}
          options={{
            headerRight: () => <DarkModeSwitch />,
            headerLeft: () => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title="drawerMenu"
                    iconName="ios-menu"
                    onPress={() => {
                      navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
            // headerTitle: () => {
            //   return <HeaderTitle />;
            // },
          }}
        />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };

  const FavoritesStackNavigator = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen
          name="Favorites"
          options={{
            headerRight: () => <DarkModeSwitch />,
            headerLeft: () => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title="drawerMenu"
                    iconName="ios-menu"
                    onPress={() => {
                      navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          }}
          component={FavoritesScreen}
        />
      </Stack.Navigator>
    );
  };

  const SettingsStackNavigator = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen
          name="Settings"
          options={{
            headerRight: () => <DarkModeSwitch />,
            headerLeft: () => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title="drawerMenu"
                    iconName="ios-menu"
                    onPress={() => {
                      navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          }}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    );
  };

  const FiltersStackNavigator = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen
          name="Filter"
          options={{
            headerRight: () => <DarkModeSwitch />,
            headerLeft: () => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title="drawerMenu"
                    iconName="ios-menu"
                    onPress={() => {
                      navigation.toggleDrawer();
                    }}
                  />
                </HeaderButtons>
              );
            },
          }}
          component={FiltersScreen}
        />
      </Stack.Navigator>
    );
  };

  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="CategoriesTab"
        activeColor="orange"
        inactiveColor="grey"
        labelStyle={{ fontSize: 12 }}
        barStyle={{
          backgroundColor: Colors.primaryColor,
        }}
        shifting={true}
      >
        <Tab.Screen
          name="CategoriesTab"
          component={CategoriesStackNavigator}
          options={{
            tabBarLabel: (
              <Text style={{ fontFamily: "open-sans-bold" }}>
                Meal Categories
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="category" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="FavoritesTab"
          component={FavoritesStackNavigator}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsStackNavigator}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const drawerScreenOptions = {
    headerShown: false,
    drawerActiveTintColor: Colors.accentColor,
    drawerLabelStyle: {
      fontFamily: "open-sans-bold",
    },
  };

  const CustomDrawerContent = (props) => {
    const handleDrawerItemPress = (screenName) => {
      props.navigation.navigate(screenName);
    };

    return (
      <DrawerContentScrollView>
        {/* <DrawerItemList {...props} screenOptions={drawerScreenOptions} /> */}
        <DrawerItem
          label="Meal Categories"
          labelStyle={{
            fontFamily: "open-sans-bold",
            color: Colors.accentColor,
            fontSize: 16,
          }}
          icon={() => (
            <MaterialIcons
              name="category"
              color={Colors.accentColor}
              size={26}
            />
          )}
          onPress={() => {
            handleDrawerItemPress("MealCategoriesDrawer");
            handleDrawerItemPress("CategoriesTab");
          }}
        />
        <DrawerItem
          label="Filter"
          labelStyle={{
            fontFamily: "open-sans-bold",
            color: Colors.accentColor,
            fontSize: 16,
          }}
          icon={() => (
            <MaterialIcons
              name="filter-list-alt"
              color={Colors.accentColor}
              size={26}
            />
          )}
          onPress={() => handleDrawerItemPress("FilterDrawer")}
        />
      </DrawerContentScrollView>
    );
  };

  //nested navigation drawer wrap -> bottom tap wrap -> stack
  return (
    <Drawer.Navigator
      // initialRouteName="MealCategoriesDrawer"
      screenOptions={drawerScreenOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MealCategoriesDrawer"
        options={{
          drawerLabel: "Meal Categories",
        }}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="FilterDrawer"
        options={{
          drawerLabel: "Filter",
        }}
        component={FiltersStackNavigator}
      />
    </Drawer.Navigator>
  );
}
