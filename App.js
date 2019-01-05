import React, {Component} from 'react';
import Carousel from './src/components/Carousel';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import Flash_Screen from './src/components/FlashScreen';

export default class App extends Component {
  render() {
    return (

      <View  style={{ flex: 1, backgroundColor:'#red', alignItems:'center', justifyContent:'center', }}>
         <Carousel/>
      </View>
      // <View>
      // <Flash_Screen/>
      // </View>




     
    );
  }
}

