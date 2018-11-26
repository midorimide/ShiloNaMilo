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

const Drawer = createDrawerNavigator(
  {
    services: ServicesContainer
  },
  {
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'ShiloNaMilo',
      headerTintColor: 'white',
      headerLeft: <Ionicons style={{marginLeft:12}} name='ios-menu' color='white' size={32} onPress={()=>{
        navigation.dispatch(DrawerActions.toggleDrawer())}}/>
    })
  }
)

const ModalStack = createStackNavigator(
  {
    serviceInfo: ServiceInfoContainer
  },
  {
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'ShiloNaMilo',
      headerTintColor: 'white'
    })
  }
)

const AppStack = createStackNavigator(
  {
    drawer: Drawer,
    modal: ModalStack
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