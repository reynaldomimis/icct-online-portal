import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CustomToolbar from "../../components/Toolbar/Toolbar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

const OTPScreen = ({
  route: {
    params: { phoneNumber },
  },
  navigation,
}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  const setBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CustomToolbar
        label="OTP Verification"
        bgColor={"white"}
        onPress={setBack}
      />
      <View style={{ paddingHorizontal: "5%", alignItems: "center" }}>
        <View style={{ width: "100%" }}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.content}>
            Enter the OTP number just sent you at
            <Text style={styles.phoneNumberText}> {phoneNumber}</Text>
          </Text>
        </View>
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 1: text });
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 3: text });
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 4: text });
                !text && thirdInput.current.focus();
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => console.log(otp)}
        >
          <Text style={styles.signinButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OTPScreen;
