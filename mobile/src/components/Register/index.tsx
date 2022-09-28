import React, { useState } from "react";
import { StyleSheet,View, ScrollView,Text,Dimensions, Image } from "react-native";
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

            <View style={styles.scrollView}>
                    <Image style={styles.scroll} source={require("../../../assets/img/scrollhint.png")}/>
                    <Image style={styles.scroll} source={require("../../../assets/img/scrollhint.png")}/>
            </View>
           

            <View style={styles.View}>
                <LoginInput name="nickname" iconName="person-outline" value={userRegister.nickname} handleChange={handleChange} error={hasError} title="Nickname"/>
                <LoginInput name="cpf" iconName="person-outline" value={userRegister.cpf} handleChange={handleChange} error={hasError} title="CPF"/>
                <LoginInput name="birth" iconName="today" value={userRegister.birth} handleChange={handleChange} error={hasError} title="Data de nascmento"/>
                <LoginInput name="cell" iconName="phone" value={userRegister.cell} handleChange={handleChange} error={hasError} title="Celular"/>
            
            </View>

            <View style={styles.scrollView}>
                    <Image style={styles.scroll} source={require("../../../assets/img/scrollhint.png")}/>
                    <Image style={styles.scroll} source={require("../../../assets/img/scrollhint.png")}/>
            </View>

            <View style={styles.View}>
                <LoginInput name="genre" iconName="person-outline" value={userRegister.genre} handleChange={handleChange} error={hasError} title="Genero"/>
                <LoginInput name="biography" iconName="person-outline" value={userRegister.biography} handleChange={handleChange} error={hasError} title="Biografia"/> 
            </View>


        </ScrollView>

        <View style={styles.containerTextButton}>
                <Text style={styles.text}>Arraste para o lado para preencher todos os campos </Text>
                <LoginButton type="dark" action={confirm} title="Continuar" />
                <Text style={styles.text2}>Já possui uma conta? Entre</Text>
        </View>
    </>
    )
    
}

const styles = StyleSheet.create({

    View:{
        width: Dimensions.get('window').width ,
        minHeight: Dimensions.get('window').height * 0.100,
        display: "flex",
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    text:{
        fontSize: 10,
        width: "55%",
        color:'#46307B',
        display: 'flex',
        marginBottom:10,
    },
    containerTextButton:{
        width:"100%",
        height: 10,
        justifyContent:"flex-start",
        alignItems:"center",
        display: 'flex',
        flex: 2,
        backgroundColor: "#234312"
    },
    container:{
        width: Dimensions.get('window').width ,
        height: Dimensions.get('window').height * 0.1,
        backgroundColor:"#34f344"
    },
    text2:{
        width: Dimensions.get('window').width ,
        display: "flex",
        fontSize: 16,
        fontWeight:"bold",     
        color:'#B275FF',
        alignItems:"center",
        justifyContent:"center",
        padding:5
    },
    scroll:{
        width: Dimensions.get('window').width * 0.1 ,
        height: Dimensions.get('window').height * 0.1,
    },
    scrollView:{
        minHeight: Dimensions.get('window').height * 0.100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column"
    }
})