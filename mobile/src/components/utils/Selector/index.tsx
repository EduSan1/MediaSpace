
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { IFreelancerProjects, IMyProject } from "../../../pages/Profile/interfaces";
import Option from "./Option";

interface ISelectorProps {
    userProjects: IMyProject
    titleInitial: string
    setSelectedProjects: React.Dispatch<React.SetStateAction<IProject[]>>
}

interface IProject {
    id: string
    name: string,
    description: string
    value: number
    images: [{
        url: string
    }]
    categories: any
    user: {
        id: string
        first_name: string
        nickname: string
        profile_picture: string
    },
    navigation: any

}

const Selector = ({ userProjects, setSelectedProjects, titleInitial }: ISelectorProps) => {

    const [hasOpen, setHasOpen] = useState(false)
    const [title, setTitle] = useState(titleInitial)

    useEffect(() => {
    }, [])

    return (
        <>
            <Pressable onPress={() => setHasOpen(!hasOpen)} style={styles.container}>
                <Text style={styles.title} >{title}</Text>
                {/* <Icon size={Dimensions.get('window').height * 0.025} name={"caretup"} /> */}
                <Icon size={Dimensions.get('window').height * 0.025} name={hasOpen ? "caretup" : "caretdown"} />
            </Pressable>

            {
                hasOpen && userProjects.AWAITING_START &&
                <Option action={() => {
                    setSelectedProjects(userProjects?.AWAITING_START)
                    setHasOpen(false)
                    setTitle("Aguardando inicio")
                }} title="Aguardando inicio" />
            }
            {
                hasOpen && userProjects.VALIDATING_REQUIREMENTS.length > 0 &&
                <Option action={() => {
                    setSelectedProjects(userProjects.VALIDATING_REQUIREMENTS)
                    setHasOpen(false)
                    setTitle("Validando Requisitos")

                }} title="Validando Requisitos" />
            }
            {
                hasOpen && userProjects.IN_EXECUTION.length > 0 &&
                <Option action={() => {
                    setSelectedProjects(userProjects.IN_EXECUTION)
                    setHasOpen(false)
                    setTitle("Em execução")

                }} title="Em execução" />
            }

            {
                hasOpen && userProjects.COMPLETE.length > 0 &&
                <Option action={() => {
                    setSelectedProjects(userProjects.COMPLETE)
                    setHasOpen(false)
                    setTitle("Completo")

                }} title="Completo" />
            }

            {
                hasOpen && userProjects.CANCELED.length > 0 &&
                <Option action={() => {
                    setSelectedProjects(userProjects.CANCELED)
                    setHasOpen(false)
                    setTitle("Cancelado")

                }} title="Cancelado" />
            }
        </>

    )

}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        backgroundColor: "#E3E8FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 30,
        paddingRight: 30,
    },

    title: {
        fontWeight: "800",
        fontSize: 26
    },
    containerOption: {
        width: "100%",
        height: "auto"
        ,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    option: {
        width: "100%",
        height: 80,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 30,
        paddingRight: 30,
        borderTopColor: "#EAEAEA",
        borderTopWidth: 2,

    }
})

export default Selector