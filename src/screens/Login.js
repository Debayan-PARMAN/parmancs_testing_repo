import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import ToggleSwitch from 'toggle-switch-react-native';
import SignIn_Btn from '../../src/components/Button/SignIn_Button';
import CreateAccount_Btn from '../../src/components/Button/CreateAccount_Button';
import PasswordInputText from 'react-native-hide-show-password-input';
//import { ScrollView } from 'react-native-gesture-handler';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            otp: '',
            successMessage: '',
            failureMessage: '',
            alertTrigger: false,
            showPassword: true,
        };
    }

    static navigationOptions = {
        title: 'MED-e-Pal',
        headerStyle: {
            backgroundColor: '#daadd6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
        }
    };

    onValueChange = (value, id) => {
        console.log(id, value);
        this.setState({ [id]: value });
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
                //"userName": 'debayan.sen@parmancs.com1',
                "userName": username,
                //"password": 'mystrio7',
                "password": password,
                "registrationProvider": "SBIS",
                "roleName": "INDIVIDUAL"
            }),
        })
            .then(function (response) {
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
        const { username, password, otp, showPassword } = this.state;

        const passwordSection = (
            <View style={LoginStyles.textInput}>

                <PasswordInputText
                    //style={LoginStyles.textInput_pass_email}
                    //color="black"
                    placeholder="Type your Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e) => this.onValueChange(e, 'password')} />
            </View>
        );
        const otpSection = (
            <View style={LoginStyles.textInput}>
                <Text style={FontStyles.font}>OTP</Text>
                <TextInput
                    style={LoginStyles.textInput_pass_email}
                    placeholder="Type your OTP"
                    value={otp}
                    onChangeText={(e) => this.onValueChange(e, 'otp')} />
            </View>
        );


        // <View style={LoginStyles.bannerArea}>
        //                 <View style={LoginStyles.bannerArea_Button}>
        //                     <TouchableOpacity onPress={() => console.log('back')}>
        //                         <Image style={{ width: 20, height: 20, }}
        //                             source={require('../../assets/images/back.png')}
        //                         />
        //                     </TouchableOpacity>
        //                 </View>

        //                 <View style={LoginStyles.bannerArea_Text}>
        //                     <Text style={{ fontSize: 24, color: '#616264', }}> MEDePAL</Text>
        //                 </View>
        //             </View>

        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>

                    <View style={LoginStyles.bannerArea2_Text}>
                        <Text style={FontStyles.font}>Member Sign IN</Text>
                    </View>

                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font}>Email/Mobile number</Text>
                        <TextInput
                            style={LoginStyles.textInput_pass_email}
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
                                <Text style={FontStyles.font}>Remember me</Text>
                            </View>
                        </View>
                        <View style={LoginStyles.toggleButton_Main_Container}>
                            <View style={LoginStyles.toggleButton_Sub_Container}>
                                <ToggleSwitch
                                    isOn={showPassword}
                                    onColor='#32CD32'
                                    offColor='#616264'
                                    size='small'
                                    onToggle={(isOn) => this.onValueChange(isOn, 'showPassword')}
                                />
                                <Text style={FontStyles.font}>{showPassword ? 'Use Password' : 'Use OTP'}</Text>
                            </View>
                        </View>
                    </View>
                    <SignIn_Btn />
                    <View style={LoginStyles.forget_pass_view}>
                        <TouchableOpacity onPress={() => console.log('Forgot Password')}>
                            <Text style={FontStyles.font} style={LoginStyles.text_underline}>Forgot password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={LoginStyles.bannerArea2_Text}>
                        <Text style={FontStyles.font}>------------------------------------- OR -------------------------------------</Text>
                    </View>
                    <View style={Button_fb_google.first_container}>
                        <TouchableOpacity onPress={() => console.log('Login with facebook')}>
                            <View style={Button_fb_google.second_container}>
                                <View style={Button_fb_google.third_container}>
                                    <Image style={{ width: 30, height: 30 }}
                                        source={require('../../assets/images/facebook.png')}
                                    />
                                </View>
                                <View style={LoginStyles.toggleButton_Sub_Container_Row1}>
                                    <Text style={FontStyles.font} style={{ color: 'white' }}>Connect With Facebook</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={Button_fb_google.first_container}>
                        <TouchableOpacity onPress={() => console.log('Login with google')}>
                            <View style={Button_fb_google.second_container}>
                                <View style={Button_fb_google.third_container}>
                                    <Image style={{ width: 30, height: 30 }}
                                        source={require('../../assets/images/google.png')}
                                    />
                                </View>
                                <View style={LoginStyles.toggleButton_Sub_Container_Row1}>
                                    <Text style={FontStyles.font} style={{ color: 'white' }}>Connect With Google</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={LoginStyles.forget_pass_view}>
                        <Text style={FontStyles.font}>Do not have an account ?</Text>
                    </View>

                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Button onPress={() => this.props.navigation.navigate('Registration')}
                                style={FontStyles.font}
                                //onPress={this.onSubmit}
                                title="Create Account"
                                color="#AA8CC5"
                                width="10"
                            />
                        </View>
                        <View style={{ flex: 0.7, }}>
                        </View>
                    </View>
                    <View style={{ height: 20 }}>

                    </View>
                </ScrollView>
            </View>
        );
    }
}