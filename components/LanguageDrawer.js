import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'

import { EvilIcons} from '@expo/vector-icons';

export default class LanguageDrawer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: false,
        }
    }


    render() {
        return (
            <TouchableOpacity
                onPress={() => this.setState({checked: !this.state.checked})}
                style={{ marginLeft: 20, marginBottom: 7}}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={require('../assets/flags/ar.png')}
                        style={{width: 25, height: 25}}
                    />
                    <Text style={
                        {
                            marginLeft: 10,
                            fontSize: 17,
                            fontWeight: this.state.checked? 'bold' : 'normal',
                            color: '#515152'
                        }
                    }>Arabic / عربي</Text>
                    {this.state.checked? <EvilIcons name={'check'} size={24} color={'#515152'}/> : null}
                </View>
            </TouchableOpacity>
        )
    }
}
