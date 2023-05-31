import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import React from "react";
import MyText from "./MyText";

export default function MealItem(props) {
  const { title, duration, complexity, affordbaility, imageUrl } = props.data;

  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback
        onPress={() => {
          props.onSelectCallback(props.data);
        }}
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <MyText>{duration} min</MyText>
            <MyText>{complexity.toUpperCase()}</MyText>
            <MyText>{affordbaility.toUpperCase()}</MyText>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 318,
    width: "100%",
    backgroundColor: "#c8cfca",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 5,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
