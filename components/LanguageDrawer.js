import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'

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
        )
    }
}