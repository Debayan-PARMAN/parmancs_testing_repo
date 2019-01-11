import React, {Component} from 'react';
import Carousel from '../components/Carousel';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Marker } from 'react-native-maps';
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
          <View style={{ flex: 1,marginTop:0, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', }}>
          <Button onPress={() => this.props.navigation.navigate('Loading')}
            title="Flash Screen" />
          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.props.navigation.navigate('Loading')}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Submit button</Text>
          </TouchableHighlight>
          </View>
     </View>
        <View style={{ flex: 1, marginTop: 10, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center', }}>
         <Text>ddd</Text>
        </View>
   </ScrollView>
      );
  }
}
const styles = StyleSheet.create({
  submit: {
    
     width:200,
    height:50,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  submitText: {
    color: '#000',
    textAlign: 'center',
    justifyContent:'center',
    marginTop:10,
  }
  
});