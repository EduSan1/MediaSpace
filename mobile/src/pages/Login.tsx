import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WavyBackground from "react-native-wavy-background";

import { ForgetPassword } from "../components/ForgetPassword";
import { Login } from "../components/Login";
export default function LoginPage() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height">
            <ScrollView style={styles.containerScroll}>
            <View style={styles.header}>
                <LinearGradient style={styles.section} colors={['#1A2369', '#505BB0']}>
                    <Image style={styles.icon} source={require("../../assets/icons/MediaSpaceLogoWhite.png")} />
                </LinearGradient>

                <WavyBackground
                    bottom={false}
                    height={100}
                    width={100}
                    amplitude={15}
                    frequency={12}
                    offset={20}
                    color="#505BB0"
                />
            </View>

            <View style={styles.container}>
                {/* <ForgetPassword/> */}
                <Text style={styles.title}>Entre em sua conta</Text>
                <Login />
            </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    section: {
        height: "80%",
        width: "100%",
        backgroundColor: '#7FF5FF',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    icon: {
        width: 140,
        height: 140,
    },
    header: {
        width: "100%",
        height: "55%",
        marginBottom: 20
    },
    container: {
        width: "100%",
        height: 500,
        display: "flex",
        paddingTop: 20,
        position: "relative",
        alignContent: "center",
        justifyContent: "flex-start",
        alignItems: "center"
        
    },
    containerScroll: {
        width: "100%",
        height: 500,
        display: "flex",
        paddingTop: 20,
        position: "relative",
        alignContent: "center",

    },
    title: {
        width: "100%",
        height: "10%",
        textAlign: "center",
        fontSize: 22,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
    },
})