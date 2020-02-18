import React from "react";
import {
  ExpoConfigView,
  Text,
  View,
  ScrollView,
  TextInput,
  Button
} from "react-native";

import firebase from "firebase/app";
import "firebase/auth";



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };
  onSignOut () {
    firebase.auth().signOut();
    this.props.navigation.navigate("Loading");
    console.log("Logout");
  }
  render() {
    return (
      <ScrollView style={{ padding: 20, marginTop: 20 }}>
        <Text>Settings Screen</Text>
        <Text>You signed in</Text>
        <Button onPress={() => this.onSignOut()} title="Sign out" />
      </ScrollView>
    );
  }
}
