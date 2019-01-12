import React, {Component} from 'react';
import {AppRegistry, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {LayoutStyles} from './styelsheets/MainStyle';
import Footer from './components/Footer/Footer';

import ROUTES from '../src/constants/route';

import CreateAccount_Btn from './components/Button/CreateAccount_Button';

const RootStack = createStackNavigator({
  Home: ROUTES.HOME,
  Loading: ROUTES.LOADING,
  Login: ROUTES.LOGIN,
  Registration: ROUTES.REGISTRATION,
  Registration: CreateAccount_Btn,


},
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default class MainApp extends Component {
  render() {
    return (
      <View style={LayoutStyles.container}>
        <AppContainer />
        <Footer />
      </View>
    );
  }
}


AppRegistry.registerComponent(MainApp, () => MainApp);