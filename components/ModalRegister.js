import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
//import { BlurView } from "expo";

class ModalRegister extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Container>
        <TouchableWithoutFeedback onPress={this.tapBackground}>
          {/* <BlurView
            tint="default"
            intensity={75}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          /> */}
        </TouchableWithoutFeedback>
        <Modal>
          <Logo source={require("../assets/coin_lotto_logo.png")} />
          <Text>Login now for your Free lotto drawings</Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            value={this.state.email}
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            value={this.state.password}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={this.handleLogin}>
            <ButtonView>
              <ButtonText>Log in</ButtonText>
            </ButtonView>
          </TouchableOpacity>
        </Modal>
      </Container>
    );
  }
}

export default ModalRegister;

handleLogin = () => {
  console.log(this.state.email, this.state.password);
};

tapBackground = () => {
  Keyboard.dismiss();
};

const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 179px;
  left: 31px;
`;

const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 239px;
  left: 35px;
`;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

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

const Modal = styled.View`
  width: 335px;
  height: 370px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 50px;
  margin-top: 50px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  color: #b8bece;
  text-align: center;
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
