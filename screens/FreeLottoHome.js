import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import firebase from "react-native-firebase";
import Row from "../components/Row";
import { ScrollView, TouchableOpacity } from "react-native";

let Analytics = firebase.analytics();

export default class FreeLottoHome extends React.Component {
  constructor() {
    super();
    Analytics.setAnalyticsCollectionEnabled(true);
    firebase.analytics().logEvent("freez_lotto", {
      user: "test"
    });
  }
  render() {
    return (
      <Container>
        <TitleBar>
          <Title>My Tickets</Title>
        </TitleBar>
        {/* <WebView
          //style={styles.WebViewStyle}
          source={{ uri: "https://www.youtube.com/embed/Gg5ZsUexqQU" }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          style={{ height: 150 }}
        /> */}
        <ScrollView
          //horizontal={false}
          style={{ paddingBottom: 30 }}
          showsHorizontalScrollIndicator={false}
        >
          {rows.map((row, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.props.navigation.push("FreeLottoDrawingLive");
              }}
            >
              <Row
                key={index}
                number1={row.number1}
                number2={row.number2}
                number3={row.number3}
                number4={row.number4}
                number5={row.number5}
                power={row.power}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Container>
    );
  }
  // componentWillMount() {
  //   firebase.analytics().logEvent("live_viewing", {
  //     user: "test"
  //   });
  // }
}

// const rows = [
//   {
//     number1: "15",
//     number2: "25",
//     number3: "70",
//     number4: "05",
//     number5: "14",
//     power: "25"
//   },
//   {
//     number1: "15",
//     number2: "25",
//     number3: "70",
//     number4: "05",
//     number5: "14",
//     power: "25"
//   },
//   {
//     number1: "15",
//     number2: "25",
//     number3: "70",
//     number4: "05",
//     number5: "14",
//     power: "25"
//   },
//   {
//     number1: "15",
//     number2: "25",
//     number3: "70",
//     number4: "05",
//     number5: "14",
//     power: "25"
//   },
//   {
//     number1: "15",
//     number2: "25",
//     number3: "70",
//     number4: "05",
//     number5: "14",
//     power: "25"
//   }
// ];

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

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
