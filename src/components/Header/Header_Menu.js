import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon, SearchBar } from 'react-native-elements';
import {
    //AppRegistry,
    Text,
    Image,
    View,
    Button,
    Alert,
    TouchableOpacity

} from 'react-native';

export default class Header_Component_Menu extends Component {
    render() {
        return (
            
                <View style={{ flex: 0.4, alignItems: 'center',}}>
                    <TouchableOpacity onPress={() => console.log('Navigation')}>
                        <View style={{ paddingLeft: 0 }}>
                            <Image style={{ alignItems: 'center', width: 25, height: 25, marginTop: 10 }}
                            source={require('../../../assets/images/menu.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    </View>
                
        );
    }
}



