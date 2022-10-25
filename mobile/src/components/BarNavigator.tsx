import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from './StackComponent';
import {View, StyleSheet, Image, } from "react-native";


const BarNavigator = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator 
        screenOptions={{
        tabBarStyle:{
            position:'absolute',
            borderTopStartRadius:21,
            borderTopEndRadius:21,
            height:50,
        },
        headerShown:false,
        tabBarShowLabel:false,
        tabBarInactiveTintColor:"#360069", 
    }}>
        <Tab.Screen name="Home" component={MainStackNavigator} 
        options={{ tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../../assets/icons/homeIcon.png')}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
            </View>
                )
            }
        }/>

        <Tab.Screen name="Project" component={MainStackNavigator}
        options={{ tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../../assets/icons/graphicsIcon.png')}
                resizeMode="contain"
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? '#75A5FF' : '#C6D2FF',
                    marginBottom:7}}/>
            </View>
                )
            }
        }/>
        <Tab.Screen name="Feed" component={MainStackNavigator}
        options={{ tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../../assets/icons/feedIcon.png')}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
            </View>
                )
            }
        }/>

        <Tab.Screen name="Messages" component={MainStackNavigator}
        options={{ tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../../assets/icons/ChatIcon.png')}
                resizeMode="contain"
                style={{
                    width:40,
                    height:30,
                    tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
            </View>
                )

            }
        }/>

        <Tab.Screen name="Profile" component={MainStackNavigator}
        options={{ tabBarIcon:({focused}) =>(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../../assets/icons/profileIcon.png')}
                resizeMode="contain"
                style={{
                    width:30,
                    height:30,
                    tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
            </View>
                )
                
            }
        }/>
        {/* <Tab.Screen name="cwnfopwe" component={WorkersAppliedPage}/> */}
    </Tab.Navigator>
    )
}

export default BarNavigator