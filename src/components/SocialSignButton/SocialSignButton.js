import React from "react";
import styles from "./styles";
import CustomButton from "../CustomButton/CustomButton";

const SocialSignButton = () => {
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };
  const onSignInApple = () => {
    console.warn("onSignInApple");
  };

  return (
    <>
      <CustomButton
        text="Log In"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <CustomButton
        text="Sign Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignButton;
