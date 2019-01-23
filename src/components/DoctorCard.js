import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, AppRegistry, } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { Card, } from 'react-native-elements'
//import { URI } from '../constants';
import GetDirection_Btn from '../components/Button/GetDirection_Button';
import Doctor_Address from '../components/DoctorAddress';
import { CardStyle } from '../styelsheets/CardStyle';
//import CalendarStrip from 'react-native-calendar-strip-slide-navigation';


export default class Doctor_Card extends Component {

render() {

        return (
             <Card container style={CardStyle}>

                <View style={CardStyle.mainContainer}>
                                <View style={CardStyle.flex}>
                                    <Text style={CardStyle.name}>Dr. Name</Text>
                                </View>
                                <View style={CardStyle.flex}>
                                    <Text style={CardStyle.specialization}>Specialization</Text>
                                </View>
                            </View>
                            <Doctor_Address />
                            <GetDirection_Btn />
                            <View style={CardStyle.secondContainer}>
                                <View style={CardStyle.flex}>
                                    <Text>Morning</Text>
                                </View>
                                    <View style={CardStyle.flex}>
                                    <Text style={CardStyle.slotStyle}>3slots availability</Text>
                                </View>
                            </View>
                            <ScrollView horizontal>
                            <View style={CardStyle.buttonContainer}>
                                <View style={CardStyle.buttonStyle}><TouchableOpacity><Text style={CardStyle.buttonText}>9.15 am</Text></TouchableOpacity></View>
                                <View style={CardStyle.buttonStyle}><TouchableOpacity><Text style={CardStyle.buttonText}>9.15 am</Text></TouchableOpacity></View>
                                <View style={CardStyle.buttonStyle}><TouchableOpacity><Text style={CardStyle.buttonText}>9.15 am</Text></TouchableOpacity></View>
                                <View style={CardStyle.buttonStyle}><TouchableOpacity><Text style={CardStyle.buttonText}>9.15 am</Text></TouchableOpacity></View>
                                <View style={CardStyle.buttonStyle}><TouchableOpacity><Text style={CardStyle.buttonText}>9.15 am</Text></TouchableOpacity></View>
                                <View style={CardStyle.buttonStyle}><TouchableOpacity><Text style={CardStyle.buttonText}>9.15 am</Text></TouchableOpacity></View>
                                <View style={CardStyle.buttonStyle}><TouchableOpacity><Text style={CardStyle.buttonText}>9.15 am</Text></TouchableOpacity></View>
                            </View>
                            </ScrollView>
                        </Card>
        );
    }
};