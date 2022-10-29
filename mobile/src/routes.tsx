// import React from "react";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Project from "./pages/Project";
// import Messages from "./pages/Messages";
// import TechnicalRequirements from "./pages/TechnicalRequirements";
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Feed from "./pages/Feed";
// import {View, StyleSheet, Image, } from "react-native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { RegisterProject } from "./pages/RegisterProject";
// import TechnicalRequirementsFrelancer from "./pages/TechnicalRequirementsFreelancer";
// import WorkersAppliedPage from "./pages/WorkersAppliedPage";
// import WorkersSelectedPage from "./pages/WorkersSelectedPage";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// export default function Routes(){
//     return(
//         <Tab.Navigator
//         screenOptions={{
//         tabBarStyle:{
//             position:'absolute',
//             borderTopStartRadius:21,
//             borderTopEndRadius:21,
//             height:50,
//         },
//         headerShown:false,
//         tabBarShowLabel:false,
//         tabBarInactiveTintColor:"#360069", 
//     }}>
//         <Tab.Screen name="Home" component={Home} 
//         options={{ tabBarIcon:({focused}) =>(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//                 <Image source={require('../assets/icons/homeIcon.png')}
//                 resizeMode="contain"
//                 style={{
//                     width:30,
//                     height:30,
//                     tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
//             </View>
//                 )
//             }
//         }/>

//         <Tab.Screen name="Project" component={Project}
//         options={{ tabBarIcon:({focused}) =>(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//                 <Image source={require('../assets/icons/graphicsIon.png')}
//                 resizeMode="contain"c
//                 style={{
//                     width:25,
//                     height:25,
//                     tintColor: focused ? '#75A5FF' : '#C6D2FF',
//                     marginBottom:7}}/>
//             </View>
//                 )
//             }
//         }/>
//         {/* <Tab.Screen name="RegisterProject" component={RegisterProject}
//         options={{tabBarStyle:{display:"none"}
//         }}/> */}

//         <Tab.Screen name="Feed" component={Feed}
//         options={{ tabBarIcon:({focused}) =>(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//                 <Image source={require('../assets/icons/feedIcon.png')}
//                 resizeMode="contain"
//                 style={{
//                     width:30,
//                     height:30,
//                     tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
//             </View>
//                 )
//             }
//         }/>

//         <Tab.Screen name="Messages" component={Messages}
//         options={{ tabBarIcon:({focused}) =>(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//                 <Image source={require('../assets/icons/ChatIcon.png')}
//                 resizeMode="contain"
//                 style={{
//                     width:40,
//                     height:30,
//                     tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
//             </View>
//                 )

//             }
//         }/>

//         <Tab.Screen name="Profile" component={Profile}
//         options={{ tabBarIcon:({focused}) =>(
//             <View style={{alignItems:"center",justifyContent:"center"}}>
//                 <Image source={require('../assets/icons/profileIcon.png')}
//                 resizeMode="contain"
//                 style={{
//                     width:30,
//                     height:30,
//                     tintColor: focused ? '#75A5FF' : '#C6D2FF'}}/>
//             </View>
//                 )
                
//             }
//         }/>
//         <Tab.Screen name="cwnfopwe" component={WorkersSelectedPage}/>
//     </Tab.Navigator>
  
//     )
// }
