import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const CustomButton = (props) => {
  const { onPress, text, type = "PRIMARY", bgColor, fgColor } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.Text,
          styles[`Text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
