import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Animated, TouchableOpacity, Button, Dimensions } from "react-native";
import { connect } from "react-redux";

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const screenHeight = Dimensions.get("window").height;

function mapDispatchToProps(dispatch) {
  return {
    closeNewDrawing: () =>
      dispatch({
        type: "CLOSE_NEW_DRAWING"
      })
  };
}

function mapStateToProps(state) {
  return { action: state.action };
}

class NewDrawing extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openNewDrawing") {
      // Close
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    }
    if (this.props.action == "closeNewDrawing") {
      // Close
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}
        >
          <CloseView>
            <Button title="Close" onPress={this.props.closeMenu}>
              /
            </Button>
            {/* <Icon.Ionicons name="ios-close" size={44} color="#546bfb" /> */}
          </CloseView>
        </TouchableOpacity>
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDrawing);

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
`;
