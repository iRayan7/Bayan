import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ImageBackground
} from 'react-native';

var {height, width} = Dimensions.get('window');


let flags = {
    ar: require('../assets/flags/128x128/ar.png'),
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

export default class LanguageItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const flag = flags[this.props.flag];
        // const flag = this.props.flag;
        return (
            <View style={Styles.item}>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    style={{flex: 1, borderRadius: 51,}}
                    underlayColor={'rgba(150,150,150,0.7)'}
                >
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={Styles.imgView}>
                          <ImageBackground source={flag} style={Styles.img}>
                          </ImageBackground>
                        </View>
                        <Text style={Styles.title}>{this.props.name}</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const Styles = {
    item: {
        backgroundColor: 'rgba(202,202,202,0.5)',
        width: width * 0.85,
        borderRadius: 51,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
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
