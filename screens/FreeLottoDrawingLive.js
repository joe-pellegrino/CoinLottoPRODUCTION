import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import firebase from "react-native-firebase";

let Analytics = firebase.analytics();

class LottoDetail extends React.Component {
  constructor() {
    super();
    Analytics.setAnalyticsCollectionEnabled(true);
    firebase.analytics().logEvent("live_viewing", {
      user: "test"
    });
  }
  render() {
    return (
      <Container>
        <WebView
          //style={styles.WebViewStyle}
          source={{ uri: "https://www.youtube.com/embed/Gg5ZsUexqQU" }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
        {/* <YouTube
          videoId="Gg5ZsUexqQU" // The YouTube video ID
          play={true} // control playback of video with true/false
          fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: "stretch", height: 300 }}
        /> */}
      </Container>
    );
  }
  // componentWillMount() {
  //   firebase.analytics().logEvent("live_viewing", {
  //     user: "test"
  //   });
  // }
}

export default LottoDetail;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
