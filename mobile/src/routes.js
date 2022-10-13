import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Messages from "./pages/Messages";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feed from "./pages/Feed";

const Tab = createBottomTabNavigator();
export default function Routes(){
    return(

        <Tab.Navigator
        tabBar={}={}>
            
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Project" component={Project}/>
        <Tab.Screen name="Messages" component={Messages}/>
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
    )

}