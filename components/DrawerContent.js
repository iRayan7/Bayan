import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import { DrawerActions } from 'react-navigation';

export default class DrawerScreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render () {
        return (
            <View style={{ flex: 1}}>
                <ScrollView style={{ flex:1}}>
                    <View style={Styles.profile}>
                        {/*<View style={Styles.profilePic}>*/}
                            <Image
                                source={require('../assets/user.jpeg')}
                                style={{ width: 60, height: 60, borderRadius: 31}}
                            />
                        {/*</View>*/}
                        <View style={Styles.profileText}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Osama Aloqaily</Text>
                            <Text style={{ fontSize: 17}}>Organizer</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 30, marginBottom: 10, }}>Languages</Text>
                    <TouchableOpacity
                        onPress={() => console.log('dddd')}
                        style={{ marginLeft: 5}}
                    >

                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                source={require('../assets/flags/ar.png')}
                                style={{width: 25, height: 25}}
                            />
                            <Text style={{marginLeft: 10, fontSize: 17}}>Arabic / عربي</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
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
        marginTop: 10,
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
