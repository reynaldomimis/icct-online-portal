import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SchoolYear = () => {
  const [selectedYear, setSelectedYear] = useState();

  return (
    <View>
      <Text style={styles.headtext}>School Year:</Text>
      <View style={styles.pickerborder}>
        <Picker
          selectedValue={selectedYear}
          onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
        >
          <Picker.Item
            style={{ fontSize: 10 }}
            label="2021-2022"
            value="2021-2022"
          />
          <Picker.Item
            style={{ fontSize: 10 }}
            label="2022-2023"
            value="2022-2023"
          />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headtext: {
    width: 80,
    height: 18,
    fontSize: 12,
  },
  pickerborder: {
    borderWidth: 1,
  },
});

export default SchoolYear;
