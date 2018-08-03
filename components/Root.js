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
import {Ionicons, Entypo} from '@expo/vector-icons'
import Main from '../screens/Main'
import Login from '../screens/Login'
import Volunteer from '../screens/Volunteer'
import Rating from '../screens/Rating'

export default class Root extends React.Component {
    render() {

        return (

            <PrimaryNav/>
        );
    }
}

export const DrawerMain = createDrawerNavigator({
    Home: {
        screen: Main,
    },
}, {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

const MainStack = createStackNavigator({
        DrawerNavigator: {
            screen: DrawerMain
        }
    }, {
        headerMode: 'float',
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
                        onPress={() => {
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }}
                        hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                    >
                        <Ionicons name={'ios-menu'} size={30} color={'#2FBF82'}/>
                    </TouchableOpacity>
                ),
            }
        }
    }
)

// login stack
const LoginStack = createStackNavigator({
    loginScreen: {screen: Login},
}, {
    headerMode: 'float',
    navigationOptions: {
        title: 'Login'
    }
})

export const DrawerVolunteer = createDrawerNavigator({
    Volunteer: {
        screen: Volunteer
    }
}, {
    initialRouteName: 'Volunteer',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});


const VolunteerStack = createStackNavigator({
        DrawerNavigator: {
            screen: DrawerVolunteer
        },
        RatingScreen: {
            screen: Rating
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
                        onPress={() => {
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }}
                        hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                    >
                        <Ionicons name={'ios-menu'} size={30} color={'#2FBF82'}/>
                    </TouchableOpacity>
                ),
            }
        },
        initialRouteName: 'DrawerNavigator',

    }
)

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
    loginStack: {screen: LoginStack},
    mainStack: {screen: MainStack},
    volunteerStack: {screen: VolunteerStack}
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'mainStack',
})
