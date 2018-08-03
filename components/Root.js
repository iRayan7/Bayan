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
import MainSign from '../screens/MainSign'
import DrawerVolunteerScreen from '../components/DrawerVolunteer'



import VideoCallVolunteer from '../screens/VideoCallVolunteer'
import VideoCallOrgnizer from "../screens/VideoCallOrgnizer";

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
        },
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
        title: 'Login',
    }
})

export const DrawerVolunteer = createDrawerNavigator({
    Volunteer: {
        screen: Volunteer
    }
}, {
    initialRouteName: 'Volunteer',
    contentComponent: DrawerVolunteerScreen,
    drawerWidth: 300
});


const VolunteerStack = createStackNavigator({
        DrawerNavigator: {
            screen: DrawerVolunteer
        },
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

const RatingStack = createStackNavigator({
    Rating: {screen: Rating}
})

const VideoCallVolunteerStack = createStackNavigator ({
    screen: VideoCallVolunteer,
}, {
    navigationOptions : {
        header: null,
    }
})

const VideoCallOrgnizerStack = createStackNavigator ({
    screen: VideoCallOrgnizer,
}, {
    navigationOptions : {
        header: null,
    }
})

const MainSignStack = createStackNavigator({
    MainSign: {screen: MainSign}
},  {
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
                        navigation.navigate('mainStack');
                    }}
                    hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                >
                    <Ionicons name={'ios-arrow-back'} size={30} color={'#2FBF82'}/>
                </TouchableOpacity>
            ),
        }
    }
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
    loginStack: {screen: LoginStack},
    mainStack: {screen: MainStack},
    volunteerStack: {screen: VolunteerStack},
    VideoVolunteerStack: {screen: VideoCallVolunteerStack},
    VideoOrgnizerStack: {screen: VideoCallOrgnizerStack},
    RatingStack: {screen: RatingStack},
    mainSignStack: {screen: MainSignStack}
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
    navigationOptions : {
        gesturesEnabled: false,
    }
})
