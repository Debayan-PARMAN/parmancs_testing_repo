import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { HomeStyles } from '../styelsheets/HomeStyle';

export default class Specialitis extends Component {

    render() {
        const {list, keyValue} = this.props;
        
        const arrowButton = (
            <View>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Image 
                        source={require('../../assets/images/right-arrow.png')} />
                </TouchableOpacity>
            </View>
        );
        return (
            <View style={{ flex: 1,  justifyContent: 'space-between'}}>
                {list.map(data =>
                    <View key={data[keyValue]} style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 3, borderBottomWidth: 1}}>
                        <View  style={{ flex: 1 }}>
                            <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>{data.specialization}</Text>
                            <Text>{data.type}</Text>
                        </View>
                        { arrowButton }
                    </View>
                )}
            </View>
        );
    }
}