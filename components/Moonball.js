import React from "react";
import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";

const Moonball = props => (
  // <Container>
  //   <Content>

  <Dot style={{ opacity: props.opacity }}>
    <BallText>{props.number}</BallText>
  </Dot>

  //   </Content>
  // </Container>
);

export default Moonball;

const BallText = styled.Text`
  text-align: center;
  margin-top: 10px;
  margin-left: -1px;
  color: black;
`;

const PowerBallText = styled.Text`
  text-align: center;
  margin-top: 10px;
  margin-left: -1px;
`;

const Dot = styled.View`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  color: black;
  border-style: solid;
  border-color: black;
  border-width: 1px;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;
