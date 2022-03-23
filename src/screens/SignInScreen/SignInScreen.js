import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

const SignInScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  const isShow = () => {
    setShow(!show);
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>Online Student Portal</Text>
            <Text style={styles.please}>
              Access and navigate with your student no. email and phone no.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.userContainer}>
              <AntDesign
                name={"user"}
                size={26}
                style={styles.inputIcon}
                color={"#003CD6"}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Username"
                placeholderTextColor="#C4C5C7"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoComplete="username"
              />
            </View>
            <View style={styles.userContainer}>
              <AntDesign name={"lock"} size={26} color={"#003CD6"} />
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                placeholderTextColor="#C4C5C7"
                underlineColorAndroid="transparent"
                secureTextEntry={visible}
                returnKeyType="go"
                autoComplete="password"
              />
              <TouchableOpacity onPress={isShow}>
                <Feather
                  name={show === false ? "eye-off" : "eye"}
                  size={26}
                  color={"#FF0000"}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
              <Text style={styles.dontText}>Don’t have an account?</Text>
              <TouchableOpacity style={styles.buttonText}>
                <Text
                  style={styles.registerText}
                  onPress={() => navigation.push("SignUp")}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignInScreen;
