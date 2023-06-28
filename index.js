/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';
import RNInsider from 'react-native-insider';
import messaging from '@react-native-firebase/messaging';

console.disableYellowBox = true

messaging().setBackgroundMessageHandler(async remoteMessage => {
  if (remoteMessage?.data?.source === 'Insider') {
      RNInsider.handleNotification(remoteMessage.data);
      return;
  }
});

AppRegistry.registerComponent(appName, () => App);
