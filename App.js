import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {observable} from 'mobx';
import Counter from './src/counter.js';
import {Container, Content} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
        <Counter />
    );
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
