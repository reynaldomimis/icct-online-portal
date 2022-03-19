import {
  CheckBox,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { React, useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

const SignUpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [show, setShow] = useState(false);
  const [showRTP, setShowRTP] = useState(false);
  const [visible, setVisible] = useState(true);
  const [visibleRTP, setVisibleRTP] = useState(true);

  const isVisible = () => {
    setShow(!show);
    setVisible(!visible);
  };

  const isVisibleRetype = () => {
    setShowRTP(!showRTP);
    setVisibleRTP(!visibleRTP);
  };

  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };
  return (
    <View style={styles.rootContainer}>
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
              <MaterialCommunityIcons
                name={"email-outline"}
                size={25}
                color={"#003CD6"}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Email"
                placeholderTextColor="#C4C5C7"
                underlineColorAndroid="transparent"
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
              />
            </View>
            <View style={styles.container}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="PH"
                layout="first"
                withShadow
                autoFocus
                containerStyle={styles.phoneContainer}
                textInputStyle={styles.inputField}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={(text) => {
                  setphoneNumber(text);
                }}
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
                returnKeyType="next"
                autoCorrect={false}
              />
              <TouchableOpacity onPress={isVisible}>
                <Feather
                  name={show === false ? "eye-off" : "eye"}
                  size={26}
                  color={"#FF0000"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.userContainer}>
              <AntDesign name={"lock"} size={26} color={"#003CD6"} />
              <TextInput
                style={styles.inputField}
                placeholder="Retype-Password"
                placeholderTextColor="#C4C5C7"
                underlineColorAndroid="transparent"
                secureTextEntry={visibleRTP}
                returnKeyType="go"
                autoCorrect={false}
              />
              <TouchableOpacity onPress={isVisibleRetype}>
                <Feather
                  name={showRTP === false ? "eye-off" : "eye"}
                  size={26}
                  color={"#FF0000"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                boxType="circle"
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.terms}>
                I accept terms and conditions & privacy policy
              </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.dontText}>Already have an account?</Text>
              <TouchableOpacity style={styles.buttonText}>
                <Text
                  style={styles.loginText}
                  onPress={() => navigation.goBack()}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignUpScreen;
