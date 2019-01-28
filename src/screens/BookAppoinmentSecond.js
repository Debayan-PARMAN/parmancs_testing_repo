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
                      
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: "row", marginLeft: 10, marginRight: 10, }}>
                                <View style={{ flex: 1, justifyContent: 'flex-start', }}><Text >Patient Details</Text></View>
                                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BookAppoinment')}><Text>EDIT</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={LoginStyles.textInput}>
                                <View style={{ flex: 1, justifyContent: 'flex-start', }}><Text >Patient name</Text></View>    
                            <TextInput
                                    style={LoginStyles.textInput_pass_email}
                                    placeholder="Patient name"
                                    editable={false}
                                //value={userDetails.username}
                                //onChangeText={(e) => this.onValueChange(e, 'username')} 
                                />
                            </View>
                            <View style={LoginStyles.textInput}>
                                <Text style={FontStyles.font}>Email</Text>
                                <TextInput
                                    style={LoginStyles.textInput_pass_email}
                                    placeholder="Patient email address"
                                    editable={false}
                                //value={userDetails.username}
                                //onChangeText={(e) => this.onValueChange(e, 'username')} 
                                />
                            </View>
                            <View style={LoginStyles.textInput}>
                                <Text style={FontStyles.font}>Mobile number</Text>
                                <TextInput
                                    style={LoginStyles.textInput_pass_email}
                                    placeholder="Patient Mobile number"
                                    editable={false}
                                //value={userDetails.username}
                                //onChangeText={(e) => this.onValueChange(e, 'username')} 
                                />
                            </View>
                            <View style={LoginStyles.textInput}>
                                <Text style={FontStyles.font}>Age (in year)</Text>
                                <TextInput
                                    style={LoginStyles.textInput_pass_email}
                                    placeholder="Approx age"
                                    editable={false}
                                //value={userDetails.username}
                                //onChangeText={(e) => this.onValueChange(e, 'username')}
                                />
                            <Text style={FontStyles.font}>Gender</Text>
                            <TextInput
                                style={LoginStyles.textInput_pass_email}
                                placeholder="Gender"
                                editable={false}
                            //value={userDetails.username}
                            //onChangeText={(e) => this.onValueChange(e, 'username')}
                            />
                            </View>
                            
                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                            <View style={{ flex: 1, backgroundColor: '#707070', height: 40, justifyContent: 'center', marginTop: 10, }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>Confirm and process to pay</Text>
                            </View>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
};

