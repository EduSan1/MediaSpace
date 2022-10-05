import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, Dimensions } from "react-native"

interface ILoginTextArea {
    title: string
    value: string
    name: string
    handleChange: (text: string, name: string) => void
    maxLength: number
}

export const LoginTextArea = ({ title, value, name, handleChange, maxLength }: ILoginTextArea) => {

    const [inputTitle, serInputTitle] = useState(false)

    return (

        <View style={styles.container}>
            {inputTitle ? <Text style={styles.inputTitle} >{title}</Text> : null}
            <View style={styles.inputContainer}>
                <TextInput multiline={true} maxLength={maxLength} value={value} onChangeText={(text) => handleChange(text, name)} onFocus={() => serInputTitle(true)} placeholder={inputTitle ? "" : title} style={styles.input} ></TextInput>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.22 ,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 5,
        borderColor: "#D3C5F8",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        alignItems: "flex-start"
    },
    inputContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    inputTitle: {
        backgroundColor: "#fff",
        position: "absolute",
        paddingLeft: 5,
        paddingRight: 5,
        color: "#979797",
        top: -14,
        left: 10
    },
    input: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.18,
        color: "#979797",
        textAlignVertical: "top"
    },
    inputIcon: {
        width: Dimensions.get('window').width * 0.06,
    }
});
