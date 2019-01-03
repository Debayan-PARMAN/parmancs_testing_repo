import React, { Component } from 'react';
import { StyleSheet, View, Image, LinearGradient, Text, ActivityIndicator, Button, Alert } from 'react-native';
export default class Flash_Screen extends Component {
    render() {
        return (
            
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
                <Image style={{ alignItems: 'center', width: 200, height: 100 }}
                    source={require('./assets/images/hand.gif')}
                />
                <View>
                    <Image style={{ alignItems: 'center', width: 120, height: 20 }}
                        source={require('./assets/images/logo1.png')}
                    />
                </View>
            </View>
        );
    }
}

