import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {
  goThree,
} from '../navigation';

export default class VerificationTwo extends Component {
  constructor(props) {
    super(props);
    this.onNextClick = this.onNextClick.bind(this);
  }
  onNextClick() {
    goThree(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Verification 2</Text>
        <Button
          onPress={this.onNextClick}
          title="Go Next"
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