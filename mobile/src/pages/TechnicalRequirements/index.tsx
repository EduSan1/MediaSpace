import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BtnBackPage } from "../../components/utils/BtnBackPage";
import { CardRequirements } from "../../components/utils/CardRequirements";
import { BtnRequirements } from "../../components/utils/BtnRequeriments";
import { BtnConfirmRequirements } from "../../components/utils/btnConfirmRequeriments";
export default function TechnicalRequirements() {
    return (
        <>
            <BtnBackPage />
            <ScrollView style={style.Scroll}>
                <SafeAreaView>
                    <View style={style.titleSection}>
                        <Text style={style.text}>Requisitos técnicos - Nome do projeto</Text>
                    </View>
                    <CardRequirements/>
                    <CardRequirements/>
                    <CardRequirements/>
                    <CardRequirements/>
                    <CardRequirements/>
                    <CardRequirements/>
                    <CardRequirements/>
                   <Text style={style.textValue}>Valor total do projeto: R$ 2.000,00</Text>
                    <View style={style.footerProject}>
                        <Text style={style.titleRequeriments}>Requisitos</Text>
                        <Text style={style.TextRequirements}>Caso esteja interessado em fazer mudanças ou adaptações nos requisitos, solicite uma revisão, só é permitido a edição assim que o cliente e o(s) prestador(es) aceitarem a solicitação.</Text>
                    </View>
                    <View style={style.btnSection}>
                        <BtnRequirements title="Revisar"/>
                        <BtnConfirmRequirements/>
                    </View>          
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
        flexDirection:"row",
        justifyContent:"space-evenly",
    }

})