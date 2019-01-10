import React, {Component} from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import Next_Btn from '../../src/components/Button/Next_Button';
import SignIn_Btn from '../../src/components/Button/SignIn_Button';
import Footer from '../components/Footer/Footer';

export default class Registration extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      otp: '',
      successMessage: '',
      failureMessage: '',
      alertTrigger: false,
      showPassword: true,
    };
  }

  static navigationOptions = {
    title: 'Registration',
    headerStyle: {
      backgroundColor: '#daadd6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      paddingLeft: 50,
      //justifyContent: 'center',
      //alignItems: 'center',
    },
  };

  onValueChange = (value, id) => {
    console.log(id, value);
    this.setState({ [id]: value });
  }

  onSubmit = () => {

    console.log('Submit Button triggered');
    const path = `http://206.189.150.18:9090/rest/v1/users/login`;
    const { username, password } = this.state;
    fetch(path, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //"userName": 'debayan.sen@parmancs.com1',
        "userName": username,
        //"password": 'mystrio7',
        "password": password,
        "registrationProvider": "SBIS",
        "roleName": "INDIVIDUAL"
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        console.log(response.token);
        if (response.token) {
          this.setState({ successMessage: `User ${response.username} has successfully logged in.` });
          Alert.alert(this.state.successMessage);
        } else {
          this.setState({ failureMessage: 'Invalid username or password!' });
          Alert.alert(this.state.failureMessage);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { username, password, otp, showPassword } = this.state;

    const passwordSection = (
      <View style={LoginStyles.textInput}>
        <Text style={FontStyles.font}>Password</Text>
        <TextInput
          style={LoginStyles.textInput_pass_email}
          placeholder="Type your Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => this.onValueChange(e, 'password')} />
      </View>
    );
    const otpSection = (
      <View style={LoginStyles.textInput}>
        <Text style={FontStyles.font}>OTP</Text>
        <TextInput
          style={LoginStyles.textInput_pass_email}
          placeholder="Type your OTP"
          value={otp}
          onChangeText={(e) => this.onValueChange(e, 'otp')} />
      </View>
    );

    return (
      <View style={LoginStyles.mainWrapper}>
      <ScrollView>
          <View style={LoginStyles.bannerArea2_Text}>
            <Text style={FontStyles.font}>Create Account</Text>
          </View>
          <View style={LoginStyles.textInput}>
            <Text style={FontStyles.font}>Email/Mobile number</Text>
            <TextInput
              style={LoginStyles.textInput_pass_email}
              placeholder="Type your Email/Mobile"
              value={username}
              onChangeText={(e) => this.onValueChange(e, 'username')} />
          </View>
          <View style={{height:30}}>
          </View>
          <Next_Btn/>
          <View style={{height:50}}>
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
          <SignIn_Btn/>
        </ScrollView>
      </View>
    );
  }
};