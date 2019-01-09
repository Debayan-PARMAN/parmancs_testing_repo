import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, Button } from 'react-native';
import { HomeStyles } from '../styelsheets/MainStyle';
import { bold } from 'ansi-colors';
// import Flash_Screen from './src/components/FlashScreen';

export default class Home_Page extends Component {
    render() {
        return (
            <ScrollView>
                <View style={HomeStyles.caro}>
                        <Carousel />
                </View>
                   <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:15, marginBottom:15 }}>
                    <View style={HomeStyles.btn}>
                            <Button onPress={() => this.props.navigation.navigate()}
                            title="Sign In" color='#7f439e'  />
                    </View>
                    <View style={{width: 10,}}>

                    </View>
                    <View style={HomeStyles.btn} >
                        <Button onPress={() => this.props.navigation.navigate()}
                                title="Create Account" color='#cccccc'/>
                   </View>
                    </View>
                
                <View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 320, height: 25, backgroundColor: '#ececec' }} >
                            <Text style={{ fontFamily: 'roboto', fontSize: 16, fontStyle: 'bold', marginLeft: 10, marginTop: 5}}>Offers and Discounts (3 available)</Text>
                        </View>
                        <View style={{ width: 40, height: 25, backgroundColor: '#ececec' }} >
                            <Image style={{ width: 20, height: 20, marginTop: 5, marginLeft: 15 }} 
                         source={require('../../assets/images/right-arrow.png')} />
                        </View>                
                                    
                   </View>
                    <View style={{ width: 370, height: 45, backgroundColor: '#ececec' }} >
                        <Text style={{ fontFamily: 'roboto', fontSize: 14, fontStyle: 'bold', marginLeft: 10,
                    marginTop:5 }}>
                            Ceratosaurus was a predator with deep jaws supporting
                            long, blade-like teeth. It had a prominent...
                           </Text>
                    </View>
                </View>
               <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
               >
                 {/* <View style={{ flex: 1.8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundcolor:'green', marginTop:10 }}>
                        <View style={{ flex: 2, flexDirection: 'column', backgroundColor: 'red', width: 165, height: 80, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }} >
                            <View style={{ width: 165, height: 80, marginLeft: 10, marginTop: 100  }} >
                              <Text>This is Home page</Text>
                              <Text>This is Home page</Text>
                              <Text>This is Home page</Text>
                            </View>
                            <View style={{ width: 165, height: 80, marginLeft: 10, marginTop: 100 }} >
                                <Text>This is Home page</Text>
                                <Text>This is Home page</Text>
                                <Text>This is Home page</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'green', width: 165, height: 80, alignItems: 'center', justifyContent: 'center',marginLeft:10 }} >
                            <Text>This is Home page</Text>
                            <Text>This is Home page</Text>
                            <Text>This is Home page</Text>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'green', width: 165, height: 80, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }} >
                            <Text>This is Home page</Text>
                            <Text>This is Home page</Text>
                            <Text>This is Home page</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'green', width: 165, height: 80, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }} >
                            <Text>This is Home page</Text>
                            <Text>This is Home page</Text>
                            <Text>This is Home page</Text>
                        </View>
                       
                </View>     */}

                    <View style={{ flex: 1, margin:(5,5,5,5) }}>
                        <View style={{ width: 170, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 170, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 170, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                    </View>
                    <View style={{ flex: 1, margin: ( 5, 5, 5) }}>
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                    </View>
                    <View style={{ flex: 1, margin: (5, 5, 5, 5) }}>
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                    </View>
                    <View style={{ flex: 1, margin: (5, 5, 5, 5) }}>
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                        <View style={{ width: 168, height: 80, marginBottom: 5, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }} />
                    </View>

                
                </ScrollView>
                
            </ScrollView>
        );
    }
}
