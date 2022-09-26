import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import TxtInput from "../TxtInput";
import Icon  from "react-native-vector-icons/Entypo";
export const ForgetPassword = () => {
    return (
        <>
            <View style={style.container}>
                <Text style={style.title}>Esqueceu a senha?</Text>
                <Text style={style.text}>Enviaremos um e-mail para a autenticação e recuperação de senha</Text>
                <TxtInput />
                <TouchableOpacity
                    style={style.button}
                    activeOpacity={0.7}>
                    <Text style={style.buttonText}>Enviar</Text>
                    
                </TouchableOpacity>   
            </View>
      
        </>

    );
}

const style = StyleSheet.create({
    section: {
        flex: 1,
        height: "75%",
        width: "100%",
        backgroundColor: '#1A2345',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    header : {
        width: "100%",
        height: "40%",
        
    },
    icon: {
        width: 140,
        height: 140,

    },
    container: {
        width: "100%",
        height: "80%",
        display: "flex",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        alignItems:"center"
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: "#B275FF"
    },
    text:{
        fontSize: 12,
        width: "55%",
        color:'#46307B',
        marginBottom:25,
        display: 'flex',
    }, 
    button:{
        width: 250,
        height: 50,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: "#B275FF",
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',  
        
    },
    buttonText:{
        fontSize: 20,
        fontWeight:"bold",
        color: "#fff",

    },

   
})