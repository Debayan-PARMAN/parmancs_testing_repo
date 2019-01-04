import React, { Component } from 'react';

import { StyleSheet, Text, View,  ScrollView, Image, Item, Index, ImageBackground } from 'react-native';


export default class First_Page extends Component {

   

    render () {
        return (
            <View style={styles.container}>
            
                <Text style={{ color:'red', fontSize:15}}> This is Custom Slider </Text>
                <ScrollView horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={{width: '100%', height:'100%'}}>
                <Image source={require('./assets/images/helicopter.jpg')}
                resizeMode='cover' />
                <Image
                source={require('./assets/images/goldengate.jpg')}
                resizeMode='cover' />
                <Image
                source={require('./assets/images/piramid.jpg')}
                resizeMode='cover'
                />
                <Image
                source={require('./assets/images/vally.jpg')}
                resizeMode='cover'             />
                
            </ScrollView>


           </View>
           
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
