import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { verifyOTP, updateState } from '../actions/user';

import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
// import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';

class Verify_Mobile_Number extends Component {
    static navigationOptions = {
        title: 'MED-e-Pal',
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
    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails, failureMessage:'' });
    }

    onCancelAlert = () => {
        console.log('Ok');
        this.props.updateState({ responseTriggerred: false });
        if(this.props.userState.status === 2000){
            this.props.updateState({ status: ''});
            this.props.navigation.navigate('CreateAccount');
        }
    }

    // onCancelAlert = () => {
    //     console.log('Cancel');
    //     this.props.updateState({ responseTriggerred: false });
    //     // this.props.navigation.navigate('Home');
    // }
    
    onSubmit = () => {
        console.log('Next Button triggered');
        this.props.verifyOTP();
    }

    render() {
        const { userDetails, responseTriggerred, status, successMessage, failureMessage } = this.props.userState;
        if(responseTriggerred){
            const message =  status === 2000 ? successMessage : failureMessage;
            Alert.alert(
                '',
                message,
                [{
                    text: 'OK',
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
                        <Text style={FontStyles.font}>Verify mobile number</Text>
                    </View>
                    <View style={{ height: 20 }}>
                    </View>
                    
                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font}>Please Enter OTP sent to the mobile no {userDetails.contactNo} </Text>
                        <View>
                            <Text>{}</Text>
                        </View>
                        <View style={{ height: 60 }}>
                        </View>
                        <TextInput
                            style={LoginStyles.textInput_pass_email}
                            placeholder="Type your OTP"
                            value={userDetails.userOTP}
                            onChangeText={(e) => this.onValueChange(e, 'userOTP')} 
                            />
                    </View>
                    <View style={{ height: 30 }}>
                    </View>

                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Button
                                style={FontStyles.font}
                                onPress={this.onSubmit}
                                title="Next"
                                color="#AA8CC5"
                                width="10"

                            />
                        </View>
                        <View style={{ flex: 0.7, }}>
                        </View>
                    </View>

                    <View>
                        <Text>{failureMessage}</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
};

Verify_Mobile_Number.propTypes = {
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ verifyOTP, updateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify_Mobile_Number);