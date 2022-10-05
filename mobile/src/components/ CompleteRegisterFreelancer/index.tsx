import React, { useState } from "react";
import { StyleSheet,View, ScrollView,Text,Dimensions, Image,  } from "react-native";
import { LoginButton } from "../utils/LoginButton";

export const RegisterFreelancerComplete = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{`Com quais tipos de serviços você deseja trabalhar?`}</Text>
            <View style={styles.textArea}>
                <Text style={styles.text1}>Categorais</Text>
            </View>
            <View style={styles.textArea}>
                <Text style={styles.text1}>Sub-Categorais</Text>
            </View>
            <View style={styles.areaContainer2}>
                <LoginButton action={() => console.log("a")} type="dark" title="Continuar"/>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:"black",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        // backgroundColor: "#34f45f",
        alignItems:"center",
    },
    title: {
        marginHorizontal:20,
        height: Dimensions.get('window').height * 0.07,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
    },
    textArea:{
        width:"80%",
        backgroundColor:"black"
    },
    text1: {
        fontSize: Dimensions.get("window").width * 0.04,
        color: "#979797",
    },
    areaContainer1:{
        marginBottom:30,
    },
    areaContainer2:{
        marginBottom:15,
    }
})