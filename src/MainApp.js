import React, {Component} from 'react';
import {AppRegistry, Text, View } from 'react-native';

import {LayoutStyles} from './styelsheets/MainStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogIn from './screens/Login';

export default class MainApp extends Component {
  render() {
    return (
      <View style={LayoutStyles.container}>
        <Header />
        <Text>This is MainApp file</Text>
        <LogIn />
        <Footer />
      </View>
    );
  }
}

AppRegistry.registerComponent(MainApp, () => MainApp);