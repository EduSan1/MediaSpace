import React from "react"
import { Text, StyleSheet, Dimensions, Pressable, ActivityIndicator } from "react-native"

interface ILoginButton {
    action: () => void
    type: "light" | "dark"
    title: string
    isLoad: boolean
}

export const LoginButton = ({ action, type, title, isLoad }: ILoginButton) => {

    return (
        <Pressable onPress={() => isLoad ? null : action()} style={type === "light" ? styles.lightButton : styles.darkButton}>
            {isLoad ?
                <ActivityIndicator size="large" color={type === "light" ? "#fff" : "#B275FF"} />
                :
                <Text style={type === "light" ? styles.textButton : styles.darkText}>{title}</Text>
            }
        </Pressable>

    )
}

const styles = StyleSheet.create({
    lightButton: {
        width: Dimensions.get('window').width * 0.67,
        height: Dimensions.get('window').height * 0.07,
        backgroundColor: "#B275FF",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.045,
        fontWeight: 'bold',
        color: "#fff",
    },
    darkButton: {
        width: Dimensions.get('window').width * 0.67,
        height: Dimensions.get('window').height * 0.07,
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
        fontSize: Dimensions.get("window").width * 0.045,
        fontWeight: 'bold',
        color: "#B275FF",

    }
});