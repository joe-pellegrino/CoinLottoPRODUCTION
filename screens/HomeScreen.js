import {
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  Button
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
                  this.props.navigation.push("FreeLottoDrawingLive");
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
        </SafeAreaView>
        {/* <ModalLogin /> */}
      </Container>
    );
  }
}

const cards = [
  {
    image: require("../assets/free.png"),
    caption: "Next Drawing",
    countdownUntil: 100
  },
  {
    image: require("../assets/moonball.png"),
    caption: "Next Drawing",
    countdownUntil: 1000
  },
  {
    image: require("../assets/jackpot.png"),
    caption: "Next Drawing",
    countdownUntil: 500
  },
  {
    image: require("../assets/fastball.png"),
    caption: "Next Drawing",
    countdownUntil: 1100
  },
  {
    image: require("../assets/paintball.png"),
    caption: "Next Drawing",
    countdownUntil: 600
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
