import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestOTP, updateState } from '../actions/user';


import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, AsyncStorage } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { URI } from '../constants';

class Registration extends Component {

  static navigationOptions = {
    title: 'MED-e-Pal',
    headerStyle: {
      backgroundColor: '#572a6f',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      paddingLeft: 50,
      //alignItems:'center',

    },
  };

  onValueChange = (value, id) => {
    const { userDetails } = this.props.userState;
    userDetails[id] = value;
    this.props.updateState({ userDetails });
  }

  // checkData = (commonData) => {
  //   if (commonData.length === 10 && commonData.test(/d/g)){
  //     this.setState({ contactNo: commonData });
  //     return true;
  //   } else {
  //     this.setState({ emailAddress: commonData });
  //     return false;
  //   }
  // }

  onCancelAlert = () => {
    this.props.updateState({ responseTriggerred: false });
    // this.props.navigation.navigate('Home');
  }

  onSubmit = () => {
    console.log('Registration Button triggered');
    const {userDetails} = this.props.userState;
    const regex = /[0-9]/g;
    if (regex.test(userDetails.contactNo) && userDetails.contactNo.length === 10){
      this.props.requestOTP();
      this.props.navigation.navigate('VerifyMobileMumber');
    }
    else {
      Alert.alert(
        '',
        message='Provide a valid number',
        [{
          text: 'Cancel',
          onPress: this.onCancelAlert,
          style: 'cancel'
        }], {
          cancelable: false
        }
      );
    }
  }
  render() {
    const { userDetails } = this.props.userState;
    const { contactNo } = this.props.userState;
    return (
      <View style={LoginStyles.mainWrapper}>
        <ScrollView>
          <View style={LoginStyles.bannerArea2_Text}>
            <Text style={FontStyles.font}>Create Account</Text>
          </View>
          <View style={LoginStyles.textInput}>
            <Text style={FontStyles.font}>Mobile number</Text>
            <View style={{ height: 10 }}>
            </View>
            <TextInput
              style={LoginStyles.textInput_pass_email}
              placeholder="Type your Email/Mobile"
              value={userDetails.contactNo}
              onChangeText={(e) => this.onValueChange(e, 'contactNo')} />
          </View>
          <View style={{ height: 30 }}>
          </View>
          <View style={LoginStyles.button}>
            <View style={{ flex: 0.7, }}>
            </View>
            <View style={{ flex: 1, }}>
              <Button
                style={FontStyles.font}
                onPress={this.onSubmit}
                title="Next"
                color="#AA8CC5"
                width="10"

              />
            </View>
            <View style={{ flex: 0.7, }}>
            </View>
          </View>
          <View style={{ height: 50 }}>
          </View>
          <View style={LoginStyles.bannerArea2_Text}>
            <Text style={FontStyles.font}>------------------------------------- OR -------------------------------------</Text>
          </View>
          <View style={{ height: 20 }}>
          </View>
          <View style={Button_fb_google.first_container}>
            <TouchableOpacity onPress={() => console.log('Login with facebook')}>
              <View style={Button_fb_google.second_container}>
                <View style={Button_fb_google.third_container}>
                  <Image style={{ width: 30, height: 30 }}
                    source={require('../../assets/images/facebook.png')}
                  />
                </View>
                <View style={LoginStyles.toggleButton_Sub_Container_Row1}>
                  <Text style={FontStyles.font} style={{ color: 'white' }}>Connect With Facebook</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={Button_fb_google.first_container}>
            <TouchableOpacity onPress={() => console.log('Login with google')}>
              <View style={Button_fb_google.second_container}>
                <View style={Button_fb_google.third_container}>
                  <Image style={{ width: 30, height: 30 }}
                    source={require('../../assets/images/google.png')}
                  />
                </View>
                <View style={LoginStyles.toggleButton_Sub_Container_Row1}>
                  <Text style={FontStyles.font} style={{ color: 'white' }}>Connect With Google</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={LoginStyles.forget_pass_view}>
            <Text style={FontStyles.font}>Do not have an account ?</Text>
          </View>
          <View style={LoginStyles.button}>
            <View style={{ flex: 0.7, }}>
            </View>
            <View style={{ flex: 1, }}>
              <Button onPress={() => this.props.navigation.navigate('Login')}
                style={FontStyles.font}
                //onPress={this.onSubmit}
                title="Sign In"
                color="#AA8CC5"
                width="10"
              />
            </View>
            <View style={{ flex: 0.7, }}>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

Registration.propTypes = {
  userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
  userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ requestOTP, updateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);