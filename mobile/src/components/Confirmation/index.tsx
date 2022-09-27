import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from "react-native";
import { LoginButton } from "../utils/LoginButton";
export const Confirmation = () => {


    const submit = async () =>{
        console.log("enviado")
    }


    return (
        <>
        <View style={styles.container}>

            <View>
                <Image style={styles.image} source={require("../../../assets/img/Email.png")}/>
            </View>

            <Text style={styles.title}>E-mail enviado!</Text>
            <Text style={styles.text}>Aguarde o e-mail para realizar a recuperação de senha</Text>


            <View style={styles.buttonContainer}>
            <LoginButton type="light" action={submit}  title="OK"/>          
            </View>

            <Text style={styles.text}>Caso não receba nosso e-mail em alguns minutos, tente reenviar</Text>    

            <View style={styles.buttonContainer}>
            <LoginButton type="dark" action={submit}  title="Reenviar"/> 
            </View>

        </View>
            
        </>

    );
}

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.6,
        display: "flex",
        alignItems: "center",
        justifyContent:"flex-start",
        flexDirection: "column",
        paddingTop: 20
    },
    title: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.05,
         textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
    },
    image:{
        alignItems:"center",
        marginStart: "8%",
        width: Dimensions.get("window").width * 0.32,
        height: Dimensions.get("window").width * 0.18,
    },
    buttonContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.08,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: 12,
        width: "55%",
        color:'#46307B',
        display: 'flex',
        marginTop:10,
        marginBottom:20,
        textAlign:"center"
    },

})