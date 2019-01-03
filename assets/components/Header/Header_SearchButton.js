import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';

import {
    //AppRegistry,
    Text,
    Image,
    View,
    Button,
    Alert,
    TouchableOpacity

} from 'react-native';

export default class Header_Component_SearchButton extends Component {
    render() {
        return (
            
                <View style={{ flex: 0.3, alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => console.log('Search')}>
                        <View style={{ paddingLeft: 0 }}>
                            <Image style={{ alignItems: 'center', width: 20, height: 20, marginTop: 12 }}
                                source={require('../../images/search.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            
        );
    }
}



