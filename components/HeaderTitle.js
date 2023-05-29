import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderTitle } from "../store/slices/HeaderTitleSlice";

export default function HeaderTitle() {
  const headerTitle = useSelector(getHeaderTitle);
  return (
    <View>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
