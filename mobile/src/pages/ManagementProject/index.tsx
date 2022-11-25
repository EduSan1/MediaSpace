import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions, Pressable, ScrollView, Linking } from "react-native";
import api from "../../../service";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { IProject } from "../Profile/interfaces";
import { FullMetadata, getMetadata, getStorage, ref } from "firebase/storage";
import { async } from "@firebase/util";

interface IManagementProject {
    navigation: any,
    route: any
}

const ManagementProject = ({ navigation, route }: IManagementProject) => {

    const { projectId } = route.params

    const [project, setProject] = useState<IProject>({
        id: "",
        name: "",
        description: "",
        value: 0,
        status: "",
        estimated_deadline: "",
        finish_project_date: "",
        start_project_date: "",
        create_at: "",
        images: [{
            url: ""
        }],
        categories: [],
        navigation: [],
        interest: [
            {
                id: "",
                all_members_accept: false,
                is_selected: false,
                team: {
                    id: "",
                    name: "",
                    nickname: "",
                    description: "",
                    profile_picture: "",
                    general_evaluation: 0,
                    status: false,
                    is_active: false,
                    is_freelancer: false,
                    create_at: "",
                    update_at: ""
                },
                members: [
                    {
                        id: "",
                        is_active: false,
                        accept: false,
                        is_selected: false
                    }
                ]
            }
        ],
        sub_categories: [
            {
                id: "",
                name: "",
                is_active: false,
                create_at: "",
                update_at: ""
            }
        ],
        requirements: [
            {
                id: "",
                title: "",
                description: "",
                gain_percentage: 0,
                is_accepted: false,
                is_delivered: false,
                is_active: false,
                create_at: "",
                update_at: "",
                delivery: []
            }
        ],
        management: {
            id: "",
            payment_confirmed: false,
            payment_date: "",
            payment_type: "",
            create_at: "",
            update_at: "",
            team_project_management: [
                {
                    id: "",
                    is_active: false,
                    team: {
                        id: "",
                        name: "",
                        nickname: "",
                        description: "",
                        profile_picture: "",
                        general_evaluation: 0,
                        status: false,
                        is_active: false,
                        is_freelancer: false,
                        create_at: "",
                        update_at: "",
                        categories: [
                            {
                                id: "",
                                name: "",
                                icon: "",
                                is_active: false,
                            }
                        ],
                        sub_categories: [
                            {
                                id: "",
                                name: "",
                                is_active: false
                            }
                        ]
                    }
                }],
            members: []
        },
        user: {
            id: "",
            first_name: "",
            last_name: "",
            nickname: "",
            birth_date: "",
            cpf: "",
            mail: "",
            biography: "",
            profile_picture: "",
            is_active: false,
            is_authenticated: false,
            create_at: "",
            update_at: "",
            gender: {
                id: "",
                gender: "",
                create_at: "",
                update_at: ""
            },
            phone: {
                id: "",
                ddd: "",
                phone: "",
                ddi: ""
            },
            teams: [],
            project_member: []
        }
    })

    const getMetadataFromDelivery = async (link: string) => {
        const storage = getStorage();

        const forestRef = ref(storage, link);

        // Get metadata properties
        console.log(link)
        console.log("==================")
        console.log(getMetadata(forestRef)
            .then((metadata: FullMetadata) => {
                console.log(metadata)
                return (
                    <Pressable onPress={() => downloadFile(link)} style={styles.deliveryDocumentContainer}>
                        <Text> {metadata.name}</Text>
                    </Pressable>
                )
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
            })
        )
        return <></>

    }

    const downloadFile = async (link: string) => {
        Linking.openURL(link)
    }

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setProject(res.data.data)
        })
        console.log("a")
        getMetadataFromDelivery("https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/teste%2FMediaSpace%20v.2.1.1%20(1).docx?alt=media&token=e66bd6e2-9049-4dc3-a740-a98e9181bfd9")
    }, [])



    return (
        <ScrollView style={styles.container}>
            <View style={styles.navBar}>
                <Pressable style={styles.btnStyle} onPress={() => navigation.goBack()}>
                    <Image style={styles.icon} source={require('../../../assets/icons/previous.png')} />
                </Pressable>
                <Text style={styles.navBarTitle}> Projeto em execução</Text>
            </View>

            <View style={styles.containerProject}>
                <View style={styles.userContainer}>
                    <Image style={styles.userImage} source={{ uri: project.user.profile_picture }} />
                    <View style={styles.userDetailsContainer}>
                        <Text style={styles.userName}>{project.user.first_name} {project.user.last_name}</Text>
                        <Text style={styles.userNickname}>@{project.user.nickname}</Text>
                    </View>
                    <Image style={styles.projectIcon} source={require('../../../assets/icons/graphicsIcon.png')} />
                </View>

                <View style={styles.projectDetailsContainer}>
                    <Image style={styles.projectImage} source={{ uri: project.images[0].url }} />
                    <View style={styles.projectDetails}>
                        <Text style={styles.projectTitle}>{project.name}</Text>
                        <Text style={styles.ProjectDescription}>{project.description}</Text>
                    </View>
                </View>

                <View style={styles.freelancerContainer}>
                    <Text style={styles.projectTitle}>Em execução por:</Text>
                    <View style={styles.freelancerDetailsContainer}>
                        <Image style={styles.freelancerImage} source={{ uri: project.management.team_project_management[0].team.profile_picture }} />
                        <View>
                            <Text style={styles.freelancerName}>{project.management.team_project_management[0].team.name}</Text>
                            <Text style={styles.freelancerNickname}>@{project.management.team_project_management[0].team.nickname}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>Acompanhamento</Text>
                <View style={styles.attendanceContainer}>
                    <View style={styles.attendanceEstimatedDeadLine}>
                        <Text style={styles.attendanceEstimatedDeadLineText}>Estimativa de entrega final:</Text>
                        <Text style={styles.attendanceEstimatedDeadLineText}>{project.estimated_deadline.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</Text>
                    </View>
                    <Text style={styles.progressTitle}>Andamento</Text>
                    <ScrollView horizontal={true} style={styles.progressBarContainer}>
                        <View style={styles.progressBarItem}></View>
                    </ScrollView>
                    <Text style={styles.progressTitle}>Validação</Text>
                    <Text style={styles.requirementsExplanation}>
                        Valide as entregas feitas pelo prestador.
                        Caso uma delas não atenda aos seus requisitos, você pode recusá-la até que te satisfaça
                    </Text>
                    <View style={styles.requirementsContainer}>
                        {project.requirements.map((requirement: any) => {
                            return (
                                <View style={styles.requirementContainer}>
                                    <Text style={styles.requirementTitle}>Requisito - {requirement.title}</Text>
                                    {
                                        requirement.delivery.map((delivery: any, index: number) => {

                                            if (delivery.is_active) {
                                                if (delivery.is_accepted === true) {


                                                    return (
                                                        <View style={styles.deliveryContainer}>
                                                            <View style={styles.deliveryTitleContainer}>
                                                                <View style={styles.check}>
                                                                    <Image style={styles.checkIcon} source={require("../../../assets/icons/check.png")} />
                                                                </View>
                                                                <Text style={styles.deliveryTitle}>{`${index + 1}/${project.requirements.length} - ${delivery.title}`}</Text>
                                                            </View>
                                                            <View style={styles.deliveryDocumentContainer}>

                                                            </View>
                                                            <Text style={styles.deliveryAccepted}>Validado ✓</Text>
                                                        </View>

                                                    )
                                                }


                                                else if (delivery.is_accepted === false)
                                                    return (

                                                        <View style={styles.deliveryContainer}>
                                                            <View style={styles.deliveryTitleContainer}>
                                                                <View style={styles.check}>
                                                                    <Image style={styles.checkIcon} source={require("../../../assets/icons/check.png")} />
                                                                </View>
                                                                <Text style={styles.deliveryTitle}>{`${index + 1}/${project.requirements.length} - ${delivery.title}`}</Text>
                                                            </View>
                                                            <View style={styles.deliveryDocumentContainer}>

                                                            </View>
                                                            <Text style={styles.deliveryNotAccepted}>Recusada ✕</Text>
                                                        </View>
                                                    )

                                                else
                                                    return (
                                                        <>
                                                            <View style={styles.deliveryContainer}>
                                                                <View style={styles.deliveryTitleContainer}>
                                                                    <View style={styles.check}>
                                                                        <Image style={styles.checkIcon} source={require("../../../assets/icons/check.png")} />
                                                                    </View>
                                                                    <Text style={styles.deliveryTitle}>{`${index + 1}/${project.requirements.length} - ${delivery.title}`}</Text>
                                                                </View>
                                                                {getMetadataFromDelivery((delivery.files[0].url))}
                                                                <View style={styles.deliveryButtonContainer}>
                                                                    <Pressable style={{ ...styles.deliveryButton, backgroundColor: "#B275FF" }}><Text style={styles.deliveryButtonText}>Aceitar</Text></Pressable>
                                                                    <Pressable style={{ ...styles.deliveryButton, backgroundColor: "#FF6666" }}><Text style={styles.deliveryButtonText}>Recusar</Text></Pressable>
                                                                </View>
                                                            </View>

                                                        </>
                                                    )
                                            }

                                        })

                                    }
                                    {
                                        requirement.delivery.length === 0 &&
                                        <Text>Aguardando entrega</Text>
                                    }


                                </View>
                            )
                        })
                        }
                    </View>






                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>Detalhes</Text>
                    <View style={styles.detailsItemContainer}>
                        <Text style={styles.detailsItemTitle}>Pedido feito em: </Text>
                        <Text style={styles.detailsItemText}>{project.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</Text>
                    </View>
                    <View style={styles.detailsItemContainer}>
                        <Text style={styles.detailsItemTitle}>Inicio do projeto: </Text>
                        <Text style={styles.detailsItemText}>{project.management.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</Text>
                    </View>
                    <View style={styles.detailsItemContainer}>
                        <Text style={styles.detailsItemTitle}>Quantidade de requisitos: </Text>
                        <Text style={styles.detailsItemText}>{project.requirements.length}</Text>
                    </View>
                    <View style={styles.detailsItemContainer}>
                        <Text style={styles.detailsItemTitle}>Quantidade de entregas: </Text>
                        <Text style={styles.detailsItemText}>{project.requirements.filter((requirement: any) => requirement.delivery.length > 0).length}</Text>
                    </View>
                    <View style={styles.detailsItemContainer}>
                        <Text style={styles.detailsItemTitle}>Estimativa de entrega final: </Text>
                        <Text style={styles.detailsItemText}>{project.estimated_deadline.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</Text>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        height: "auto",
        backgroundColor: "#fff"
    },
    navBar: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.15,
        backgroundColor: "#fff",
        borderBottomColor: "#bbb",
        borderBottomWidth: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 25,
        paddingLeft: 20,
        marginBottom: 15
    },
    btnStyle: {
        backgroundColor: 'rgba(0,0,0,0.25)',
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
    },
    icon: {
        width: Dimensions.get('window').width * 0.07,
        height: Dimensions.get('window').width * 0.05,
    },
    navBarTitle: {
        fontSize: 22,
        color: "#75A5FF",
        fontWeight: "800"
    },
    containerProject: {
        width: Dimensions.get('window').width,
        height: "auto",
        backgroundColor: "#fff",
        borderColor: "#DBDFE8",
        borderWidth: 1,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        display: "flex",
        alignItems: "center"
    },
    userContainer: {
        width: "100%",
        height: Dimensions.get('window').height * 0.12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    userImage: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        borderRadius: 100,
    },
    userDetailsContainer: {
        width: "65%",
        height: Dimensions.get('window').height * 0.08,
        display: "flex",
        justifyContent: "space-evenly",
        paddingLeft: 20
    },
    userName: {
        fontSize: 18,
        color: "#000",
        fontWeight: "400"
    },
    userNickname: {
        fontSize: 16,
        color: "#999",
        fontWeight: "400"
    },
    projectIcon: {
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
    },
    projectDetailsContainer: {
        width: "90%",
        height: Dimensions.get('window').height * 0.18,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor: "#DBDFE8",
        borderBottomWidth: 2,

    },
    projectImage: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.25,
        borderRadius: 10,
        marginRight: 10
    },
    projectDetails: {
        width: Dimensions.get('window').width * 0.45,
        height: "80%"
    },
    projectTitle: {
        fontSize: 18,
        color: "#000",
        fontWeight: "400"
    },
    ProjectDescription: {
        fontSize: 14,
        color: "#999",
        fontWeight: "400"
    },
    freelancerContainer: {
        width: "90%",
        height: Dimensions.get('window').height * 0.12,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        borderBottomColor: "#DBDFE8",
        borderBottomWidth: 2,
    },
    freelancerDetailsContainer: {
        width: "65%",
        height: Dimensions.get('window').height * 0.06,
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center"
    },
    freelancerImage: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        marginRight: 10,
        borderRadius: 100,
    },
    freelancerName: {
        fontSize: 14,
        color: "#000",
        fontWeight: "400"
    },
    freelancerNickname: {
        fontSize: 12,
        color: "#999",
        fontWeight: "400"
    },
    title: {
        fontSize: 24,
        color: "#000",
        fontWeight: "800",
        height: Dimensions.get('window').height * 0.07,
        width: "90%",
        textAlignVertical: "center"
    },
    attendanceContainer: {
        height: "auto",
        width: "98%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        marginBottom: 30,
        borderColor: "#DBDFE8",
        borderRadius: 20
    },
    attendanceEstimatedDeadLine: {
        minHeight: Dimensions.get('window').height * 0.1,
        width: "100%",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingLeft: 20,
        backgroundColor: "#C6D2FF",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    attendanceEstimatedDeadLineText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "500"
    },
    progressTitle: {
        fontSize: 20,
        color: "#000",
        fontWeight: "800",
        height: Dimensions.get('window').height * 0.07,
        width: "90%",
        textAlignVertical: "center"
    },
    progressBarContainer: {
        maxHeight: Dimensions.get('window').height * 0.1,
        minHeight: Dimensions.get('window').height * 0.1,
        width: "90%",
        backgroundColor: "#C6f2FF",
    },
    progressBarItem: {
        maxHeight: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.7,
        backgroundColor: "#0602FF50",
    },
    requirementsExplanation: {
        fontSize: 17,
        color: "#000",
        fontWeight: "400",
        width: "90%",
        marginBottom: 20
    },
    requirementsContainer: {
        // minHeight: Dimensions.get('window').height * 0.30,
        height: "auto",
        width: "90%",
    },
    requirementContainer: {

        height: "auto",
        width: "100%",
        borderTopWidth: 2,
        paddingTop: 5,
        borderColor: "#DBDFE8",
    },
    deliveryTitleContainer: {
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    requirementTitle: {
        fontSize: 18,
        color: "#75A5FF",
        fontWeight: "400",
        marginBottom: 4
    },
    check: {
        height: Dimensions.get('window').height * 0.02,
        width: Dimensions.get('window').height * 0.02,
        borderRadius: 100,
        backgroundColor: "#75A5FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    checkIcon: {
        width: "80%",
        height: "80%",
    },
    deliveryTitle: {
        fontSize: 14,
        color: "#888",
        fontWeight: "400"
    },
    deliveryContainer: {
        width: "100%",
        height: Dimensions.get('window').height * 0.24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    deliveryAccepted: {
        fontSize: 20,
        color: "#5FAC67",
        fontWeight: "700"
    },
    deliveryNotAccepted: {
        fontSize: 20,
        color: "#FF6666",
        fontWeight: "700"
    },
    deliveryButtonContainer: {
        width: "60%",
        height: Dimensions.get('window').height * 0.04,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    deliveryButton: {
        width: "45%",
        height: "100%",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    deliveryButtonText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "700"
    },
    deliveryDocumentContainer: {
        width: "90%",
        height: "45%",
        backgroundColor: "#E2E8FF",
        borderRadius: 15
    },
    detailsContainer: {
        width: Dimensions.get('window').width * 0.98,
        height: "auto",
        paddingBottom: 20,
        backgroundColor: "#fff",
        borderColor: "#DBDFE8",
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    detailsItemContainer: {
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        marginBottom: 10
    },
    detailsItemTitle: {
        color: "#000",
        fontSize: 16,
        fontWeight: "400"
    },
    detailsItemText: {
        color: "#999",
        fontSize: 16,
        fontWeight: "400"
    }
})

export default ManagementProject