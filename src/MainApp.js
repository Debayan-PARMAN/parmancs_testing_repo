import React, {Component} from 'react';
import {AppRegistry, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {LayoutStyles} from './styelsheets/MainStyle';
import Footer from './components/Footer/Footer';

import ROUTES from '../src/constants/route';
import Home_Page from './screens/HomePage';
import Test_Page from './screens/Testing';
import Verify_Mobile_Number from './screens/VerifyMobileNumber';

import CreateAccount_Btn from './components/Button/CreateAccount_Button';

const RootStack = createStackNavigator({
  Home: ROUTES.HOME,
  Loading: ROUTES.LOADING,
  Login: ROUTES.LOGIN,
  Registration: ROUTES.REGISTRATION,
  Registration: CreateAccount_Btn,
  Testing: Test_Page,
  VerifyMobileMumber: Verify_Mobile_Number,

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