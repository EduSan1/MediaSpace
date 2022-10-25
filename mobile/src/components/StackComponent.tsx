import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from "../pages/Home";
import Project from '../pages/Project';
import Feed from '../pages/Feed';
import Messages from '../pages/Messages';
import Profile from '../pages/Profile';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/ResgisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import SendMailPasswordRecoverPage from '../pages/SendMailPasswordRecoverPage';
import CheckMailPage from '../pages/CheckMailPage';
import CompleteRegisterFreelancerPage from '../pages/CompleteRegisterFreelancer';
import RegisterFreelancerPage from '../pages/RegisterFreelancerPage';
import { RegisterProject } from '../pages/RegisterProject';
import { NavigationScreen } from '../pages/NavigationScreen';

const Stack = createNativeStackNavigator();
export default function MainStackNavigator() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} />
        <Stack.Screen name="SendMailPasswordRecover" component={SendMailPasswordRecoverPage} />
        <Stack.Screen name="CheckMail" component={CheckMailPage} />
        <Stack.Screen name="RegisterFreelancer" component={RegisterFreelancerPage} />
        <Stack.Screen name="RegisterFreelancerComplete" component={CompleteRegisterFreelancerPage} />
        <Stack.Screen name="RegisterProject" component={RegisterProject} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Project" component={Project}/>
        <Stack.Screen name="Messages" component={Messages}/>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="NavigationScreen" component={NavigationScreen} />

      </Stack.Navigator>
    )
}