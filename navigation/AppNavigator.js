import React from "react";
import { View } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import Loading from "../src/LoadingScreen";
import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../authentication/LoginScreen";

export default createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
    // loading screen
    Loading: Loading,
    // logged in ui.
    Main: MainTabNavigator,
    // logged out / not signed in ui
    NoUser: LoginScreen
  },
  {
    initialRouteName: "Loading"
  }
);
