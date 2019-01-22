import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import UpdateUserProfileStyle from '../styelsheets/UpdateUserProfileStyle';
import FlipToggle from 'react-native-flip-toggle-button';
//import Footer from './components/Footer/Footer';
//import ImageSlider from 'react-native-image-slider';
import Footer_Component from '../components/Footer/Footer';
import ImagePicker from 'react-native-image-picker';
import Greeting from '../screens/UserProfile';
import { KeyboardAvoidingView } from 'react-native';

export default class Update_User_Profile extends Component {

    static navigationOptions = {
        title: 'UpdateUserProfile',
        headerStyle: {
        backgroundColor: '#a9a9a9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            // fontWeight: 'bold',
            paddingLeft: 30,
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
                        <KeyboardAvoidingView style={UserProfileStyle.mainWrapper} behavior="padding" enabled>
                        <View style={UpdateUserProfileStyle.health}>
                            <Text style={UpdateUserProfileStyle.healthText}>
                               Health Profile 10% Complete
                            </Text>
                        </View>
                        <View style={{ flex: 1,marginTop:3, flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                            <View style={{ width: 100, height: 30, backgroundColor: '#972493',borderWidth:1, }} >
                                <Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 15,
                                    color: '#fff',
                                    textAlign:"center",
                                    justifyContent: 'center',
                                    marginTop:2}}>
                                    Personal
                               </Text>
                            </View>
                            <View style={{ width: 100, height: 30, backgroundColor: '#ccc', borderWidth: 1, }} >
                                <Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 15,
                                    color: '#972493',
                                    textAlign: "center",
                                    justifyContent: 'center',
                                    marginTop: 2
                                }}>
                                    Medical
                               </Text>
                            </View>
                            <View style={{ width: 100, height: 30, backgroundColor: '#ccc', borderWidth: 1, }} >
                                <Text style={{
                                    fontFamily: 'Roboto',
                                    fontSize: 15,
                                    color: '#972493',
                                    textAlign: "center",
                                    justifyContent: 'center',
                                    marginTop: 2
                                }}>
                                    LifeStyle
                               </Text>
                            </View>
                           </View>
                           <View style={UpdateUserProfileStyle.NameAgeSex}>

