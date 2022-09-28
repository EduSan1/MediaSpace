import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WavyBackground from "react-native-wavy-background";

import { ForgetPassword } from "../components/ForgetPassword";
import { Login } from "../components/Login";
import { Confirmation } from "../components/Confirmation"
import {CheckEmail} from "../components/CheckEmail"
import {Register} from "../components/Register"

export default function LoginPage() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height">

            <View style={styles.container}>

                <View style={styles.header}>
                    <LinearGradient style={styles.section} colors={['#1A2369', '#505BB0']}>
                        <Image style={styles.icon} source={require("../../assets/icons/MediaSpaceLogoWhite.png")} />
                        <Image style={styles.starfield} source={require("../../assets/img/constelacao.png")} />
                    </LinearGradient>

                    <WavyBackground
                        bottom={false}
                        height={120}
                        width={100}
                        amplitude={15}
                        frequency={12}
                        offset={20}
                        color="#505BB0"
                    />
                </View>

                <View style={styles.container}>
<<<<<<< HEAD
                    <ForgetPassword/>
                    {/* <Text style={styles.title}>Entre em sua conta</Text>
=======
>>>>>>> a9293001e2d0f676edec39be9e045fe85b792093

                    {/* <Text style={styles.title}>Entre em sua conta</Text> */}
                    {/* <Login /> */}

                    {/* <Text style={styles.title}>Esqueceu a sua senha?</Text>
                    <ForgetPassword/> */}

<<<<<<< HEAD
                    <Login /> */}
=======
                    {/* <Confirmation/> */}
              
                    {/* <Text style={styles.title}>Verifique seu e-mail</Text>
                    <CheckEmail/> */}
>>>>>>> a9293001e2d0f676edec39be9e045fe85b792093

                    <Text style={styles.title}>Faça seu cadastro</Text>
                    <Register/>

                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    section: {
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"

    },
    starfield: {
        height: Dimensions.get('window').height * 0.45,
        width: Dimensions.get('window').width,
        position: "absolute",
        zIndex: 1

    },
    icon: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        marginTop: Dimensions.get('window').height * 0.1,

    },
    header: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.6,
        display: "flex",
        position: "relative",
        alignContent: "center",
        alignItems: "flex-start"
    },
    title: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.05,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
    },
})