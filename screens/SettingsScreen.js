import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getMode, toggleTheme } from "../store/slices/ThemeSlice";

const SettingsScreen = () => {
  const theme = useSelector(getMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <View
      style={{
        ...styles.container,
        ...{ backgroundColor: theme === "light" ? "white" : "black" },
      }}
    >
      <Text
        style={{
          ...styles.text,
          ...{ color: theme === "light" ? "black" : "white" },
        }}
      >
        Light / Dark
      </Text>
      <View style={styles.switchContainer}>
        <Switch
          value={theme === "dark"}
          onValueChange={handleToggleTheme}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme === "dark" ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  switchContainer: {
    marginTop: 20,
  },
});

export default SettingsScreen;
