import React, { useState } from "react"
import { Text, StyleSheet, View, Image, Dimensions, ToastAndroid, Keyboard } from "react-native"
import { LoginInput } from "../utils/LoginInput";
import api from "../../../service";
import { LoginButton } from "../utils/LoginButton";

export const Login = () => {

    const [userLogin, setUserLogin] = useState({
        mail: "",
        password: ""
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

        api.post("/User/login", userLogin).then((res: any) => {

            if (res.data.is_logged)
                ToastAndroid.show(res.data.message, 10)
            else {
                setHasError(true)
                ToastAndroid.show(res.data.message, 10)
            }
        }).catch((error) => {
            console.log(error)
        })

    }


    return (

        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <LoginInput maxLength={50} name="mail" iconName="mail-outline" value={userLogin.mail} handleChange={handleChange} hasError={hasError} title="Email" />
                <LoginInput maxLength={50} onClickIcon={changeVisibilityPassword} isPassword={visibilityPassword} name="password" hasError={hasError} iconName={visibilityPassword ? "lock-outline" : "lock-open"} value={userLogin.password} handleChange={handleChange} title="Senha" />
            </View>
            <Text style={styles.textForgetPassword}>Esqueci minha senha</Text>

            <View style={styles.buttonContainer}>
                <LoginButton type="light" action={login} title="Entrar" />
                <LoginButton type="dark" action={login} title="Cadastre-se" />
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
        height: Dimensions.get('window').height * 0.55,
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
