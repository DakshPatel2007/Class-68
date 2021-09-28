import React from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import TransactionScreen from './screens/Transaction';
import SearchScreen from './screens/search';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component {
  render(){
  return (

      <AppContainer/>

  );
}
}



const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: TransactionScreen},
  Search: {screen: SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)