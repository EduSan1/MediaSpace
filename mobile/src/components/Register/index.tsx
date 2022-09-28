import React, { useState } from "react";
import { StyleSheet,View, ScrollView,Text,Dimensions } from "react-native";
import { LoginButton } from "../utils/LoginButton";
import { LoginInput } from "../utils/LoginInput";

export const Register = () => {

    const [userRegister, setRegister] = useState({
        name:"",
        surname:"",
        mail:"",
        password:"",
        nickname:"",
        cpf:"",
        birth:"",
        cell:"",
        genre:"",
        biography:"",
    })

    const [hasError, setHasError] = useState(false)

    const [visibilityPassword, setVisibilityPassword] = useState(true)

    const handleChange = (text: string, name: string) => {
        setRegister(
            {
                ... userRegister,
                [name]: text
            }
        )
    }
    const changeVisibilityPassword = () => {
        setVisibilityPassword(!visibilityPassword)
    }
    
    const confirm = async () =>{
        console.log("confirmado")
    }


    return(
    <>
        <ScrollView 
        style={styles.container}
            horizontal={true} 
            pagingEnabled={true} 
            showsHorizontalScrollIndicator={true}>

            <View style={styles.View}>
                <LoginInput name="name" iconName="person-outline" value={userRegister.name} handleChange={handleChange} error={hasError} title="Nome"/>
                <LoginInput name="surname" iconName="person-outline" value={userRegister.surname} handleChange={handleChange} error={hasError} title="Sobrenome"/>
                <LoginInput name="mail" iconName="mail-outline" value={userRegister.mail} handleChange={handleChange} error={hasError} title="E-mail"/>
                <LoginInput onClickIcon={changeVisibilityPassword} isPassword={visibilityPassword} name="password" error={hasError} iconName={visibilityPassword ? "lock-outline" : "lock-open"} value={userRegister.password} handleChange={handleChange} title="Senha" /> 
            </View>

            <View style={styles.View}>
                <LoginInput name="nickname" iconName="person-outline" value={userRegister.nickname} handleChange={handleChange} error={hasError} title="Nickname"/>
                <LoginInput name="cpf" iconName="person-outline" value={userRegister.cpf} handleChange={handleChange} error={hasError} title="CPF"/>
                <LoginInput name="birth" iconName="today" value={userRegister.birth} handleChange={handleChange} error={hasError} title="Data de nascmento"/>
                <LoginInput name="cell" iconName="phone" value={userRegister.cell} handleChange={handleChange} error={hasError} title="Celular"/>
            
            </View>


            <View style={styles.View}>
                <LoginInput name="genre" iconName="person-outline" value={userRegister.genre} handleChange={handleChange} error={hasError} title="Genero"/>
                <LoginInput name="biography" iconName="person-outline" value={userRegister.biography} handleChange={handleChange} error={hasError} title="Biografia"/> 
            
                <View style={styles.containerTextButton}>
                <Text style={styles.text}>Arraste para o lado para preencher todos os campos </Text>
                {/* <LoginButton type="dark" action={confirm} title="Entrar" /> */}
                </View>
            
            </View>


        </ScrollView>

        <View style={styles.containerTextButton}>
                <Text style={styles.text}>Arraste para o lado para preencher todos os campos </Text>
                <LoginButton type="dark" action={confirm} title="Entrar" />
        </View>
    </>
    )
    
}

const styles = StyleSheet.create({

    View:{
        width: Dimensions.get('window').width ,
        height: '20%',
        display: "flex",
        flex:3,
        alignItems:'center',
        justifyContent:'space-around'
    },
    View2:{
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        backgroundColor:'#0005F4',
        display: "flex",
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    View3:{
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height ,
        backgroundColor:'#22345F',
        display: "flex",
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        height: 20
    },
    text:{
        fontSize: 10,
        width: "55%",
        color:'#46307B',
        display: 'flex',
        marginBottom:10,
    },
    containerTextButton:{
        width:200,
        height: 100,
        justifyContent:"center",
        alignItems:"center"
    }
    


})