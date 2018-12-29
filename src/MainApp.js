import React, {Component} from 'react';
import {AppRegistry, Text, View } from 'react-native';
import MainStyles from './styelsheets/MainStyle';

export default class MainApp extends Component {
  render() {
    return (
      <View style={MainStyles.container}>
        <Text>This is MainApp file</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent(MainApp, () => MainApp);