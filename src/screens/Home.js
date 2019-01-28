import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSpecialities, getCountries, getHospitals} from '../actions/common';

import { View, ScrollView, Image, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import HomeStyles from '../styelsheets/HomeStyle';
import Header_Component_Menu from '../components/Header/Header_Menu';
import Header_SearchButton from '../components/Header/Header_SearchButton';
import Auto_Carousel from '../components/AutoCarousel';
import {LinearGradient} from 'expo';
//import Footer_Component from '../components/Footer/Footer';
//import { bold } from 'ansi-colors';
// import Flash_Screen from './src/components/FlashScreen';

class Home_Screen extends Component {
  componentDidMount(){
    this.props.getSpecialities();
    this.props.getCountries();
    this.props.getHospitals();
  }

  static navigationOptions = {
    title: 'MED-e-PAL',
    headerStyle: {
      backgroundColor: '#572a6f',
    },
    LinearGradient: {
      colors: [ '#a25ca8', '#582491'],
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      // fontWeight: 'bold',
      paddingLeft: 50,
      alignItems:'center',
      justifyContent: 'center',

    },
    headerLeft: (<Header_Component_Menu />),
    headerRight: (<Header_SearchButton />)

  };
  render() {
    return (
      <View style={HomeStyles.mainWrapper}>
        <ScrollView>
        {/*--- Carousel Start ---*/}
        <View style={HomeStyles.caro}>
          <Auto_Carousel />
        </View>
        {/*--- Carousel End ---*/}

        {/*--- SignIn/CreateAccount Start ---*/}
        <View style={HomeStyles.signin}>
            <LinearGradient
              colors={['#a25ca8', '#582491']}
              style={HomeStyles.signinbtn}>
            <TouchableHighlight
              
              onPress={() => this.props.navigation.navigate('Login')}
              //underlayColor='#fff'
              >
              <Text style={[HomeStyles.signinbtnText]}>Sign In</Text>
            </TouchableHighlight>
            </LinearGradient>
          <View style={{ width: 10, }}>
          </View>
            <TouchableHighlight
              style={HomeStyles.createaccountbtn}
              onPress={() => this.props.navigation.navigate('Registration')}
              underlayColor='#fff'>
              <Text style={[HomeStyles.createaccountbtnText]}>Create Account</Text>
            </TouchableHighlight>
          </View>
        {/*--- SignIn/CreateAccount End ---*/}

        {/*--- Offers & Discount Start ---*/}
        <View>
          <View style={HomeStyles.offers}>
            <View style={HomeStyles.off_h} >
              <Text style={HomeStyles.off_txt_h}>Offers and Discounts (3 available)</Text>
            </View>
            <View style={HomeStyles.off_h_r} >
              <Image style={HomeStyles.off_h_r_i}
                source={require('../../assets/images/right-arrow.png')} />
            </View>

          </View>
          <View style={HomeStyles.off_f} >
            <Text style={HomeStyles.off_txt_p}>
              Ceratosaurus was a predator with deep jaws supporting
              long, blade-like teeth. It had a prominent...
            </Text>
          </View>
        </View>
        {/*--- Offers & Discount End ---*/}

        {/*--- Menu Start ---*/}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1, margin: (10) }}>

            <View style={HomeStyles.ser_parent} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FindDoctor')} >
                <Image style={HomeStyles.ser_icon}
                  source={require('../../assets/images/search_doctor.png')} />
              </TouchableOpacity>
              <Text style={HomeStyles.ser_text}>
                Search Doctors
              </Text>
            </View>


            <View style={HomeStyles.ser_parent} >
              <TouchableOpacity onPress={() => console.log('Order Medicine')} >
                <Image style={HomeStyles.ser_icon}
                  source={require('../../assets/images/pill.png')} />
              </TouchableOpacity>
              <Text style={HomeStyles.ser_text}>
                Order Medicine
             </Text>
            </View>


            <View style={HomeStyles.ser_parent} >
              <TouchableOpacity onPress={() => console.log('Add Medical Records')} >
                <Image style={HomeStyles.ser_icon}
                  source={require('../../assets/images/medical_records.png')} />
              </TouchableOpacity>
              <Text style={HomeStyles.ser_text}>
                Add Medical Records
              </Text>
            </View>

          </View>
          <View style={{ flex: 1, marginTop: (10) }}>
            <View style={HomeStyles.ser_parent} >
              <TouchableOpacity onPress={() => console.log('Book Appointments')} >
                <Image style={HomeStyles.ser_icon}
                  source={require('../../assets/images/calendar.png')} />
              </TouchableOpacity>
              <Text style={HomeStyles.ser_text}>
                Book Appointments
              </Text>
            </View>


            <View style={HomeStyles.ser_parent} >
              <TouchableOpacity onPress={() => console.log('Book Test, Checkups')} >
                <Image style={HomeStyles.ser_icon}
                  source={require('../../assets/images/blood.png')} />
              </TouchableOpacity>
              <Text style={HomeStyles.ser_text}>
                Book Test, Checkups
              </Text>
            </View>


            <View style={HomeStyles.ser_parent} >
              <TouchableOpacity onPress={() => console.log('Medicine Reminder')} >
                <Image style={HomeStyles.ser_icon}
                  source={require('../../assets/images/time_left.png')} />
              </TouchableOpacity>
              <Text style={HomeStyles.ser_text}>
                Medicine Reminders
               </Text>
            </View>

          </View>

          <View style={{ flex: 1, marginTop: (10), marginLeft: 10 }}>
            <View style={HomeStyles.ser_parent} >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateUserProfile')} >
                <Image style={HomeStyles.ser_icon}
                  source={require('../../assets/images/coding.png')} />
              </TouchableOpacity>
              <Text style={HomeStyles.ser_text}>
                Testing Purpose
               </Text>
            </View>
            <View style={HomeStyles.ser_parent} >
                <View style={HomeStyles.ser_parent} >
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('DoctorAppoinment')} >
                    <Image style={HomeStyles.ser_icon}
                      source={require('../../assets/images/coding.png')} />
                  </TouchableOpacity>
                  <Text style={HomeStyles.ser_text}>
                    Doctor Appointments
                  </Text>
            </View>
            </View>
            <View style={HomeStyles.ser_parent} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookAppoinment')} >
                  <Image style={HomeStyles.ser_icon}
                    source={require('../../assets/images/coding.png')} />
                </TouchableOpacity>
                <Text style={HomeStyles.ser_text}>
                  BookAppoinment
                  </Text>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: (10), marginLeft: 10, marginRight: 10 }}>
            <View style={HomeStyles.ser_parent} />
            <View style={HomeStyles.ser_parent} />
            <View style={HomeStyles.ser_parent} />
          </View>
        </ScrollView>
        {/*--- Menu End ---*/}

      </ScrollView>
      </View>
    );
  }
}

Home_Screen.propTypes = {
  common: PropTypes.object,
}

const mapStateToProps = state => ({
  common: state.common
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ getSpecialities, getCountries, getHospitals }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home_Screen);