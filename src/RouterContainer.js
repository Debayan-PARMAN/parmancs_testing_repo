// import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default RouterConfig = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
}, {
  initialRouteName: 'HomePage',
});

const RouterContainer = createAppContainer(RouterConfig)