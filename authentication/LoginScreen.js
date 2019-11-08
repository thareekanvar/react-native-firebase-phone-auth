import * as React from "react";
import { Text, View, ScrollView, TextInput, Button } from "react-native";
import { Linking } from "expo";
import * as WebBrowser from "expo-web-browser";
import firebase from "firebase/app";
import "firebase/auth";

const captchaUrl = `https://workers-ef768.firebaseapp.com/captcha.html?appurl=${Linking.makeUrl(
  ""
)}`;

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      phone: "",
      confirmationResult: undefined,
      code: ""
    };
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  listener = ({ url }) => {
    console.log("im ok");
    // WebBrowser.dismissBrowser(); for IOS
    console.log("not ok");
    let token = null;
    const tokenEncoded = Linking.parse(url).queryParams["token"];
    if (tokenEncoded) token = decodeURIComponent(tokenEncoded);
    console.log(token);
    if (token) {
      console.log("token");
      const { phone } = this.state;
      //fake firebase.auth.ApplicationVerifier
      const captchaVerifier = {
        type: "recaptcha",
        verify: () => Promise.resolve(token)
      };
      try {
        const confirmationResult = firebase
          .auth()
          .signInWithPhoneNumber(phone, captchaVerifier);
        this.setState({ confirmationResult });
      } catch (e) {
        console.warn(e);
      }
    }
  };

  componentDidMount() {
    Linking.addEventListener("url", this.listener);
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.listener);
  }

  onPhoneChange = phone => {
    this.setState({ phone });
  };
  onPhoneComplete = async () => {
    await WebBrowser.openBrowserAsync(captchaUrl);
    // if (token) {
    //   console.log("token");
    //   const { phone } = this.state;
    //   //fake firebase.auth.ApplicationVerifier
    //   const captchaVerifier = {
    //     type: "recaptcha",
    //     verify: () => Promise.resolve(token)
    //   };
    //   try {
    //     const confirmationResult = await firebase
    //       .auth()
    //       .signInWithPhoneNumber(phone, captchaVerifier);
    //     this.setState({ confirmationResult });
    //   } catch (e) {
    //     console.warn(e);
    //   }
    // }
  };
  onCodeChange = code => {
    console.log("on code");
    this.setState({ code });
    console.log(code);
  };
  onSignIn = async () => {
    console.log("signin");
    const { confirmationResult, code } = this.state;
    console.log(code);
    try {
      await confirmationResult.confirm(code);
    } catch (e) {
      console.warn(e);
    }
    this.reset();
  };
  reset = () => {
    this.setState({
      phone: "",
      phoneCompleted: false,
      confirmationResult: undefined,
      code: ""
    });
  };

  render() {
    if (this.state.user) return this.props.navigation.navigate("Main");

    if (!this.state.confirmationResult)
      return (
        <ScrollView style={{ padding: 20, marginTop: 20 }}>
          <TextInput
            value={this.state.phone}
            onChangeText={this.onPhoneChange}
            keyboardType="phone-pad"
            placeholder="Your phone"
          />
          <Button onPress={this.onPhoneComplete} title="Next" />
        </ScrollView>
      );
    else
      return (
        <ScrollView style={{ padding: 20, marginTop: 20 }}>
          <TextInput
            value={this.state.code}
            onChangeText={this.onCodeChange}
            keyboardType="numeric"
            placeholder="Code from SMS"
          />
          <Button onPress={this.onSignIn} title="Sign in" />
        </ScrollView>
      );
  }
}
