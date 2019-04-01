import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Layout from "../screens/Layout";
import ChatScreen from "../screens/ChatScreen";
import Colors from "../assets/styleConstant/Colors";

const AppStackNavigation = createStackNavigator(
  {
    Home: Layout,
    ChatScreen: ChatScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.themeOrange
      },
      headerTintColor: Colors.nativeWhite
    }
  }
);

const AppStackContainer = createAppContainer(AppStackNavigation);

export default AppStackContainer;
