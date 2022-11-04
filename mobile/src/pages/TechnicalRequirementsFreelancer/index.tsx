import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button,Pressable, TextInput} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import  BtnBackPage from "../../components/utils/BtnBackPage";
import { CardRequirements } from "../../components/utils/CardRequirements";
import { BtnRequirements } from "../../components/utils/BtnRequeriments";
import { BtnConfirmRequirements } from "../../components/utils/btnConfirmRequeriments";
import { BtnCardRequirements } from "../../components/utils/BtnCardRequirements";

interface ITechnicalRequirementsFrelancer {
    navigation: any
}
  
export default function TechnicalRequirementsFrelancer({navigation}:ITechnicalRequirementsFrelancer) {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return (
        <>
            <BtnBackPage action={()=> navigation.navigate("Home")} />
            <ScrollView style={style.Scroll}>
                <SafeAreaView>
                    <View style={style.titleSection}>
                        <Text style={style.text}>Requisitos técnicos - Nome do projeto</Text>
                    </View>
                    <CardRequirements/>
                    <BtnCardRequirements action={() => setModalVisible(!isModalVisible)}/> 
                   <Text style={style.textValue}>Valor total do projeto: R$ 2.000,00</Text>
                    <View style={style.footerProject}>
                        <Text style={style.titleRequeriments}>Requisitos</Text>
                        <Text style={style.TextRequirements}>Caso esteja interessado em fazer mudanças ou adaptações nos requisitos, solicite uma revisão, só é permitido a edição assim que o cliente e o(s) prestador(es) aceitarem a solicitação.</Text>
                    </View>
                    <View style={style.btnSection}>
                        <BtnConfirmRequirements />
                    </View>
                    
                    <Modal
                    animationType="fade"
                    visible={isModalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(!isModalVisible);
                    }}>
                    <View style={style.centeredView}>
                        <View style={style.modalView}>

                            <View style={style.headerModal}>
                                <View style={style.BoxTextModal}>
                                    <Text style={style.TitleModal}>Criar Requisito</Text>
                                </View>
                                <View style={style.BoxBtnModal}>
                                    <Pressable
                                        style={style.buttonClose}
                                        onPress={() => setModalVisible(!isModalVisible)}>
                                        <Image style={style.IconClose} source={require('../../../assets/icons/CloseIconX.png')}/>
                                    </Pressable>
                                </View>
                            </View>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Titulo</Text>
                                </View>
                                <TextInput style={style.InputTitleModal} placeholder="Titulo..."></TextInput>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Descrião</Text>
                                </View>
                                <TextInput style={style.InputDescModal} placeholder="Descriçâo..."></TextInput>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Porcentual</Text>
                                </View>
                                <TextInput maxLength={3} keyboardType = 'numeric' style={style.InputTitleModal} placeholder="Porcentual..."></TextInput>
                                
                                <View style={style.boxBtn}>
                                    <BtnConfirmRequirements />
                                    
                                </View>
                        </View>
                    </View>
                    </Modal>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}
const style = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    Scroll: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {
        color:"#75A5FF",
        marginStart: 20,
        fontSize: Dimensions.get('window').height * 0.03,
        fontWeight: "900",
        marginTop: Dimensions.get('window').height * 0.12,
    },
    textValue: {
        color:"#75A5FF",
        marginStart: 20,
        fontSize: Dimensions.get('window').height * 0.027,
        fontWeight: "900",
        marginTop: Dimensions.get('window').height * 0.02,
    },
    titleSection: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.20,
        marginBottom:Dimensions.get('window').height * 0.03,

    },
    footerProject: {
        marginHorizontal:Dimensions.get('window').width ,
        width: Dimensions.get('window').width * 0.80,
        height: Dimensions.get('window').height * 0.22,
        alignSelf:"center",
        marginTop: 20,
        // backgroundColor: "blue",
    },
    titleRequeriments:{
        // marginhr:Dimensions.get('window').width * 0.08,
        fontSize:Dimensions.get('window').width * 0.05,

    },
    TextRequirements:{
        // marginLeft:Dimensions.get('window').width * 0.08,
        fontSize:15,
        color:"#808080",
    },
    btnSection:{
        width: Dimensions.get('window').width * 0.90,
        flexDirection:"row",
        justifyContent:"flex-end",
    
    // modal
    },
    modalView: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.8,
        
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonClose: {
        // backgroundColor: "green",
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        alignItems:"center",
        justifyContent:"center"
    },
    IconClose:{
        width: Dimensions.get('window').width * 0.07,
        height: Dimensions.get('window').width * 0.07,
    },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      headerModal:{
        // backgroundColor:"black",
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.064,
        flexDirection:"row"
      },
      BoxTextModal:{
        // backgroundColor:"black",
        width: Dimensions.get('window').width * 0.60,
        height: Dimensions.get('window').height * 0.064,
        justifyContent:"center"
      },
      TitleModal:{
        color:"#75A5FF",
        fontSize: Dimensions.get('window').height * 0.03,
        fontWeight: "900",
        marginStart:20
    },
      BoxBtnModal:{
        width: Dimensions.get('window').width * 0.30,
        height: Dimensions.get('window').height * 0.064,
        alignItems:"flex-end",

    },
    InputTitleModal: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.06,
        // backgroundColor:"black",
        borderWidth: 1,
        borderRadius: 5,
        border: 10,
        borderColor: "#000",
        flexDirection: "row",

    },
    InputDescModal: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.25,
        // backgroundColor:"black",
        borderWidth: 1,
        borderRadius: 5,
        border: 10,
        borderColor: "#000",
        flexDirection: "row",

    },
    TextInputModal:{
        
        fontSize: Dimensions.get('window').height * 0.024,
        fontWeight: "300",
        
    },
    TextBoxModal:{
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.05,
        marginTop:Dimensions.get('window').height * 0.01,
    },
    boxBtn:{
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.05,
        marginTop:Dimensions.get('window').height * 0.02,
        alignItems:"flex-end"
    }
})