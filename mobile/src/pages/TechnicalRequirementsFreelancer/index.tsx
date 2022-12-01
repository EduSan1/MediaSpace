import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button, Pressable, TextInput, Alert, ToastAndroid } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BtnBackPage from "../../components/utils/BtnBackPage";
import { CardRequirements } from "../../components/utils/CardRequirements";
import { BtnRequirements } from "../../components/utils/BtnRequeriments";
import { BtnConfirmRequirements } from "../../components/utils/btnConfirmRequeriments";
import { BtnCardRequirements } from "../../components/utils/BtnCardRequirements";
import ModalRequirements from "../../components/utils/ModalRequirements";
import api from "../../../service";
import { IProject } from "../Profile/interfaces";
import { IRequirement } from "../ManagementProject/RequirementCard";

interface ITechnicalRequirementsFrelancer {
    navigation: any
    route: any
}

export default function TechnicalRequirementsFrelancer({ navigation, route }: ITechnicalRequirementsFrelancer) {
    const [isModalVisible, setModalVisible] = useState(false);

    const onCloseModal = () => {
        setModalVisible(!isModalVisible)
        getProject()
    };

    const [project, setProject] = useState<IProject>()
    const [percentage, setPercentage] = useState(0)

    const { projectId, isOwner } = route.params

    const getProject = () => {
        api.get(`/project/${projectId}`).then((res) => {
            let project: IProject = res.data.data
            project = { ...project, requirements: project.requirements.filter((requirement: IRequirement) => requirement.is_accepted !== false) }
            setProject(project)
        })
    }

    const getPercentage = (array: number[]) => {
        let soma: number = 0
        for (var i = 0; i < array.length; i++)
            soma += array[i];

        setPercentage(soma)
    }

    const refuseRequirements = () => {
        api.post(`/project/denyRequirement/${projectId}`).then((res) => {
            console.log(res.data.data)
            ToastAndroid.show(res.data.message, 10)
            navigation.goBack()
        })
    }

    const acceptRequirements = () => {
        api.post(`/project/acceptRequirements/${projectId}`).then((res) => {
            console.log(res.data.data)
            ToastAndroid.show(res.data.message, 10)
            navigation.goBack()
        })
    }

    useEffect(() => {
        const percentageArray = project?.requirements.map((requirement: IRequirement) => requirement.gain_percentage)
        getPercentage(percentageArray ? percentageArray : [])
    }, [project])

    useEffect(() => {
        getProject()
    }, [])

    return (
        <>
            <BtnBackPage navigation={navigation} />
            <ScrollView style={style.Scroll}>
                <SafeAreaView>
                    <View style={style.titleSection}>
                        <Text style={style.text}>Requisitos técnicos - {project?.name}</Text>
                    </View>
                    {
                        project?.requirements.map((requirement: IRequirement) => {
                            return <CardRequirements projectValue={project.value} requirement={requirement} />
                        })
                    }
                    {
                        percentage <= 99 && !isOwner &&
                        <BtnCardRequirements action={() => setModalVisible(!isModalVisible)} />
                    }
                    <Text style={style.textValue}>Valor total do projeto: R$ {project?.value}</Text>
                    <View style={style.footerProject}>
                        <Text style={style.titleRequeriments}>Requisitos</Text>
                        <Text style={style.TextRequirements}>Caso esteja interessado em fazer mudanças ou adaptações nos requisitos, solicite uma revisão, só é permitido a edição assim que o cliente e o(s) prestador(es) aceitarem a solicitação.</Text>
                    </View>

                    {
                        isOwner ?
                            <View style={style.btnSection}>
                                <BtnConfirmRequirements color="#f66" label="Recusar requisitos" action={() => refuseRequirements()} />
                                <BtnConfirmRequirements color="#B275FF" label="Confirmar requisitos" action={() => acceptRequirements()} />
                            </View>
                            :
                            <View style={style.btnSection}>
                                <BtnConfirmRequirements color="#B275FF" label="Confirmar requisitos" action={() => navigation.goBack()} />
                            </View>
                    }
                    {
                        isModalVisible &&
                        <ModalRequirements percentage={percentage} projectId={projectId} onClose={() => onCloseModal()} />
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
    },
    text: {
        color: "#75A5FF",
        marginStart: 20,
        fontSize: Dimensions.get('window').height * 0.03,
        fontWeight: "900",
        marginTop: Dimensions.get('window').height * 0.12,
    },
    textValue: {
        color: "#75A5FF",
        marginStart: 20,
        fontSize: Dimensions.get('window').height * 0.027,
        fontWeight: "900",
        marginTop: Dimensions.get('window').height * 0.02,
    },
    titleSection: {
        width: Dimensions.get('window').width,
        height: "auto",
        marginBottom: Dimensions.get('window').height * 0.03,

    },
    footerProject: {
        marginHorizontal: Dimensions.get('window').width,
        width: Dimensions.get('window').width * 0.80,
        height: Dimensions.get('window').height * 0.22,
        alignSelf: "center",
        marginTop: 20,
        // backgroundColor: "blue",
    },
    titleRequeriments: {
        // marginhr:Dimensions.get('window').width * 0.08,
        fontSize: Dimensions.get('window').width * 0.05,

    },
    TextRequirements: {
        // marginLeft:Dimensions.get('window').width * 0.08,
        fontSize: 15,
        color: "#808080",
    },
    btnSection: {
        width: Dimensions.get('window').width,
        flexDirection: "row",
        justifyContent: "space-evenly",

        // // modal
    },
})