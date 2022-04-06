import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const YearLevel = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>Year Level:</Text>
      <View style={styles.pickerborder}>
      <Picker
        mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >

        <Picker.Item 
        style={{fontSize: 14 }}
        label="-level-" 
        value="" 
        />

        <Picker.Item 
        style={{fontSize: 14 }}
        label="First Year" 
        value="" 
        />
        
        <Picker.Item
        style={{fontSize: 14 }}
        label="Second Year" 
        value="" 
        />

        <Picker.Item
        style={{fontSize: 14 }}
        label="Third Year" 
        value="" 
        />

        <Picker.Item 
        style={{fontSize: 14 }}
        label="Fourth Year" 
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
  },
  headtext: {
    fontSize: 16,
    paddingBottom: 5,
    paddingTop: 15,
  },
  pickerborder: {
    borderWidth: 1,
    width: 150,
    height:45,
    borderRadius:10,
  },
});

export default YearLevel;