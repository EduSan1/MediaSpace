import axios from "axios";
import React, { useEffect, useState } from "react"
import { Text, StyleSheet, View, TextInput, Image, KeyboardAvoidingView, Button, Pressable, useWindowDimensions, ScrollView, Dimensions, TouchableHighlight } from "react-native"
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
        await api.post("/User/login", userLogin).then((res: any) => {
            console.log(res.data)
            if (res.data.logged) {
                console.log("certo")
            } else {
                console.log("errado")
            }
        }).catch((error) => {
            console.log(error)
        })

    }


    return (

        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <LoginInput  name="mail" iconName="mail-outline" value={userLogin.mail} handleChange={handleChange} title="Email" />
                <LoginInput isPassword={true} name="password" iconName="lock-outline" value={userLogin.password} handleChange={handleChange} title="Senha" />
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

            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={require("../../../assets/icons/facebook.png")} />
                <Image style={styles.icon} source={require("../../../assets/icons/google.png")} />
                <Image style={styles.icon} source={require("../../../assets/icons/linkedin.png")} />
                <Image style={styles.icon} source={require("../../../assets/icons/twitter.png")} />
            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.6,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
    },
    inputContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.15,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.15,
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
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.06,
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
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.06,
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

    },
    icon: {
        width: Dimensions.get("window").width * 0.1,
        height: Dimensions.get("window").width * 0.1,
        
    },
    iconContainer: {
        width: Dimensions.get("window").width * 0.55,
        height: Dimensions.get("window").height * 0.07,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    }
});
