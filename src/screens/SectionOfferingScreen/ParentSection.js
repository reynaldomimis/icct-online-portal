import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ParentSection = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>Parent Section:</Text>
      <View style={styles.pickerborder}>
        <Picker
        mode="dropdown"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
        >
          <Picker.Item 
          style={{fontSize: 14 }}
          label="-section-" 
          value="" 
          />

          <Picker.Item 
          style={{fontSize: 14 }}
          label="OL22A17" 
          value="" 
          />

          <Picker.Item 
          style={{fontSize: 14 }}
          label="OL22A18" 
          value="" 
          />

          <Picker.Item 
          style={{fontSize: 14 }}
          label="OL22E14" 
          value="" 
          />

          <Picker.Item 
          style={{fontSize: 14 }}
          label="OL22E15" 
          value="" 
          />

          <Picker.Item 
          style={{fontSize: 14 }}
          label="OL22N12"
          value="" 
          />

          <Picker.Item 
          style={{fontSize: 14 }}
          label="OL22N13" 
          value="" 
          />
          <Picker.Item 
          style={{fontSize: 14 }}
          label="OLRS132" 
          value="" 
          />
          <Picker.Item 
          style={{fontSize: 14 }}
          label="OLRS22" 
          value="" 
          />

        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 45,
  },
  headtext: {
    fontSize: 16,
    paddingBottom:5,
    paddingTop: 15,
  },
  pickerborder: {
    borderWidth: 1,
    width: 150,
    height:45,
    borderRadius: 10,
  },
});

export default ParentSection;
