import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import ServicesContainer from './features/services';
import { configureStore } from './Store';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions } from 'react-navigation'
import ServiceInfoContainer from './features/serviceInfo';
import { Ionicons } from '@expo/vector-icons'

const DrawerStack = createDrawerNavigator(
  {
    services: ServicesContainer
  }
)

const ModalStack = createStackNavigator(
  {
    serviceInfo: ServiceInfoContainer
  },
  {
    headerMode: 'screen',
    navigationOptions: () => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'About this service',
      headerTintColor: 'white'
    })
  }
)

const AppStack = createStackNavigator(
  {
    drawer: DrawerStack,
    modal: ModalStack
  },
  {
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'ShiloNaMilo',
      headerTintColor: 'white',
      headerLeft: <Ionicons name='menu' color='white' size={32} onPress={()=>{
        navigation.dispatch(DrawerActions.toggleDrawer())}}/>
    })
  }
)

const AppContainer = createAppContainer(AppStack)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppContainer/>
      </Provider>
    );
  }
}