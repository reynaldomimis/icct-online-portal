import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ParentSection = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text>Year Level:</Text>
      <View style={styles.pickerborder}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 300}} borderStyle={{borderWidth: 4, borderColor: 'blue'}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="-section-" value="" />
        <Picker.Item label="OL22A17" value="" />
        <Picker.Item label="OL22A18" value="" />
        <Picker.Item label="OL22E14" value="" />
        <Picker.Item label="OL22E15" value="" />
        <Picker.Item label="OL22N12" value="" />
        <Picker.Item label="OL22N13" value="" />
        <Picker.Item label="OLRS132" value="" />
        <Picker.Item label="OLRS22" value="" />
      </Picker>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "center",
  },
  pickerborder: {
    borderWidth: 1,
  }
});

export default ParentSection;