import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

const ProfileScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.profileScreen}>Profile</Text>
      <View style={styles.nameContainer}>
        <Text style={styles.id}>20190052</Text>
        <Text style={styles.name}>CLEOFE, RICHARD M.</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
