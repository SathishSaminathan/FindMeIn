import React, { Component } from "react";
import { View, Text } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    GoogleSignin.configure({
      forceConsentPrompt: true,
      webClientId:
        "42208539354-77fup3s0uh4uammqs05omaet845q6elg.apps.googleusercontent.com"
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}
