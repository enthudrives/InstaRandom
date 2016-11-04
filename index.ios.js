/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class YesOrNo extends Component {
  constructor(props) {
    super(props);
    this.state = {answer: "Waities.."};
  }

  render() {
    window.fetch('https://yesno.wtf/api/').then((response) => {
      response.json().then((yesno) => {
        this.setState({answer: yesno.answer});
      });
    });
    return (
      <Text style={{color: "red"}}>{this.state.answer}</Text>
    );
  }
}

export default class InstaRandom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Is that right?
        </Text>
        <YesOrNo />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('InstaRandom', () => InstaRandom);
