import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Program = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>Program:</Text>
      <View style={styles.pickerborder}>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item 
        label="BSIT - BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY" 
        value="" 
        />

        <Picker.Item 
        label="BSCS - BACHELOR OF SCIENCE IN  COMPUTER SCIENCE" 
        value="" 
        />
       
      </Picker>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingBottom: 15,
  },
  headtext: {
    fontSize: 16,
    paddingBottom: 5,
    paddingTop: 15,
  },
  pickerborder: {
    borderWidth: 1,
    width: 345,
    height:45,
    borderRadius: 10,
  },
});

export default Program;