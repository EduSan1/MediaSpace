import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Dimensions } from "react-native"

interface ILoginInput {
    title: string
    value : string
    name : string
    handleChange : (text : string, name : string) => void
}

export const LoginInput = ({ title, value, name ,handleChange }: ILoginInput) => {

    const [inputTitle, serInputTitle] = useState(false)

    return (

                <View style={styles.inputContainer}>
                    {inputTitle ? <Text style={styles.inputTitle} >{title}</Text> : null}
                    <TextInput value={value} onChangeText={(text) => handleChange(text, name)} onFocus={() => serInputTitle(true)} placeholder={inputTitle ? "" : title} style={styles.input}></TextInput>
                </View>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width:  Dimensions.get('window').width * 0.7 ,
        height:  Dimensions.get('window').height * 0.06 ,
        borderColor: "#D3C5F8",
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom:10,
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
