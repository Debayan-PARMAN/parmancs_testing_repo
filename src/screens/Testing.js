import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
//import Footer from './components/Footer/Footer';
//import ImageSlider from 'react-native-image-slider';
import Footer_Component from '../components/Footer/Footer';

export default class Test_Page extends Component {
    
    static navigationOptions = {
        title: 'Testing Page',
        headerStyle: {
            backgroundColor: '#a9a9a9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };

    render() {
        return (
            <View style={LoginStyles.mainWrapper}>
            <ScrollView><View style={{height:10}}></View>
                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Button onPress={() => this.props.navigation.navigate('VerifyMobileMumber')}
                                style={FontStyles.font}
                                title="VerifyMobileMumber"
                                color="#AA8CC5"
                                width="10"
                            />
                        </View>
                        <View style={{ flex: 0.7, }}>
                        </View>
                    </View>
                    <View style={{ height: 10 }}></View>
                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Button onPress={() => this.props.navigation.navigate('CreateAccount')}
                            style={FontStyles.font}
                            title="Create Account"
                            color="#AA8CC5"
                            width="10"
                        />
                    </View>
                    <View style={{ flex: 0.7, }}>
                    </View>
                    </View>
                    <View style={{ height: 10 }}></View>
                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Button onPress={() => this.props.navigation.navigate('DoctorAppoinment')}
                                style={FontStyles.font}
                                title="Doctor Appoinment"
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