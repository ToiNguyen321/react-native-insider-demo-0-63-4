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
import ListPromotion from './ListPromotion';

const AppNavigator = createStackNavigator(
  {
    home: {
      screen: Home,
      
    },
    chat: Chat,
    ListPromotion: ListPromotion,
  },
  {
    initialRouteName: 'home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default createAppContainer(AppNavigator)