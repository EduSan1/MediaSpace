import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import WavyBackground from "react-native-wavy-background";
import { ForgetPassword } from "../components/ForgetPassword";
export default function Login() {
    return (
        <SafeAreaView>
            <View style={style.header}>
                <View style={style.section}>
                    <Image style={style.icon} source={require('../../assets/icons/MediaSpaceLogoWhite.png')} />
                </View>
                <WavyBackground
                    bottom={false}
                    height={100}
                    width={100}
                    amplitude={13}
                    frequency={10}
                    offset={20}
                    color="#1A2368"
                />
            </View>

            <View style={style.container}>
                <ForgetPassword/>
            </View>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    section: {
        height: "75%",
        width: "100%",
        backgroundColor: '#1A2368',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    icon: {
        width: 140,
        height: 140,

    },
    header : {
        width: "100%",
        height: "40%",
        
    },
    container: {
        width: "100%",
        height: "60%",
        display: "flex",
        position:"relative",
        alignContent: "center",
        justifyContent: "center",
        alignItems:"center"
        
    }
})