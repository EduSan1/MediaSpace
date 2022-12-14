import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, LogBox, SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
import { ProjectOwner } from './src/pages/ProjectOwner';
import Home from './src/pages/Home';
import { Project } from './src/pages/Project';
import Profile from './src/pages/Profile';
import Feed from './src/pages/Feed';
import Messages from './src/pages/Messages';
import { ListProject } from './src/pages/ListProject';
import WorkersAppliedPage from './src/pages/WorkersAppliedPage';
import TechnicalRequirementsFrelancer from './src/pages/TechnicalRequirementsFreelancer';
import WorkersSelectedPage from './src/pages/WorkersSelectedPage';
import EditUser from './src/pages/Profile/EditUser';
import ModalRequirements from './src/components/utils/ModalRequirements';
import ManagementProject from './src/pages/ManagementProject';
import FreelancerProfile from './src/pages/Profile/FreelancerView';

export default function App() {

  LogBox.ignoreAllLogs();

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} />
        <Stack.Screen name="SendMailPasswordRecover" component={SendMailPasswordRecoverPage} />
        <Stack.Screen name="CheckMail" component={CheckMailPage} />
        <Stack.Screen name="RegisterFreelancer" component={RegisterFreelancerPage} />
        <Stack.Screen name="RegisterFreelancerComplete" component={CompleteRegisterFreelancerPage} />
        <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
        <Stack.Screen name="RegisterProject" component={RegisterProject} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListProject" component={ListProject} />
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="FreelancerProfile" component={FreelancerProfile} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="ProjectOwner" component={ProjectOwner} />
        <Stack.Screen name='WorkersAppliedPage' component={WorkersAppliedPage} />
        <Stack.Screen name='WorkersSelectedPage' component={WorkersSelectedPage} />
        <Stack.Screen name='TechnicalRequirementsFrelancer' component={TechnicalRequirementsFrelancer} />
        <Stack.Screen name='EditUser' component={EditUser} />
        <Stack.Screen name='ManagementProject' component={ManagementProject} />
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
