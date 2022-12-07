import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, TextInput, ImageBackground } from "react-native";
import api from "../../../../service";
import * as SecureStore from 'expo-secure-store';
import TabBar from "../../../components/utils/TabBar";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BtnEditProfile } from "../../../components/utils/BtnEditProfile";
import { InputEditProfile } from "../../../components/utils/inputEditProfile";
import { LoginButton } from "../../../components/utils/LoginButton";
import { BtnEdit } from "../../../components/utils/BtnEdit";
import UpgradeClient from "../UpgradeClient";
import { BtnUpdateProfile } from "../../../components/BtnUpdtateProfile";



interface IEditUser {
    navigation: any
}

interface ICategory {
    name: string
    icon: string
}

interface IUserProjects {

    AWAITING_START: [],
    VALIDATING_REQUIREMENTS: [],
    IN_EXECUTION: [],
    COMPLETE: [],
    CANCELED: []
}

const EditUser = ({ navigation }: IEditUser) => {

    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }
    const dateMask = (value: string) => {
        return value
            .split("T")[0].replace(/(\d{4})-(\d{2})-(\d{2})/,"$3/$2/$1")
    }

    const [user, setUser] = useState({
        id: "",
        first_name: "",
        last_name: "",
        nickname: "",
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8",
        biography: "",
        birth_date: "",
        cpf: "",
        mail: "",
        gender: {
            id: "",
            gender: "Masculino",
        },
        phone:{
            id:"",
            phone:"",
            ddd:"",
        }
    })

    const [userCategories, setUserCategories] = useState<ICategory[]>([])

    const getUserInfo = async () => {
        const userId = await SecureStore.getItemAsync('userId')

        api.get(`user/${userId}`).then((res) => {
            setUser(res.data.data)
            res.data.data.teams[0].team.categories &&
                setUserCategories(res.data.data.teams[0].team.categories)
        })
    }

    useEffect(() => {
        getUserInfo()
    }, [])


    return (
        <>
            <TabBar currentScreen="Profile" navigateTo={navigateTo} />
            <SafeAreaView style={styles.main}>
                <ScrollView style={styles.scroll}>
                    <View>
                    <Image style={styles.starfield} source={require("../../../../assets/img/consteletion.png")} />
                    <LinearGradient style={styles.header} colors={['#1B2469', '#31418D', '#5A5BB4']}>
                    </LinearGradient>
                    </View>
                    <View style={styles.profileImageContainer}>
                        <Image source={{ uri: user.profile_picture }} style={styles.profileImage}></Image>
                        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                        <Text style={styles.nickname}>@{user.nickname}</Text>
                        <BtnEditProfile action={console.log}/>
                    </View>
                    {/* Container Infos */}
                    <View style={styles.editContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Suas Informações</Text>
                            <Icon size={Dimensions.get('window').height * 0.03} name={"lock-outline"} style={{ color: "#75A5FF" }} />
                        </View>

                        <View style={styles.infoContainer}>
                            {/* Name */}
                            <View style={styles.textBoxContainer}>
                                <View style={styles.textAlign}>
                                    <Text style={styles.textTitleInfo}>Nome</Text>
                                    <Text style={styles.textRequired}>*</Text>
                                </View>
                                <TextInput style={styles.textInfo}>{user.first_name}</TextInput>
                            </View>
                            {/* last Name */}
                            <View style={styles.textBoxContainer}>
                                <Text style={styles.textTitleInfo}>Sobrenome</Text>
                                <TextInput style={styles.textInfo}>{user.last_name}</TextInput>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                        {/* Nickname */}
                            <View style={styles.textBoxContainer}>
                                <View style={styles.textAlign}>
                                    <Text style={styles.textTitleInfo}>Nickname</Text>
                                    <Text style={styles.textRequired}>*</Text>
                                </View>
                                <TextInput style={styles.textInfo}>@{user.nickname}</TextInput>
                            </View>
                            {/* Cellphone */}
                            <View style={styles.textBoxContainer}>
                                <View style={styles.textAlign}>
                                    <Text style={styles.textTitleInfo}>Celular</Text>
                                </View>
                                <TextInput style={styles.textInfo}>{user.phone.ddd} {user.phone.phone}</TextInput>
                            </View>
                            
                        </View>
                        <View style={styles.infoContainer}>
                        {/* Email */}
                            <View style={styles.emailBox}>
                                <View style={styles.textAlign}>
                                    <Text style={styles.textTitleInfo}>Email</Text>
                                    <Text style={styles.textRequired}>*</Text>
                                </View>
                                <View style={styles.textAlign}>
                                <TextInput style={styles.textInfo}>{user.mail}</TextInput>
                                <Image source={require("../../../../assets/icons/notEditableIcon.png")} style={styles.Icon}/>
                                </View>
                            </View>

                        </View>
                        <View style={styles.infoContainer}>
                        {/* CPF */}
                            <View style={styles.textBoxContainer}>
                                <View style={styles.textAlign}>
                                    <Text style={styles.textTitleInfo}>CPF</Text>
                                    <Text style={styles.textRequired}>*</Text>
                                </View>
                                <TextInput style={styles.textInfo}>{user.cpf}</TextInput>
                            </View>
                            {/* Birth Date */}
                            <View style={styles.textBoxContainer}>
                                <View style={styles.textAlign}>
                                    <Text style={styles.textTitleInfo}>Data de nascimento</Text>
                                </View>
                                <TextInput style={styles.textInfo}>{dateMask(user.birth_date)}</TextInput>
                            </View>
                            
                        </View>
                        <View style={styles.infoContainer}>
                        {/* Biography */}
                            <View style={styles.biographyBox}>
                                <View style={styles.textAlign}>
                                    <Text style={styles.textTitleInfo} >Biografria</Text>
                                </View>
                                
                                <InputEditProfile name="biography" value={user.biography}   maxLength={800} />
                                <View style={styles.containerBtn}>
                                    <BtnUpdateProfile action={() => navigation.navigate("EditPassaword", {userId : user.id})} type="dark" title="Alterar Senha" />
                                    <BtnUpdateProfile action={() => console.log} type="light" title="Confirmar"/>
                                </View>
                            </View>
                        </View>
                        
                            <ImageBackground source={require("../../../../assets/img/upgradeCard.png")} style={styles.ImgUpgrade}>

                            <Text style={styles.TitleBanner}>Olá, {user.nickname}</Text>
                            <Text style={styles.TextBanner}>Para se tornar um prestador de serviço e ativar recursos de vendas use o upgrade de perfil</Text>
                            <Text style={styles.SubTextBanner}>Uma vez ativo, você não poderá desativar</Text>
                            <View style={styles.boxBtnBanner}>
                                <BtnEdit type="dark" title="Update" action={() => navigation.navigate("UpgradeClient")}/>
                            </View>
                            </ImageBackground>
                      

                    </View>
                    


                </ScrollView>
            </SafeAreaView>
        </>
    )

}
const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    scroll: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // position: "relative"

    },
    header: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        position:"absolute",
        
        


    },
    editContainer: {
        width: "100%",
        height:Dimensions.get('window').height * 2,
        backgroundColor: "#FFF",
        borderTopStartRadius:40,
        borderTopEndRadius:40,
        marginTop:Dimensions.get('window').height * 0.25,
        
    },
    profileImageContainer: {
        width: "100%",
        height: Dimensions.get('window').height * 0.1,
        position: "absolute",
        top: Dimensions.get('window').height * 0.15,
        display: "flex",
        alignItems: "center",
        zIndex:2
    },
    profileImage: {
        width: Dimensions.get('window').height * 0.2,
        height: Dimensions.get('window').height * 0.2,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 3,

    },
    title: {
        width: "auto",
        height: Dimensions.get('window').height * 0.1,
        display: "flex",
        textAlignVertical: "center",
        paddingLeft: 20,
        color: "#75A5FF",
        fontWeight: "500",
        fontSize: 20,
        marginRight: 2,
        
    },
    titleContainer: {
        width: "100%",
        paddingTop: Dimensions.get('window').height * 0.2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: 'row',
        // backgroundColor:"black"
    },
    textAlign:{
        flexDirection:"row",
        alignItems:"center"

    },
    name: {
        fontWeight: "300",
        fontSize: 22,
        color: "#000"
    },
    nickname: {
        fontWeight: "300",
        fontSize: 14,
        color: "#b3b3b3"
    },
    starfield: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 1,
        position: "absolute",
        zIndex: 1

    },
    infoContainer:{
        flexDirection:"row",
        // backgroundColor:"green",
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 1,
        marginBottom:Dimensions.get('window').height * 0.02,
    },
    textBoxContainer:{
        height:"100%",
        width: Dimensions.get('window').width * 0.3,
        // backgroundColor:"gray",
        justifyContent:"space-around",
        marginStart:Dimensions.get('window').width * 0.1,
        
        
    },
    textTitleInfo:{
        // backgroundColor:"blue",
        fontSize:16,
        fontWeight:"600",

    },
    textRequired:{
        color:"red",
        fontSize:16,
        marginStart:2
    },
    textInfo:{
        fontSize:16,
        fontWeight:"400",
        color:"#808080",
    },
    emailBox:{
        marginStart:Dimensions.get('window').width * 0.1,
        // backgroundColor:"black"
    },
    biographyBox:{
        marginStart:Dimensions.get('window').width * 0.1,
        // borderWidth:2,
        
    },
    Icon:{
        width:Dimensions.get('window').width * 0.04,
        height:Dimensions.get('window').width * 0.04,
        marginStart:Dimensions.get('window').width * 0.01,
        // backgroundColor:"gray"
    },
    ImgUpgrade:{
        position:"absolute",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height * 1.2,
        marginTop:Dimensions.get('window').width * 2.3,
        // justifyContent:"center",
        // alignItems:"center"
    },
    TitleBanner:{
        paddingTop:Dimensions.get('window').width * 0.7,
        paddingLeft:Dimensions.get('window').width * 0.15,
        fontSize:20,
        fontWeight:"700",
        color:"#B275FF"
        
    },
    TextBanner:{
        paddingTop:Dimensions.get('window').width * 0.05,
        paddingLeft:Dimensions.get('window').width * 0.05,
        paddingRight:Dimensions.get('window').width * 0.03,
        fontSize:15,
        fontWeight:"400",
    },
    SubTextBanner:{
        paddingTop:Dimensions.get('window').width * 0.02,
        paddingLeft:Dimensions.get('window').width * 0.24,
        paddingRight:Dimensions.get('window').width * 0.0,
        fontSize:13,
        fontWeight:"400",
        
    },
    boxBtnBanner:{
        marginTop:Dimensions.get('window').width * 0.14,
        alignItems:"center"
    },
    containerBtn:{
        paddingTop:Dimensions.get('window').width * 0.1,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    
})

export default EditUser