import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userLogin, checkNoExits , updateState } from '../actions/user';

import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import ToggleSwitch from 'toggle-switch-react-native';
import SignIn_Btn from '../../src/components/Button/SignIn_Button';
import PasswordInputText from 'react-native-hide-show-password-input';
import LinearGradient from 'react-native-linear-gradient';
// import AlertMessage from '../components/AlertMessage';

//import { ScrollView } from 'react-native-gesture-handler';


class LogIn extends Component {
    static navigationOptions = {
        title: 'MED-e-PAL',
        headerStyle: {
            backgroundColor: '#572a6f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
        }
    };

    onValueChange = (value, id) => {

        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        
        if (id === "username" && id.length === 10){
            console.log('check No Trigger');
            console.log(value);
            //this.props.checkNoExits();
            this.props.updateState({toggleEnable: true});

        }

        
        this.props.updateState({ userDetails });
    }

    onToggle = () => {
        const showPassword = !this.props.userState.showPassword;
        this.props.updateState({showPassword})
    }

    onSubmit = () => {
        this.props.userLogin();
    }

    onCancelAlert = () => {
        this.props.updateState({ responseTriggerred: false });
        if (this.props.userState.userDetails.token) {
            this.props.navigation.navigate('Home');
        }

    }

    render() {
        const { userDetails, showPassword, responseTriggerred, successMessage, failureMessage, toggleEnable } = this.props.userState;


        const passwordSection = (
            <View style={LoginStyles.textInput}>
                <Text style={FontStyles.font}>Password</Text>
                <TextInput
                    style={LoginStyles.textInput_pass_email}
                    placeholder="Type your Password"
                    value={userDetails.password}
                    secureTextEntry={true}
                    onChangeText={(e) => this.onValueChange(e, 'password')} />

                
            </View>
        );
        const otpSection = (
            <View style={LoginStyles.textInput}>
                <Text style={FontStyles.font}>OTP</Text>
                <TextInput
                    style={LoginStyles.textInput_pass_email}
                    placeholder="Type your OTP"
                    value={userDetails.otp}
                    onChangeText={(e) => this.onValueChange(e, 'otp')} />
            </View>
        );

        if (responseTriggerred) {

            const message = userDetails.token ? successMessage : failureMessage;
            Alert.alert(
                '',
                message,
                [{
                    text: 'Ok',
                    onPress: this.onCancelAlert,
                    style: 'cancel'
                }], {
                    cancelable: false
                }
            );

        }

        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>

                    <View style={LoginStyles.bannerArea2_Text}>
                        <Text style={FontStyles.font}>Member Sign IN</Text>
                    </View>

                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font}>Mobile number</Text>
                        <TextInput
                            style={LoginStyles.textInput_pass_email}
                            placeholder="Type your Email/Mobile"
                            value={userDetails.username}
                            onChangeText={(e) => this.onValueChange(e, 'username')} />
                    </View>

                    { showPassword ? passwordSection : otpSection }

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
                                    //disabled={true}                                
                                    isOn={false}
                                    onColor='#32CD32'
                                    offColor='#616264'
                                    size='small'
                                
                                    onToggle={this.onToggle}
                                />
                                <Text style={FontStyles.font}>{showPassword ? 'Use Password' : 'Use OTP'}</Text>
                            </View>
                        </View>
                    </View>
                    <SignIn_Btn onSubmit={this.onSubmit} />
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
                                    <Image style={Button_fb_google.image}
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
                                    <Image style={Button_fb_google.image}
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
                        {/* <Text>{this.props.userState.successMessage.message}</Text> */}
                    </View>

                </ScrollView>
            </View>
        );
    }
}

LogIn.propTypes = {
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userLogin, checkNoExits, updateState }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(LogIn);