import React, {Component} from 'react';
import {View, Text, FlatList, ImageBackground, TouchableOpacity, Image} from 'react-native';

import {Ionicons, Entypo} from '@expo/vector-icons';

import LanguageItem from '../components/LanguageItem'

import {SearchBar} from 'react-native-elements'


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
        return data.filter(({name}) => {
            if (name.trim().toLowerCase().includes(this.state.searchFieldText.toLowerCase()))
                return true
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            searchFieldText: ''
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
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }>
                    <SearchBar
                        onChangeText={(text) => this.setState({searchFieldText: text})}
                        onClear={() => this.setState({searchFieldText: ''})}
                        placeholder='Search for a language...'
                        platform="ios"

                    />
                    <FlatList
                        data={this.searchedData()}
                        renderItem={({name, flag}) => <LanguageItem name={'nnnn'} flag={flag}/>}
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={{paddingVertical: 40}}
                        showsVerticalScrollIndicator={false}
                    />

                    {/*<LanguageItem />*/}

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
    }
}