                                <View style={{ flex:0.6, flexDirection: 'row',backgroundColor:'#fff' }} >
                                    <View style={{ width: 240, height: 100, backgroundColor: '#fff' }} >
                                        <Text style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 15,
                                            marginTop: 4,
                                            color:'#000'
                                        }}>
                                       RupNarayan Bhatteraya</Text>
                                       
                                            <Text style={{
                                                fontFamily: 'Roboto',
                                                fontSize: 15,
                                                marginTop: 4,
                                            color: '#000'
                                            }}>
                                                RupNarayanb@gamail.com </Text>
                                           
                                                <Text style={{
                                                    fontFamily: 'Roboto',
                                                    fontSize: 15,
                                                    marginTop: 4,
                                            color: '#000'
                                                }}>
                                                   90025846789</Text>
                                    </View>
                                   
                                    <View style={{ width:100, height: 100, backgroundColor: '#fff',borderWidth:1 }} />
                                </View>
                            {/* <Text style={{marginTop:3}}>Name</Text>
                            <TextInput
                                style={{ height: 30, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                               
                            />
                            <Text style={{ marginTop: 5}}>Email</Text>
                            <TextInput
                                style={{ height: 25, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                               
                            /> */}
                            <Text style={{ marginTop: 20}}>Date of Birth</Text>
                            <TextInput
                                style={{ height: 25, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                
                            />

                            <View style={{ height: 60, marginTop: 10, flexDirection: 'row', marginTop: 10  }}>
                                <View style={{ width: 100, height: 40,   }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        marginTop: 2
                                    }}>
                                        BloodGroup
                               </Text>
                                    <TextInput
                                        style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1,  }}
                                       
                                    />
                                </View>
                                <View style={{ width: 100, height: 40,marginLeft:10  }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        marginTop: 2
                                    }}>
                                        Height(cm)
                               </Text>
                                    <TextInput
                                            style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                        
                                    />
                                </View>
                                <View style={{ width: 100, height: 40, marginLeft: 10  }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        marginTop: 2
                                    }}>
                                      Weight(kg)
                               </Text>
                                    <TextInput
                                            style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                       
                                    />
                                </View>
                                
                            </View>
                            <View style={{ height: 60, marginTop:10, flexDirection: 'row',  }}>
                                <View style={{ width: 100, height: 60, }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        marginTop: 2
                                    }}>
                                       Gender
                               </Text>
                                    <TextInput
                                            style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1, }}

                                    />
                                </View>
                                <View style={{ width: 100, height: 60, marginLeft: 20 }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        marginTop: 2
                                    }}>
                                       Marital Status
                               </Text>
                                    <TextInput
                                            style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}

                                    />
                                </View>
                                {/* <View style={{ width: 100, height: 60, marginLeft: 10 }} >
                                    <Text style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 15,
                                        marginTop: 2
                                    }}>
                                        Weight
                               </Text>
                                    <TextInput
                                        style={{ height: 30, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                     />
                                </View> */}
                            </View>

                            {/* <Text style={{ marginTop: 5 }}>Date Of Birth</Text>
                            
                            <TextInput
                                style={{ height: 20, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}

                            /> */}
                            
                                <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 16,fontWeight:'bold' }}>Address</Text>

                            {/* <TextInput
                                style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}

                            />
                           
                            <TextInput
                                style={{ height: 35, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}

                            /> */}
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddAddress')} >
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginTop:1 }}>
                                
                                        <View style={{ width: 40, height: 40, }} >
                                        <Image style={{ width: 25, height: 25,margin:10 }}
                                            source={require('../../assets/images/add.png')} />
                                    </View>
                                        <View style={{ width: 145, height: 40,   }} >
                                            <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 15, }}>Add Another Address</Text>
                                    </View>
                                </View>
                                </TouchableOpacity>
                                {/* <View style={{ flex: 1, marginTop: 3, flexDirection: 'row',  }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddAddress')} >
                                    <View style={{ width: 30, height: 30, backgroundColor: '#972493', borderWidth: 1, }} >
                                            <Image style={{ width: 30, height: 30 }}
                                                source={require('../../assets/images/add.png')} />
                                    </View>
                                    <View style={{ width: 200, height: 30, backgroundColor: '#ccc', borderWidth: 1, }} >
                                        <Text style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 15,
                                            color: '#972493',
                                            textAlign: "center",
                                            justifyContent: 'center',
                                            marginTop: 2
                                        }}>
                                            Add Another Address
                               </Text>
                                    </View>
                                    </TouchableOpacity>
                                    </View> */}

                                {/* <View style={{ width: 200, height: 30, backgroundColor: '#ccc', marginTop: 5, borderWidth: 1, marginLeft:75,flexDirection:'row' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddAddress')} >
                                        <Image style={{width:30,height:30}}
                                            source={require('../../assets/images/add.png')} />
                                   
                                    <Text style={{}}>
                                        Add Another Address 
                                    </Text>
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                         
                          <View style={{ flex: 1, height: 40, marginTop: 6, flexDirection: 'row', justifyContent: 'center', }}>
                            <View style={{ width: 120, height: 30, backgroundColor: '#972493', marginTop: 5, borderWidth: 1, }}>
                                <TouchableOpacity onPress={() => console.log('Men Botton Tiggered')} >
                                    <Text style={{ textAlign: 'center', alignItems: 'center', color: '#fff', justifyContent: 'center', marginTop: 3 }}>Update Profile</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: 10, }}>

                            </View>
                            <View style={{ width: 120, height: 30, backgroundColor: '#fff', marginTop: 5, borderWidth: 1, }}>
                                <TouchableOpacity onPress={() => console.log('Women Botton Tiggered')} >
                                    <Text style={{ textAlign: 'center', alignItems: 'center', color: '#000', justifyContent: 'center', marginTop: 3 }}>Next Page</Text>
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