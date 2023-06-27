import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import RNInsider from 'react-native-insider';
import messaging from '@react-native-firebase/messaging';
import InsiderCallbackType from "react-native-insider/src/InsiderCallbackType";
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';
import UI from './UI';
import InsiderHelper from './helper/InsiderHelper';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  console.log("🚀 ~ file: index.js:11 ~ requestUserPermission ~ authStatus:", authStatus)
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
    getToken();

  }

}

const getToken = async () => {
  try {
    const newToken = await messaging().getToken();
    console.log("🚀 ~ file: index.js:24 ~ getToken ~ newToken:", newToken)
    if (newToken) {
      console.log("Token:" + newToken);
    } else {
      return newToken;
    }
  } catch (error) {
    console.log("🚀 ~ file: index.js:32 ~ getToken ~ error:", error)

  }

};

const App = () => {

  useEffect(() => {
    requestUserPermission();

    messaging().getToken().then(async (token) => {
      console.log("🚀 ~ file: App.tsx:172 ~ messaging ~ token:", token)

    }).catch(err => {
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(
        "A new FCM message arrived! :" + JSON.stringify(remoteMessage)
      );

      if ((remoteMessage.data || {}).source === "Insider") {
        RNInsider.handleNotification(remoteMessage.data);
      }
    });

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open:" + JSON.stringify(remoteMessage)
      );
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    InsiderHelper.initInsider()

    return unsubscribe;
  }, []);

  return (
    <>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        // enableURLHandling={false}
        // uriPrefix={uriPrefix}
        onNavigationStateChange={(prevState, currentState, action) => {
          console.log("🚀 ~ file: index.js:217 ~ App ~ currentState:", prevState, currentState)
        }}
      />
      <UI />
    </>
  )
}

export default App

const styles = StyleSheet.create({})