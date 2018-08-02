import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {LinearGradient} from 'expo';
import {Ionicons, MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import firebase from 'firebase';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    role: 'volunteer'
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDWQvWiXb305xOqg4HD89y8KLyos40Ymws",
      authDomain: "bayan-bffd3.firebaseapp.com",
      databaseURL: "https://bayan-bffd3.firebaseio.com",
      projectId: "bayan-bffd3",
      storageBucket: "bayan-bffd3.appspot.com",
      messagingSenderId: "365112610799"
    });
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
          <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
          <LinearGradient
              colors={['#21b470', '#059ebd']}
              start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
              style={
                  {
                      height: 50,
                      width: 185,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 15,
                      marginVertical: 10,

                  }
              }

          >
              <TouchableOpacity
                  style={Styles.button}
                  onPress={() => {
                    if (this.state.role === 'organizer')
                      this.props.navigation.navigate('mainStack')
                    else
                      this.props.navigation.navigate('volunteerStack')
                  }}
              >
                  <MaterialCommunityIcons name='login-variant' size={26} style={{marginRight: 10, color: '#5cad5e'}}/>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0a98c2'}}>LOGIN</Text>
              </TouchableOpacity>
          </LinearGradient>
          </View>


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
    },
    button: {
        width: 180,
        height: 45,
        borderRadius: 13.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
    }
}
