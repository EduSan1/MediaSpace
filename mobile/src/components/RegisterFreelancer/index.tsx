import React, { useState } from "react";
import { StyleSheet,View, ScrollView,Text,Dimensions, Image,  } from "react-native";
import { LoginButton } from "../utils/LoginButton";

interface IRegisterFreelancer {
    navigation : any
}


export const RegisterFreelancer = ({navigation} : IRegisterFreelancer) => {
    const [isLoad, setIsLoad] = useState(false)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{`Deseja cadastrar-se como prestador?`}</Text>
            <Image style={styles.icon} source={require('../../../assets/icons/IconFreelancer.png')} />
            <Text style={styles.text1}>Perfil de prestador de serviço</Text>
            <View style={styles.areaContainer1}>
                <Text style={styles.text2}>&#8226; Publicação de portfólio</Text>
                <Text style={styles.text2}>&#8226; Inscrição em projetos</Text>
                <Text style={styles.text2}>&#8226;  Venda de produtos</Text>
                <Text style={styles.text2}>&#8226; Formação de equipes</Text>
            </View>
            <View style={styles.areaContainer2}>
                <LoginButton isLoad={isLoad} action={() =>  navigation.navigate('RegisterFreelancerComplete')} type="dark" title="Continuar como prestador"/>
            </View>
                <LoginButton isLoad={isLoad} action={() =>  navigation.navigate('CheckMail')} type="light" title="Continuar como cliente"/>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:"black",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        // backgroundColor: "#34f45f",
        alignItems:"center",
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
    text2: {
        fontSize: Dimensions.get("window").width * 0.034,
        color: "#46307B",
        textAlignVertical: "center",
    },
    text1: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.04,
        fontWeight: 'bold',
        color: "#46307B",
        textAlignVertical: "center"
    },
    icon:{
        width: Dimensions.get('window').width * 0.25 , 
        height: Dimensions.get('window').height * 0.1329 ,
        marginVertical:15,
    },
    areaContainer1:{
        marginBottom:30,
    },
    areaContainer2:{
        marginBottom:15,
    }
})