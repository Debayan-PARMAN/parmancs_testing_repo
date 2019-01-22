import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView,TouchableHighlight } from 'react-native';
// import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import UserProfileStyle from '../styelsheets/UserProfileStyle';
import FlipToggle from 'react-native-flip-toggle-button';
//import Footer from './components/Footer/Footer';
//import ImageSlider from 'react-native-image-slider';
import Footer_Component from '../components/Footer/Footer';
import { AsyncStorage } from "react-native";
// import pic from "../screens/Testing";
import Drop_Down from '../components/DropDown';
import { KeyboardAvoidingView } from 'react-native';





export default class User_Profile extends Component {

    

    static navigationOptions = {
        title: 'UserProfile',
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
    constructor(props) {
        super(props);
        this.state = { text: ' ' };
    }
    render() {

         return (
            <View style={UserProfileStyle.mainWrapper}>
            <View >
                <ScrollView>
                        <View style={UserProfileStyle.welcome}>
                          
                            <Text style={UserProfileStyle.welcomeText}>
                                 Welcome ............ Account Successfully Created
                            </Text>
                        </View>
                        <View style={UserProfileStyle.ToServe}>
                            <Text style={UserProfileStyle.ToServeText}>
                                To Serve you better please share a Few Information with us
                            </Text>
                        </View>
                        <View style={UserProfileStyle.EmailAgeBloodWeight}>
                            <Text style={UserProfileStyle.EmailText}>Email</Text>
                            <TextInput
                                 style={UserProfileStyle.EmailTextInput}
                                  placeholder="Enter Email Hare!"
                                  onChangeText={text => this.setState({ text })}
                                 value={this.state.text}
                            />
                             <Text style={UserProfileStyle.EmailText}>Age(Years)</Text>
                             <TextInput
                                 style={UserProfileStyle.EmailTextInput}
                                 placeholder="Enter Age Hare!"
                                
                             />
                            
                            {/* <Text style={UserProfileStyle.AgeText}>Age</Text>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 5,marginRight:200 }}
                                /> */}

                             <View style={UserProfileStyle.AgeBloodWeight}>
                                 <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment} >
                                     <Text style={UserProfileStyle.AgeText}>
                                        Height(cm)
                               </Text>
                                    <TextInput
                                         style={UserProfileStyle.AgeBloodWeightTextInput}
                                        placeholder="Height"
                                    />
                                </View>
                                 <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment}>
                                     <Text style={UserProfileStyle.AgeText}>
                                        BloodGroup
                               </Text><View style={UserProfileStyle.AgeBloodWeightTextInput} >
                                     <Drop_Down  />
                                     </View>
                                    {/* <Dropdown style={{ height: 55, marginBottom:1  }}
                                        label='Choose Blood group'
                                        data={data}
                                    /> */}
                                    
                                </View>
                                 <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment} >
                                     <Text style={UserProfileStyle.AgeText}>
                                        Weight(Kg)
                               </Text>
                                    <KeyboardAvoidingView behavior="padding" enabled>
                                    <TextInput
                                             style={UserProfileStyle.AgeBloodWeightTextInput}
                                        placeholder="Weight!"
                                    />
                                    </KeyboardAvoidingView>
                                </View>

                            </View>
                                

                            <Text style={UserProfileStyle.GenderIama}>I am a </Text>
                             <View style={UserProfileStyle.Gender}>
                                 <View style={UserProfileStyle.GenderMan}>
                                <TouchableOpacity onPress={() => console.log('Men Botton Tiggered')} >
                                         <Text style={UserProfileStyle.GenderText}>Man</Text>
                                </TouchableOpacity>
                            </View>
                                 <View style={UserProfileStyle.GenderMan}>
                                <TouchableOpacity onPress={() => console.log('Women Botton Tiggered')} >
                                         <Text style={UserProfileStyle.GenderText}>Woman</Text>
                                </TouchableOpacity>
                            </View>
                            
                                 <View style={UserProfileStyle.GenderMan}>
                                <TouchableOpacity onPress={() => console.log('Others Botton Tiggered')} >
                                         <Text style={UserProfileStyle.GenderText}>Others</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                           
                           </View>
                         <View style={UserProfileStyle.Next}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateUserProfile', { text: this.state.text })} >
                                 <Text style={UserProfileStyle.NextText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                       
                </ScrollView>
                   
            </View>
               
         </View>

        );
    }
};
