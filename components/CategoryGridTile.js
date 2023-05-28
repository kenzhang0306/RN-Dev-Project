import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getMode } from "../store/slices/ThemeSlice";

export default function CategoryGridTile(props) {
  const { item } = props.data;
  const theme = useSelector(getMode);

  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelectCallback}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: item.color } }}
        >
          <Text
            style={{
              ...styles.title,
              ...{ color: theme === "light" ? "black" : "white" },
            }}
            numberOfLines={2}
          >
            {item.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});
