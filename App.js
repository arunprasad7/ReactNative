/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Login from './app/Components/Login'
import Home from './app/Components/Home'
import Main from './app/Components/Main'
import SignUp from './app/Components/SignUp';

/*import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component {
  render() {
    return(
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  MainScreen: {screen: Main},
  SignUpScreen: {screen: SignUp},
  LoginScreen: {screen: Login},
  HomeScreen: { screen: Home}
})
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/
