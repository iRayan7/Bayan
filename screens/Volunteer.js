import React, {Component} from 'react';
import {View, Text, FlatList, ImageBackground, TouchableOpacity, Image} from 'react-native';

import {LinearGradient} from 'expo';

import {Ionicons, Entypo, Feather} from '@expo/vector-icons';

export default class Volunteer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOnline: true,
        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={Styles.container}>
                <View style={
                    {
                        flex: 1,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        width: '100%',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '45%'
                    }
                }>

                    <Text style={
                        {
                            color: '#bcbcbc',
                            fontFamily: 'ubuntu'
                        }
                    }>Choose language preferences..</Text>
                    <LinearGradient
                        colors={['#21b470', '#059ebd']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={
                            {
                                height: 50,
                                width: 225,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                marginVertical: 10,

                            }
                        }

                    >
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={() => this.setState({isOnline: !this.state.isOnline})}

                        >

                            {this.state.isOnline
                                ? <Feather name='x-circle' size={26} style={{marginRight: 10, color: '#d13739'}}/>
                                : <Entypo name='arrow-with-circle-right' size={26}
                                          style={{marginRight: 10, color: '#5cad5e'}}/>
                            }
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: '#0a98c2',
                                fontFamily: 'ubuntu'
                            }}>GO {this.state.isOnline ? 'OFFLINE' : 'ONLINE'}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <Text style={
                        {
                            color: '#bcbcbc', fontFamily: 'ubuntu'
                        }
                    }>Status:
                        {this.state.isOnline
                            ? <Text style={{
                                color: '#5cad5e', fontWeight: 'bold', fontFamily: 'ubuntu'
                            }}>ONLINE</Text>
                            : <Text style={{
                                color: '#d13739', fontWeight: 'bold', fontFamily: 'ubuntu'
                            }}>OFFLINE</Text>
                        }
                    </Text>

                </View>

            </ImageBackground>
        )
    }
}

const Styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 30,
    },
    button: {
        width: 220,
        height: 45,
        borderRadius: 13.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',

    }
}