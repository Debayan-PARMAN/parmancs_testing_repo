import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import {LoginStyles} from '../styelsheets/MainStyle';
import ToggleSwitch from 'toggle-switch-react-native';
//import { ScrollView } from 'react-native-gesture-handler';

export default class LogIn extends Component {    
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            otp:'',
            successMessage:'',
            failureMessage:'',
            alertTrigger: false,
            showPassword: true,
        };
    }

    onValueChange = (value, id) => {
        console.log(id,value);
        this.setState({ [id]:value });
    }

    onSubmit = () => {

        console.log('Submit Button triggered');
        const path = `http://206.189.150.18:9090/rest/v1/users/login`;
        const { username, password } = this.state;
        fetch(path, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // "userName": 'debayan.sen@parmancs.com1',
                "userName": username,
                // "password": 'mystrio7',
                "password": password,
                "registrationProvider": "SBIS",
                "roleName": "INDIVIDUAL"
            }),
        })
        .then(function (response){
            return response.json();
        })
        .then((response) => { 
            console.log(response.token); 
            if (response.token) {
                this.setState({ successMessage: `User ${response.username} has successfully logged in.` });
                Alert.alert(this.state.successMessage);
            } else {
                this.setState({ failureMessage: 'Invalid username or password!' });
                Alert.alert(this.state.failureMessage);
            }
        })
        .catch((error) => { 
            console.log(error);
        });
    }

    render() {
        const {username, password, otp, showPassword } = this.state;

        const passwordSection = (
            <View style={LoginStyles.textInput}>
                <Text>Password</Text>
                <TextInput
                    style={{ height: 25, borderBottomColor: 'black', borderBottomWidth: 1, }}
                    placeholder="Type your Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e) => this.onValueChange(e, 'password')} />
            </View>
        );
        const otpSection = (
            <View style={LoginStyles.textInput}>
                <Text>OTP</Text>
                <TextInput
                    style={{ height: 25, borderBottomColor: 'black', borderBottomWidth: 1, }}
                    placeholder="Type your OTP"
                    value={otp}
                    onChangeText={(e) => this.onValueChange(e, 'otp')} />
            </View>
        );


        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>
                    <View style={LoginStyles.bannerArea}>
                        <View style={LoginStyles.bannerArea_Button}>
                            <TouchableOpacity onPress={() => console.log('back')}>
                                <Image style={{ width: 20, height: 20, }}
                                    source={require('../../assets/images/back.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={LoginStyles.bannerArea_Text}>
                            <Text style={{ fontSize: 24, color: '#616264', }}> MEDePAL</Text>
                        </View>
                    </View>
                    <View style={LoginStyles.bannerArea2_Text}>
                        <Text>Member Sign IN</Text>
                    </View>
                    
                    <View style={LoginStyles.textInput}>
                        <Text>Email/Mobile number</Text>
                        <TextInput
                            style={{ height: 25, borderBottomColor: 'black', borderBottomWidth: 1, }}
                            placeholder="Type your Email/Mobile"
                            value={username}
                            onChangeText={(e) => this.onValueChange(e, 'username')} />
                    </View>
                    
                    {showPassword ? passwordSection : otpSection}
                    
                    <View style={LoginStyles.checkBox_Main_Container1}>
                        <View style={LoginStyles.checkBox_Secondary_Container1}>
                            <View style={LoginStyles.checkBox_Secondary_Container_Row1}>
                                <CheckBox
                                //title="Remember me"
                                />
                            </View>
                            <View style={LoginStyles.checkBox_Secondary_Container_Row2}>
                                <Text>Remember me</Text>
                            </View>
                   </View>
                    <View style={LoginStyles.toggleButton_Main_Container}>
                        <View style={LoginStyles.toggleButton_Sub_Container}>
                            <ToggleSwitch
                                isOn={showPassword}
                                onColor='#32CD32'
                                offColor='#616264'
                                labelStyle={{ color: 'black', fontWeight: '900' }}
                                size='medium'
                                onToggle={(isOn) => this.onValueChange(isOn, 'showPassword')}
                            />
                            <Text>{showPassword ? 'Use Password' : 'Use OTP'}</Text>
                        </View>
                        </View>
                    </View>
                    <View style={LoginStyles.button}>
                        <View style={{ flex: 1, }}>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button
                                onPress={this.onSubmit}
                                title="Sign In"
                                color="#616264"
                                width="10"
                            />
                            <TouchableOpacity onPress={() => console.log('Forgot Password')}>
                                <Text style={{ textDecorationLine: 'underline' }}>Forgot password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, }}>
                        
                        </View>

                    </View>
                    <View style={{ flex: 1 }}>
                        
                    </View>
                </ScrollView>
            </View>
            );
        }
    }

