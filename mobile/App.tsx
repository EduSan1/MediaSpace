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

export default function App() {

  function StackNavigation(){
  
    const Stack = createNativeStackNavigator();
    
    return(
      <NavigationContainer >
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
              <Stack.Screen  name="Login"                        component={LoginPage}/>
              <Stack.Screen name="Register"                     component={RegisterPage}/>
              <Stack.Screen name="ForgetPassword"                     component={ForgetPasswordPage}/>
              <Stack.Screen name="SendMailPasswordRecover"                     component={SendMailPasswordRecoverPage}/>
              <Stack.Screen name="CheckMail"                     component={CheckMailPage}/>
              {/* <Stack.Screen name="RegisterFreelancer"           component={RegisterFreelancer}/>
              <Stack.Screen name="RegisterFreelancerComplete"   component={RegisterFreelancerComplete}/>  */}
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (

    <View style={styles.container}>
        <StackNavigation />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,

  },
});
