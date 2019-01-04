import React, {Component} from 'react';
import {AppRegistry, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import {LayoutStyles} from './styelsheets/MainStyle';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Flash_Screen from './components/FlashScreen';

// import Footer_Component_Home from '../src/components/Footer/Footer_Home';
// import Footer_Component_MyAccount from '../src/components/Footer/Footer_MyAccount';
// import Footer_Component_Notification from '../src/components/Footer/Footer_Notification';
// import Footer_Component_Cart from '../src/components/Footer/Footer_Cart';
// import Footer_Component_Help from '../src/components/Footer/Footer_Help';

import Login from './screens/Login';
import Registration from './screens/Registration';
import Home from './screens/Home';
import FlashScreen from './screens/FlashScreen';

const RootStack = createStackNavigator({
  Home: Home,
  Loading: FlashScreen,
  Login: Login,
  Registration: Registration
},
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default class MainApp extends Component {
  render() {
    return (
      <View style={LayoutStyles.container}>
        {/* <Header /> */}
        <AppContainer />
        <Footer />
      </View>
    );
  }
}


AppRegistry.registerComponent(MainApp, () => MainApp);