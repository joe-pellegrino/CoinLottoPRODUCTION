import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import LottoDetail from "../screens/LottoDetail";
import HomeScreen from "../screens/HomeScreen";
import FreeLottoDrawingLive from "../screens/FreeLottoDrawingLive";
import Login from "../screens/Login";
import FreeLottoHome from "../screens/FreeLottoHome";
import AuthLoadingScreen from "./AuthLoading";
import Settings from "../screens/Settings";
import NewDrawing from "../screens/NewDrawing";
import styled from "styled-components";
import Icon from "react-native-vector-icons/AntDesign";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

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
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Login") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Icon
        name="home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

SettingsStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Login") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Settings",
    tabBarIcon: ({ focused }) => (
      <Icon
        name="setting"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};
// HomeStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 4) {
//     tabBarVisible = false;
//   }

//   return {
//     tabBarVisible
//   };
// };

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor
    }
  }
);

export default TabNavigator;
