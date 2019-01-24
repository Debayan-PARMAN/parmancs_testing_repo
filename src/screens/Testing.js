import React, { Component } from 'react';
import { Platform,View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView,Picker } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
//import Footer from './components/Footer/Footer';
//import ImageSlider from 'react-native-image-slider';
import Footer_Component from '../components/Footer/Footer';
import Greeting from '../screens/UserProfile';
import ImagePicker from 'react-native-image-picker';
import Drop_Down from '../components/DropDown';
import TabNavigator from 'react-native-tab-navigator';

export default class Test_Page extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedTab:selected };
    }
    
    render() {
            return(
            // <Picker
            //     selectedValue={this.state.selected}
            //     mode='dropdown'
            //     onValueChange={(itemValue) => this.setState({ selected: itemValue })}>
            //     {
            //         this.state.options.map(option => <Picker.Item key={option.label} label={option.label} value={option.value} />)
            //     }
            // </Picker>
            // <View>
            //   <Drop_Down/>
            // </View>
            <View> 
             <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                        renderIcon={() => <Image source={require('../../assets/images/medical_records.png')} />}
                        renderSelectedIcon={() => <Image source={require('../../assets/images/pill.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                        renderIcon={() => <Image source={require('../../assets/images/search_doctor.png')} />}
                        renderSelectedIcon={() => <Image source={require('../../assets/images/calendar.png')} />}
                    renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    {profileView}
                </TabNavigator.Item>
            </TabNavigator>    
            </View>
            
        );
    }
}