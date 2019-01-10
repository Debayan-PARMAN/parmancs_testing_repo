import React, {Component} from 'react';
import Carousel from '../components/Carousel';
import { View, ScrollView, Image, StyleSheet, Dimensions,Text } from 'react-native';
// import Flash_Screen from './src/components/FlashScreen';

export default class Testing extends Component {
  render() {
    return (
     <ScrollView>
      <View  style={{ flex: 1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', }}>
         <View style={{ flex: 1,alignItems:'center', flexDirection:'row',backgroundColor:'#ccc', height:100 }}>
            <View style={{ flex: 0.95,height:145,borderWidth:1,borderColor:'#000', backgroundColor: '#fff' }}>
              <Carousel />
            </View>
         </View>
     </View>
   </ScrollView>
      );
  }
}
