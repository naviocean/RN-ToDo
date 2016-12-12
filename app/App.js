/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { configurateStore } from './store';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <Provider store={configurateStore()}>
        <Main />
      </Provider>
    );
  }
}
 // module.exports = App;
export default App;
