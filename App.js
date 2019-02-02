import React from "react";
import HomeScreen from "./src/HomeScreen";
import * as firebase from "firebase";
import MainTabNavigator from "./navigation/MainTabNavigator";
import AppNavigator from "./navigation/AppNavigator";
import LoginScreen from "./authentication/LoginScreen"

const config = {
  apiKey: "AIzaSyBUSWG1G3ZUF0_EY3y_pVh2-aZ54lN_44A",
  authDomain: "workers-ef768.firebaseapp.com",
  databaseURL: "https://workers-ef768.firebaseio.com",
  projectId: "workers-ef768",
  storageBucket: "workers-ef768.appspot.com",
  messagingSenderId: "208965765113"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
