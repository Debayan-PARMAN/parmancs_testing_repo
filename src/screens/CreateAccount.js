import React, { Component } from 'react';
import { View, Image, Text, Alert, Button, TextInput, ScrollView, ProgressBarAndroid, KeyboardAvoidingView } from 'react-native';
import { LoginStyles, FontStyles,} from '../styelsheets/MainStyle';
import PasswordInputText from 'react-native-hide-show-password-input';
import { URI } from '../constants';

export default class Create_Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactNo: "",
            name: "",
            password: "",
            registrationProvider: "SBIS",
            roleName: "INDIVIDUAL"
        };
    }
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
        console.log(id, value);
        this.setState({ [id]: value });
    }
    onSubmit = () => {
        console.log('Registration Button triggered');
        const path = URI.signup;
        const { name, password, contactNo, emailAddress} = this.state;

        fetch(path, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "contactNo": "6290834355",
                "name": name,
                "password": password,
                "registrationProvider": "SBIS",
                "roleName": "INDIVIDUAL"
            }),
        })
            .then(function (response) {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                if (response.status === 2000) {
                    this.setState({ exitsMessage: `Successfully Account Created` });
                    Alert.alert(this.state.exitsMessage);
                    this.props.navigation.navigate('Home');
                }
                else if (response.status === 5051) {
                    this.setState({ noInputMessage: `already exists` });
                    Alert.alert(this.state.noInputMessage);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { name, password } = this.state;
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
                            value={name}
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
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(e) => this.onValueChange(e, 'password')} 
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
                                    progress={0.2}
                                />    
                        </View>
                            <View style={{ flex: 0.5 }}><Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                Week
                        </Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 15, }}>
                            <View style={{ flex: 0.6 }}>
                                <Text style={FontStyles.font}>Password must be</Text>
                            </View>
                            <View style={{ flex: 1, }}>
                                <Text>..............................</Text>
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