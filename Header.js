import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';
import {
    //AppRegistry,
    Text,
    Image,
    View,
    Button,
    Alert

} from 'react-native';

export default class Header_Component extends Component {
    render() {
        return (
            <View Container='Footer' style={{ flex: 0.07, backgroundColor: 'rgba(141, 99, 225, 0.8)', flexDirection: 'row', paddingTop:25, paddingBottom: 3 }}>
                <View style={{ flex: 0.4, alignItems: 'center',}}>
                    <Icon
                        raised
                        name='Entypo'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} />
                    </View>
                <View style={{ flex: 2, alignItems: 'center',}}>
                    <Text style={{fontSize:20, color:'white', paddingLeft:70}}>
                    Header
                    </Text>
                </View>
                <View style={{ flex: 0.5, alignItems: 'center',}}>
                    <Button
                        onPress={() => {
                            Alert.alert('Notifications');
                        }}
                        title='N'
                    />
                </View>
                <View style={{ flex: 0.5, alignItems: 'center',}}>
                    <Button
                        onPress={() => {
                            Alert.alert('Search');
                        }}
                        title='S'
                    />
                </View>
            </View>
        );
    }
}



