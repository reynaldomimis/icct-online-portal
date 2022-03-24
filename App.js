import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Navigation from "./src/navigation/index";
import ScheduleScreen from "./src/screens/ScheduleScreen/ScheduleScreen";

const App = () => {
  return (
    <View style={styles.root}>
      <ScheduleScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "blue",
  },
});
