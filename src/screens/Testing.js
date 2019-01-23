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
            <View style={{ flex: 1, }}>
                <View style={LoginStyles.button}>
                    <View style={{ flex: 0.7, }}>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Button onPress={() => this.props.navigation.navigate('CreateAccount')}
                            style={FontStyles.font}
                            //onPress={this.onSubmit}
                            title="Create Account"
                            color="#AA8CC5"
                            width="10"
                        />
                    </View>
                    <View style={{ flex: 0.7, }}>
                    </View>
                </View>
                <View style={LoginStyles.button}>
                    <View style={{ flex: 0.7, }}>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Button onPress={() => this.props.navigation.navigate('DoctorAppoinment')}
                            style={FontStyles.font}
                            //onPress={this.onSubmit}
                            title="Doctor Appoinment"
                            color="#AA8CC5"
                            width="10"
                        />
                    </View>
                    <View style={{ flex: 0.7, }}>
                    </View>
                </View>
                <View style={LoginStyles.button}>
                    <View style={{ flex: 0.7, }}>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Button onPress={() => this.props.navigation.navigate('BookAppoinment')}
                            style={FontStyles.font}
                            //onPress={this.onSubmit}
                            title="Book Appoinment"
                            color="#AA8CC5"
                            width="10"
                        />
                    </View>
                    <View style={{ flex: 0.7, }}>
                    </View>
                </View>
            </View>
        );
    }
}