import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, Button, Pressable } from "react-native"
import { LoginInput } from "../utils/LoginInput";

export const Login = () => {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <LoginInput title="Email" />
                <LoginInput title="Senha" />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button}><Text style={styles.textButton}>Entrar</Text></Pressable>
                <Pressable style={styles.button}><Text>Cadastre-se</Text></Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    inputContainer: {
        width: "100%",
        height: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    buttonContainer: {
        width: "100%",
        height: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        width: 300,
        height: 60,
        backgroundColor: "#B275FF",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    textButton : {
        
    }
});
