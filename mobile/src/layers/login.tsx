import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import WavyBackground from "react-native-wavy-background";
export default function Login() {
    return (
        <SafeAreaView>
            <View>
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

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    section: {
        height: "50%",
        width: "100%",
        backgroundColor: '#1A2368',
        justifyContent:"flex-end",
        alignItems:"center"
    },
    icon: {
        width:140,
        height:140,

    },
})