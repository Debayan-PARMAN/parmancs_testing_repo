import React, {Component} from 'react';
import {AppRegistry, Text, View } from 'react-native';

import {LayoutStyles} from './styelsheets/MainStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogIn from './screens/Login';
import Flash_Screen from './components/FlashScreen';

export default class MainApp extends Component {
  render() {
    return (
      <View style={LayoutStyles.container}>
        <Header />
        <LogIn/>
        <Footer />
      </View>
    );
  }
}

AppRegistry.registerComponent(MainApp, () => MainApp);