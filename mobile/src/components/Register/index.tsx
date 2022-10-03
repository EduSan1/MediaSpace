import React, { useState } from "react";
import { StyleSheet,View, ScrollView,Text,Dimensions, Image } from "react-native";
import { LoginButton } from "../utils/LoginButton";
import { LoginInput } from "../utils/LoginInput";
import { CheckboxComponent } from "../utils/LoginCheckBox";

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
                <LoginInput name="name" iconName="person-outline" value={userRegister.name} handleChange={handleChange} hasError={hasError} title="Nome" maxLength={50}/>
                <LoginInput name="surname" iconName="person-outline" value={userRegister.surname} handleChange={handleChange} hasError={hasError} title="Sobrenome" maxLength={150}/>
                <LoginInput name="mail" iconName="mail-outline" value={userRegister.mail} handleChange={handleChange} hasError={hasError} title="E-mail" maxLength={250}/>
                <LoginInput onClickIcon={changeVisibilityPassword} isPassword={visibilityPassword} name="password" hasError={hasError} iconName={visibilityPassword ? "lock-outline" : "lock-open"} value={userRegister.password} handleChange={handleChange} title="Senha" maxLength={255} /> 

                <View style={styles.scrollView}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                </View>
            </View>

            <View style={styles.View}>
                <LoginInput name="nickname" iconName="person-outline" value={userRegister.nickname} handleChange={handleChange} hasError={hasError} title="Nickname" maxLength={25}/>
                <LoginInput name="cpf" iconName="person-outline" value={userRegister.cpf} handleChange={handleChange} hasError={hasError} title="CPF" maxLength={11}/>
                <LoginInput name="birth" iconName="today" value={userRegister.birth} handleChange={handleChange} hasError={hasError} title="Data de nascmento" maxLength={8}/>
                <LoginInput name="cell" iconName="phone" value={userRegister.cell} handleChange={handleChange} hasError={hasError} title="Celular" maxLength={12}/>
                
                <View style={styles.scrollView}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                </View>
            </View>


            <View style={styles.View}>
                <CheckboxComponent/>
                <LoginInput name="biography" iconName="person-outline" value={userRegister.biography} handleChange={handleChange} hasError={hasError} title="Biografia" maxLength={800}/> 
                
                <View style={styles.scrollView}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                </View>
            </View>

            <View style={styles.View}>
            
                <View style={styles.scrollView}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
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
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height * 0.30,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        display: 'flex',
        flex: 4
    },
    text:{
        fontSize: 10,
        width: "55%",
        color:'#46307B',
        display: 'flex',
        marginBottom:10,
    },
    containerTextButton:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height  ,
        justifyContent: "flex-end",
        alignItems: "center",
        display: 'flex',
        flex: 0.5,
      
    },
    scrollIcon: {
        width: Dimensions.get('window').width * 0.061 ,
        height: Dimensions.get('window').height * 0.045,
        justifyContent:"space-between",
        alignItems:"center",
        

    },
    scrollView: {
        width: Dimensions.get('window').width * 0.9 ,
        height: Dimensions.get('window').height * 0.3,
        display: "flex",
        alignItems: "flex-end",
        justifyContent:"space-around",
        flexDirection: "column",
        position: "absolute"
    }
    


})