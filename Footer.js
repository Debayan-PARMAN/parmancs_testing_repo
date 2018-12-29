import React, { Component } from 'react';
import {
    //AppRegistry,
    Text,
    Image,
    View,
    Button

} from 'react-native';

export default class Footer_Component extends Component {
    render() {
        return (
            <View Container='Footer' style={{ flex: 0.08, backgroundColor: 'rgba(141, 99, 225, 0.8)', flexDirection:'row'}}>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}>
                    <Image style={{ alignItems: 'center', width: 30, height: 30 }}
                        source={require('./assets/images/home.png')}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}>
                    <Image style={{ alignItems: 'center', width: 30, height: 30 }}
                        source={require('./assets/images/health-insurance.png')}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}>
                    <Image style={{ alignItems: 'center', width: 30, height: 30 }}
                        source={require('./assets/images/shopping-cart.png')}
                    />
                </View>
            </View>
        );
    }
}



