import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native"

interface ILoginInput {
    title: string
}

export const LoginInput = ({ title }: ILoginInput) => {

    const [inputTitle, serInputTitle] = useState(false)

    return (

                <View style={styles.inputContainer}>
                    {inputTitle ? <Text style={styles.inputTitle} >{title}</Text> : null}
                    <TextInput onFocus={() => serInputTitle(true)} placeholder={inputTitle ? "" : title} style={styles.input}></TextInput>
                </View>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 320,
        height: 60,
        borderColor: "#D3C5F8",
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        alignItems: "flex-start"
    },
    inputTitle: {
        backgroundColor: "#fff",
        position: "absolute",
        paddingLeft: 5,
        paddingRight: 5,
        color: "#979797",
        top: -10,
        left: 10
    },
    input: {
        width: 270,
        height: 45,
        color: "#979797"
    }
});
