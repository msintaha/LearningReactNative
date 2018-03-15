import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import AppNavigation from './src/navigation';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAn_ZJ2L-QLOptTFAzI5Pms4mpbOgDP8Pk",
      authDomain: "ideapad-856f8.firebaseapp.com",
      databaseURL: "https://ideapad-856f8.firebaseio.com",
      projectId: "ideapad-856f8",
      storageBucket: "",
      messagingSenderId: "1065165377834"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
        <AppNavigation />
      </Provider>
    );
  }
}
