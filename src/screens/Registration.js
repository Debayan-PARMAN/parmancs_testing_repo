import React, {Component} from 'react';
import { View, Text } from 'native-base';

// import Header from '../components/Footer/Footer';
// import Footer from '../components/Header/Header';

export default class Registration extends Component{
  static navigationOptions = {
    title: 'Registration',
    headerStyle: {
      backgroundColor: '#AA8CC5',
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