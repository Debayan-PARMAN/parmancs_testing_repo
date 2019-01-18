import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
//import { URI } from '../constants';
import DateTimePicker from 'react-native-modal-datetime-picker';
import GetDirection_Btn from '../components/Button/GetDirection_Button';
import Doctor_Address from '../components/DoctorAddress'; 

export default class Doctor_Appoinment extends Component {

    static navigationOptions = {
        title: 'Check availability',
        headerStyle: {
            backgroundColor: '#572a6f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
            //alignItems:'center',

        },
    };
    
    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };
    
    render() {
      
        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>
                    <KeyboardAvoidingView style={LoginStyles.mainWrapper} behavior="padding" enabled>
                    <View>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                        <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:0.5,}}>
                            <Text style={{paddingLeft:10,paddingTop:10,}}>Select Date</Text>
                                    </View>
                        <View style={{flex: 0.4,paddingTop:13,}}>
                                        <Image style={{width: 15, height: 15, }}
                                    source={require('../../assets/images/up-arrow.png')} />
                                    </View>
                        <View style={{flex:1, paddingTop:10,}}>
                        <Text>2 places, 5 slots available</Text>
                        </View>
                        </View>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                    <View style={{ height: 20 }}>
                    </View>
                    <View style={{flex:1, flexDirection:'row', paddingLeft:10, paddingRight:10 }}>
                    <View style={{flex:1,}}>
                    <Text style={{ fontSize: 20, fontWeight:'bold' }}>Dr. Name</Text>
                    </View>
                    <View style={{ flex: 1,}}>
                    <Text style={{ fontSize: 15 }}>Specialization</Text>
                    </View>
                        </View>
                        <Doctor_Address />
                        <GetDirection_Btn/>
                        

                   </KeyboardAvoidingView> 
                </ScrollView>
            </View>
        );
    }
};