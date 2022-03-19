import React, { useState, useRef } from "react";
import { View, Text, Alert, Pressable } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";

const CustomPhonePicker = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };
  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={(text) => {
          setphoneNumber(text);
        }}
      />
      <Pressable style={styles.button} onPress={() => buttonPress()}>
        <Text style={styles.continueText}>Get Phone Number</Text>
      </Pressable>
    </View>
  );
};

export default CustomPhonePicker;
