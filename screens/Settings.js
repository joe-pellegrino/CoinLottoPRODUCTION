import React from "react";
import { TouchableOpacity, AsyncStorage, Button } from "react-native";
import styled from "styled-components";
import * as Keychain from "react-native-keychain";
import { Dialog, ConfirmDialog } from "react-native-simple-dialogs";
import { Login } from "../screens/Login";

const ACCESS_CONTROL_OPTIONS = ["None", "Passcode", "Password"];
const ACCESS_CONTROL_MAP = [
  null,
  Keychain.ACCESS_CONTROL.DEVICE_PASSCODE,
  Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD,
  Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET
];

class Settings extends React.Component {
  static navigationOptions = {
    title: "Settings"
    // headerLeft: (
    //   <Button
    //     //onPress={() => alert("This is a button!")}
    //     title=""
    //     color="#fff"
    //   />
    // )
  };
  state = {
    error: "No error",
    firstname: "",
    lastname: "",
    mew: "",
    deposit_address: ""
  };
  render() {
    return (
      <Container>
        <Text>{this.state.error}</Text>

        <TouchableOpacity onPress={this.logout}>
          <ButtonView>
            <ButtonText>Logout</ButtonText>
          </ButtonView>
        </TouchableOpacity>
        <ConfirmDialog
          title="Confirm Dialog"
          message="Are you sure about that?"
          visible={this.state.dialogVisible}
          onTouchOutside={() => this.setState({ dialogVisible: false })}
          positiveButton={{
            title: "YES",
            onPress: () => this.clearStorage()
          }}
          negativeButton={{
            title: "NO",
            onPress: () => alert("No touched!")
          }}
        />
      </Container>
    );
  }

  logout = () => {
    this.setState({ dialogVisible: true });
    //this.clearStorage();
  };

  clearStorage = async () => {
    // await AsyncStorage.setItem("username", this.state.username);
    // await AsyncStorage.setItem("token", this.state.token);
    this.setState({ dialogVisible: false });
    await Promise.all([
      this._removeUsername(),
      this._removeToken(),
      this._removeStatus(),
      this._removeKeychain(),
      this._removeFirstName(),
      this._removeLastName(),
      this._removeMEWAddress(),
      this._removeDepositAddress(),
      this._showLoginScreen()
    ]);
  };

  _removeKeychain = async () => {
    try {
      await Keychain.resetGenericPassword({
        service: "com.rjmedia.coinlotto"
      });
      this.setState({ error: "Keychain complete " });
    } catch (error) {
      this.setState({ error: "Cant push : " + error });
      // Error saving data
    }
  };

  _showLoginScreen = async () => {
    try {
      // await this.props.navigation.push("Login");

      //this.props.navigation.popToTop();
      this.props.navigation.navigate("Login", {
        leftButtons: [
          {
            id: "something",
            text: ""
          }
        ]
      });
      this.setState({ error: "Login complete " });
    } catch (error) {
      this.setState({ error: "Cant push : " + error });
      // Error saving data
    }
  };

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

  _removeFirstName = async () => {
    try {
      await AsyncStorage.removeItem("firstname");
    } catch (error) {
      // Error retrieving data
      this.setState({ error: "remove status: " + error });
    }
  };

  _removeLastName = async () => {
    try {
      await AsyncStorage.removeItem("lastname");
    } catch (error) {
      // Error retrieving data
      this.setState({ error: "remove last name: " + error });
    }
  };

  _removeDepositAddress = async () => {
    try {
      await AsyncStorage.removeItem("deposit_address");
    } catch (error) {
      // Error retrieving data
      this.setState({ error: "remove deposit address: " + error });
    }
  };

  _removeMEWAddress = async () => {
    try {
      await AsyncStorage.removeItem("mew");
    } catch (error) {
      // Error retrieving data
      this.setState({ error: "remove mew: " + error });
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
}

export default Settings;

const Container = styled.View`
  flex: 1;
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

const Text = styled.Text``;
