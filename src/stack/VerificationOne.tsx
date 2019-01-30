import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Verification from 'stack/Verification';

interface VerificationProps {
  componentId: string;
}

export default class VerificationOne extends Component<VerificationProps> implements Verification {
  constructor(props: VerificationProps) {
    super(props);
  }

  onNextClick = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'VerificationTwo',
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Verification 1</Text>
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