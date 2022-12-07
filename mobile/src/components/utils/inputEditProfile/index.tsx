import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, Dimensions } from "react-native"

interface IInputEditProfile {
    value: string
    name: string
    // handleChange: (text: string, name: string) => void
    maxLength: number
}

export const InputEditProfile = ({value, name, maxLength }: IInputEditProfile) => {



    return (

       
            <View style={styles.inputContainer}>
                <TextInput style={styles.text} multiline={true} maxLength={maxLength} value={value}></TextInput>
            </View>


    )
}

const styles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderWidth:0.3,
        marginTop:Dimensions.get('window').height * 0.02,        
    },
    text:{
        textAlignVertical:"top",
        width:Dimensions.get('window').width * 0.8,
        height:Dimensions.get('window').height * 0.3,
        fontSize:16,
        fontWeight:"400",
        color:"#808080",
        
    }


});
