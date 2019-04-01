import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../assets/styleConstant/Colors";

const { width, height } = Dimensions.get("window");

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions={
   headerTitle:'Chat Room'
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.lightgrey }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "absolute",
            bottom: 5,
            right: 0
          }}
        >
          <View
            style={{
              elevation: 1,
              flex: 5,
              backgroundColor: Colors.nativeWhite,
              borderRadius: 30,
              height: 50
            }}
          >
            <TextInput
              style={{
                fontSize: 20,
                paddingLeft: 15,
                color: Colors.themeOrange
              }}
              placeholder="type here..."
            />
          </View>
          <TouchableOpacity
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: Colors.nativeWhite,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: 30,
              marginLeft: 5,
              elevation: 1
            }}
          >
            <MaterialIcons
              style={{ fontSize: 25, color: Colors.themeOrange }}
              name="send"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
