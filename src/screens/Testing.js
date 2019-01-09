import React, {Component} from 'react';
import Carousel from '../components/Carousel';
import { View, ScrollView, Image, StyleSheet, Dimensions,Text } from 'react-native';
// import Flash_Screen from './src/components/FlashScreen';

export default class Testing extends Component {
  render() {
    return (
     <ScrollView>
      <View  style={{ flex: 1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', }}>
      <View style={{ flex: 1,alignItems:'center', flexDirection:'row',backgroundColor:'#7f439e', height:60,marginTop:27 }}>
           <View style={{flex:1, backgroundColor:'#ccc', height:60}}>
              <Text style={{textColor: '#fff', alignItems: 'center', justifyContent: 'center', }}>Hello</Text>
           </View>
           <View style={{flex:1, backgroundColor:'green', height:60}}>
            <Text>Hello</Text>
             </View >
           <View style={{flex:.6, backgroundColor:'blue',height:60,}}>
             <Text>Hello</Text>
           </View>
         </View>
         <View style={{ flex: 0.7, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', }}>
           <Carousel/>
         </View>
         <View style={{ flex: 1, backgroundColor:'red', alignItems:'center', flexDirection:'row' }}>
           <View style={{flex:1, backgroundColor:'red'}}>
             <Text>Hello</Text>
           </View>
           <View style={{flex:1, backgroundColor:'green'}}>
             <Text>Hello</Text> 
           </View >
           <View style={{flex:1, backgroundColor:'blue'}}>
             <Text>Hello</Text> 
           </View>
         </View>
         <View style={{ flex: 1, backgroundColor:'#fff', alignItems:'center', }}>
           {/* <Flash_Screen/> */}
         </View>
         <View style={{ flex: 1,alignItems:'center', flexDirection:'row',backgroundColor:'#ccc', height:100 }}>
           <View style={{flex:1, backgroundColor:'red' ,}}>
            <Text>Hello</Text>
           </View>
           <View style={{flex:1, backgroundColor:'green',}}>
            <Text>Hello</Text>
             </View >
           <View style={{flex:.6, backgroundColor:'blue', width:20}}>
             <Text>Hello</Text>
           </View>
         </View>
     </View>
   </ScrollView>
      );
  }
}
