import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";

export default function CustomHeaderButton(props) {
  return (
    <View style={{ marginRight: 10 }}>
      <HeaderButton
        {...props}
        iconSize={23} // Optional, specify the icon size
        color={props.color} // Optional, specify the icon color
        IconComponent={Ionicons} // Optional, specify a custom icon component
        iconProps={{ style: { marginBottom: 2 } }} // Optional, specify custom icon props
      />
    </View>
  );
}
