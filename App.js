/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions, PermissionsAndroid } from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  state = {
    Granted: false
  };
  componentWillMount() {
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
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: width,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
