import React, { Component } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
export default class Loading_Screen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
                <View>
                    <Image style={{ alignItems: 'center', width: 120, height: 20 }}
                    source={require('../../assets/images/logo1.png')} />
                </View>
                <View>
                    <Image style={{ alignItems: 'center', width: 50, height: 50 }}
                        source={require('../../assets/images/loading.gif')} />
                </View>
            </View>
        );
    }
}

