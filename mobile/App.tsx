import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StartHome from './src/pages/StartHome';
import LoginPage from './src/pages/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterPage from './src/pages/ResgisterPage';
import ForgetPasswordPage from './src/pages/ForgetPasswordPage';
import SendMailPasswordRecoverPage from './src/pages/SendMailPasswordRecoverPage';
import CheckMailPage from './src/pages/CheckMailPage';
import CompleteRegisterFreelancerPage from './src/pages/CompleteRegisterFreelancer';
import RegisterFreelancerPage from './src/pages/RegisterFreelancerPage';
import { RegisterProject } from './src/pages/RegisterProject';
import { NavigationScreen } from './src/pages/NavigationScreen';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} />
          <Stack.Screen name="SendMailPasswordRecover" component={SendMailPasswordRecoverPage} />
          <Stack.Screen name="CheckMail" component={CheckMailPage} />
          <Stack.Screen name="RegisterFreelancer" component={RegisterFreelancerPage} />
          <Stack.Screen name="RegisterFreelancerComplete" component={CompleteRegisterFreelancerPage} />
          <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
          <Stack.Screen name="RegisterProject" component={RegisterProject} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,

  },
});
