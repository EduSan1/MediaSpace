import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView } from "react-native";

export default function Feed(){
    return (
        <SafeAreaView style={style.body}>
        <Text style={style.text}>Feed</Text>
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