import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from "react-native";
import { LoginButton } from "../utils/LoginButton";
export const CheckEmail = () => {


    const submit = async () =>{
        
    }


    return (
        <>
        <View style={styles.container}>

            <View>
                <Image style={styles.image} source={require("../../../assets/img/CheckEmail.png")}/>
            </View>

            
            <Text style={styles.text}>Enviaremos um e-mail para que você confirme a finalização do cadastro</Text>


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
        width: Dimensions.get("window").width * 0.24,
        height: Dimensions.get("window").width * 0.24,
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
      
    },

})