import { createStackNavigator, createAppContainer } from "react-navigation";
import LottoDetail from "../screens/LottoDetail";
import HomeScreen from "../screens/HomeScreen";
import FreeLottoDrawingLive from "../screens/FreeLottoDrawingLive";
import Login from "../screens/Login";
import FreeLottoHome from "../screens/FreeLottoHome";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Login: Login,
    //LottoDetail: LottoDetail,
    FreeLottoDrawingLive: FreeLottoDrawingLive,
    FreeLottoHome: FreeLottoHome
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(AppNavigator);
