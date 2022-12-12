import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BtnBackPage from "../../components/utils/BtnBackPage";
import { CardRequirements } from "../../components/utils/CardRequirements";
import { BtnRequirements } from "../../components/utils/BtnRequeriments";
import { BtnConfirmRequirements } from "../../components/utils/btnConfirmRequeriments";
import { BtnCardRequirements } from "../../components/utils/BtnCardRequirements";
import WorkersAppliedProfile from "../../components/utils/WorkersAppliedProfile";
import api from "../../../service";

interface IWorkersAppliedPafe {
    navigation: any
    route: any
}
export default function WorkersAppliedPage({ navigation, route }: IWorkersAppliedPafe) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [interest, setInterest] = useState([{
        team: {
            name: "",
            profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8",
            nickname: ""
        }

    }])
    const { projectId } = route.params
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {

        api.get(`/project/${projectId}`).then((res) => {
            setInterest(res.data.data.interest)
        })

    }, [])

    return (
        <>
            <BtnBackPage navigation={navigation} />
            <ScrollView style={style.Scroll}>
                <SafeAreaView>
                    <View style={style.titleSection}>
                        <Text style={style.text}>Interessados</Text>
                        <View style={style.boxText}>
                            <Text style={style.TextRequirements}>Lista de todos os prestadores e equipes que declararam interesse no seu projeto, quando estiver pronto para dar início, execute o projeto e selecione um dos candidatos para trabalhar nele.</Text>
                            <Text style={style.TextRequirements}>Obs: recomendamos que abra um bate-papo com o prestador para que você possa conversar, esclarecer e tirar dúvidas sobre o projeto antes de executá-lo.</Text>
                        </View>
                    </View>
                    {
                        interest.map((interest: any) => {
                            return <WorkersAppliedProfile navigation={navigation} id={interest.team.id} icon={interest.team.profile_picture} name={interest.team.name} nickname={interest.team.nickname} />
                        })
                    }

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
        marginBottom: Dimensions.get('window').height * 0.03,
    },
    text: {
        color: "#75A5FF",
        marginBottom: 20,
        fontSize: Dimensions.get('window').height * 0.03,
        fontWeight: "900",
        marginTop: Dimensions.get('window').height * 0.05,
    },
    titleSection: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        marginBottom: Dimensions.get('window').height * 0.01,
        justifyContent: "center",
        alignItems: "center",
    },

    TextRequirements: {
        fontSize: 15,
        color: "#808080",
    },
    boxText: {
        marginStart: 20,
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.180,
    }

})