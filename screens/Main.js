import React, {Component} from 'react';
import {View, Text, FlatList, ImageBackground, TouchableOpacity, Image} from 'react-native';

import { Ionicons, Entypo } from '@expo/vector-icons';

import LanguageItem from '../components/LanguageItem'


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

    static navigationOptions = () => {
        return {
            headerTitle: <Image source={require('../assets/logo@2.png')} style={{width: 50, height: 36}} />,

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
                    onPress={() => console.log('dd')}
                    hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                >
                    <Ionicons name={'ios-menu'} size={30} color={'#2FBF82'}/>
                </TouchableOpacity>
            ),
        }


    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 30,
                    width: "100%",
                }}
            />
        );
    };

    constructor(props) {
        super(props);
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
                    <FlatList
                        data={data}
                        renderItem={(item) => <LanguageItem name={item.name} flag={item.flag}/>}
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