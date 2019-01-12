import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import { View, ScrollView, Image, Text, Button, TouchableOpacity } from 'react-native';
import { HomeStyles, FontStyles } from '../styelsheets/MainStyle';
import Header_Component_Menu from '../components/Header/Header_Menu';
import Header_SearchButton from '../components/Header/Header_SearchButton';
//import { bold } from 'ansi-colors';
// import Flash_Screen from './src/components/FlashScreen';

export default class Home_Page extends Component {
    static navigationOptions = {
        title: 'MED-e-Pal',
        headerStyle: {
            backgroundColor: '#daadd6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
            //alignItems:'center',

        },
        headerLeft: (<Header_Component_Menu />),
        headerRight: (<Header_SearchButton />)

    };
    render() {
        return (
            <ScrollView>
                {/*--- Carousel Start ---*/}
                <View style={HomeStyles.caro}>
                    <Carousel />
                </View>
                {/*--- Carousel End ---*/}

                {/*--- SignIn/CreateAccount Start ---*/}
                <View style={HomeStyles.signin}>
                    <View style={HomeStyles.btn}>
                        <Button onPress={() => this.props.navigation.navigate('Login')}
                            title="Sign In" color='#AA8CC5' />
                    </View>
                    <View style={{ width: 10, }}>
                    </View>
                    <View style={HomeStyles.btn} >
                        <Button onPress={() => this.props.navigation.navigate('Registration')}
                            title="Create Account" color='#ccc' />
                        
                    </View>
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
                            <TouchableOpacity onPress={() => console.log('Search Doctor')} >
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
                        <View style={HomeStyles.ser_parent} />
                        <View style={HomeStyles.ser_parent} />
                        <View style={HomeStyles.ser_parent} />
                    </View>
                    <View style={{ flex: 1, marginTop: (10), marginLeft: 10, marginRight: 10 }}>
                        <View style={HomeStyles.ser_parent} />
                        <View style={HomeStyles.ser_parent} />
                        <View style={HomeStyles.ser_parent} />
                    </View>
                </ScrollView>
                {/*--- Menu End ---*/}

            </ScrollView>
        );
    }
}
