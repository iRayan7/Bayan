import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    const { email, password } = this.state
    return (
      <ImageBackground source={require('../assets/bg.jpg')} style={Styles.container}>
          <View style={
              {
                  flex: 1,
                  backgroundColor: 'rgba(255,255,255,0.94)',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
              }
          }>
          <Image
          style={{width: '75%', height: 200, marginTop: 100 }}
          source={require('../assets/logo.png')}
        />
          <View style={{ width: '80%', height: 500 }}>
          <TextField
            label='Email'
            value={''}
            autoCapitalize = 'none'
          />
          <TextField
            label='Password'
            value={''}
            autoCapitalize = 'none'
          />

          </View>
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
