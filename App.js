/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PermissionsAndroid,
  StatusBar
} from "react-native";
import MapView from "react-native-maps";
import Home from "./src/screens/Home";
import Layout from "./src/screens/Layout";
import Colors from "./src/assets/styleConstant/Colors";
import ChatScreen from "./src/screens/ChatScreen";
import AppStackContainer from "./src/navigations/AppStackNavigations";
import Auth from "./src/screens/Auth";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  state = {
    Granted: false
  };
  componentDidMount() {
    this.requestLocationPermission();
  }
  async requestLocationPermission() {
    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Example App",
          message: "Example App access to your location "
        }
      );
      console.log("Granted...", granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({ Granted: true }, () => console.log(this.state.Granted));
        SplashScreen.hide();
      } else {
        this.setState({ Granted: false }, () =>
          console.log(this.state.Granted)
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.lightgrey, }}>
        <StatusBar backgroundColor={Colors.themeOrangeDark} />
        <AppStackContainer/>
        {/* <Auth/> */}
      </View>
    );
  }
}
