import React from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        this.props.navigation.navigate("Main");
      }
      else{
        this.props.navigation.navigate("NoUser");
    }
    });
  
}
  render() {
    return <View />;
  }
}

export default Loading;
