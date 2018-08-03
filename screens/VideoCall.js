import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';

import {Camera, Permissions, Video} from 'expo';


import {Ionicons} from '@expo/vector-icons';

var {height, width} = Dimensions.get('window');

export default class VideoCall extends Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
    };

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }


    render() {
        const {hasCameraPermission} = this.state;
        if (hasCameraPermission === null) {
            return <View/>;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.background}>
                        <Video
                            source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            style={{width: '100%', height: '100%',}}
                        />
                    </View>

                    {/*<View style={{flex: 1}}></View>*/}

                    <View style={styles.overlay}>
                        <View style={{flexDirection: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>


                                {/*<View style={{flexDirection: 'row', flex: 1}}>*/}
                                <Camera style={{width: '30%', height: '30%',}}
                                        type={this.state.type}>
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: 'transparent',
                                            flexDirection: 'row',
                                        }}>
                                    </View>
                                </Camera>
                        </View>
                        <View style={{ alignItems: 'center', alignSelf: 'center'}}>
                            <TouchableOpacity
                                onPress={() =>  this.props.navigation.navigate('RatingStack')}
                                style={
                                    {
                                        backgroundColor: 'red',
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40,
                                        marginBottom: 20,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }
                                }>
                                <Ionicons name="ios-call" size={40 } color={'#fff'} />
                            </TouchableOpacity>
                            {/*</View>*/}
                        </View>

                    </View>


                </View>
            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000',
    },
    backgroundViewWrapper: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop: 90,
    },
});