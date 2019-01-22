import React, { Component } from 'react';
import { Platform,View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView,Picker } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
//import Footer from './components/Footer/Footer';
//import ImageSlider from 'react-native-image-slider';
import Footer_Component from '../components/Footer/Footer';
import Greeting from '../screens/UserProfile';
import ImagePicker from 'react-native-image-picker';
import Drop_Down from '../components/DropDown';

export default class Test_Page extends Component {
   
    
    render() {
        return(
            // <Picker
            //     selectedValue={this.state.selected}
            //     mode='dropdown'
            //     onValueChange={(itemValue) => this.setState({ selected: itemValue })}>
            //     {
            //         this.state.options.map(option => <Picker.Item key={option.label} label={option.label} value={option.value} />)
            //     }
            // </Picker>


            <View>
              <Drop_Down/>
            </View>
        );
    }
}