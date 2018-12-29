import React, {Component} from 'react';
import {View} from 'react-native';
import Flash_Screen from './FlashScreen';
import Footer_Component from './Footer';
import Header_Component from './Header';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header_Component/>
        <Flash_Screen/>        
        <Footer_Component/>
      </View>
    );
  }
}


