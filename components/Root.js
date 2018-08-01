import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
} from 'react-navigation';

import Main from '../screens/Main'

export default class Root extends React.Component {


    render() {
        return (


            <MainStack />
        );
    }
}

const MainStack = createStackNavigator({
    Main: {
        screen: DrawerNavigator
    }
})

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Main
    }
},{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});