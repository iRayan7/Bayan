import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'

import { EvilIcons} from '@expo/vector-icons';


let flags = {
    sign: require('../assets/flags/128x128/sign.png'),
    sa: require('../assets/flags/128x128/sa.png'),
    us: require('../assets/flags/128x128/us.png'),
    af: require('../assets/flags/128x128/af.png'),
    pk: require('../assets/flags/128x128/pk.png'),
    id: require('../assets/flags/128x128/id.png'),
    bd: require('../assets/flags/128x128/bd.png'),
    ir: require('../assets/flags/128x128/ir.png'),
    tr: require('../assets/flags/128x128/tr.png'),
    uz: require('../assets/flags/128x128/uz.png'),
    sa: require('../assets/flags/128x128/sa.png'),
    af: require('../assets/flags/128x128/af.png'),
    pk: require('../assets/flags/128x128/pk.png'),
    id: require('../assets/flags/128x128/id.png'),
    bd: require('../assets/flags/128x128/bd.png'),
    ir: require('../assets/flags/128x128/ir.png'),
    tr: require('../assets/flags/128x128/tr.png'),
    uz: require('../assets/flags/128x128/uz.png'),
    kz: require('../assets/flags/128x128/kz.png'),
    fr: require('../assets/flags/128x128/fr.png'),
    es: require('../assets/flags/128x128/es.png'),
    az: require('../assets/flags/128x128/az.png'),
    tj: require('../assets/flags/128x128/tj.png'),
    kg: require('../assets/flags/128x128/kg.png'),
    ru: require('../assets/flags/128x128/ru.png'),
    tm: require('../assets/flags/128x128/tm.png'),
    al: require('../assets/flags/128x128/al.png'),
    rs: require('../assets/flags/128x128/rs.png'),
    ba: require('../assets/flags/128x128/ba.png'),
    sa: require('../assets/flags/128x128/sa.png'),
    af: require('../assets/flags/128x128/af.png'),
    pk: require('../assets/flags/128x128/pk.png'),
    id: require('../assets/flags/128x128/id.png'),
    bd: require('../assets/flags/128x128/bd.png'),
    ir: require('../assets/flags/128x128/ir.png'),
    tr: require('../assets/flags/128x128/tr.png'),
    uz: require('../assets/flags/128x128/uz.png'),
    fr: require('../assets/flags/128x128/fr.png'),
    az: require('../assets/flags/128x128/az.png'),
    tj: require('../assets/flags/128x128/tj.png'),
    kg: require('../assets/flags/128x128/kg.png'),
    ru: require('../assets/flags/128x128/ru.png'),
    tm: require('../assets/flags/128x128/tm.png'),
    al: require('../assets/flags/128x128/al.png'),
    rs: require('../assets/flags/128x128/rs.png'),
    ba: require('../assets/flags/128x128/ba.png'),
    hr: require('../assets/flags/128x128/hr.png'),
}

export default class LanguageDrawer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: false,
        }
    }


    render() {

        const flag = flags[this.props.flag];

        return (
            <TouchableOpacity
                onPress={() => this.setState({checked: !this.state.checked})}
                style={{ marginLeft: 20, marginBottom: 7}}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={flag}
                        style={{width: 25, height: 25}}
                    />
                    <Text style={
                        {
                            marginLeft: 10,
                            fontSize: 17,
                            fontWeight: this.state.checked? 'bold' : 'normal',
                            fontFamily: 'ubuntu',
                            color: '#515152'
                        }
                    }>{this.props.name} / {this.props.native}</Text>
                    {this.state.checked? <EvilIcons name={'check'} size={27} color={'#515152'}/> : null}
                </View>
            </TouchableOpacity>
        )
    }
}
