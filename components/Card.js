import React from "react";
import styled from "styled-components";
import CountDown from "react-native-countdown-component";

const Card = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      {/* <Logo source={props.logo} /> */}
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <CountDown
          until={props.countdownUntil}
          size={15}
          //onFinish={() => alert('Finished')}
          digitStyle={{
            backgroundColor: "#FFF",
            borderWidth: 0
          }}
          digitTxtStyle={{ color: "#1CC625" }}
          timeLabelStyle={{ color: "red", fontWeight: "bold" }}
          separatorStyle={{ color: "#1CC625" }}
          timeToShow={["D", "H", "M", "S"]}
          timeLabels={{ d: "D", m: "M", h: "H", s: "S" }}
        />
        {/* <Subtitle>{props.subtitle}</Subtitle> */}
      </Wrapper>
    </Content>
  </Container>
);

export default Card;

const Container = styled.View`
  background-color: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
  margin-top: 20px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  width: 170px;
  margin-top: 20px;
  margin-left: 20px;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
