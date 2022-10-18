import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BtnBackPage } from "../../components/utils/BtnBackPage";

export default function TechnicalRequirements() {
    return (
        <>
            <BtnBackPage />
            <ScrollView style={style.Scroll}>
                <SafeAreaView>
                    <View style={style.titleSection}>
                        <Text style={style.text}>Requisitos técnicos - Nome do projeto</Text>
                    </View>
                    {/* Requisitos */}
                    <View style={style.sectionProject}>
                        <View style={style.textIcon}>
                            <Image style={style.icon} source={require('../../../assets/icons/checkedImage.png')}/>
                            <Text style={style.textStatusRequeriments}>01 - Entregue</Text>
                        </View>
                        <Text style={style.titleRequeriments}>Layout</Text>
                        <Text style={style.TextRequirements}>O layout define como o app inteiro será representado bla bla bla </Text>
                        <View style={style.cardRequirements}>
                            <Text style={style.TextCardRequirements}>Porcentagem do valor: 25%</Text>
                            <Text style={style.TextCardRequirements}> Valor = R$ 500,00</Text>
                        </View>
                    </View>


                    <View style={style.sectionProject}></View>
                    <View style={style.sectionProject}></View>
                    <View style={style.sectionProject}></View>
                    <View style={style.sectionProject}></View>
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
        fontSize: 24,
        fontWeight: "900",
        marginTop: Dimensions.get('window').height * 0.12,
    },
    titleSection: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.20,
        marginBottom:Dimensions.get('window').height * 0.03,
        // backgroundColor:"blue",
    },
    sectionProject: {
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.22,
        alignSelf:"center",
        marginVertical: 20,
        // backgroundColor: "blue",
    },
    textStatusRequeriments:{
        fontSize:18,
        color:"#75A5FF",
        fontWeight:"300",
        paddingLeft:10,
    },
    textIcon:{
        flexDirection:"row"
    },
    icon:{
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06,
    },
    titleRequeriments:{
        marginLeft:Dimensions.get('window').width * 0.08,
        fontSize:18,
    },
    TextRequirements:{
        marginLeft:Dimensions.get('window').width * 0.08,
        fontSize:15,
        color:"#808080",
    },
    cardRequirements:{
        marginLeft:Dimensions.get('window').width * 0.08,
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.10,
        backgroundColor:"#CECCFD",
        borderRadius:10,
    },
    TextCardRequirements:{
        marginTop:10,
        marginLeft:Dimensions.get('window').width * 0.02,
        fontSize:17,
        color:"#756DE6",
    }

})