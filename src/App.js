import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
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
