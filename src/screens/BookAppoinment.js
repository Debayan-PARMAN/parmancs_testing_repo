import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, AppRegistry, } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import UserProfileStyle from '../styelsheets/UserProfileStyle';
import Doctor_Address from '../components/DoctorAddress';
import { CardStyle } from '../styelsheets/CardStyle';
import ToggleSwitch from 'toggle-switch-react-native';
import Status_Indicator from '../components/StatusIndicator';
//import CalendarStrip from 'react-native-calendar-strip-slide-navigation';
//import Svg, {Use,Image,} from 'react-native-svg';

export default class Book_Appoinment extends Component {

    static navigationOptions = {
        title: 'Book Appoinment',
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

    onToggle = () => {
        this.props.navigation.navigate('BookAppoinmentSecond')

    }

    render() {

        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>
                    <KeyboardAvoidingView style={LoginStyles.mainWrapper} behavior="padding" enabled>
                        <Status_Indicator />
                        <View style={CardStyle.mainContainer}>
                            <View style={CardStyle.flex}>
                                <Text style={CardStyle.name}>Dr. Name</Text>
                            </View>
                            <View style={CardStyle.flex}>
                                <Text style={CardStyle.specialization}>Specialization</Text>
                            </View>
                        </View>


                        <Doctor_Address />

                        <View style={{ paddingLeft: 10, paddingRight: 10, }}>
                            <Text>Date & Time - Jan 28, 2019 3pm</Text>
                        </View>
                        <View style={{ flex: 1, marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 150, height: 30, backgroundColor: '#972493', borderWidth: 1, }} >
                                <TouchableOpacity onPress={() => console.log('First Consultation')}><Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 15,
                                    color: '#fff',
                                    textAlign: "center",
                                    justifyContent: 'center',
                                    marginTop: 2
                                }}>
                                    First Consultation
                               </Text></TouchableOpacity>
                            </View>
                            <View style={{ width: 150, height: 30, backgroundColor: '#ccc', borderWidth: 1, }} >
                                <TouchableOpacity onPress={() => console.log('Follow Up')}><Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 15,
                                    color: '#972493',
                                    textAlign: "center",
                                    justifyContent: 'center',
                                    marginTop: 2
                                }}>
                                    Follow Up
                               </Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, justifyContent: 'flex-start', }}><Text >Patient name</Text></View>
                                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                    <ToggleSwitch
                                        //isOn={showPassword}
                                        onColor='#32CD32'
                                        offColor='#616264'
                                        size='small'
                                        onToggle={this.onToggle}/>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                            <TextInput
                            style={{}}
                            placeholder="Patient name"
                            />
                            </View>
                            

                        <Text style={UserProfileStyle.GenderIama}>Gender</Text>
                        <View style={UserProfileStyle.Gender}>
                            <View style={UserProfileStyle.GenderMan}>
                                <TouchableOpacity onPress={() => console.log('Men Botton Tiggered')} >
                                    <Text style={UserProfileStyle.GenderText}>Man</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={UserProfileStyle.GenderMan}>
                                <TouchableOpacity onPress={() => console.log('Women Botton Tiggered')} >
                                    <Text style={UserProfileStyle.GenderText}>Woman</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={UserProfileStyle.GenderMan}>
                                <TouchableOpacity onPress={() => console.log('Others Botton Tiggered')} >
                                    <Text style={UserProfileStyle.GenderText}>Others</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>

                        <TouchableOpacity onPress={() => console.log('Next Botton Tiggered')} >
                            <View style={{ flex: 1, backgroundColor: '#707070', height: 40, justifyContent: 'center', marginTop: 10, }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 25, fontWeight: 'bold' }}>Next</Text>
                            </View>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
};

