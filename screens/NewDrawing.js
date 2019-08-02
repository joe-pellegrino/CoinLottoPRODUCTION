import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import firebase from "react-native-firebase";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import Ball from "../components/Ball";
import Moonball from "../components/Moonball";
import Row from "../components/Row";

let Analytics = firebase.analytics();

export default class NewDrawing extends React.Component {
  static navigationOptions = {
    title: "New Drawing"
  };
  constructor() {
    super();
    Analytics.setAnalyticsCollectionEnabled(true);
    firebase.analytics().logEvent("free_lotto", {
      user: "test"
    });
  }
  state = {
    error: "",
    number1: "",
    number2: "",
    number3: "",
    number4: "",
    number5: "",
    moonball: ""
  };

  inputRefs = [];

  setRef = ref => {
    this.inputRefs.push(ref);
  };

  focusInput = number => this.inputRefs[number].focus();

  render() {
    return (
      <Container>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.push("FreeLottoDrawingLive");
          }}
        >
          <Row
            number1={this.state.number1}
            number2={this.state.number2}
            number3={this.state.number3}
            number4={this.state.number4}
            number5={this.state.number5}
            power={this.state.moonball}
          />
        </TouchableOpacity>
        {/* <Text>Number: {this.state.number1}</Text>
        <Text>Number: {this.state.number2}</Text>
        <Text>Number: {this.state.number3}</Text>
        <Text>Number: {this.state.number4}</Text>
        <Text>Number: {this.state.number5}</Text> */}
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
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "80%",
              flex: 1,
              //justifyContent: "space-around",
              padding: 5,
              alignSelf: "center"
            }}
          >
            {Array.from({ length: 71 }, (item, index) => {
              if (index != 0) {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.numberSelect(index);
                    }}
                  >
                    <Ball
                      id={index}
                      ref={this.setRef}
                      number={index}
                      opacity="1"
                    />
                  </TouchableOpacity>
                );
              }
            })}

            {Array.from({ length: 21 }, (item, indexMB) => {
              if (indexMB != 0) {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.numberSelectPower(indexMB);
                    }}
                  >
                    <Moonball number={indexMB} opacity="1" />
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </ScrollView>
      </Container>
    );
  }

  numberSelectPower(number) {
    if (this.state.moonball == "") {
      this.setState({ moonball: number });
      return;
    }
  }

  numberSelect(number) {
    // this.refs.number.setNativeProps({
    //   opacity: 0
    // });

    this.focusInput;

    this.setState({ error: this.inputRefs });

    if (this.state.number1 == "") {
      this.setState({ number1: number });
      return;
    }
    if (this.state.number2 == "") {
      this.setState({ number2: number });
      return;
    }
    if (this.state.number3 == "") {
      this.setState({ number3: number });
      return;
    }
    if (this.state.number4 == "") {
      this.setState({ number4: number });
      return;
    }
    if (this.state.number5 == "") {
      this.setState({ number5: number });
      return;
    }
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
