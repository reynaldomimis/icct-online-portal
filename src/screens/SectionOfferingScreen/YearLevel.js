import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const YearLevel = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text>Year Level:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="-level-" value="" />
        <Picker.Item label="First Year" value="" />
        <Picker.Item label="Second Year" value="" />
        <Picker.Item label="Third Year" value="" />
        <Picker.Item label="Fourth Year" value="" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "center"

  }
});

export default YearLevel;