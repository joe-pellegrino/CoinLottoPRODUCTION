import { createStackNavigator, createAppContainer } from "react-navigation";
import LottoDetail from "../screens/LottoDetail";
import HomeScreen from "../screens/HomeScreen";
import FreeLottoDrawingLive from "../screens/FreeLottoDrawingLive";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    LottoDetail: LottoDetail,
    FreeLottoDrawingLive: FreeLottoDrawingLive
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(AppNavigator);
