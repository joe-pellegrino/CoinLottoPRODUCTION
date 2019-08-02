import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

const Row = props => (
  <Container>
    <Content>
      <Dot>
        <BallText>{props.number1}</BallText>
      </Dot>
      <Dot>
        <BallText>{props.number2}</BallText>
      </Dot>
      <Dot>
        <BallText>{props.number3}</BallText>
      </Dot>
      <Dot>
        <BallText>{props.number4}</BallText>
      </Dot>
      <Dot>
        <BallText>{props.number5}</BallText>
      </Dot>
      <DotPower>
        <PowerBallText>{props.power}</PowerBallText>
      </DotPower>
    </Content>
  </Container>
);

export default Row;

const BallText = styled.Text`
  text-align: center;
  margin-top: 10px;
  margin-left: -1px;
  color: white;
`;

const PowerBallText = styled.Text`
  text-align: center;
  margin-top: 10px;
  margin-left: -1px;
`;

const DotPower = styled.View`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  border-style: solid;
  border-color: black;
  border-width: 1px;
`;

const Dot = styled.View`
  height: 40px;
  width: 40px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  color: white;
  border-style: solid;
  border-color: black;
  border-width: 1px;
`;

const Container = styled.View`
  background-color: white;
  width: 90%;
  height: 100px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  align-items: center;
  margin-left: 15px;
  margin-top: 20px;
`;

const Content = styled.View`
  padding-left: 15px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;
