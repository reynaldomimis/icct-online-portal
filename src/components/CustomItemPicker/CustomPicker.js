import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import styles from "./styles";

const CustomPicker = () => {
  const [selectedValue, setSelectedValue] = useState("Freshmen");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 150, }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Freshmen" value="Freshmen" />
        <Picker.Item label="Junior" value="Junior" />
        <Picker.Item label="Junior College" value="Junior College" />
        <Picker.Item label="Senior High" value="Senior High" />
        <Picker.Item label="Junior High" value="Junior High" />
        <Picker.Item label="Fresh High" value="Fresh High" />

      </Picker>
    </View>
  );
}


export default CustomPicker;