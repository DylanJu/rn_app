import React, { Component } from 'react';
import styled from 'styled-components/native';

const MyBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoginLayer = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.2;
`;

const SocialLoginButton = styled.TouchableHighlight`
  flex: 1;
  width: 100px;
  height: 45px;
  border-radius: 3px;
  background-color: #3fffff;
  border: 1px solid #3fffff;
`;

const SocialLoginText = styled.Text`
  color: white;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

// interface Props {

// }

class SocialLoginButtonGroup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }
  render() {
    return (
      <SocialLoginButton>
        <SocialLoginText>Facebook</SocialLoginText>
      </SocialLoginButton>
    )
  }
}

export default class SignIn extends Component {
  render() {
    return (
      <MyBackground source={require('img/sign_in_background.jpg')}>
        <LoginLayer />
        <Title>Travel Mate</Title>

        <SocialLoginButton>
          <SocialLoginText>Facebook</SocialLoginText>
        </SocialLoginButton>

        <SocialLoginButton>
          <SocialLoginText>Facebook</SocialLoginText>
        </SocialLoginButton>
      </MyBackground>
    );
  }
}
