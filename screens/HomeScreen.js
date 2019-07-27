import {
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  Button,
  AsyncStorage
} from "react-native";
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import ModalLogin from "../components/ModalLogin";
import firebase from "../components/Firebase";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <TitleBar>
            <Title>Welcome back,</Title>
            <Name>Joe</Name>
          </TitleBar>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {/* <Card
              image={require("./assets/free.png")}
              caption="Next Drawing"
              //logo={require("./assets/logo-react.png")}
              countdownUntil="100"
            /> */}

            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push(card.screen);
                }}
              >
                <Card
                  key={index}
                  image={card.image}
                  caption={card.caption}
                  countdownUntil={card.countdownUntil}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <SettingsButton title="Settings" />
          <Button
            onPress={() => {
              this.props.navigation.push("Login");
            }}
            title="Login"
          />
        </SafeAreaView>
        {/* <ModalLogin /> */}
      </Container>
    );
  }

  componentDidMount() {
    getLoginStatus().then(login => {
      if (login == null) {
        this.props.navigation.push("Login");
      }
    });
    // if (getLoginStatus() == null) {
    //   this.props.navigation.push("Login");
    // } else {
    //   alert("login status " + getLoginStatus().value);
    // }
  }
}

const getLoginStatus = async () => {
  var login = "false";
  try {
    login = await AsyncStorage.getItem("login");
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return login;
};

const cards = [
  {
    image: require("../assets/free.png"),
    caption: "Next Drawing",
    countdownUntil: 100,
    screen: "FreeLottoHome"
  },
  {
    image: require("../assets/moonball.png"),
    caption: "Next Drawing",
    countdownUntil: 1000,
    screen: "Login"
  },
  {
    image: require("../assets/jackpot.png"),
    caption: "Next Drawing",
    countdownUntil: 500,
    screen: "FreeLottoHome"
  },
  {
    image: require("../assets/fastball.png"),
    caption: "Next Drawing",
    countdownUntil: 1100,
    screen: "FreeLottoHome"
  },
  {
    image: require("../assets/paintball.png"),
    caption: "Next Drawing",
    countdownUntil: 600,
    screen: "FreeLottoHome"
  }
];

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const SettingsButton = styled.Button`
  right: 0;
`;
