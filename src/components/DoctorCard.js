import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, AppRegistry, } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { Card, } from 'react-native-elements'
//import { URI } from '../constants';
import GetDirection_Btn from '../components/Button/GetDirection_Button';
import Doctor_Address from '../components/DoctorAddress';
//import { CardStyle } from '../styelsheets/CardStyle';
//import CalendarStrip from 'react-native-calendar-strip-slide-navigation';


export default class Doctor_Card extends Component {

render() {

        return (
             <Card containerStyle={{ padding: 0 }}>

                            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10, marginTop:10, }}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dr. Name</Text>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 15, textAlign: 'right' }}>Specialization</Text>
                                </View>
                            </View>
                            <Doctor_Address />
                            <GetDirection_Btn />
                            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                                <View style={{ flex: 1, }}>
                                    <Text>Morning</Text>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ textAlign: 'right' }}>3slots availability</Text>
                                </View>
                            </View>
                            <ScrollView horizontal>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', height: 30, marginBottom: 10, }}>
                                <View style={{ flex: 0.5, backgroundColor: '#1BA529', justifyContent: 'center', marginLeft: 7, marginRight: 7, borderRadius: 5, paddingLeft:2, paddingRight:2, }}><TouchableOpacity><Text style={{ textAlign: 'center', color: 'white', }}>9.15 am</Text></TouchableOpacity></View>
                                <View style={{ flex: 0.5, backgroundColor: '#1BA529', justifyContent: 'center', marginLeft: 7, marginRight: 7, borderRadius: 5, paddingLeft: 2, paddingRight: 2, }}><TouchableOpacity><Text style={{ textAlign: 'center', color: 'white', }}>9.15 am</Text></TouchableOpacity></View>
                                <View style={{ flex: 0.5, backgroundColor: '#1BA529', justifyContent: 'center', marginLeft: 7, marginRight: 7, borderRadius: 5, paddingLeft: 2, paddingRight: 2, }}><TouchableOpacity><Text style={{ textAlign: 'center', color: 'white', }}>9.15 am</Text></TouchableOpacity></View>
                                <View style={{ flex: 0.5, backgroundColor: '#1BA529', justifyContent: 'center', marginLeft: 7, marginRight: 7, borderRadius: 5, paddingLeft: 2, paddingRight: 2, }}><TouchableOpacity><Text style={{ textAlign: 'center', color: 'white', }}>9.15 am</Text></TouchableOpacity></View>
                                <View style={{ flex: 0.5, backgroundColor: '#1BA529', justifyContent: 'center', marginLeft: 7, marginRight: 7, borderRadius: 5, paddingLeft: 2, paddingRight: 2, }}><TouchableOpacity><Text style={{ textAlign: 'center', color: 'white', }}>9.15 am</Text></TouchableOpacity></View>
                                <View style={{ flex: 0.5, backgroundColor: '#1BA529', justifyContent: 'center', marginLeft: 7, marginRight: 7, borderRadius: 5, paddingLeft: 2, paddingRight: 2, }}><TouchableOpacity><Text style={{ textAlign: 'center', color: 'white', }}>9.15 am</Text></TouchableOpacity></View>
                                <View style={{ flex: 0.5, backgroundColor: '#1BA529', justifyContent: 'center', marginLeft: 7, marginRight: 7, borderRadius: 5, paddingLeft: 2, paddingRight: 2, }}><TouchableOpacity><Text style={{ textAlign: 'center', color: 'white', }}>9.15 am</Text></TouchableOpacity></View>
                            </View>
                            </ScrollView>
                        </Card>
        );
    }
};