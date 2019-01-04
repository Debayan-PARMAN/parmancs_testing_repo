import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button } from 'react-native';
import {LoginStyles} from '../styelsheets/MainStyle';

export default class LogIn extends Component {    
    constructor(props) {
        super(props);
        //this.state = { text: '' };
        console.log(this)
    }
    
    render() {
        return (
            <View style={LoginStyles.mainWrapper}>
                <View style={LoginStyles.bannerArea}>
                    <View style={{ flex: 0.1, alignContent:'center', paddingTop:5}}>
                        <TouchableOpacity onPress={() => console.log('back')}>
                            <Image style={{ width:20, height:20}}
                                source={require('../../assets/images/back.png')}
                                />
                        </TouchableOpacity>
                    </View>
                        
                    <View style={{ flex:1, paddingLeft:100 }}>
                        <Text style={{ fontSize: 24, color:'#616264'}}> MEDePAL</Text>
                    </View>
                </View>
                <View style={LoginStyles.LoginForm}>
                    <View style={{ flex: 0.5, alignItems:'center', paddingTop:7 }}>
                        <Text>Member Sign IN</Text>
                    </View>
                    <View style={{ flex: 0.8, paddingLeft: 10, paddingRight: 10, paddingTop: 15  }}>
                        <Text>Email/Mobile number</Text>
                        <TextInput style={{ height: 30, borderBottomColor: 'black', borderBottomWidth: 1 }}
                            placeholder="Type your Email/Mobile"
                            onChangeText={text => this.setState({ text })}
                        />
                    </View>
                    <View style={{ flex: 0.8, paddingLeft: 10, paddingRight: 10, paddingTop:15, paddingBottom:5 }}>
                        <Text>Password</Text>
                        <TextInput
                            style={{ height: 30, borderBottomColor: 'black', borderBottomWidth: 1 }}
                            placeholder="Type your Password"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{ flex: 0.6, flexDirection:'row',}}>
                        <View style={{ flex: 1,paddingLeft: 10, paddingRight: 10, flexDirection:'row'}}>
                        <View style={{flex:0.3, paddingTop:3}}>
                        <CheckBox
                            //title="Remember me"
                            />
                        </View>
                        <View style={{flex:1, paddingTop:9,}}>
                            <Text>Remember me</Text>
                        </View>
                        </View>
                        <View style={{ flex: 0.5,  paddingLeft: 10, paddingRight: 10,}}>
                        <View style={{flex:1, paddingTop: 8, paddingBottom: 10, flexDirection:'row'}}>
                            <View style={{ flex: 1, backgroundColor:'#616264',alignItems:'center' }}>
                                <TouchableOpacity onPress={() => console.log('Password')}>    
                                <Text>
                                Password
                                </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0.5, backgroundColor:'white', alignItems:'center'}}>
                                <TouchableOpacity onPress={() => console.log('OTP')}>    
                                <Text>
                                OTP
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', flexDirection:'row' }}>
                        <View style={{flex:1,}}></View>
                        <View style={{ flex: 1 }}>
                            <Button onPress={() => console.log('Sign In Button')} title="Sign In" color="#616264" width="10" />
                            <TouchableOpacity onPress={() => console.log('Forgot Password')}>
                                <Text style={{textDecorationLine:'underline'}}>Forgot password ?</Text>
                            </TouchableOpacity>
                        </View>   
                    </View>

                </View>
                <View>

                </View>
                <View>

                </View>
            </View>





            );
        }
    }

