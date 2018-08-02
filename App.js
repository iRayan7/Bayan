import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Font} from 'expo'

import Root from './components/Root'

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'ubuntu':  require('./assets/fonts/Ubuntu-Regular.ttf'),
        });
        this.setState({fontLoaded: true});
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <Root/>
            );
        }
        return null;

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
