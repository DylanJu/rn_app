import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Verification from 'stack/Verification';

export default class VerificationThree extends Component implements Verification {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Verification 3</Text>
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