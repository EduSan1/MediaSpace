import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import WavyBackground from "react-native-wavy-background";

export default function StartHome() {
    return (
        <SafeAreaView style={style.body}>
            <View style={style.section}>
                <Text style={style.Text}>Vamos lá!</Text>
                <Image source={require('../../assets/img/constelacao.png')}></Image>
            </View>
            <View>
                <WavyBackground
                    bottom={true}
                    height={100}
                    width={700}
                    amplitude={10}
                    frequency={3}
                    offset={60}
                    color="#B275FF"
                />
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    body: {
        height: "100%",
        width: "100%",
        backgroundColor: "#344556",
        flexDirection:"column-reverse"
    },
    section: {
        height: "30%",
        width: "100%",
        backgroundColor: '#B275FF',
    },
    Text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFFFFF",
    },

})