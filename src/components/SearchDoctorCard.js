import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button, AppRegistry, } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { Card, } from 'react-native-elements'
//import { URI } from '../constants';
import BookAppointment_Btn from '../components/Button/BookAppointment_Button';
import Doctor_Address from '../components/DoctorAddress';
import { DoctorCardStyle }  from '../styelsheets/DoctorCardStyle';
import { CardStyle } from '../styelsheets/CardStyle';
//import CalendarStrip from 'react-native-calendar-strip-slide-navigation';


export default class Search_Doctor_Card extends Component {

    render() {

        return(
            <Card container style={DoctorCardStyle}>
            <View style = {{ flex:1 }}>
                <View style = {{ flex:1, flexDirection:"row",  }}>
                    
                        <View style = {{ flex: 0.45, }}>
                            <Image style={{width:70,height:70,}}
                                source={require('../../assets/icon.png')}
                            />
                        </View>
                        
                        <View style={{ flex: 1,}}>
                            <View style={{ flex: 1, flexDirection:"row" }}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, textDecorationLine: "underline" }}>Dr. Subodh Pal
                                    </Text>
                                </View>
                                <View style={{ flex: 0.6, }}>
                                    <Text>BDS , MDS
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, }}>
                                <Text>General Dentistry
                                </Text>
                                <Text>18 years of experience
                                </Text>

                            </View>
                           
                        </View>
                            
                        
                </View>
                    <View style={{ flex: 1, marginTop: 10, flexDirection: "row", }}>
                       <View style = {{ flex: 1, }}>
                            <Image style={{ width: 125, height: 20, marginLeft:90, marginTop:3 }}
                                source={require('../../assets/images/heart.png')}
                            />
                        </View>
                        <View style={DoctorCardStyle.buttonContainer}>
                            <View style={DoctorCardStyle.buttonStyle}><Text style={DoctorCardStyle.buttonText}>5.0</Text></View>
                        </View>

                    </View>
                    <View style={{ flex: 1, marginTop: 10, marginBottom: 20, }}>
                        <View style={{ flex: 1, flexDirection:"row" }}>
                            <Image style={{ width: 20, height: 20, }}
                                source={require('../../assets/images/placeholder.png')}
                            />
                             <Text>AMRI HOSPITAL - Salt Lake</Text>
                        </View> 
                
                        <View style={{ flex: 1, flexDirection: "row", marginTop:4 }}>
                            <Image style={{ width: 20, height: 20, }}
                                source={require('../../assets/images/placeholder.png')}
                            />
                            <Text>MEDICA HOSPITAL - Mukundapur</Text>
                        </View> 
                </View>

                
                
                <BookAppointment_Btn />
                
                </View>
            </Card>
        );
    }
};