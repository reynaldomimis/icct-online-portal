import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importing screens components
/*
import AccountScreen from "../screens/AccountScreen/AccountScreen";
import CalendarScreen from "../screens/CalendarScreen/CalendarScreen";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPassword";
import GradeScreen from "../screens/GradeScreen/GradeScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen/NewPassword";
import OTPScreen from "../screens/OTPScreen/OTPScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";
import ScheduleScreen from "../screens/ScheduleScreen/ScheduleScreen";
*/
import SectionOfferingScreen from "../screens/SectionOfferingScreen/SectionOffering";
/*
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import GetStartedScreen from "../screens/GetStartedScreen/GetStartedScreen";
*/

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SectionOffering"
        screenOptions={{ headerShown: false }}
      >
        {/*<Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Grade" component={GradeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
  */}
        <Stack.Screen name="SectionOffering" component={SectionOfferingScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
