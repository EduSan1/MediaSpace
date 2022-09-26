import axios from "axios";
import React, { useEffect, useState } from "react"
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, Button, Pressable, useWindowDimensions, ScrollView, Dimensions, TouchableHighlight } from "react-native"
import { LoginInput } from "../utils/LoginInput";
import api from "../../../service";

export const Login = () => {

    const [userLogin, setUserLogin] = useState({
        mail: "",
        password: ""
    })

    const handleChange = (text: string, name: string) => {
        setUserLogin(
            {
                ...userLogin,
                [name]: text
            }
        )
    }
    const login = async () => {
        console.log(userLogin)
        await api.post("/User/login", userLogin).then((res: any) => {
            console.log(res.data)

            if (res.data.logged) {
                console.log("errado")
            }else {
                console.log("certo")
            }
        }).catch((error) => {
            console.log(error)
        })

    }


    return (

        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <LoginInput name="mail" value={userLogin.mail} handleChange={handleChange} title="Email" />
                <LoginInput name="password" value={userLogin.password} handleChange={handleChange} title="Senha" />
            </View>
            <Text style={styles.textForgetPassword}>Esqueci minha senha</Text>

            <View style={styles.buttonContainer}>
                <TouchableHighlight>
                    <Pressable onPress={() => login()} style={styles.button}><Text style={styles.textButton}>Entrar</Text></Pressable>
                </TouchableHighlight>
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
    },
    inputContainer: {
        width: Dimensions.get('window').width,
        // height: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    buttonContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.11,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    line: {
        width: "80%",
        height: 3,
        backgroundColor: "#BCA7F4",
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginTop: 10,
    },
    textLine: {
        position: "absolute",
        top: -10,
        backgroundColor: "#fff",
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center",
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
        width: 280,
        textAlign: "right",
        fontSize: 14,
        fontWeight: 'bold',
        color: "#BCA7F4",
    },
    textNavigate: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        color: "#B275FF",
        textDecorationLine: "underline"
    },
    textButton: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff",

    },
    registerButton: {
        width: 280,
        height: 50,
        backgroundColor: "#fff",
        borderColor: "#BCA7F4",
        borderWidth: 2,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    registerTextButton: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
        color: "#B275FF",

    }
});
