import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {
  goToSignIn,
  goSideMenu,
  goStack,
} from './navigation';

export default class Home extends Component {
  onSignInButtonClick() {
    goToSignIn();
  }

  onSideMenuButtonClick() {
    goSideMenu();
  }

  onStackButtonClick() {
    goStack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Home</Text>
        <Button
          onPress={this.onSignInButtonClick}
          title="Sign In"
        />
        <Button
          onPress={this.onSideMenuButtonClick}
          title="Go SideMenu"
        />
        <Button
          onPress={this.onStackButtonClick}
          title="Go Stack"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});