import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, Textarea } from 'react-native';
import { LoginStyles, FontStyles } from '../styelsheets/MainStyle';
import Search_Doctor_Card from '../components/SearchDoctorCard';
import { Right } from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';



export default class Search_Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                { title: 'abc1', text: 'hi 1', },
                { title: 'abc2', text: 'hi 2', },
                { title: 'abc3', text: 'hi 3', },
                { title: 'abc4', text: 'hi 4', },
                { title: 'abc5', text: 'hi 5', },
            ]
        };
    }

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

      onToggle = () => {
    //      const showPassword = !this.props.userState.showPassword;
            this.props.navigation.navigate( 'Login' );
      }

    render() {
        return (
            <View style={{ flex: 1}}>
            <View style={{ flex: 0.2, margin: 10,  }}>
            
               <View style ={{ flex: 1, flexDirection:"row",  }}>
                    <View style = {{ flex: 1, marginRight:10}}>
                        <TextInput style={{ height: 30, borderColor: 'gray', borderWidth: 1, paddingLeft: 5, paddingRight: 5, marginTop: 3,  }}
                            placeholder="Dentist"  editable={false} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <TextInput style={{ height: 30, borderColor: 'gray', borderWidth: 1, paddingLeft: 5, paddingRight: 5, marginTop: 3, }}
                            placeholder="Home" editable={false} />
                    </View>
                </View>
                    <View style={{ borderBottomWidth: 1, marginTop: 3, }} />
                
                <View style={{ flex: 1, flexDirection: "row", marginTop:10,  }}>
                    <View style={{ flex: 1, }}>
                      <Text>Showing 50 results</Text>  
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 1, }}>
                                <Text>Accept Housecall</Text> 
                            </View>
                            <View style={{ flex: 0.4, }}>
                                    
                                    <ToggleSwitch
                                        isOn={false}
                                        onColor='blue'
                                        offColor='green'
                                        size='small'
                                        onToggle={this.onToggle}
                                    />
                                           
                                        
                            </View>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text style={{ textDecorationLine: "underline", marginLeft:130}}>Filter</Text> 
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, marginTop: 5,}} />
                </View>
                <View style={{ flex: 0.8, }}>
                    <ScrollView>
                        <Search_Doctor_Card/>
                        <Search_Doctor_Card/>
                        <Search_Doctor_Card/>
                        </ScrollView>
                </View>
                </View>
                
                
                
        );
    }
}
