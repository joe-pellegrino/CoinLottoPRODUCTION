import React from "react";
import styled from "styled-components";
import { Button, Alert } from "react-native";
import axios from "axios";
import Toast, { DURATION } from "react-native-easy-toast";
import * as Keychain from "react-native-keychain";

const ACCESS_CONTROL_OPTIONS = ["None", "Passcode", "Password"];
const ACCESS_CONTROL_MAP = [
  null,
  Keychain.ACCESS_CONTROL.DEVICE_PASSCODE,
  Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD,
  Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET
];

class Login extends React.Component {
  state = {
    error: "No error yet",
    biometryType: "TOUCH_ID",
    accessControl: null
  };
  render() {
    return (
      <Container>
        <Text>{this.state.error}</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button onPress={this.login} title="Login" />
        <Button onPress={() => this.load()} title="Generate Credentials" />
        <Toast ref="toast" />
      </Container>
    );
  }

  // componentDidMount() {
  //   Keychain.getSupportedBiometryType().then(biometryType => {
  //     this.setState({ biometryType });
  //   });
  // }

  getCreds = () => {
    var thisObj = this;

    // thisObj.setState({
    //   error: "getCreds "
    // });

    Keychain.getGenericPassword({
      service: "com.rjmedia.coinlotto"
    })
      .then(creds => {
        //if(credentials) {
        thisObj.setState({
          error: "Welcome " + creds.username
        });
        //}
      })
      .catch(err => {
        thisObj.setState({
          error: "Error:  " + err
        });
      });
  };

  async load() {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        this.setState({ error: "Welcome " + credentials.username });
      } else {
        this.setState({ error: "No credentials stored." });
      }
    } catch (err) {
      this.setState({ error: "Could not load credentials. " + err });
    }
  }

  login = () => {
    var thisObj = this;
    axios
      .post("http://89.34.16.55:1024/login", {
        email: "demo",
        password: "!@#Sohail123"
      })
      .then(function(response) {
        // console.log("response", response);
        thisObj.setState({
          error: "response"
        });
        // var token = response.data.message.token;
        // var userId = response.data.message._id;
        // axios
        //   .post("https://play.coinlotto.com/api/getuserprofile", {
        //     userId: userId,
        //     token: token
        //   })
        //   .then(function(response) {
        //     if (response.data.error) {
        //       this.refs.toast.show(response.data.error);
        //     } else {
        //       // thisobj.setState({
        //       //   user: response.data.message
        //       // });
        //     }
        //   })
        //   .catch(function(error) {
        //     this.refs.toast.show(error);
        //   });

        // thisobj.setState({
        //   isLoading: false,
        //   response: response
        // });
        if (response.data.error) {
          thisObj.setState({
            error: "Response data error: " + response.data.message
          });
        } else {
          if (response.data.message.auth_enable === true) {
            //thisobj.openModal();
            console.log("Auth enable true");
            thisObj.setState({
              error: "auth enable true"
            });
            // Alert.alert(
            //   "Login Success",
            //   "response.data.message",
            //   [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            //   { cancelable: false }
            // );
          } else {
            // thisobj.props.userHasAuthenticated(true);

            // localStorage.setItem("firstname", response.data.message.firstname);
            // localStorage.setItem("lastname", response.data.message.lastname);
            // localStorage.setItem("username", response.data.message.username);
            // localStorage.setItem("email", response.data.message.email);
            // localStorage.setItem("token", response.data.message.token);
            // localStorage.setItem("userId", response.data.message._id);
            // localStorage.setItem(
            //   "messagedelete",
            //   response.data.message.messagedelete
            // );
            // localStorage.setItem("auth", true);
            // thisobj.props.userHasAuthenticated(true);
            console.log("Welcome to coinlotto!");

            var username = response.data.message.username;
            var token = response.data.message.token;

            // thisObj.setState({
            //   error: "Welcome " + username + " " + token
            // });
            saveLoginStatus()
              .then({})
              .catch(err => {
                alert(err);
              });

            Keychain.setGenericPassword(username, token, {
              service: "com.rjmedia.coinlotto",
              accessControl: "BiometryAny"
            })
              .then({})
              .catch(err => {
                thisObj.setState({
                  error: "error: " + err
                });
              });
          }
        }
      })
      .catch(function(error) {
        // thisobj.setState({
        //   isLoading: false
        // });
        thisObj.setState({
          error: "error at bottom: "
        });
      });
  };
}

const saveLoginStatus = async () => {
  try {
    await AsyncStorage.setItem("login", "true");
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

export default Login;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  padding-left: 44px;
  margin-top: 20px;
`;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
