import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import AddAddressStyle from '../styelsheets/AddAddressStyle';
import FlipToggle from 'react-native-flip-toggle-button';
//import Footer from './components/Footer/Footer';
//import ImageSlider from 'react-native-image-slider';
import Footer_Component from '../components/Footer/Footer';
import ImagePicker from 'react-native-image-picker';
import Greeting from '../screens/UserProfile';
import Drop_Down from '../components/DropDown';
import { KeyboardAvoidingView } from 'react-native';

export default class Address extends Component {

    static navigationOptions = {
        title: 'AddAddress',
        headerStyle: {
            backgroundColor: '#a9a9a9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            // fontWeight: 'bold',
            paddingLeft: 50,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }



    render() {

        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        return (
            <View style={UserProfileStyle.mainWrapper}>
                <View >
                    <ScrollView>
                        <KeyboardAvoidingView style={AddAddressStyle.mainWrapper} behavior="padding" enabled>
                            <View style={AddAddressStyle.AddAddress}>
                                <Text style={AddAddressStyle.AddAddressText}>
                                    Add New Address
                            </Text>
                            </View>
                            <View style={AddAddressStyle.AddressType}>
                                <Text style={AddAddressStyle.AddressTypeText}>
                                    Address Type
                            </Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 100, height: 30, backgroundColor: '#972493', borderWidth: 1, borderRadius: 3 }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        color: '#fff',
                                        textAlign: "center",
                                        justifyContent: 'center',
                                        marginTop: 2
                                    }}>
                                        Home
                               </Text>
                                </View>
                                <View style={{ width: 100, height: 30, backgroundColor: '#ccc', borderWidth: 1, marginLeft: 2, borderRadius: 3 }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        color: '#000',
                                        textAlign: "center",
                                        justifyContent: 'center',
                                        marginTop: 2
                                    }}>
                                        Office
                               </Text>
                                </View>
                                <View style={{ width: 100, height: 30, backgroundColor: '#ccc', borderWidth: 1, marginLeft: 2, borderRadius: 3 }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        color: '#000',
                                        textAlign: "center",
                                        justifyContent: 'center',
                                        marginTop: 2
                                    }}>
                                        Other
                               </Text>
                                </View>
                            </View>
                            <View style={AddAddressStyle.NameAgeSex}>

                                <View style={{ height: 45, marginTop: 10, marginTop: 10, backgroundColor: '#fff', borderRadius: 3, borderWidth: 1 }}>
                                    <Drop_Down /> 
                                </View>
                                <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                                    <TextInput
                                        style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                        placeholder="6 digit 0-9 pin code"
                                    />
                                </View>
                                <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                                    <TextInput
                                        style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                        placeholder="Flat/House/Floor/Building"
                                    />
                                </View>
                                <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                                    <TextInput
                                        style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                        placeholder="Landmark"
                                    />
                                </View>
                                <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                                    <TextInput
                                        style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                        placeholder="City"
                                    />
                                </View>

                                <View style={{ height: 45, marginTop: 10, marginTop: 10, backgroundColor: '#fff', borderRadius: 3, borderWidth: 1 }}>
                                    <Drop_Down />
                                </View>
                                    

                                
                            </View>

                            <View style={{ flex: 1, height: 40, marginTop: 10, flexDirection: 'row', justifyContent: 'center', }}>
                                <View style={{ width: 120, height: 30, backgroundColor: '#972493', marginTop: 5, borderWidth: 1,borderRadius:3 }}>
                                    <TouchableOpacity onPress={() => console.log('Men Botton Tiggered')} >
                                        <Text style={{ textAlign: 'center', alignItems: 'center', color: '#fff', justifyContent: 'center', marginTop: 3 }}>Add Address</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>

                </View>
            </View>

        );
    }
};