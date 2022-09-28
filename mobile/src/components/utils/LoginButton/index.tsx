import React from "react"
import { Text, StyleSheet, Dimensions, Pressable } from "react-native"

interface ILoginButton {
    action: () => void
    type: "light" | "dark"
    title: string
}

export const LoginButton = ({ action, type, title }: ILoginButton) => {

    return (
        <Pressable onPress={() => action()} style={type === "light" ? styles.lightButton :  styles.darkButton}><Text style={type === "light" ? styles.textButton : styles.darkText}>{title}</Text></Pressable>

    )
}

const styles = StyleSheet.create({
    lightButton: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.09,
        backgroundColor: "#B275FF",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#fff",
    },
    darkButton: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.08,
        backgroundColor: "#fff",
        borderColor: "#BCA7F4",
        borderWidth: 2,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    darkText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",

    }
});
