import React, { useState } from "react"
import { Text, StyleSheet, View, Image, Dimensions, ToastAndroid, Keyboard, TouchableOpacity, Pressable } from "react-native"
import { LoginInput } from "../utils/LoginInput";
import api from "../../../service";
import { LoginButton } from "../utils/LoginButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface ILogin {
    navigation: any
}

export const Login = ({ navigation }: ILogin) => {

    const [isLoad, setIsLoad] = useState(false)
    const [userLogin, setUserLogin] = useState({
        mail: "edusan3456@gmail.com",
        password: "123"
    })
    const [hasError, setHasError] = useState(false)

    const [visibilityPassword, setVisibilityPassword] = useState(true)

    const handleChange = (text: string, name: string) => {
        setUserLogin(
            {
                ...userLogin,
                [name]: text
            }
        )
    }

    const changeVisibilityPassword = () => {
        setVisibilityPassword(!visibilityPassword)
    }
    const login = () => {
        Keyboard.dismiss()
        setIsLoad(true)
        // navigation.navigate("Home")      
        api.post("/user/login", userLogin).then(async (res: any) => {
            console.log("adsa")

            if (res.data.is_logged) {
                await SecureStore.setItemAsync('userImage', res.data.user.profile_picture)
                await SecureStore.setItemAsync('userId', res.data.user.id)
                await SecureStore.setItemAsync('userName', res.data.user.first_name)
                await SecureStore.setItemAsync('userNickname', res.data.user.nickname)
                navigation.navigate("Home")

            }

            else {
                setHasError(true)
                ToastAndroid.show(res.data.message, 10)
            }

        }).catch((error) => {
            console.log(error)
        })

        setIsLoad(false)

    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Entre em sua conta</Text>

            <View style={styles.inputContainer}>
                <LoginInput type="default" maxLength={50} name="mail" iconName="mail-outline" value={userLogin.mail} handleChange={handleChange} hasError={hasError} title="Email" />
                <LoginInput type="default" maxLength={50} onClickIcon={changeVisibilityPassword} isPassword={visibilityPassword} name="password" hasError={hasError} iconName={visibilityPassword ? "lock-outline" : "lock-open"} value={userLogin.password} handleChange={handleChange} title="Senha" />
            </View>

            <Text onPress={() => navigation.navigate('ForgetPassword')} style={styles.textForgetPassword}>Esqueci minha senha</Text>

            <View style={styles.buttonContainer}>
                <LoginButton isLoad={isLoad} type="light" action={login} title="Entrar" />


                <LoginButton isLoad={isLoad} type="dark" action={() => navigation.navigate('Register')} title="Cadastre-se" />

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
        height: Dimensions.get('window').height * 0.65,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
    },
    title: {
        marginHorizontal: 70,
        height: Dimensions.get('window').height * 0.07,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
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
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.002,
        backgroundColor: "#BCA7F4",
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginTop: Dimensions.get('window').height * 0.01,
    },
    textLine: {
        position: "absolute",
        top: -10,
        backgroundColor: "#fff",
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center",
        fontSize: Dimensions.get('window').fontScale * 14,
        fontWeight: 'bold',
        color: "#BCA7F4",
    },

    textForgetPassword: {
        width: Dimensions.get('window').width * 0.7,
        textAlign: "right",
        textDecorationLine: "underline",
        fontSize: Dimensions.get("window").width * 0.035,
        fontWeight: 'bold',
        color: "#BCA7F4",
    },
    textNavigate: {
        textAlign: "center",
        fontSize: Dimensions.get('window').fontScale * 14,
        fontWeight: 'bold',
        color: "#B275FF",
        textDecorationLine: "underline"
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
