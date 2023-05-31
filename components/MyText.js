import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MyText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
  },
});
