import React, { Component } from 'react';
import { StyleSheet, View, Image, LinearGradient, Text, Button, Alert, ActivityIndicator } from 'react-native';
export default class Flash_Screen extends Component {
    render() {
        return (
            
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
                {/* <Image style={{ alignItems: 'center', width: 200, height: 100 }}
                    source={require('../../assets/images/hand.gif')}
                /> */}
                <View>
                    <Image style={{ alignItems: 'center', width: 150, height: 200,backgroundColor: '#fff' }}
                        source={require('../../assets/images/logo2.png')}
                    />
                 <ActivityIndicator size="large" color="#7f439e" />
                </View>
                
            </View>
        );
    }
}

