import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

const F = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <View showsVerticalScrollIndicator={false} style={styles.baseContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name={"arrow-back"}
              size={30}
              style={styles.backIcon}
              color={"#003CD6"}
            />
          </TouchableOpacity>
          <View style={styles.forgotContainer}>
            <Text style={styles.forgotPass}>Forgot password</Text>
            <Text style={styles.enter}>
              Enter your email for the verification process we will send 4
              digits code to your email
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: 500 }}>
              Username
            </Text>
            <View style={styles.userContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter your email"
                placeholderTextColor="#C4C5C7"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoComplete="username"
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("NewPassword")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default F;
