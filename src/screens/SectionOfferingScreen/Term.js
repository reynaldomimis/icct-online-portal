import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Term = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text>Term:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="First" value="" />
        <Picker.Item label="Second" value="" />
        <Picker.Item label="Third" value="" />
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

export default Term;