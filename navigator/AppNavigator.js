// import { createStackNavigator, createAppContainer } from "react-navigation";
// import LottoDetail from "../screens/LottoDetail";
// import HomeScreen from "../screens/HomeScreen";
// import FreeLottoDrawingLive from "../screens/FreeLottoDrawingLive";
// import Login from "../screens/Login";
// import FreeLottoHome from "../screens/FreeLottoHome";

// const AppNavigatorLoggedIn = createStackNavigator(
//   {
//     HomeScreen: HomeScreen,
//     Login: Login,
//     //LottoDetail: LottoDetail,
//     FreeLottoDrawingLive: FreeLottoDrawingLive,
//     FreeLottoHome: FreeLottoHome
//   },
//   {
//     mode: "modal"
//   }
// );

// const AppNavigatorNotLoggedIn = createStackNavigator(
//   {
//     Login: Login,
//     HomeScreen: HomeScreen,
//     //LottoDetail: LottoDetail,
//     FreeLottoDrawingLive: FreeLottoDrawingLive,
//     FreeLottoHome: FreeLottoHome
//   },
//   {
//     mode: "modal"
//   }
// );

// export default createAppContainer(AppNavigator);

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import LottoDetail from "../screens/LottoDetail";
import HomeScreen from "../screens/HomeScreen";
import FreeLottoDrawingLive from "../screens/FreeLottoDrawingLive";
import Login from "../screens/Login";
import FreeLottoHome from "../screens/FreeLottoHome";
import AuthLoadingScreen from "./AuthLoading";
import Settings from "../screens/Settings";
import NewDrawing from "../screens/NewDrawing";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigator from "./TabNavigator";
import OnBoard from "../screens/OnBoard";

const AppStack = createStackNavigator({
  HomeScreen: HomeScreen,
  FreeLottoDrawingLive: FreeLottoDrawingLive,
  FreeLottoHome: FreeLottoHome,
  NewDrawing: NewDrawing,
  Settings: Settings,
  Login: Login
});

// const TabNavigation = createBottomTabNavigator({
//   HomeScreen: HomeStack,
//   Settings: SettingsStack
// });

const AuthStack = createStackNavigator({
  Login: Login,
  HomeScreen: HomeScreen,
  Settings: Settings,
  Login: Login
});

const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen,
  FreeLottoDrawingLive: FreeLottoDrawingLive,
  FreeLottoHome: FreeLottoHome,
  NewDrawing: NewDrawing,
  Settings: Settings,
  Login: Login
});

const SettingsStack = createStackNavigator({
  Settings: Settings,
  FreeLottoDrawingLive: FreeLottoDrawingLive,
  FreeLottoHome: FreeLottoHome,
  NewDrawing: NewDrawing,
  Login: Login
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 4) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

//export default createAppContainer(TabNavigator);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: TabNavigator,
      OnBoard: OnBoard,
      // App: createBottomTabNavigator({
      //   Home: HomeStack,
      //   Settings: SettingsStack
      // }),
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
