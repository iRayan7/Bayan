import React, {Component} from 'react';
import {View, TouchableOpacity, Dimensions, Image, Text, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class LanguageItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Styles.item}>
                <TouchableHighlight
                    onPress={() => console.log('djhkjdh')}
                    style={{ flex: 1, borderRadius: 51,}}
                    underlayColor={'rgba(150,150,150,0.7)'}
                >
                    <View style={{ flex:1, flexDirection: 'row'}}>
                        <Image source={require('../assets/flags/ar.png')} style={Styles.img}/>
                        <Text style={Styles.title}>Arabic / عربي</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const Styles = {
    item: {
        backgroundColor: 'rgba(202,202,202,0.7)',
        width: width * 0.85,
        borderRadius: 51,
        height: 70,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 70,
        height: 70,
        // alignSelf: 'flex-start',
        // marginLeft: 5,


    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        marginLeft: 20,
    }
}