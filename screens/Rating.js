import React, {Component} from 'react';
import {
    View, Text, FlatList, ImageBackground,
    TouchableWithoutFeedback, TouchableOpacity, Image, TextInput, ScrollView
} from 'react-native';
import {LinearGradient} from 'expo';


import {Ionicons, Entypo, Feather, EvilIcons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default class Rating extends Component {

    static navigationOptions = () => {
        return {
            headerTitle: <Image source={require('../assets/logo@2.png')} style={{width: 50, height: 36}}/>,

        }


    };

    constructor(props) {
        super(props)

        this.state = {
            reason: 'none',
            otherText: ''
        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={Styles.container}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    width: '100%',


                }}>

                    <ScrollView style={
                        {
                            flex: 1,
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            paddingTop: '25%'
                        }
                    }>
                        <MaterialCommunityIcons name='check-circle' size={100} style={{color: '#5cad5e', alignSelf: 'center'}}/>
                        <Text
                            style={{
                                paddingTop: 10,
                                paddingBottom: 5,
                                fontSize: 24,
                                fontFamily: 'ubuntu',
                                color: '#2FBF82'
                            }}
                        >Thanks For Your Help!</Text>

                        <Text
                        style={{
                            fontFamily: 'ubuntu',
                            color: '#515151',
                            textAlign: 'center',
                            paddingBottom: 10
                        }}
                        >
                        What was the call about?
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            width: '70%'
                        }}>

                            {/*<View style={{marginTop: 0}}>*/}

                            {/*<MaterialIcons*/}
                            {/*name={this.state.reason === 'lost' ? 'radio-button-checked' : 'radio-button-unchecked'}*/}
                            {/*size={30}*/}
                            {/*color={'#515152'}*/}
                            {/*style={{marginBottom: 5}}*/}
                            {/*/>*/}
                            {/*<MaterialIcons*/}
                            {/*name={this.state.reason === 'health' ? 'radio-button-checked' : 'radio-button-unchecked'}*/}
                            {/*size={30}*/}
                            {/*color={'#515152'}*/}
                            {/*style={{marginBottom: 7}}*/}

                            {/*/>*/}
                            {/*<MaterialIcons*/}
                            {/*name={this.state.reason === 'other' ? 'radio-button-checked' : 'radio-button-unchecked'}*/}
                            {/*size={30}*/}
                            {/*color={'#515152'}*/}
                            {/*style={{marginBottom: 0}}*/}

                            {/*/>*/}

                            {/*</View>*/}

                            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>

                                <TouchableOpacity
                                    onPress={() => this.setState({reason: 'lost'})}
                                    style={{
                                        flexDirection: 'row',
                                        borderLeftWidth: 0,
                                        borderColor: '#515152',
                                        paddingLeft: 3,
                                        marginBottom: 7
                                    }}
                                >
                                    <MaterialIcons
                                        name={this.state.reason === 'lost' ? 'radio-button-checked' : 'radio-button-unchecked'}
                                        size={22}
                                        color={'#515152'}
                                        style={{marginBottom: 5, marginRight: 5}}
                                    />
                                    <Text style={
                                        {
                                            fontSize: 18,
                                            color: '#515152',
                                            fontWeight: this.state.reason === 'lost' ? 'bold' : 'normal',
                                        }
                                    }>Lost</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({reason: 'guideness'})}
                                    style={{
                                        flexDirection: 'row',
                                        borderLeftWidth: 0,
                                        borderColor: '#515152',
                                        paddingLeft: 3,
                                        marginBottom: 7
                                    }}

                                >
                                    <MaterialIcons
                                        name={this.state.reason === 'guideness' ? 'radio-button-checked' : 'radio-button-unchecked'}
                                        size={22}
                                        color={'#515152'}
                                        style={{marginBottom: 7, marginRight: 5}}

                                    />
                                    <Text style={
                                        {
                                            fontSize: 18,
                                            color: '#515152',
                                            fontWeight: this.state.reason === 'guideness' ? 'bold' : 'normal'
                                        }
                                    }>Guideness</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({reason: 'other'})}
                                    style={{
                                        flexDirection: 'row',
                                        borderLeftWidth: 0,
                                        borderColor: '#515152',
                                        paddingLeft: 3,
                                        marginBottom: 7
                                    }}

                                >
                                    <MaterialIcons
                                        name={this.state.reason === 'other' ? 'radio-button-checked' : 'radio-button-unchecked'}
                                        size={22}
                                        color={'#515152'}
                                        style={{marginBottom: 0, marginRight: 5}}

                                    />
                                    <Text style={
                                        {
                                            fontSize: 18,
                                            color: '#515152',
                                            fontWeight: this.state.reason === 'other' ? 'bold' : 'normal',
                                            marginRight: 10,
                                        }
                                    }>Other..</Text>

                                    {
                                        this.state.reason === 'other'
                                            ?
                                            <View style={
                                                {
                                                    height: 30,
                                                    borderColor: 'gray',
                                                    borderWidth: 1,
                                                    width: 150,
                                                    backgroundColor: 'rgba(200,200,200,0.4)',


                                                }
                                            }>

                                                <TextInput
                                                    style={
                                                        {
                                                            flex: 1,
                                                            paddingHorizontal: 3,
                                                        }
                                                    }
                                                    onChangeText={(text) => this.setState({otherText: text})}
                                                    value={this.state.otherText}
                                                /> l


                                            </View>
                                            : null}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                        <LinearGradient
                            colors={['#21b470', '#059ebd']}
                            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                            style={
                                {
                                    height: 50,
                                    width: 185,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 15,
                                    marginVertical: 10,

                                }
                            }

                        >
                            <TouchableOpacity
                                style={Styles.button}
                                onPress={() => this.props.navigation.navigate('DrawerNavigator')}
                            >
                                <MaterialCommunityIcons name='login-variant' size={26} style={{marginRight: 10, color: '#5cad5e'}}/>
                                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0a98c2'}}>SUBMIT</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        </View>
                    </ScrollView>
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
        width: 180,
        height: 45,
        borderRadius: 13.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
    }
}
