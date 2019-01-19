import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userRegistration, updateState } from '../actions/user';

import { View, Image, Text, Alert, Button, TextInput, ScrollView, ProgressBarAndroid, KeyboardAvoidingView } from 'react-native';
import { LoginStyles, FontStyles,} from '../styelsheets/MainStyle';
import PasswordInputText from 'react-native-hide-show-password-input';

class Create_Account extends Component {
    static navigationOptions = {
        title: 'Create Account',
        headerStyle: {
            backgroundColor: '#572a6f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };

    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        switch(id){
            case 'password':
                userDetails.password = value;
                break;
            case 'confirmpassword':
                userDetails.confirmpassword = value;
                break;
            default:
                userDetails[id] = value;
                break;
        }
        this.props.updateState({ userDetails });
    }

    onCancelAlert = () => {
        this.props.updateState({ responseTriggerred: false });
        this.props.navigation.navigate('Home');
    }

    onSubmit = () => {
        console.log('Registration Button triggered');
        this.props.userRegistration();
    }

    validatePassword = (pwd) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/g;
        // Minimum eight charactes, at least one uppercase letter, one lowercase letter, one number and one special character:
        if(regex.test(pwd)){
            return true;
        } else {
            return false;
        }
    }

    matchPassword = (pwd, cpwd) => {
        // if(pwd.length )
        if(pwd === cpwd){
            return true;
        } else {
            return false
        }

    }

    render() {
        const { userDetails, showPassword, responseTriggerred, successMessage, failureMessage } = this.props.userState;
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
            <KeyboardAvoidingView style={LoginStyles.mainWrapper} behavior="padding" enabled>
                <View style={LoginStyles.bannerArea2_Text}>
                    <Text style={FontStyles.font}>Almost Done</Text>
                </View>
                <ScrollView>
                    <View style={{ height: 20 }}>
                    </View>
                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font} style={{ fontWeight: 'bold' }}>Name</Text>
                        <TextInput
                            style={LoginStyles.textInput_pass_email}
                            placeholder="Type your name"
                            value={userDetails.name}
                            onChangeText={(e) => this.onValueChange(e, 'name')} 
                            />
                    </View>
                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font} style={{fontWeight:'bold'}}>To fully protect your account please choose a strong password</Text>
                        <View style={LoginStyles.textInput}>
                            <PasswordInputText
                            //style={LoginStyles.textInput_pass_email}
                            //color="black"
                            placeholder="Type your Password"
                            secureTextEntry={showPassword}
                            value={userDetails.password}
                            onChangeText={(e) => this.onValueChange(e, 'password')} 
                            />
                        </View>
                        <View style={LoginStyles.textInput}>
                            <PasswordInputText
                                //style={LoginStyles.textInput_pass_email}
                                //color="black"
                                placeholder="Confirm Password"
                                secureTextEntry={showPassword}
                                value={userDetails.confirmpassword}
                                onChangeText={(e) => this.onValueChange(e, 'confirmpassword')}
                            />
                        </View>

                        <View style={{ height: 30 }}>
                        </View>
                        <View style={{ flex: 1, height: 30, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}><Text style={{ textAlign: 'left', fontWeight: 'bold' }} style={FontStyles.font}>
                                Password Strength
                        </Text></View>
                        <View style={{ flex: 1 }}>
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={0.7}
                                />    
                        </View>
                            <View style={{ flex: 0.5 }}><Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                Week
                        </Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 15, }}>
                            <View style={{ flex: 0.6 }}>
                                <Text style={FontStyles.font}>
                                {
                                    !this.validatePassword(userDetails.password) ?
                                    `Minimum eight charactes, at least one uppercase letter, one lowercase letter, one number and one special character`
                                    : ""
                                }
                                </Text>

                                <Text style={FontStyles.font}>
                                    {
                                        this.matchPassword(userDetails.password, userDetails.confirmpassword) ?
                                            `Passwords match` : "Passwords don't match"
                                    }
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 30 }}></View>
                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Button
                                style={FontStyles.font}
                                onPress={this.onSubmit}
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
            </KeyboardAvoidingView>
        );
    }
};

Create_Account.propTypes = {
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userRegistration, updateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Create_Account);