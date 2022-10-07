import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WavyBackground from "react-native-wavy-background";

import { ForgetPassword } from "../components/ForgetPassword";
import { Login } from "../components/Login";
import { Confirmation } from "../components/Confirmation"
import { CheckEmail } from "../components/CheckEmail"
import { Register } from "../components/Register"
import { RegisterFreelancer } from "../components/RegisterFreelancer";
import { RegisterFreelancerComplete } from "../components/ CompleteRegisterFreelancer";
export default function LoginPage() {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height">

            <View style={styles.container}>

                <View style={styles.header}>
                    <LinearGradient style={styles.section} colors={['#1A2369', '#505BB0']}>
                        <Image style={styles.icon} source={require("../../assets/icons/MediaSpaceLogoWhite.png")} />
                        <Image style={styles.starfield} source={require("../../assets/img/consteletion.png")} />
                    </LinearGradient>

                    <WavyBackground
                        bottom={false}
                        height={90}
                        width={104}
                        amplitude={15}
                        frequency={12}
                        offset={20}
                        color="#505BB0"
                    />
                </View>

                <View style={styles.container}>
                    <RegisterFreelancerComplete/>
                    {/* <RegisterFreelancer/> */}
                    {/* <Register /> */}
                    {/* <Login/> */}
                </View>

            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    section: {
        height: Dimensions.get('window').height * 0.20,
        width: Dimensions.get('window').width,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
        

    },
    starfield: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 0.95,
        position: "absolute",
        zIndex: 1

    },
    icon: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        marginTop: Dimensions.get('window').height * 0.05,

    },
    header: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        marginBottom: 25,
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        position: "relative",
        alignContent: "center",
        alignItems: "flex-start"
    },

})