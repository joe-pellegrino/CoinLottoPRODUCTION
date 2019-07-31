import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import firebase from "react-native-firebase";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import Ball from "../components/Ball";

let Analytics = firebase.analytics();

export default class NewDrawing extends React.Component {
  constructor() {
    super();
    Analytics.setAnalyticsCollectionEnabled(true);
    firebase.analytics().logEvent("free_lotto", {
      user: "test"
    });
  }
  state = {
    number: "0"
  };
  render() {
    return (
      <Container>
        <TitleBar>
          <Title>New Drawing</Title>
        </TitleBar>
        <Text>Number: {this.state.number}</Text>
        <ScrollView
          //horizontal={false}
          style={{ paddingBottom: 30 }}
          //showsHorizontalScrollIndicator={false}
        >
          {/* {balls.map((ball, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.props.navigation.push("FreeLottoDrawingLive");
              }}
            >
              <Ball key={index} number={ball} />
            </TouchableOpacity>
          ))} */}
          <View
            style={{
              alignItems: "center"
            }}
          >
            <BallRow>
              <Ball
                number="1"
                parentFunction={this.numberSelect(this.state.number)}
              />
              <Ball number="2" />
              <Ball number="3" />
              <Ball number="4" />
              <Ball number="5" />
            </BallRow>
            <BallRow>
              <Ball number="6" />
              <Ball number="7" />
              <Ball number="8" />
              <Ball number="9" />
              <Ball number="10" />
            </BallRow>
            <BallRow>
              <Ball number="11" />
              <Ball number="12" />
              <Ball number="13" />
              <Ball number="14" />
              <Ball number="15" />
            </BallRow>
            <BallRow>
              <Ball number="16" />
              <Ball number="17" />
              <Ball number="18" />
              <Ball number="19" />
              <Ball number="20" />
            </BallRow>
            <BallRow>
              <Ball number="21" />
              <Ball number="22" />
              <Ball number="23" />
              <Ball number="24" />
              <Ball number="25" />
            </BallRow>
          </View>
        </ScrollView>
      </Container>
    );
  }

  numberSelect(number) {
    this.setState({ number: number });
  }
}

const Container = styled.View`
  flex: 1;
`;

const BallRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  padding-bottom: 5;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;
