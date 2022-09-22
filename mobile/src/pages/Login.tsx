import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WavyBackground from "react-native-wavy-background";

import { ForgetPassword } from "../components/ForgetPassword";
import { Login } from "../components/Login";
export default function LoginPage() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height">
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
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    section: {
        height: "90%",
        width: "100%",
        backgroundColor: '#75A5FF',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    icon: {
        width: 140,
        height: 140,
    },
    header: {
        width: "100%",
        height: "35%",
        top: -20,
        marginBottom: 20
    },
    container: {
        width: "100%",
        height: 600,
        display: "flex",
        paddingTop: 20,
        position: "relative",
        alignContent: "center",
        justifyContent: "flex-start",
        alignItems: "center"
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