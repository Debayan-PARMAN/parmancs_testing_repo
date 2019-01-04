import React, { Component } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
export default class Flash_Screen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
                <View>
                    <Image style={{ alignItems: 'center', width: 120, height: 20 }}
                    source={require('../../assets/images/logo1.png')} />
                </View>
                <ActivityIndicator size="large" color="#7f439e" />
            </View>
        );
    }
}

