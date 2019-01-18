import React, { Component } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
// import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';

export default class Verify_Mobile_Number extends Component {

    static navigationOptions = {
        title: 'MED-e-Pal',
        headerStyle: {
            backgroundColor: '#daadd6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
            //alignItems:'center',

        },
    };

    render() {
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
                        <View style={{height:60}}>
                        </View>
                        <TextInput
                            style={LoginStyles.textInput_pass_email}
                            placeholder="Type your OTP"
                            //value={username}
                            onChangeText={(e) => this.onValueChange(e, 'username')} />
                    </View>
                    <View style={{height:30}}>
                    </View>

                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Button onPress={() => console.log ('VerifyMobileMumber')}
                                style={FontStyles.font}
                                //onPress={this.onSubmit}
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