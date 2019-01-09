import React, {Component} from 'react';
import {AppRegistry, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {LayoutStyles} from './styelsheets/MainStyle';
import Footer from './components/Footer/Footer';

import Login from './screens/Login';
import Registration from './screens/Registration';
import Home from './screens/Home';
import FlashScreen from './screens/FlashScreen';
import CreateAccount_Btn from './components/Button/CreateAccount_Button';

const RootStack = createStackNavigator({
  Home: Home,
  Loading: FlashScreen,
  Login: Login,
  Registration: Registration,
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