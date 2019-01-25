import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red', justifyContent: 'center', alignItems: 'center' }}>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'green', justifyContent: 'center', alignItems: 'center' }}>Settings!</Text>
            </View>
        );
    }
}
class AnotherScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'green', justifyContent: 'center', alignItems: 'center' }}>Another!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Another: { screen: AnotherScreen },
});


export default createAppContainer(TabNavigator);