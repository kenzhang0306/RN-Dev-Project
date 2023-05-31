import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Save(props) {
  const handleSave = () => {
    props.onSaveCallback();
  };
  return (
    <View>
      <Text onPress={handleSave}>
        <Ionicons name="ios-save-outline" size={30} color="white" />
      </Text>
    </View>
  );
}
