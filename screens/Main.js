import React, {Component} from 'react';
import {View, Text, FlatList, ImageBackground, TouchableOpacity, Image, TouchableHighlight, Dimensions} from 'react-native';

import {Ionicons, Entypo} from '@expo/vector-icons';

import LanguageItem from '../components/LanguageItem'

import {SearchBar} from 'react-native-elements'

import AwesomeAlert from 'react-native-awesome-alerts'

import Languages from '../assets/languages/languages'
var {height, width} = Dimensions.get('window');


export default class Main extends Component {


    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 15,
                    width: "100%",
                }}
            />
        );
    };

    searchedData = () => {
        console.log('lkjfdhksjhfjhkfjhsd',Languages)
        return Languages.filter(({name}) => {
            console.log(name)
            if (name.trim().toLowerCase().includes(this.state.searchFieldText.toLowerCase()))
                return true
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            searchFieldText: '',

            showAlert: false,
            loading: false,
            alertTitle: '',

        }
    }


    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };


    renderAwesomeAlert() {
        return (
            <AwesomeAlert
                show={this.state.showAlert}
                showProgress={this.state.loading}
                title={this.state.alertTitle}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText="Cancel"
                confirmText="Cancel"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    this.hideAlert();
                }}
                onConfirmPressed={() => {
                    this.hideAlert();
                }}
            />
        )
    }

    languagePressed() {


        var thiz = this;
        setTimeout(function () {

            thiz.setState({
                showAlert: true,
                loading: true,
                alertTitle: 'Looking for translator...'
            })

            setTimeout(function () {

                thiz.hideAlert()
                thiz.props.navigation.navigate('VideoOrgnizerStack');

            }, 3000)


        }, 100);

    }

    render() {
        console.log(Languages)
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={Styles.container}>
                <View style={
                    {
                        flex: 1,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }>
                    <SearchBar
                        onChangeText={(text) => this.setState({searchFieldText: text})}
                        // onChangeText={(text) => console.log(this.state.langs)}
                        onClear={() => this.setState({searchFieldText: ''})}
                        placeholder='Search for a language...'
                        platform="ios"

                    />

                    <View style={Styles.item}>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('mainSignStack')}
                            style={{flex: 1, borderRadius: 51,}}
                            underlayColor={'rgba(150,150,150,0.7)'}
                        >
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={Styles.imgView}>
                                  <ImageBackground source={require('../assets/flags/128x128/sign.png')} style={Styles.img}>
                                  </ImageBackground>
                                </View>
                                <Text style={Styles.title}>Sign Languages</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                    <FlatList
                        data={this.searchedData()}
                        renderItem={

                            ({item}) => {
                                return <LanguageItem
                                    name={item.name}
                                    flag={item.flag}
                                    native={item.native}
                                    onPress={() => this.languagePressed()}
                                />
                            }
                        }
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item) => item.flag}
                        contentContainerStyle={{paddingBottom: 40, paddingTop: 5}}
                        showsVerticalScrollIndicator={false}
                    />
                    {/*<LanguageItem />*/}

                </View>

                {this.renderAwesomeAlert()}


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
    item: {
        backgroundColor: 'rgba(202,202,202,0.5)',
        width: width * 0.85,
        borderRadius: 51,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    img: {
        width: 80,
        height: 80,
        overflow: 'hidden',
        position: 'absolute',
        top: -12,
        left: -14
    },
    imgView: {
        width: 50,
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 50,
        backgroundColor: '#000',
        overflow: 'hidden',
        top: -5

    },
    title: {
        fontSize: 15,
        alignSelf: 'center',
        marginLeft: 20,
        fontFamily: 'ubuntu'
    }

}
