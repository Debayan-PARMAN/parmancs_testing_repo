import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState } from '../actions/user';

import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, TouchableHighlight } from 'react-native';
import UpdateUserProfileStyle from '../styelsheets/UpdateUserProfileStyle';
import { KeyboardAvoidingView } from 'react-native';

class Update_User_Profile extends Component {

    static navigationOptions = {
        title: 'UpdateUserProfile',
        headerStyle: {
        backgroundColor: '#a9a9a9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            // fontWeight: 'bold',
            paddingLeft: 30,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };

    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails });
    }

    onUpdateProfile = () => {
        //console.log('function triggered');
        const { userDetails } = this.props.userState;
        userDetails.fieldsEditable = true;
        this.props.updateState({ userDetails });
    }

    onSaveUpdatedProfile = () => {
        //console.log('function triggered');
        const { userDetails } = this.props.userState;
        userDetails.fieldsEditable = false;
        this.props.updateState({ userDetails });
    }
    
    render() {

        const {userDetails} = this.props.userState;

        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };


        const userProfileTabs = (<View style={UpdateUserProfileStyle.userProfileTabs}>
                <View style={{ width: 100, height: 30, backgroundColor: '#972493', borderWidth: 1, borderRadius: 5 }} >
                <Text style={UpdateUserProfileStyle.tabText}>Personal</Text>
                </View>
                <View style={{ width: 100, height: 30, backgroundColor: '#ccc', borderWidth: 1, marginLeft: 3, borderRadius: 5 }} >
                <Text style={UpdateUserProfileStyle.tabText}>Medical</Text>
                </View>
            <View style={{ width: 100, height: 30, backgroundColor: '#ccc', borderWidth: 1, marginLeft: 3, borderRadius: 5 }} >
                <Text style={UpdateUserProfileStyle.tabText}>LifeStyle</Text>
                </View>
            </View>
        );

        const userDetailsArea = (<View style={{ flex: 0.6, flexDirection: 'row', backgroundColor: '#fff' }} >
            <View style={{ width: 240, height: 100, backgroundColor: '#fff' }} >
                <Text style={UpdateUserProfileStyle.userdetailsText}>{userDetails.name}</Text>
                <Text style={UpdateUserProfileStyle.userdetailsText} >{userDetails.emailAddress}</Text>
                <Text style={UpdateUserProfileStyle.userdetailsText} >{userDetails.contactNo}</Text>
            </View>
            <View style={{ width: 100, height: 100, backgroundColor: '#fff', borderWidth: 1, borderRadius: 5 }} >
                <Image style={{width:95,height:95,margin:1.5}}
                    source={require('../../assets/images/man.png')} />
            </View>
        </View>);

        let dobArea = '';
        if(!userDetails.fieldsEditable){
            dobArea = (<View>
            <Text style={{ marginTop: 15 }}>Date of Birth</Text>
            <TextInput editable={userDetails.fieldsEditable} style={UpdateUserProfileStyle.dobtextinput}
                onChangeText={(e) => this.onValueChange(e, 'age')}
                value={userDetails.age} />
        </View>);
        } else {
            dobArea = (<View><Text>Date Picker</Text></View>);
        }

        const row1 = (<View style={UpdateUserProfileStyle.bloodheightweight}>
            <View style={UpdateUserProfileStyle.bloodgroup} >
                <Text style={UpdateUserProfileStyle.bloodgrouptext}>BloodGroup</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    value={userDetails.bloodGroup}
                    style={UpdateUserProfileStyle.textInput} />
            </View>

            <View style={{ width: 100, height: 40, marginLeft: 10 }} >
                <Text style={UpdateUserProfileStyle.userdetailsText} >Height(cm)</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={UpdateUserProfileStyle.textInput}
                    onChangeText={(e) => this.onValueChange(e, 'height')}
                    value={userDetails.height} />
            </View>

            <View style={{ width: 100, height: 40, marginLeft: 10 }} >
                <Text style={UpdateUserProfileStyle.userdetailsText} >Weight(kg)</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={UpdateUserProfileStyle.textInput}
                    onChangeText={(e) => this.onValueChange(e, 'weight')}
                    value={userDetails.weight} />
            </View>
        </View>);

        const row2 = (<View style={{ height: 60, marginTop: 10, flexDirection: 'row' }}>
            <View style={{ width: 100, height: 60, }} >
                <Text editable={userDetails.fieldsEditable} style={UpdateUserProfileStyle.userdetailsText} >Gender</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={UpdateUserProfileStyle.textInput}
                    onChangeText={(e) => this.onValueChange(e, 'gender')}
                    value={userDetails.gender} />
            </View>
            <View style={{ width: 100, height: 60, marginLeft: 20 }} >
                <Text editable={userDetails.fieldsEditable} style={UpdateUserProfileStyle.userdetailsText} >Marital Status</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={UpdateUserProfileStyle.textInput}
                    onChangeText={(e) => this.onValueChange(e, 'maritalStatus')}
                    value={userDetails.maritalStatus} />
            </View>
        </View>);

        const addressArea = (<View>
            <Text style={UpdateUserProfileStyle.address}>Address</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddAddress')} >
                <View style={UpdateUserProfileStyle.addaddress}>
                    <View style={UpdateUserProfileStyle.addaddresslogoContainer} >
                        <Image style={UpdateUserProfileStyle.addaddresslogo}
                            source={require('../../assets/images/add.png')} />
                    </View>
                    <View style={{ width: 145, height: 40, }} >
                        <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 15, }}>Add Another Address</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>);

        const buttonArea = (<View style={UpdateUserProfileStyle.buttons}>
            {!userDetails.fieldsEditable ? 
            <View style={UpdateUserProfileStyle.updateprofilebutton}>
                <TouchableOpacity onPress={() => this.onUpdateProfile()} >
                    <Text style={UpdateUserProfileStyle.updateprofilebuttonText}>Update Profile</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={UpdateUserProfileStyle.updateprofilebutton}>
                <TouchableOpacity onPress={() => this.onSaveUpdatedProfile()} >
                    <Text style={UpdateUserProfileStyle.updateprofilebuttonText}>Save Profile</Text>
                </TouchableOpacity>
            </View>
            }
            <View style={{ width: 10, }}></View>
            <View style={UpdateUserProfileStyle.nextpagebutton}>
                <TouchableOpacity onPress={() => console.log('Next Page Button tiggered')} >
            
                    <Text style={UpdateUserProfileStyle.nextpagebuttonText}>Next Page</Text>
                </TouchableOpacity>
            </View>
        </View>

        );
        
        return (
            <View style={UserProfileStyle.mainWrapper}>
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView style={UserProfileStyle.mainWrapper} behavior="padding" enabled>
                            <View style={UpdateUserProfileStyle.health}>
                                <Text style={UpdateUserProfileStyle.healthText}>Health Profile 10% Complete</Text>
                            </View>
                            {userProfileTabs}
                            <View style={UpdateUserProfileStyle.NameAgeSex}>
                                {userDetailsArea}

                                {dobArea}
                                {row1}
                                {row2}
                                {addressArea}
                            </View>

                            {buttonArea}
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        );
    }
};

Update_User_Profile.propTypes = {
    userDetails: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Update_User_Profile);