import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { URI } from '../constants';

export default class Verify_Mobile_Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: "",
            contactNo: "",
            smsActionType: "OTPVERIFY",
            registrationProvider: "SBIS",
            roleName: "INDIVIDUAL"
        };
    }
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
        console.log(id, value);
        this.setState({ [id]: value });
    }
    onSubmit = () => {
        console.log('Next Button triggered');
        const path = URI.otp;
        const { otp } = this.state;
        

        fetch(path, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "contactNo": "6290834355",
                "smsActionType": "OTPVERIFY",
                "otp": otp

            }),
        })
            .then(function (response) {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                if (response.status === 2000) {
                    this.setState({ exitsMessage: `Verification Done successfully` });
                    Alert.alert(this.state.exitsMessage);
                    this.props.navigation.navigate('CreateAccount');
                }
                else {
                    this.setState({ successMessage: `${response.message}` });
                    Alert.alert(this.state.successMessage);
                    this.props.navigation.navigate('VerifyMobileMumber');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { otp } = this.state;
        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>
                    <View style={LoginStyles.bannerArea2_Text}>
                        <Text style={FontStyles.font}>Verify mobile number</Text>
                    </View>
                    <View style={{ height: 20 }}>
                    </View>
                    
                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font}>Please Enter 6 digit OTP send to the mobile no </Text>
                        <View>
                            <Text>91********</Text>
                        </View>
                        <View style={{ height: 60 }}>
                        </View>
                        <TextInput
                            style={LoginStyles.textInput_pass_email}
                            placeholder="Type your OTP"
                            value={otp}
                            onChangeText={(e) => this.onValueChange(e, 'otp')} 
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
                </ScrollView>
            </View>
        );
    }
};