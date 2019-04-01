import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Colors from "../assets/styleConstant/Colors";

const { width, height } = Dimensions.get("window");

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('ChatScreen')}>
        <View
          style={{
            position: "absolute",
            height: 60,
            width: 60,
            backgroundColor: Colors.themeOrange,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            elevation:20,
            right:10,
            bottom:10
          }}
        >
          <MaterialIcons
            style={{
              fontSize: 25,
              color: Colors.nativeWhite
            }}
            name="message"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default FloatingButton;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
