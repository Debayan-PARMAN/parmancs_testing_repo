import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, AppRegistry, } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { Card,} from 'react-native-elements'
//import { URI } from '../constants';
// import DateTimePicker from 'react-native-modal-datetime-picker';

import GetDirection_Btn from '../components/Button/GetDirection_Button';
import Doctor_Address from '../components/DoctorAddress'; 
//import CalendarStrip from 'react-native-calendar-strip-slide-navigation';
import Doctor_Card from '../components/DoctorCard';
import DatePicker from 'react-native-datepicker';

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
    
    // state = {
    //     isDateTimePickerVisible: false,
    // };

    // _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    // _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    // _handleDatePicked = (date) => {
    //     console.log('A date has been picked: ', date);
    //     this._hideDateTimePicker();
    // };
    render() {
            
        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>
                    <KeyboardAvoidingView style={LoginStyles.mainWrapper} behavior="padding" enabled>
                    <View>
                        <TouchableOpacity>
                                <DatePicker
                                    style={{ width: 200 }}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2019-01-01"
                                    maxDate="2025-01-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 10,
                                            marginRight: 10,
                                        },
                                        dateInput: {
                                            marginLeft: 36,
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                        </TouchableOpacity>
                        {/* <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        /> */}
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
                        <Doctor_Card />
                        <Doctor_Card />
                        <Doctor_Card />
                        <Doctor_Card />

                   </KeyboardAvoidingView> 
                </ScrollView>
            </View>
        );
    }
};