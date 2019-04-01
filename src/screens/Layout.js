import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Home from "./Home";
import FloatingButton from "../components/FloatingButton";

const { width, height } = Dimensions.get("window");

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions={
    header:null
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home/>
        <FloatingButton {...this.props}/>
      </View>
    );
  }
}
export default Layout;

const styles = StyleSheet.create({});
