import React, { useEffect, useState } from "react";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import api from "../../../../service";
import Selector from "../../../components/utils/Selector";
import { IFreelancerProjects, IMyProject, IProject, IUser, IUserProjects } from "../interfaces";
import { ProfileCardProject } from "../ProfileCardProject";

interface IProjectsToWork {
    navigation: any
    user: IUser
}

export const ProjectsToWorkPage = ({ navigation, user }: IProjectsToWork) => {

    const [userProject, setUserProject] = useState<IMyProject>({
        AWAITING_START: [],
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: []
    })

    const [selectedProjects, setSelectedProjects] = useState<IProject[]>([])


    const getProjects = async () => {
        api.get(`/project/freelancer/${user.id}`).then((res) => {
            setUserProject(res.data.data)
            setSelectedProjects(res.data.data.VALIDATING_REQUIREMENTS)
        })
    }

    useEffect(() => {
        getProjects()
    }, [user])

    return (
        <>
            <Text style={styles.title}>Projetos para trabalhar</Text>
            <Selector titleInitial="Validando Requisitos" setSelectedProjects={setSelectedProjects} userProjects={userProject} />
            <View style={styles.projectContainer}>
                {
                    selectedProjects.map((project: IProject) => {
                        return (
                            <ProfileCardProject name={project.name} navigation={navigation} user={project.user} value={project.value} key={project.id} categories={project.categories} description={project.description} id={project.id} image={project.images[0].url} status={project.status} />
                        )
                    })
                }
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    projectContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingTop: 20,

        paddingBottom: 30
    },
    title: {
        width: "100%",
        height: Dimensions.get('window').height * 0.1,
        display: "flex",
        textAlignVertical: "center",
        paddingLeft: 20,
        fontWeight: "800",
        fontSize: 26,
    }
})