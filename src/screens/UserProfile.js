import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState } from '../actions/user';

import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView,TouchableHighlight,Da } from 'react-native';
import UserProfileStyle from '../styelsheets/UserProfileStyle';
import Drop_Down from '../components/DropDown';
import { KeyboardAvoidingView } from 'react-native';
import en from '../messages/en-us';

class User_Profile extends Component {

    static navigationOptions = {
        title: 'UserProfile',
        headerStyle: {
        backgroundColor: '#a9a9a9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        paddingLeft: 50,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };
    
    onSubmit = () => {
        console.log('Next Button triggered');
        this.props.User_Profile();
    }
    
    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails });
    }

    render() {
        
        const {userDetails} = this.props.userState;
        const withHover = {...UserProfileStyle.GenderButton, ...UserProfileStyle.hoverButton};
        const withoutHover = {...UserProfileStyle.GenderButton};

        const welcomeHeading = (<View style={UserProfileStyle.welcome}>
            <Text style={UserProfileStyle.welcomeText}>
                Welcome {userDetails.name} Account Successfully Created
            </Text>
        </View>);

        const staticMessageArea = (<View style={UserProfileStyle.ToServe}>
            <Text style={UserProfileStyle.ToServeText}>{en.userProfileMessages.welcomeMessageInfo}</Text>
        </View>);

        const emailArea = (<View style={UserProfileStyle.EmailAgeBloodWeight}>
            <Text style={UserProfileStyle.EmailText}>Email</Text>
            <TextInput
                style={UserProfileStyle.EmailTextInput}
                placeholder="Enter Email Hare!"
                onChangeText={(e) => this.onValueChange(e, 'emailAddress')}
                value={userDetails.emailAddress}
            />
        </View>);
        
        const DOBArea = (<View style={UserProfileStyle.EmailAgeBloodWeight}>
            <Text style={UserProfileStyle.EmailText}>Date of Birth(DD/MM/YY)</Text>
            <TextInput
                style={UserProfileStyle.EmailTextInput}
                placeholder="Enter Age Hare!"
                onChangeText={(e) => this.onValueChange(e, 'age')}
                value={userDetails.age}
            /></View>);

        const heightBloodGroupWeightArea = (<View style={UserProfileStyle.AgeBloodWeight}>
            <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment} >
                <Text style={UserProfileStyle.AgeText}>Height(cm)</Text>
                <TextInput
                    style={UserProfileStyle.AgeBloodWeightTextInput}
                    placeholder="Height"
                    onChangeText={(e) => this.onValueChange(e, 'height')}
                    value={userDetails.height}
                />
            </View>
            <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment}>
                <Text style={UserProfileStyle.AgeText}>BloodGroup</Text>
                <View style={UserProfileStyle.AgeBloodWeightTextInput} >
                    <Drop_Down selectedValue={userDetails.bloodGroup} options={userDetails.bloodGroupOptions} onValueChange={this.onValueChange} />
                </View>
            </View>
            <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment} >
                <Text style={UserProfileStyle.AgeText}>Weight(Kg)</Text>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <TextInput
                        style={UserProfileStyle.AgeBloodWeightTextInput}
                        placeholder="Weight!"
                        onChangeText={(e) => this.onValueChange(e, 'weight')}
                        value={userDetails.weight}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>);

        const genderArea = (<View style={UserProfileStyle.AgeBloodWeight}>
                <Text style={UserProfileStyle.GenderIama}>I am a </Text>
                <View style={UserProfileStyle.Gender}>
                    <View style={userDetails.gender === 'M' ? withHover : withoutHover}>
                        <TouchableOpacity onPress={() => this.onValueChange('M', 'gender')} >
                            <Text style={UserProfileStyle.GenderText}>Man</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={userDetails.gender === 'W' ? withHover : withoutHover}>
                        <TouchableOpacity onPress={() => this.onValueChange('W', 'gender')} >
                            <Text style={UserProfileStyle.GenderText}>Woman</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={userDetails.gender === 'O' ? withHover : withoutHover}>
                        <TouchableOpacity onPress={() => this.onValueChange('O', 'gender')} >
                            <Text style={UserProfileStyle.GenderText}>Others</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>);
        
        return (
            <View style={UserProfileStyle.mainWrapper}>
            <View >
                <ScrollView>
                        {welcomeHeading}
                        {staticMessageArea}
                        {emailArea}
                        {DOBArea}
                        {heightBloodGroupWeightArea}
                        {genderArea}                        
                        <View style={UserProfileStyle.Next}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateUserProfile')} >
                                <View style={UserProfileStyle.Nextbutton}>
                                    <Text style={UserProfileStyle.NextText}>Next</Text>                            
                                </View>
                            </TouchableOpacity>
                         </View>
                </ScrollView>
            </View>
         </View>
        );
    }
};

User_Profile.propTypes = {
    userDetails: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({updateState }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(User_Profile);