import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions,Image } from "react-native";
import { CheckBoxComponent} from "@react-native-community/checkbox";
import { LoginButton } from "../utils/LoginButton";
import { LoginInput } from "../utils/LoginInput";

export const Register = () => {

    const [userRegister, setRegister] = useState({
        name: "",
        surname: "",
        mail: "",
        password: "",
        nickname: "",
        cpf: "",
        birth: "",
        cell: "",
        genre: "",
        biography: "",
        image:"",
    })

    const [hasError, setHasError] = useState(false)

    const [visibilityPassword, setVisibilityPassword] = useState(true)

    const handleChange = (text: string, name: string) => {
        setRegister(
            {
                ...userRegister,
                [name]: text
            }
        )
    }
    const changeVisibilityPassword = () => {
        setVisibilityPassword(!visibilityPassword)
    }

    const confirm = async () => {
        console.log("confirmado")
    }


    return (
        <>
            <ScrollView
                style={styles.container}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}>

                <View style={styles.View}>
                    <View style={styles.View2}>
                        <LoginInput name="name" iconName="person-outline" value={userRegister.name} handleChange={handleChange} error={hasError} title="Nome" />
                        <LoginInput name="surname" iconName="person-outline" value={userRegister.surname} handleChange={handleChange} error={hasError} title="Sobrenome" />
                        <LoginInput name="mail" iconName="mail-outline" value={userRegister.mail} handleChange={handleChange} error={hasError} title="E-mail" />
                        <LoginInput onClickIcon={changeVisibilityPassword} isPassword={visibilityPassword} name="password" error={hasError} iconName={visibilityPassword ? "lock-outline" : "lock-open"} value={userRegister.password} handleChange={handleChange} title="Senha" />
                    </View>

                    <View style={styles.scrollView}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                    </View>
                </View>


            <View style={styles.View}>
                <View style={styles.View2}>
                    <LoginInput name="nickname" iconName="person-outline" value={userRegister.nickname} handleChange={handleChange} error={hasError} title="Nickname" />
                    <LoginInput name="cpf" iconName="person-outline" value={userRegister.cpf} handleChange={handleChange} error={hasError} title="CPF" />
                    <LoginInput name="birth" iconName="today" value={userRegister.birth} handleChange={handleChange} error={hasError} title="Data de nascmento" />
                    <LoginInput name="cell" iconName="phone" value={userRegister.cell} handleChange={handleChange} error={hasError} title="Celular" />

                    <View style={styles.scrollView}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                    </View>
                </View>
            </View>


            <View style={styles.View}>
                <View style={styles.View2}>
                    
                    <LoginInput name="genre" iconName="person-outline" value={userRegister.genre} handleChange={handleChange} error={hasError} title="Genero" />
                    <LoginInput name="biography" iconName="person-outline" value={userRegister.biography} handleChange={handleChange} error={hasError} title="Biografia" />
                    
                    {/* <View style={styles.scrollView}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                    </View> */}
                </View>
            </View>

            <View style={styles.View}>
                <View style={styles.View2}>
                    <LoginInput name="image" iconName="person-outline" value={userRegister.image} handleChange={handleChange} error={hasError} title="imagem" />
                </View>
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
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        flex: 1
    },
    View: {
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height * 0.1,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: "row",
    },
    View2: {
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height * 0.20,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    text: {
        fontSize: 10,
        width: Dimensions.get('window').width * 0.5,
        color: '#46307B',
        display: 'flex',
        marginBottom: 10,
    },
    containerTextButton: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height ,
        justifyContent: "flex-start",
        alignItems: "center",
        display: 'flex',
        flex: 2,
    },

    text2: {
        width: Dimensions.get('window').width * 0.5,
        display: "flex",
        fontSize: 12,
        fontWeight: "bold",
        color: '#B275FF',
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    },
    scrollIcon: {
        width: Dimensions.get('window').width * 0.085 ,
        height: Dimensions.get('window').height * 0.06,
        justifyContent:"space-between",
        alignItems:"center",
        

    },
    scrollView: {
        width: Dimensions.get('window').width * 1.9,
        height: Dimensions.get('window').height * 0.1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        position: "absolute"
    }
})