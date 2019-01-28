import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {updateState} from '../actions/doctors';

import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, Textarea } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import  Specialitis  from '../screens/Specialitis';


class Find_Doctor extends Component {
    static navigationOptions = {
        title: 'Find Doctor',
        headerStyle: {
            backgroundColor: '#572a6f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
        }
    };

    onPressSpeicalityButton = () => {
        this.props.updateState({ selectedBTN: 'Specialities' });
    }

    onPressHospitalsButton = () => {
        this.props.updateState({selectedBTN: 'Hospitals'});
    }

    render() {

        const { doctorDetails } = this.props.doctorState;
        const {selectedBTN} = this.props.common;

        return (
            <View style={LoginStyles.mainWrapper}>
            <View style={{flex:1,}}>
                
                    <View style={{ flex: 0.7, margin: 10,}}>
            
                    <View style={{ flex: 0.4, }}>
                    <Text>Name, Speciality or conditions</Text>
                    <TextInput style={{ height: 30, borderColor: 'gray', borderWidth: 1, paddingLeft: 5, paddingRight: 5, marginTop: 3 }}
                        placeholder="Dentist"
                         />
                </View>
                    <View style={{ flex: 0.2, marginTop:15, paddingTop:5,}}>
                        <Text>Near By</Text>
                        
                    </View>
                <View style={{ flex: 0.4, flexDirection: 'row', marginTop: 3}}>
                        <View style={{ flex:0.5, height: 30, backgroundColor: "#ccc", justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this._onPressButton}>
                       
                                <Text style={{ textAlign: 'center'}}>Home</Text>
                            
                        </TouchableOpacity>
                        </View>
                
                        <View style={{ flex: 0.5, height: 30, backgroundColor: "gray",justifyContent:'center' }}>
                            <TouchableOpacity onPress={this._onPressButton}>

                                <Text style={{ textAlign: 'center' }}>Office</Text>

                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, height: 30, backgroundColor: "#ccc", justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this._onPressButton}>

                                <Text style={{ textAlign: 'center'}}>Other saved address</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                <View style={{ justifyContent: 'center', marginTop: 5, }}>
                        <Text style={{ textAlign: 'center' }} >Or</Text>
                        

                    </View>

                    <View>
                    <Text>Pincode, area or locality</Text>
                    <TextInput style={{ height: 30, borderColor: 'gray', borderWidth: 1, paddingLeft: 5, paddingRight: 5, marginTop: 3 }}
                            editable={false}   />
                    </View>
                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}>
                        </View>
                        <View style={{ flex: 0.5, marginTop: 10 }}>
                            <Button onPress={() => this.props.navigation.navigate('SearchDoctor')}
                                style={FontStyles.font}
                                //onPress={this.onSubmit}
                                title="Search"
                                color="#AA8CC5"
                                width="10"
                            />
                        </View>
                        <View style={{ flex: 0.7, }}>
                        </View>
                    </View>
                    <View style={{height:10}}></View>
            <View style={{borderBottomWidth:1,marginTop:10}}/>
                <View style={{ flex: 0.3}}>
                    <Text style={{ fontSize: 14}}>Browse Doctors By</Text>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'row', marginTop: 2}}>
                        <View style={{ flex: 0.5, height: 30, backgroundColor: "#ccc", justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.onPressSpeicalityButton}>
                            <Text style={{ textAlign: 'center' }}>Specialities</Text>
                        </TouchableOpacity>
                    </View>

                        <View style={{ flex: 0.5, height: 30, backgroundColor: "gray", justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.onPressHospitalsButton}>
                            <Text style={{ textAlign: 'center' }}>Hospitals/Nursing Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                <View style={{ flex: 0.3, marginLeft: 10, marginBottom: 10, marginRight: 10,}}>    
                <ScrollView>
                        {
                            selectedBTN === 'Specialities' ? 
                            <Specialitis keyValue='specializationPk' list={this.props.common.specialitylist}/>
                            :
                            <Specialitis keyValue='specializationPk' list={this.props.common.hospitallist} />
                        }
                    </ScrollView>
                    </View>

                    </View>
               
            </View>
            
            
        );
    }
};

Find_Doctor.propTypes = {
    doctorDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    // userState: state.userState
    doctorState: state.doctorState,
    common: state.common
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Find_Doctor);
