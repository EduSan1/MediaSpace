import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StartHome from './src/pages/StartHome';
import LoginPage from './src/pages/Login';
import { Login } from "./src/components/Login";
import { Register } from "./src/components/Register";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" 
                        //screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Login"    component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <LoginPage />
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,

  },
});
