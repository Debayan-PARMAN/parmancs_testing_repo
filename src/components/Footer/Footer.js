import React, { Component } from 'react';
import {View} from 'react-native';

import imageConst from '../../constants/imageConst';

import {FooterStyles} from '../../styelsheets/MainStyle';
// import Footer_Component_Home from './Footer_Home';
// import Footer_Component_MyAccount from './Footer_MyAccount';
// import Footer_Component_Notification from './Footer_Notification';
// import Footer_Component_Cart from './Footer_Cart';
// import Footer_Component_Help from './Footer_Help';
import Footer_Icons from './Footer_Icons';

export default class Footer_Component extends Component {
    render() {
        const {HomeIcon, MyAccountIcon, MyCartIcon, NotificationsIcon, HelpIcon} = imageConst;
        
        // <Footer_Component_Home />
        // <Footer_Component_MyAccount/>
        // <Footer_Component_Notification/>
        // <Footer_Component_Cart/>
        // <Footer_Component_Help/>
        return (
            <View Container='Footer' style={FooterStyles.container}>
            <Footer_Icons iconLabel={HomeIcon.label} iconSrc={HomeIcon.src} iconLink='Home' />
                <Footer_Icons iconLabel={MyAccountIcon.label} iconSrc={MyAccountIcon.src} iconLink='My Account' />
                <Footer_Icons iconLabel={MyCartIcon.label} iconSrc={MyCartIcon.src} iconLink='Cart' />
                <Footer_Icons iconLabel={NotificationsIcon.label} iconSrc={NotificationsIcon.src} iconLink='Notifications' />
                <Footer_Icons iconLabel={HelpIcon.label} iconSrc={HelpIcon.src} iconLink='Icon' />
            </View>
        );
    }
}

// export default Footer_Component  = createBottomTabNavigator()

// const TabStack = createBottomTabNavigator({
//     Home: Footer_Component_Home,
//     MyAccount: Footer_Component_MyAccount,
//     MyCart: Footer_Component_Cart,
//     Notification: Footer_Component_Notification,
//     Help: Footer_Component_Help,
// },
// {   
//     defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) =>
//           getTabBarIcon(navigation, focused, tintColor),
//       }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     })

// export default Footer = createAppContainer(TabStack);