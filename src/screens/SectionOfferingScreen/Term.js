import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Term = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>Term:</Text>
      <View style={styles.pickerborder}>
      <Picker
      mode="dropdown"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item 
        style={{fontSize: 14 }}
        label="First" 
        value="" 
        />
        
        <Picker.Item 
        style={{fontSize: 14 }}
        label="Second" 
        value="" 
        />

        <Picker.Item
        style={{fontSize: 14 }}
         label="Third" 
         value="" 
         />

      </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 45,
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

export default Term;