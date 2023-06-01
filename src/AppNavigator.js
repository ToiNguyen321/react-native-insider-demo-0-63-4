import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation';

import Chat from "./Chat"
import Home from "./Home"

const AppNavigator = createStackNavigator(
  {
    home: Home,
    chat: Chat,
  }
)

export default createAppContainer(AppNavigator)