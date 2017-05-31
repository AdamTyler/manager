import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    )
  }

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBoJm_oi01XY2hOyVs95u7Fe5Nqc6Vqvls',
      authDomain: 'manager-76277.firebaseapp.com',
      databaseURL: 'https://manager-76277.firebaseio.com',
      projectId: 'manager-76277',
      storageBucket: 'manager-76277.appspot.com',
      messagingSenderId: '40173311718'
    }
    firebase.initializeApp(config)
  }
}

export default App
