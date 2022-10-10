import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Alert } from "react-native";
import { LoginInput } from "../utils/LoginInput";
import { LoginButton } from "../utils/LoginButton";

interface IForgetPassword {
    navigation : any
}

export const ForgetPassword = ({navigation} : IForgetPassword) => {

    const [isLoad, setIsLoad] = useState(false)
    const [user, setuser] = useState({
        mail: ""
    })
    const [hasError, setHasError] = useState(false)

    const handleChange = (text: string, name: string) => {
        setuser(
            {
                ... user,
                [name]: text
            }
        )
    }

    const submit = async () =>{

        setIsLoad(true)
     
        navigation.navigate('SendMailPasswordRecover')
        setIsLoad(false)
    }


    return (
        <>
            <View style={styles.container}>
            <Text style={styles.title}>Esqueceu a senha?</Text>
                <Text style={styles.text}>Tudo bem! Enviaremos um e-mail para a autenticação e recuperação de senha</Text>

                <View style={styles.inputContainer}>
                <LoginInput name="mail" iconName="mail-outline" value={user.mail} handleChange={handleChange} hasError={hasError} title="E-mail" maxLength={250} />
                </View>

                <View>
                     <LoginButton isLoad={isLoad} type="light" action={submit}  title="Enviar"/>
                </View> 


            </View>
            
        </>

    );
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        height: "75%",
        width: "100%",
        backgroundColor: '#1A2345',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    title: {
        marginHorizontal:70,
        height: Dimensions.get('window').height * 0.07,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
    },
    header: {
        width: "100%",
        height: "40%",

    },
    container: {
        width: "100%",
        height: "80%",
        display: "flex",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        alignItems: "center",

    },
    text: {
        fontSize: 12,
        width: "55%",
        color:'#46307B',
        display: 'flex',
        marginTop:10,
        marginBottom:20
    }, 
    buttonContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.15,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    inputContainer: {
        width: Dimensions.get('window').width ,
        height: Dimensions.get('window').height * 0.15,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

    },
   
})