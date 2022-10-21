import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import Routes from "../../routes"

export const NavigationScreen = () => {

    return (
        <NavigationContainer independent={true}>
            <Routes />
        </NavigationContainer>
    )

} 