import { Component } from "react";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider} from 'react-redux';
import { Text } from "react-native";
import Root from './src/containers/Root'
import initStore from './src/store';
import logger from 'redux-logger';

const store = initStore();


export default class App extends Component {
  render(){
    return(
    <Provider store={store}>
      <Root />
    </Provider>
    );
  }
}