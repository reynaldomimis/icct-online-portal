import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Program = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text>Program:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="BSIT-" value="" />
        <Picker.Item label="DHRM-" value="" />
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

export default Program;