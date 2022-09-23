import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, Button, Pressable, useWindowDimensions, ScrollView, Dimensions } from "react-native"
import { LoginInput } from "../utils/LoginInput";

export const Login = () => {

    return (

        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <LoginInput title="Email" />
                <LoginInput title="Senha" />
            </View>
            <Text  style={styles.textForgetPassword}>Esqueci minha senha</Text>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.button}><Text style={styles.textButton}>Entrar</Text></Pressable>
                <Pressable style={styles.registerButton}><Text style={styles.registerTextButton}> Cadastre-se</Text></Pressable>
            </View>

            <Text style={styles.textNavigate}>Navegar sem uma conta</Text>
            <View style={styles.line}>
                <Text style={styles.textLine}>Conectar usando</Text>
            </View>

        </View>

    )

}
console.log(Dimensions.get('window').width)
console.log()
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
        backgroundColor:"#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
    },
    inputContainer: {
        width:  Dimensions.get('window').width,
        // height: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    buttonContainer: {
        width:  Dimensions.get('window').width,
        height:  Dimensions.get('window').height * 0.2 ,
        backgroundColor:"#7f6ff3",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    line: {
        width: "80%",
        height: 3,
        backgroundColor: "#BCA7F4",
        position:"relative",
        display:"flex",
        alignItems: "center",
                marginTop:10,
    },
    textLine: {
        position:"absolute",
        top:-10,
        backgroundColor:"#fff",
        paddingLeft:10,
        paddingRight:10,

        textAlign:"center",
        fontSize: 14,
        fontWeight: 'bold',
        color: "#BCA7F4",
    },
    button: {
        width: 280,
        height: 50,
        backgroundColor: "#B275FF",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    textForgetPassword: {
        width:280,
        textAlign:"right",
        fontSize: 14,
        fontWeight: 'bold',
        color: "#BCA7F4",
    },
    textNavigate: {
        textAlign:"center",
        fontSize: 16,
        fontWeight: 'bold',
        color: "#B275FF",
       textDecorationLine:"underline"
    },
    textButton: {
        textAlign:"center",
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff",

    },
    registerButton: {
        width: 280,
        height: 50,
        backgroundColor: "#fff",
        borderColor:"#BCA7F4",
        borderWidth:2,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    registerTextButton: {
        textAlign:"center",
        fontSize: 24,
        fontWeight: 'bold',
        color: "#B275FF",

    }
});
