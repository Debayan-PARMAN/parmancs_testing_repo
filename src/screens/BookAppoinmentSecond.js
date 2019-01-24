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

export default class Book_Appoinment_Second extends Component {

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
        console.log('Toggle Triggered');
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

                        <View style={UserProfileStyle.EmailAgeBloodWeight}>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 1, justifyContent: 'flex-start', }}><Text style={{ marginTop: 30, }}>Patient Details</Text></View>
                                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookAppoinment')}><Text>Edit</Text></TouchableOpacity>
                                </View>
                            </View>
                            <TextInput
                                style={UserProfileStyle.EmailTextInput}
                                placeholder="Patient name"
                                editable={false}
                            //onChangeText={text => this.setState({ text })}
                            //value={this.state.text}
                            />
                            <Text style={UserProfileStyle.EmailText}>Email</Text>
                            <TextInput
                                style={UserProfileStyle.EmailTextInput}
                                placeholder="Patient email address"
                                editable={false}
                            //onChangeText={text => this.setState({ text })}
                            //value={this.state.text}
                            />
                            <Text style={UserProfileStyle.EmailText}>Mobile Number</Text>
                            <TextInput
                                style={UserProfileStyle.EmailTextInput}
                                placeholder="Patient mobile number"
                                editable={false}
                            //onChangeText={text => this.setState({ text })}
                            //value={this.state.text}
                            />
                            <Text style={UserProfileStyle.EmailText}>Age (in years) </Text>
                            <TextInput
                                style={UserProfileStyle.EmailTextInput}
                                placeholder="Approx age"
                                editable={false}
                            //onChangeText={text => this.setState({ text })}
                            //value={this.state.text}
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

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                            <View style={{ flex: 1, backgroundColor: '#707070', height: 40, justifyContent: 'center', marginTop: 10, }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 25, fontWeight: 'bold' }}>Confirm and proceed to pay</Text>
                            </View>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
};

