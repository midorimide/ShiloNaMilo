import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import ServicesContainer from './features/services';
import { configureStore } from './Store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <ServicesContainer/>
      </Provider>
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
