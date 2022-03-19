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
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomToolbar from "../../components/Toolbar/Toolbar";
import styles from "./styles";

const F = ({ navigation }) => {
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

  const setBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <View showsVerticalScrollIndicator={false} style={styles.baseContainer}>
          <CustomToolbar
            label={"Reset Password"}
            onPress={setBack}
            bgColor={"white"}
          />
          <View style={styles.forgotContainer}>
            <Text style={styles.forgotPass}>Create new password</Text>
            <Text style={styles.enter}>
              Set the new password for your account so you can login and access
              the portal
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                fontWeight: 500,
                marginTop: 25,
              }}
            >
              Password
            </Text>
            <View style={styles.userContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="New password"
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
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              Retype-Password
            </Text>
            <View style={styles.userContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Retype-password"
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("NewPassword")}
            >
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default F;
