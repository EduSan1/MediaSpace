import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button, Pressable } from "react-native";


// interface ITabBar {
//     action: () => void
//     type: "Unselected" | "Selected"
//     Home: boolean
//     Feed: boolean
//     Project: boolean
//     Messages: boolean
//     Profile: boolean
//     navigation:any
// }


interface ITabBar {
    navigateTo : (screen : string) => void
    currentScreen : string
}

export default function TabBar({navigateTo, currentScreen} : ITabBar){
    return(
        <View style={styles.bar}>
            <View  style={styles.sectionBar}>

            <Pressable onPress={() => currentScreen === "Home" ? null : navigateTo("Home")}>
                <Image source={require('../../../../assets/icons/homeIcon.png')}
                                style={currentScreen === "Home" ? styles.iconSelected : styles.icon}/>
            </Pressable>
            <Pressable onPress={() => currentScreen === "ListProject" ? null :navigateTo("ListProject")}>
                <Image source={require('../../../../assets/icons/graphicsIcon.png')}
                                style={currentScreen === "ListProject" ? styles.iconProjectSelected : styles.iconProject}/>
            </Pressable>
            <Pressable onPress={() => currentScreen === "Feed" ? null :navigateTo("Feed")}>
                <Image source={require('../../../../assets/icons/feedIcon.png')}
                                style={currentScreen === "Feed" ? styles.iconSelected : styles.icon}/>
            </Pressable>
            <Pressable onPress={() => currentScreen === "Messages" ? null :navigateTo("Messages")}>
                <Image source={require('../../../../assets/icons/ChatIcon.png')}
                                 style={currentScreen === "Messages" ? styles.iconSelected : styles.icon}/>
            </Pressable>
            <Pressable onPress={() => currentScreen === "Profile" ? null :navigateTo("Profile")}>
                <Image source={require('../../../../assets/icons/profileIcon.png')}
                                  style={currentScreen === "Profile" ? styles.iconSelected : styles.icon}/>
            </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bar:{
        position:'absolute',
        zIndex: 1,
        borderTopStartRadius:21,
        borderTopEndRadius:21,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        marginTop:Dimensions.get('window').height * 0.93,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    sectionBar:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.05,
        // backgroundColor:"green",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        marginBottom:Dimensions.get('window').height * 0.03,
    },
    icon : {
        width:30,
        height:30,
        tintColor:"#C6D2FF",
    },
    iconSelected:{
        width:30,
        height:30,
        tintColor:"#75A5FF"
    },
    iconProject:{
        width:25,
        height:20,
    },
    iconProjectSelected:{
        width:25,
        height:20,
        tintColor:"#75A5FF"
    },
})