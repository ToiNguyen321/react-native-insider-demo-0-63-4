/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';
import RNInsider from 'react-native-insider';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler((notification) => {//from killed or background android
  console.log("🚀 ~ file: index.js:12 ~ messaging ~ notification:", notification)
  if (notification?.data?.source === 'Insider') {
      RNInsider.handleNotification(notification.data);
      return;
  }
})
AppRegistry.registerComponent(appName, () => App);
