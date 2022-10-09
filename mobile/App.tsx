import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StartHome from './src/pages/StartHome';
import LoginPage from './src/pages/Login';

export default function App() {

  return (

    <View style={styles.container}>
        <LoginPage />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,

  },
});
