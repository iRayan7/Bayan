import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {DrawerActions} from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import LanguageDrawer from './LanguageDrawer'

import Languages from '../assets/languages/languages'

export default class DrawerVolunteer extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <ScrollView style={{ flex:1}}>
                    <View style={Styles.profile}>
                        {/*<View style={Styles.profilePic}>*/}
                        <Image
                            source={require('../assets/user.jpeg')}
                            style={{width: 60, height: 60, borderRadius: 31}}
                        />
                        {/*</View>*/}
                        <View style={Styles.profileText}>
                            <Text style={{
                                fontSize: 24, fontWeight: 'bold', color: '#515152', fontFamily: 'ubuntu'
                            }}>Khaled Abdullah</Text>
                            <Text style={{
                                fontSize: 17, color: '#515152', fontFamily: 'ubuntu'
                            }}>Translator</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 30, marginBottom: 10, color: '#515152', marginBottom: 10, fontWeight: 'bold' }}>Languages You Speak:</Text>

                    {Languages.map( (lang) => {
                        return <LanguageDrawer name={lang.name} native={lang.native} flag={lang.flag} key={lang.flag}/>
                    })}
                </ScrollView>
                <TouchableOpacity
                    style={{ position: 'absolute', bottom: 15, right: 15, flexDirection: 'row', backgroundColor: '#dddddd', padding: 4 }}
                    onPress={() => {
                        this.props.navigation.navigate('loginStack')
                    }}
                >
                    <MaterialCommunityIcons name='logout' style={{marginRight: 5, color: 'red'}}/>
                    <Text style={{ color: 'red' }}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const Styles = {
    profile: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    profileText: {
        marginLeft: 20,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 30,

    }
}
