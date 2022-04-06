import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SchoolYear = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View>
      <Text style={styles.headtext}>School Year:</Text>
      <View style={styles.pickerborder}>
        <Picker
          mode="dropdown"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{ width: 150, height: 35, }}
          itemStyle={{}}
        >

          <Picker.Item label="2022-2023" value="" />
          <Picker.Item label="2023-2024" value="" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headtext: {
    width: 80,
    height: 18,
    fontSize: 12,
  },
  pickerborder: {
    borderWidth: 1,
    fontSize: 30,
  },
});

export default SchoolYear;