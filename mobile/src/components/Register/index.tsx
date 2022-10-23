import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions, Image, ToastAndroid } from "react-native";
import { LoginButton } from "../utils/LoginButton";
import { LoginInput } from "../utils/LoginInput";
import { CheckboxComponent } from "../utils/LoginCheckBox";
import { LoginTextArea } from "../utils/LoginTextArea";
import { LoginImage } from "../utils/LoginImage";
import api from "../../../service";

interface IRegister {
    navigation: any
}

export const Register = ({ navigation }: IRegister) => {

    const [check, setCheck] = useState("")
    const [registerLoad, setRegisterLoad] = useState(false)

    const phoneMask = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4}).*/, "$1-$2");
    }

    const dateMask = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d{4})/, "$1/$2")
    }

    const onlyNumbers = (value: string) => {
        return value
            .replace(/\.|\(|\)|\-|\//g, '');
    }

    const dateToSend = (value: string) => {

        return onlyNumbers(value)
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{2})(\d{4})/, "$3-$2-$1")
    }

    const cpfMask = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    }

    const [userRegister, setUserRegister] = useState({
        first_name: "",
        last_name: "",
        mail: "",
        password: "",
        nickname: "",
        cpf: "",
        birth_date: "",
        phone: {
            ddd: "",
            phone: ""
        },
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8",
        gender: {
            "id": check
        },
        biography: "",
    })

    const [hasError, setHasError] = useState(false)
    const [hasErrorCpf, setHasErrorCpf] = useState(false)
    const [hasErrorMail, setHasErrorMail] = useState(false)
    const [hasErrorNickname, setHasErrorNickname] = useState(false)
    const [gender, setGender] = useState([])
    const [visibilityPassword, setVisibilityPassword] = useState(true)

    const handleChange = (text: string, name: string) => {
        if (name === "cpf") {
            setUserRegister(
                {
                    ...userRegister,
                    [name]: cpfMask(text)
                }
            )
        } else if (name === "birth_date") {
            setUserRegister(
                {
                    ...userRegister,
                    [name]: dateMask(text)
                }
            )
        } else {
            setUserRegister(
                {
                    ...userRegister,
                    [name]: text
                }
            )
        }


    }

    const handlePhone = (text: string, name: string) => {
        setUserRegister({
            // ...user, [event.target.name]: phoneMask(event.target.value)
            ...userRegister, phone: {
                ddd: "",
                phone: phoneMask(text)

            }
            //...user, [event.target.name]: onlyNumbers(event.target.value)
        })
    }

    const handleUserPicture = (text: string) => {
        setUserRegister(
            {
                ...userRegister,
                profile_picture: text
            }
        )
    }
    const changeVisibilityPassword = () => {
        setVisibilityPassword(!visibilityPassword)
    }

    const confirm = async () => {

        const [ddd, phone] = userRegister.phone.phone.split(" ")

        const user = {
            ...userRegister,
            cpf: onlyNumbers(userRegister.cpf),
            birth_date: dateToSend(userRegister.birth_date),
            phone: {
                ddd: onlyNumbers(ddd),
                phone: onlyNumbers(phone)
            }
        }
        setRegisterLoad(true)

        api.post("/user", user).then((res: any) => {

            if (res.data.statusCode === 201) {
                navigation.navigate("RegisterFreelancer", {
                    userId: res.data.data.id,
                })
            } else {
                if (res.data.cpf) {
                    setHasErrorCpf(res.data.cpf)
                    setHasErrorMail(res.data.mail)
                    setHasErrorNickname(res.data.nickname)
                    ToastAndroid.show(res.data.message, 10)
                } else {
                    ToastAndroid.show("res.data.message", 10)

                }


            }
            setRegisterLoad(false)
        })
    }

    useEffect(() => {
        setUserRegister({
            ...userRegister,
            gender: {
                "id": check
            }

        })
    }
        , [check]
    )

    useEffect(() => {
        api.get("/gender").then((res: any) => {
            setGender(res.data)
        })
    }, [])

    return (
        <>

            <Text style={styles.title}>{`Faça seu cadastro`}</Text>
            <ScrollView
                style={styles.container}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}>

                <View style={styles.View}>
                    <LoginInput type="default" name="first_name" iconName="person-outline" value={userRegister.first_name} handleChange={handleChange} hasError={hasError} title="Nome" maxLength={50} />
                    <LoginInput type="default" name="last_name" iconName="person-outline" value={userRegister.last_name} handleChange={handleChange} hasError={hasError} title="Sobrenome" maxLength={150} />
                    <LoginInput type="default" name="mail" iconName="mail-outline" value={userRegister.mail} handleChange={handleChange} hasError={hasErrorMail} title="E-mail" maxLength={250} />
                    <LoginInput type="default" onClickIcon={changeVisibilityPassword} isPassword={visibilityPassword} name="password" hasError={hasError} iconName={visibilityPassword ? "lock-outline" : "lock-open"} value={userRegister.password} handleChange={handleChange} title="Senha" maxLength={255} />

                    <View style={styles.iconViewEnd}>
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                        <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                    </View>

                    <View style={styles.View}>


                        <View style={styles.iconViewStart}>
                            <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                            <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                        </View>

                        <LoginInput type="default" name="nickname" iconName="person-outline" value={userRegister.nickname} handleChange={handleChange} hasError={hasErrorNickname} title="Nickname" maxLength={25} />
                        <LoginInput type="numeric" name="cpf" iconName="person-outline" value={userRegister.cpf} handleChange={handleChange} hasError={hasErrorCpf} title="CPF" maxLength={14} />
                        <LoginInput type="numeric" name="birth_date" iconName="today" value={userRegister.birth_date} handleChange={handleChange} hasError={hasError} title="Data de nascmento" maxLength={10} />
                        <LoginInput type="numeric" name="phone" iconName="phone" value={userRegister.phone.phone} handleChange={handlePhone} hasError={hasError} title="Celular" maxLength={15} />

                        <View style={styles.iconViewEnd}>
                            <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                            <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                        </View>
                    </View>


                    <View style={styles.View}>

                        <View style={styles.iconViewStart}>
                            <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                            <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                        </View>

                        <View>
                            <Text>Gênero</Text>
                            <View style={styles.checkboxContainer}>
                                {
                                    gender.map((gender: any) => {
                                        return <CheckboxComponent key={gender.id} check={check} setCheck={setCheck} title={gender.gender} value={gender.id} />
                                    })
                                }
                            </View>

                            <View>
                                <Text>Gênero</Text>
                                <View style={styles.checkboxContainer}>
                                    <CheckboxComponent check={check} setCheck={setCheck} title="Masculino" value="M" />
                                    <CheckboxComponent check={check} setCheck={setCheck} title="Feminino" value="F" />
                                    <CheckboxComponent check={check} setCheck={setCheck} title="Outro" value="O" />
                                </View>

                            </View>
                            <LoginTextArea name="biography" value={userRegister.biography} handleChange={handleChange} title="Biografia" maxLength={800} />

                            <View style={styles.iconViewEnd}>
                                <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                                <Image style={styles.scrollIcon} source={require("../../../assets/img/hintscroll.png")} />
                            </View>
                        </View>

                        <View style={styles.View}>

                            <LoginImage userImage={userRegister.profile_picture} setUserImage={(image: string) => handleUserPicture(image)} />

                            <View style={styles.iconViewStart}>
                                <Image style={styles.scrollIcon} source={require("../../../assets/img/scrollhint.png")} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>


            <View style={styles.containerTextButton}>
                <Text style={styles.text}>Arraste para o lado para preencher todos os campos </Text>
                <LoginButton type="dark" action={confirm} isLoad={registerLoad} title="Continuar" />
                <Text onPress={() => navigation.navigate('Login')} style={styles.text2}>Já possui uma conta? Entre</Text>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    title: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.07,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        display: 'flex',
    },

    View: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    text: {
        fontSize: Dimensions.get("window").width * 0.025,
        width: Dimensions.get('window').width * 0.6,
        color: '#46307B',
        margin: 10,
        justifyContent: 'center',
    },
    text2: {
        width: Dimensions.get('window').width * 0.4,
        fontSize: Dimensions.get("window").width * 0.03,
        marginTop: Dimensions.get("window").height * 0.02,
        textAlign: "center",
        textDecorationLine: "underline",
        fontWeight: "bold",
        color: '#B275FF',
        display: "flex",
        justifyContent: "center",

    },
    containerTextButton: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: "flex-start",
        alignItems: "center",
        display: 'flex',
        flex: 1

    },
    // containerTextButton:{
    //     width: Dimensions.get('window').width,
    //     height: Dimensions.get('window').height  ,
    //     justifyContent: "flex-end",
    //     alignItems: "center",
    //     display: 'flex',
    //     flex: 0.5,

    // },
    scrollIcon: {
        width: Dimensions.get('window').width * 0.059,
        height: Dimensions.get('window').height * 0.0439,

    },
    iconViewStart: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.35,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
        flexDirection: "column",
        position: "absolute",
        padding: 10
    },
    iconViewEnd: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.35,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-around",
        flexDirection: "column",
        position: "absolute",
        padding: 10
    },
    checkboxContainer: {
        width: Dimensions.get('window').width * 0.8,
        minHeight: Dimensions.get('window').height * 0.01,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: '#B275FF'
    },


    // text2: {
    //     width: Dimensions.get('window').width * 0.5,
    //     display: "flex",
    //     fontSize: 12,
    //     fontWeight: "bold",
    //     color: '#B275FF',
    //     alignItems: "center",
    //     justifyContent: "center",
    //     padding: 5
    // }
    // scrollIcon: {
    //     width: Dimensions.get('window').width * 0.085 ,
    //     height: Dimensions.get('window').height * 0.06,
    //     justifyContent:"space-between",
    //     alignItems:"center",


    // },
    // scrollView: {
    //     width: Dimensions.get('window').width * 1.9,
    //     height: Dimensions.get('window').height * 0.1,
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     flexDirection: "column",
    //     position: "absolute"
    // }
})