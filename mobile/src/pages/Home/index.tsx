import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import Profile from "../Profile";
export default function Home(){
    return (
        <SafeAreaView style={style.body}>
        <Text style={style.text}>Home</Text>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    body: {
        height: "100%",
        width: "100%",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:50,
        fontWeight:"500",
    }
})