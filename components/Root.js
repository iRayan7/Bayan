import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    DrawerActions
} from 'react-navigation';

import DrawerScreen from '../components/DrawerContent'

import {Ionicons, Entypo} from '@expo/vector-icons';


import Main from '../screens/Main'

export default class Root extends React.Component {


    render() {
        return (


            <MainStack/>
        );
    }
}

export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Main
    }
}, {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

const MainStack = createStackNavigator({
        DrawerNavigator: {
            screen: DrawerNavigator
        }
    }, {
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: <Image source={require('../assets/logo@2.png')} style={{width: 50, height: 36}}/>,

                // headerRight: (
                //     <TouchableOpacity
                //         style={{marginRight: 25, flexDirection: 'row', alignItems: 'center'}}
                //         onPress={() => console.log('dd')}
                //         hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                //     >
                //         <Entypo name={'map'} size={24} color={'#9E2992'}/>
                //     </TouchableOpacity>
                // ),
                headerLeft: (
                    <TouchableOpacity
                        style={{paddingLeft: 25, flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}
                        hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                    >
                        <Ionicons name={'ios-menu'} size={30} color={'#2FBF82'}/>
                    </TouchableOpacity>
                ),
            }
        }
    }
)

