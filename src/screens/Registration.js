import React, {Component} from 'react';
import { View, Text } from 'native-base';

import Footer from '../components/Footer/Footer';

export default class Registration extends Component{
  static navigationOptions = {
    title: 'Registration',
    headerStyle: {
      backgroundColor: '#daadd6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      paddingLeft: 50,
    },
  };
  render() {
    return (
      <View>
        <Text>Registration Here</Text>
      </View>
    );
  }
};