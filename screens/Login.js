import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {LinearGradient} from 'expo';
import {Ionicons, MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import firebase from 'firebase';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    showAlert: false,
    errorAuth: false
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

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  onLoginClick() {
    this.showAlert()
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => this.onLoginSuccess.call(this, user))
    .catch((e) => {
      this.showError();
    });
  }

  showError() {
    this.setState({ errorAuth: true, showAlert: false })
  }

  onLoginSuccess(user) {
    this.hideAlert()
    let role = 'volunteer'
    firebase.database().ref('users/organizers/').once('value', (snapshot) => {
        organizersUIDs = snapshot.val()
        for (let id in organizersUIDs) {
          console.log(organizersUIDs[id], user.user.uid);
          if (organizersUIDs[id] == user.user.uid) {
            console.log('org');
            role = 'organizer'
          }
        }
        console.log(role);
        if (role === 'organizer') {
          this.props.navigation.navigate('mainStack')
        } else {
          this.props.navigation.navigate('volunteerStack')
        }
    });
  }

  render() {
    const { email, password, showAlert, errorAuth } = this.state
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
          {
            this.state.errorAuth ? <Text style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}> Could Not Sign In</Text> : null
          }
          <View style={{ width: '80%', height: 500 }}>
          <TextField
            label='Email'
            value={email}
            autoCapitalize = 'none'
            onChangeText={(email) => this.setState({ email })}
          />
          <TextField
            label='Password'
            value={password}
            onChangeText={(password) => this.setState({ password })}
            autoCapitalize = 'none'
            secureTextEntry
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
                  onPress={() => this.onLoginClick()}
              >
                  <MaterialCommunityIcons name='login-variant' size={26} style={{marginRight: 10, color: '#5cad5e'}}/>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0a98c2'}}>LOGIN</Text>
              </TouchableOpacity>
          </LinearGradient>
          </View>


          </View>
          </View>
          <AwesomeAlert
            show={showAlert}
            showProgress
            title='Loading'
            message='Please Wait...'
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={false}
          />
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
