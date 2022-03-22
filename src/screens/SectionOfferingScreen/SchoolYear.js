import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SchoolYear = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text>School Yeaar:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        
        <Picker.Item label="2022-2023" value="" />
        <Picker.Item label="2023-2024" value="" />
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

export default SchoolYear;