    import React, { Component } from 'react';
    import {
        //AppRegistry,
        View,
        } from 'react-native';
    import Footer_Component_Home from './Footer_Home';
    import Footer_Component_MyAccount from './Footer_MyAccount';
    import Footer_Component_Notification from './Footer_Notification';
    import Footer_Component_Cart from './Footer_Cart';
    import Footer_Component_Help from './Footer_Help';
 
    export default class Footer_Component extends Component {
        render() {
            return (
                <View Container='Footer' style={{ 
                    flex: 0.09, 
                    backgroundColor: '#80868C', 
                    flexDirection:'row',
                    justifyContent: 'space-between', paddingTop: 7}}>
                    <Footer_Component_Home/>
                    <Footer_Component_MyAccount/>
                    <Footer_Component_Notification/>
                    <Footer_Component_Cart/>
                    <Footer_Component_Help/>
                </View>
            );
        }
    }



