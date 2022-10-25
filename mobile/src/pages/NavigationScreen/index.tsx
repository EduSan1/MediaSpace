import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import Routes from "../../routes"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export const NavigationScreen = () => {

    return (
        <NavigationContainer independent={true}>
            <Routes />
        </NavigationContainer>
    )

} 