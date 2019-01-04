        import React, { Component } from 'react';
        import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
        import {LoginStyles} from '../styelsheets/MainStyle';
//import { ScrollView } from 'react-native-gesture-handler';

        export default class LogIn extends Component {    
            constructor(props) {
                super(props);
                //this.state = { text: '' };
                console.log(this)
            }
            
            render() {
                return (
                    
                    <View style={LoginStyles.mainWrapper}>
                    <ScrollView>
                        <View style={LoginStyles.bannerArea}>
                            <View style={LoginStyles.bannerArea_Button}>
                                <TouchableOpacity onPress={() => console.log('back')}>
                                    <Image style={{ width:20, height:20,}}
                                        source={require('../../assets/images/back.png')}
                                        />
                                </TouchableOpacity>
                            </View>
                                
                            <View style={LoginStyles.bannerArea_Text}>
                                <Text style={{ fontSize: 24, color:'#616264',}}> MEDePAL</Text>
                            </View>
                        </View>
                        <View style={LoginStyles.bannerArea2_Text}>
                            <Text>
                                Member Sign IN
                                    </Text>
                        </View>

                        <View style={LoginStyles.textInput}>
                            <Text>
                                Email/Mobile number
                                    </Text>
                            <TextInput
                                style={{ height: 25, borderBottomColor: 'black', borderBottomWidth: 1, }}
                                placeholder="Type your Email/Mobile"
                                onChangeText={text => this.setState({ text })}

                            />

                        </View>

                    <View style={LoginStyles.textInput}>
                            <Text>
                                Password
                                    </Text>
                            <TextInput
                                style={{ height: 25, borderBottomColor: 'black', borderBottomWidth: 1, }}
                                placeholder="Type your Password"
                                secureTextEntry={true}
                            />
                        </View>

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
                                    <View style={{ flex: 1, backgroundColor: '#616264', alignItems: 'center', }}>
                                        <TouchableOpacity onPress={() => console.log('Password')}>
                                            <Text>
                                                Password
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.5, backgroundColor: 'white', alignItems: 'center', }}>
                                        <TouchableOpacity onPress={() => console.log('OTP')}>
                                            <Text>
                                                OTP
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                            <View style={LoginStyles.button}>
                            <View style={{ flex: 1, }}>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    onPress={() => console.log('Sign In Button')}
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

                        <View style={{flex:1}}></View>

                        

                        </ScrollView>
                    </View>





                    );
                }
            }

