import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const SchoolYear = () => {
  const [selectedYear, setSelectedYear] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>School Year:</Text>
      <View style={styles.pickerborder}>
        <Picker
        mode="dropdown"
          selectedValue={selectedYear}
          onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
        >
          
          <Picker.Item
            style={{fontSize: 14 }}
            label="2021-2022"
            value="2021-2022"
          />

          <Picker.Item
            style={{fontSize: 14 }}
            label="2022-2023"
            value="2022-2023"
          />

        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
  },
  headtext: {
    fontSize: 16,
    paddingBottom:5,
  },
  pickerborder: {
    borderWidth: 1,
    width: 150,
    height:45,
    borderRadius: 10,
  },
});

export default SchoolYear;
