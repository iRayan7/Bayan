import React, {Component} from 'react';
import {View, Text, FlatList, ImageBackground, TouchableOpacity, Image} from 'react-native';

import {Ionicons, Entypo} from '@expo/vector-icons';

import LanguageItem from '../components/LanguageItem'

import {SearchBar} from 'react-native-elements'

import AwesomeAlert from 'react-native-awesome-alerts'

import Languages from '../assets/languages/languages'

const data = [
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '1'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '2'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '3'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '4'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '5'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '6'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '7'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '8'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '9'
    },
    {
        name: 'Arabic / عربي',
        flag: 'ar',
        key: '10'
    }
]
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
        console.log(Languages)
        return Languages.filter(({name}) => {
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
            langs: []

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
                        // onChangeText={(text) => this.setState({searchFieldText: text})}
                        onChangeText={(text) => console.log(this.state.langs)}
                        onClear={() => this.setState({searchFieldText: ''})}
                        placeholder='Search for a language...'
                        platform="ios"

                    />
                    <FlatList
                        data={this.searchedData()}
                        renderItem={

                            ({item}) => {
                                this.state.langs.push(item.flag);
                                return <LanguageItem
                                    name={item.name}
                                    flag={item.flag}
                                    native={item.native}
                                    onPress={() => this.setState({
                                        showAlert: true,
                                        loading: true,
                                        alertTitle: 'Looking for translator...'
                                    })}
                                />
                            }
                        }
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item) => item.flag}
                        contentContainerStyle={{paddingVertical: 40}}
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
    }
}