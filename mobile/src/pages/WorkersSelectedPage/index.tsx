import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BtnBackPage } from "../../components/utils/BtnBackPage";
import { CardRequirements } from "../../components/utils/CardRequirements";
import { BtnRequirements } from "../../components/utils/BtnRequeriments";
import { BtnConfirmRequirements } from "../../components/utils/btnConfirmRequeriments";
import { BtnCardRequirements } from "../../components/utils/BtnCardRequirements";
import WorkersAppliedProfile from "../../components/utils/WorkersAppliedProfile";
import BtnWorkerSelectdProfile from "../../components/utils/BtnWorkersSelectdProfile";

  
export default function WorkersSelectedPage() {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return (
        <>
            <BtnBackPage />
            <ScrollView style={style.Scroll}>
                <SafeAreaView>
                    <View style={style.titleSection}>
                        <Text style={style.text}>(Nome do projeto) - Candidatos</Text>
                    <View style={style.boxText}>
                        <Text style={style.TextRequirements}>Lista de todos os prestadores e equipes que declararam interesse no seu projeto, quando estiver pronto para dar início, execute o projeto e selecione um dos candidatos para trabalhar nele.</Text>
                        <Text style={style.TextRequirements}>Obs: recomendamos que abra um bate-papo com o prestador para que você possa conversar, esclarecer e tirar dúvidas sobre o projeto antes de executá-lo.</Text>
                    </View>
                    </View>
                        <BtnWorkerSelectdProfile/>
                        <BtnWorkerSelectdProfile/>
                        <BtnWorkerSelectdProfile/>
                        <BtnWorkerSelectdProfile/>
                      
                        <View style={style.BoxBtn}>

                        <BtnRequirements title="Selecionar"/>
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
        marginBottom: 20,
        fontSize: Dimensions.get('window').height * 0.03,
        fontWeight: "900",
        marginTop: Dimensions.get('window').height * 0.05,
    },
    titleSection: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        marginBottom:Dimensions.get('window').height * 0.01,
        justifyContent:"center",
        alignItems:"center",
    },

    TextRequirements:{
        fontSize:15,
        color:"#808080",
    },
    boxText:{
        marginStart: 20,
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.180,
    },
    BoxBtn:{
        marginTop:Dimensions.get('window').height * 0.025,
        width: Dimensions.get('window').width * 0.85,
        alignSelf:"center",
        // backgroundColor:"#000",
        alignItems:"flex-end"
    }

})