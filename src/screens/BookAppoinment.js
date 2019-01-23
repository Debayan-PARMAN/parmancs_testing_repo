import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, AppRegistry, } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { Card, } from 'react-native-elements'
//import { URI } from '../constants';
import GetDirection_Btn from '../components/Button/GetDirection_Button';
import Doctor_Address from '../components/DoctorAddress';
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
    
    render() {

        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>
                    <KeyboardAvoidingView style={LoginStyles.mainWrapper} behavior="padding" enabled>
                        <View style={{ flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:2,}}>
                            <View style={{ flex: 1, justifyContent:'center', alignItems:'center', }}>
                                <Image style={Button_fb_google.image}
                                    source={require('../../assets/images/like1.png')}
                                />
                                <View style={{width:50}}>
                                <Text style={{textAlign:'center'}}>Patient details</Text>
                                </View>
                        </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Image style={Button_fb_google.image}
                                    source={require('../../assets/images/like.png')}
                                />    
                                <View style={{ width: 50 }}>
                                <Text style={{ textAlign: 'center' }}>Review details</Text>
                                </View>
                        </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Image style={Button_fb_google.image}
                                    source={require('../../assets/images/like.png')}
                                />
                                <View style={{ width: 60 }}>
                                <Text style={{ textAlign: 'center' }}>Payment details</Text>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
};