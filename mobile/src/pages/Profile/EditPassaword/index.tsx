import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, TextInput, ImageBackground } from "react-native";
import { BtnUpdateProfile } from "../../../components/BtnUpdtateProfile";
import BtnBackPage from "../../../components/utils/BtnBackPage";
import { BtnEdit } from "../../../components/utils/BtnEdit";
import { CategoryButton } from "../../../components/utils/CategoryButton";
import { CheckboxComponent } from "../../../components/utils/subCategory";
import api from "../../../../service"

interface IEditPassaword {
    navigation: any
    route : any
}

const EditPassaword = ({ navigation, route }: IEditPassaword) => {


    const {userId} = route.params
    const [EditPassaword, setEditPassaword] = useState({
        id : userId,
        password: "",
    })
    const handleChange = (text: string) => {
        if (text === "password") {
            setEditPassaword(
                {
                    ...EditPassaword,
                    password : text
                }
            )
        }

        console.log(userId)



    }
    const editUser = () =>{
        api.put(`/user/${userId}`, EditPassaword).then((res : any) => console.log(res.data))
    }
    return(
        <>
        <SafeAreaView style={styles.body}>
            <Text style={styles.text}>Digite sua nova Senha</Text>
        <TextInput style={styles.input} onChangeText={(text) => handleChange(text)}></TextInput>
        <View style={styles.BoxBtn}>

        <BtnUpdateProfile type="dark" title="Cancelar" action={() => navigation.goBack()}/>
        <BtnUpdateProfile type="light" title="Confirmar" action={editUser}/>
        </View>
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent:"center"
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
    },
    input: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.07,
        marginVertical: Dimensions.get('window').height * 0.1,
        backgroundColor:"white",
        borderWidth:2,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        borderRadius:20,
        alignSelf:"center",
        borderColor:"#B275FF",
        color:"#B275FF"
        
    },
    containerBtn:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    BoxBtn:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
})
export default EditPassaword