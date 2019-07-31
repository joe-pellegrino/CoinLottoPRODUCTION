import React from "react";
import styled from "styled-components";
import { Button, Alert, AsyncStorage } from "react-native";
import axios from "axios";
import Toast, { DURATION } from "react-native-easy-toast";
import * as Keychain from "react-native-keychain";
import { TouchableOpacity } from "react-native-gesture-handler";

const ACCESS_CONTROL_OPTIONS = ["None", "Passcode", "Password"];
const ACCESS_CONTROL_MAP = [
  null,
  Keychain.ACCESS_CONTROL.DEVICE_PASSCODE,
  Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD,
  Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET
];

class Login extends React.Component {
  static navigationOptions = {
    headerLeft: (
      <Button
        //onPress={() => alert("This is a button!")}
        title=""
        color="#fff"
      />
    )
  };
  state = {
    error: "No error yet",
    biometryType: "TOUCH_ID",
    accessControl: null,
    username: "",
    token: "",
    email: "",
    password: ""
  };
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
      <Container>
        <Text>{this.state.error}</Text>
        <TextInput
          onChangeText={email => this.setState({ email })}
          keyboard-type="email-address"
          placeholder="Email"
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity onPress={this.login}>
          <ButtonView>
            <ButtonText>Login</ButtonText>
          </ButtonView>
        </TouchableOpacity>
        {/* <Button onPress={() => this.load()} title="Generate Credentials" /> */}
        <Toast ref="toast" />
      </Container>
    );
  }

  _bootstrapAsync = async () => {
    this.setState({ error: "userToken" });
    try {
      const userToken = await AsyncStorage.getItem("login");
      this.setState({ error: userToken });
    } catch (err) {
      this.setState({ error: err });
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  _setStorage = async () => {
    // await AsyncStorage.setItem("username", this.state.username);
    // await AsyncStorage.setItem("token", this.state.token);

    await Promise.all([
      this._storeUsername(),
      this._storeToken(),
      this._storeLoginStatus(),
      this._showHomeScreen()
    ]);
  };

  _showHomeScreen = async () => {
    try {
      await this.props.navigation.push("HomeScreen");
      this.setState({ error: "Login complete " });
    } catch (error) {
      this.setState({ error: "Cant push : " + error });
      // Error saving data
    }
  };

  _storeUsername = async () => {
    try {
      await AsyncStorage.setItem("username", this.state.username);
    } catch (error) {
      this.setState({ error: "username: " + error });
      // Error saving data
    }
  };

  _storeToken = async () => {
    try {
      await AsyncStorage.setItem("token", this.state.token);
    } catch (error) {
      this.setState({ error: "token: " + error });
      // Error saving data
    }
  };

  _storeLoginStatus = async () => {
    try {
      await AsyncStorage.setItem("login", "true");
    } catch (error) {
      // Error retrieving data
      this.setState({ error: "login: " + error });
    }
  };

  componentDidMount() {
    this._bootstrapAsync();
    Keychain.getSupportedBiometryType().then(biometryType => {
      this.setState({ biometryType });
    });
  }

  _removeUsername = async () => {
    try {
      await AsyncStorage.removeItem("username");
      this.setState({ error: "Username complete " });
    } catch (error) {
      this.setState({ error: "username: " + error });
      // Error saving data
    }
  };

  _removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
      this.setState({ error: "Token complete " });
    } catch (error) {
      this.setState({ error: "token: " + error });
      // Error saving data
    }
  };

  _removeStatus = async () => {
    try {
      await AsyncStorage.removeItem("login");
      this.setState({ error: "Push to login complete " });
    } catch (error) {
      // Error retrieving data
      this.setState({ error: "login: " + error });
    }
  };

  _showLoginScreen = async () => {
    try {
      await this.props.navigation.push("Login");
      this.setState({ error: "Login complete " });
    } catch (error) {
      this.setState({ error: "Cant push : " + error });
      // Error saving data
    }
  };

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

            thisObj.setState({
              username: username
            });

            thisObj.setState({
              token: token
            });

            thisObj._setStorage();

            // saveLoginStatus()
            //   .then({
            //      _storeUsername()
            //     //_setStates()
            //   })
            //   .catch(err => {
            //     alert(err);
            //   });

            Keychain.setGenericPassword(username, token, {
              service: "com.rjmedia.coinlotto"
              //accessControl: "BiometryAny"
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
          error: "error at bottom: " + error
        });
      });
  };
}

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

const ButtonView = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
