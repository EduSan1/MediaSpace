import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button, Pressable } from "react-native";


interface ITabBar {
    action: () => void
    type: "light" | "dark"
    Home: boolean
    Feed: boolean
    Project: boolean
    Messages: boolean
    Profile: boolean
    navigation:any
}


export default function TabBar({navigation:any}:ITabBar){
    return(
        <View style={styles.bar}>
            <View style={styles.sectionBar}>

            <Pressable>
                <Image source={require('../../../../assets/icons/homeIcon.png')}
                                style={{
                                    width:30,
                                    height:30}}/>
            </Pressable>
            <Pressable>
                <Image source={require('../../../../assets/icons/graphicsIcon.png')}
                                style={{
                                    width:25,
                                    height:20}}/>
            </Pressable>
            <Pressable>
                <Image source={require('../../../../assets/icons/feedIcon.png')}
                                style={{
                                    width:30,
                                    height:30}}/>
            </Pressable>
            <Pressable>
                <Image source={require('../../../../assets/icons/ChatIcon.png')}
                                style={{
                                    width:30,
                                    height:30}}/>
            </Pressable>
            <Pressable>
                <Image source={require('../../../../assets/icons/profileIcon.png')}
                                style={{
                                    width:30,
                                    height:30}}/>
            </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bar:{
        position:'absolute',
        borderTopStartRadius:21,
        borderTopEndRadius:21,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        backgroundColor:"#fff",
        marginTop:Dimensions.get('window').height * 0.98,
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
    }
})