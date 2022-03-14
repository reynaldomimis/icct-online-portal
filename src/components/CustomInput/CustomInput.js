import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

const CustomInput = (props) => {
  const { value, setValue, placeholder, secureTextEntry, keyboardType } = props;
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.Input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;
