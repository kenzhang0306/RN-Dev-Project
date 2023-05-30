import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import DrawerNavigation from "./components/DrawerNavigation";
import { Provider } from "react-redux";
import store from "./store/store";

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

  // const screenOptions = {
  //   // headerShown: false,
  //   animation: "slide_from_right", // Change the animation type according to your preference
  //   headerStyle: {
  //     backgroundColor: Colors.primaryColor,
  //   },
  //   headerTintColor: "white",
  // };

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

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#5b18ad"
          barStyle="dark-content"
        />
        <DrawerNavigation />
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
