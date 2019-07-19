import React from "react";
import styled from "styled-components";
import { Button, Alert } from "react-native";
import axios from "axios";
import Toast, { DURATION } from "react-native-easy-toast";

class Login extends React.Component {
  state = {
    error: "No error yet"
  };
  render() {
    return (
      <Container>
        <Text>{this.state.error}</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button onPress={this.login} title="Login" />
        <Toast ref="toast" />
      </Container>
    );
  }

  login = () => {
    var thisObj = this;
    axios
      .post("https://play.coinlotto.com/api/login", {
        email: "jpellegrino89@gmail.com",
        password: "Jessica916!"
      })
      .then(function(response) {
        console.log("response", response);
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
            thisObj.setState({
              error: "welcome to coin lotto"
            });
            // Alert.alert(
            //   "Login Success",
            //   "Welcome to coinlotto!",
            //   [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            //   { cancelable: false }
            // );

            // axios.get("https://ipapi.co/json/").then(function(log_response) {
            //   let param = {
            //     userId: response.data.message._id,
            //     ip: log_response.data.ip,
            //     city: log_response.data.city,
            //     country_name: log_response.data.country_name
            //   };
            //   axios.post("/register_location", param).then(function(response) {
            //     if (!response.data.error) {
            //       thisobj.props.history.push("/");
            //     }
            //   });
            // });
          }
        }
      })
      .catch(function(error) {
        // thisobj.setState({
        //   isLoading: false
        // });
        thisObj.setState({
          error: "error at bottom"
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

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
