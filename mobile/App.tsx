import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import TabNavigatorJorge from './src/components/'
import BarNavigator from './src/components/BarNavigator';
import MainStackNavigator from './src/components/StackComponent';
// import TabNavigator

export default function App() {

  return (
    <NavigationContainer >
      <BarNavigator/>
    </NavigationContainer>
  );

}