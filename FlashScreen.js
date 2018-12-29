import React, { Component } from 'react';
import { StyleSheet, View, Image, LinearGradient, Text, ActivityIndicator, Button, Alert } from 'react-native';
export default class Flash_Screen extends Component {
    render() {
        return (
            
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
            <Image style={{width:100, height:135}}
                 source={require('./assets/images/logo.jpg')}/>    
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    }
}

