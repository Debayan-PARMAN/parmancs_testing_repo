import React, {Component} from 'react';
import {View} from 'react-native';
import Flash_Screen from './FlashScreen';
import Footer_Component from './Footer';
import Header_Component from './Header';
import Log_In from './Login';
export default class App extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header_Component/>
        
        <Log_In/>        
        <Footer_Component/>
      </View>
    );
  }
}


