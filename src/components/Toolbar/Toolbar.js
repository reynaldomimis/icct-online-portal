import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

const CustomToolbar = ({ label, bgColor, fgColor, onPress }) => {
  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: bgColor, color: fgColor },
      ]}
    >
      <Ionicons
        name={"arrow-back"}
        size={30}
        color={"#003CD6"}
        onPress={onPress}
      />
      <Text style={styles.headerTitle}>{label}</Text>
    </View>
  );
};

export default CustomToolbar;
