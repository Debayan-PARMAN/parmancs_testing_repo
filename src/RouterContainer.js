// import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ROUTES from '../src/constants/route';

const RootStack = createStackNavigator({
  Home: ROUTES.HOME,
  Loading: ROUTES.LOADING,
  Login: ROUTES.LOGIN,
  Registration: ROUTES.REGISTRATION,
  Testing: ROUTES.TEST_PAGE,
  VerifyMobileMumber: ROUTES.VERIFY_NUMBER,

},
  {
    initialRouteName: 'Home',
  });

export default AppContainer = createAppContainer(RootStack);