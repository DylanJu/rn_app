import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class History extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen 2',
          color: 'red',
          disabledColor: 'black',
        },
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome History</Text>
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