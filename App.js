import React, { Component } from "react";
import { AsyncStorage, Alert } from "react-native";
import firebase from "react-native-firebase";
import AppNavigator from "./navigator/AppNavigator";
import NavigationService from "./navigator/NavigationService";

// import { createStore } from "redux";
// import { Provider } from "react-redux";

// const initialState = {
//   action: "openNewDrawing"
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "OPEN_NEW_DRAWING":
//       return { action: "openNewDrawing" };
//     case "CLOSE_NEW_DRAWING":
//       return { action: "closeNewDrawing" };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

export default class App extends Component {
  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();

    // NavigationService.navigate("FreeLottoDrawingLive", { userName: "Lucy" });
  }

  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }

  async createNotificationListeners() {
    /*
     * Triggered when a particular notification has been received in foreground
     * */
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body, data } = notification;
        // this.AppNavigator.dispatch(
        //   NavigationActions.navigate({
        //     routeName: "somescreen",
        //     params: someParams
        //   })
        // );

        if (data.screen == "live") {
          //this.showAlert(title, "Lets show the live screen");
          this.goToLiveScreen();
        }
      });

    /*
     * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
     * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body, data } = notificationOpen.notification;
        //this.showAlert(title, body);
        if (data.screen == "live") {
          //this.showAlert(title, "Lets show the live screen");
          this.goToLiveScreen();
        }
      });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body, data } = notificationOpen.notification;
      if (data.screen == "live") {
        //this.showAlert(title, "Lets show the live screen");
        this.goToLiveScreen();
      }
      //this.showAlert(title, body);
    }
    /*
     * Triggered for data only payload in foreground
     * */
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  goToLiveScreen() {
    NavigationService.navigate("FreeLottoDrawingLive", { userName: "Lucy" });
  }

  showAlert(title, body) {
    Alert.alert(
      title,
      body,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log("permission rejected");
    }
  }

  render() {
    return (
      //<Provider store={store}>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        // ref={nav => {
        //   this.navigator = nav;
        // }}
      />
      //</Provider>
    );
  }
}
