/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, Alert } from 'react-native';

export default class ButtonBasics extends Component {
  
  constructor(props) {
    super(props);
    this.onButtonPress.bind(this);
  }

  onButtonPress() {
    Alert.alert("You tapped the Button");
  }
  
  render() {
    return (
      <View style={style.container}>
        <View style={style.buttonContainer}>
          <Button onPress={this.onButtonPress} title="Press me!" />
        </View>
        <View style={style.buttonContainer}>
          <Button onPress={this.onButtonPress} title="Press me!" />
        </View>
        <View style={style.alternativeLayoutButtonContainer}>
          <Button onPress={this.onButtonPress} title="This looks great!" />
          <Button onPress={this.onButtonPress} title="OK!" color="#841584" />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);