import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";

export const ForgetPassword = () => {


    return (
        <>
            <View style={style.container}>
                <Text style={style.title}>Esqueceu a senha?</Text>
                <Text style={style.text}>Enviaremos um e-mail para a autenticação e recuperação de senha</Text>
                <TextInput style={style.input} />
                <TouchableOpacity
                    style={style.button}
                    activeOpacity={0.8}>
                    <Text style={style.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    section: {
        flex: 1,
        height: "75%",
        width: "100%",
        backgroundColor: '#1A2345',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    header: {
        width: "100%",
        height: "40%",

    },
    icon: {
        width: 140,
        height: 140,

    },
    container: {
        width: "100%",
        height: "80%",
        display: "flex",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#B275FF"
    },
    text: {
        fontSize: 12,
        width: "55%",
        color: '#46307B',
        marginBottom: 12,
        display: 'flex',
    },
    input: {},
    button: {
        width: 250,
        height: 50,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: "#B275FF",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,


    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",

    }

})