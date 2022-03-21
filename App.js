import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Navigation from "./src/navigation/index";

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
      <Text>Try 2</Text>
      <Text>Try 2</Text>
      <Text>Try 2</Text>
      <Text>Try 2</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
