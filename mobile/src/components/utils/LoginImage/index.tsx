import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { LoginButtonUpload } from '../LoginButtonUpload' 




export const LoginImage = () => {

    return(
    <View style={styles.container}>
        <Text style={styles.inputTitle}>Foto de Perfil</Text>
        <Image style={styles.image} source={require("../../../../assets/icons/IconFreelancer.png")}/>
        <Text style={styles.text}>Escolha um arquivo jpg, png, gif...</Text>
        <LoginButtonUpload type="dark" action={() => console.log("a")} title="Upload" />
        <Text style={styles.textButton}>Remover imagem</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.35,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-evenly",
        position: "relative",
        alignItems: "center",
        color: '#B275FF',
        borderColor:'#D3C5F8',
        borderStyle:'dashed'
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
    image:{
        width: Dimensions.get("window").width * 0.25,
        height: Dimensions.get("window").width * 0.25,
        display:'flex',
        alignItems:'center'
    },
    text:{
        fontSize:10,
        color:'#D3C5F8'
    },
    textButton:{
        fontSize: 10,
        color:'#B275FF',
        fontWeight:'bold'
    }

})