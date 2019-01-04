import React, {PureComponent} from 'react';
import { View, Text, Button } from 'react-native';

// import Footer from '../components/Header/Header';
// import Footer from '../components/Header/Header';
import {MainStyles} from '../styelsheets/MainStyle';
import Header_Component_Menu from '../components/Header/Header_Menu';
import Header_SearchButton from '../components/Header/Header_SearchButton';
// import Footer from '../components/Footer/Footer';

export default class HomeScreen extends PureComponent{
  static navigationOptions = {
    title: 'MED-e-Pal',
    headerStyle: {
      backgroundColor: '#AA8CC5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: ( <Header_Component_Menu/> ),
    headerRight: ( <Header_SearchButton /> )
    
  };

  render() {
    return (
      <View style={MainStyles.container }>
        <View>
          < View style = {
            {
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }
          } >
            <Button onPress = {() => this.props.navigation.navigate('Login')}
              title = "Sign In" />
            <Button onPress = {() => this.props.navigation.navigate('Registration')}
              title = "Sign Up" />
            <Button onPress = {() => this.props.navigation.navigate('Loading')}
              title = "Flash Screen" />
          </View>
        </View>
        {/* <Footer /> */}
      </View>
    );
  }
};