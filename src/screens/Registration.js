import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, AsyncStorage } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { URI } from '../constants';


export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactNo: "",
      emailAddress: "",
      commonData: "",
      name: "",
      password: "",
      registrationProvider: "SBIS",
      roleName: "INDIVIDUAL"
    };
  }

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
    console.log(id, value);
    this.setState({ [id]: value });
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

  onSubmit = () => {
    console.log('Registration Button triggered');
    const path = URI.otp;
    const { name, password, contactNo, emailAddress, commonData } = this.state;

    fetch(path, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "contactNo": contactNo,
        "smsActionType": "OTPSEND"

        //"emailAddress": emailAddress,
        //"password": password,
        //"registrationProvider": "SBIS",
        //"roleName": "INDIVIDUAL",
        //"contactNo": "79080180",
        //"inUserType": "NRM",
        //"name": "string",
        //"registrationProvider": "FACEBOOK"
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.status === 5051) {
          this.setState({ exitsMessage: `User already exits` });
          Alert.alert(this.state.exitsMessage);
        }
        else if (response.status === 5001) {
          this.setState({ noInputMessage: `Input field blank` });
          Alert.alert(this.state.noInputMessage);
        }
        else {
          this.setState({ successMessage: `OTP send ${response.message}` });
          Alert.alert(this.state.successMessage);
          this.props.navigation.navigate('VerifyMobileMumber');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { commonData, contactNo } = this.state;
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
              value={contactNo}
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