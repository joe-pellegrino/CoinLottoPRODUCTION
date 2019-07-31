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
  createAppContainer
} from "react-navigation";
import LottoDetail from "../screens/LottoDetail";
import HomeScreen from "../screens/HomeScreen";
import FreeLottoDrawingLive from "../screens/FreeLottoDrawingLive";
import Login from "../screens/Login";
import FreeLottoHome from "../screens/FreeLottoHome";
import AuthLoadingScreen from "./AuthLoading";
import Settings from "../screens/Settings";
import NewDrawing from "../screens/NewDrawing";

const AppStack = createStackNavigator({
  HomeScreen: HomeScreen,
  FreeLottoDrawingLive: FreeLottoDrawingLive,
  FreeLottoHome: FreeLottoHome,
  NewDrawing: NewDrawing,
  Settings: Settings,
  Login: Login
});

const AuthStack = createStackNavigator({
  Login: Login,
  HomeScreen: HomeScreen,
  Settings: Settings,
  Login: Login
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
