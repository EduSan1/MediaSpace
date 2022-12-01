import { async } from "@firebase/util";
import { StackRouterOptions } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, ToastAndroid } from "react-native";
import api from "../../../service";
import { BtnNewProject } from "../../components/utils/BtnNewProject";
import HeaderSearch from "../../components/utils/HeaderSearch";
import { LoginButton } from "../../components/utils/LoginButton";
import { ScrollImage } from "../../components/utils/ScrollImage";
import TabBar from "../../components/utils/TabBar";
import BtnBackPage from "../../components/utils/BtnBackPage"


interface IProject {
    navigation: any
    route: any
}

export const Project = ({ navigation, route }: IProject) => {
    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }



    const dateMask = (value: string) => {
        return value
            .split("T")[0].replace(/(\d{4})-(\d{2})-(\d{2})/, "$1/$2/$3")
    }
    const { projectId, userId } = route.params


    const [imageIndex, setImageIndex] = useState(0)
    const [projectLoad, setProjectLoad] = useState(false)
    const [categories, setCategories] = useState([{}])
    const [hasError, setHasError] = useState(false)

    const [project, setProject] = (useState)({
        id: "",
        name: "",
        description: "",
        value: "",
        estimated_deadline: "",
        finish_project_date: "",
        start_project_date: "",
        is_active: "",
        status: "",
        create_at: "",
        update_at: "",
        interest: [],
        sub_categories: [

        ],
        requirements: [],
        management: "",
        user: {
            id: "",
            first_name: "",
            last_name: "",
            nickname: "",
            birth_date: "",
            cpf: "",
            mai: "",
            password: "",
            biography: "",
            profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/profilePicture%2FWhatsApp%20Image%202022-10-17%20at%2017.49.13.jpeg?alt=media&token=7cde0a87-0125-45b1-b4e9-e86979334194",
            is_active: true,
            is_authenticated: true,
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
                ddi: null
            },
            teams: [],
            project_member: []
        },
        categories: [{}],
        images: [
            {
                url: ""
            }
        ]
    })

    const freelancerProject = async () => {
        const projectApi = {
            ...project.user,

        }
        console.log(projectApi)

        console.log(`/project/registerInterest/${project.id}`)

        api.post(`/project/registerInterest/${project.id}`, {
            freelancerId: userId
        }).then((res: any) => {
            if (res.data.statusCode === 201) {
                navigation.navigate("WorkersAppliedPage", {
                    projectId: res.data.data.id,
                })
            }
            ToastAndroid.show(res.data.message, 10)
            console.log(res.data)
        })
    }

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setProject(res.data.data)
        })
    }, [])


    return (
        <>
            <TabBar currentScreen="Project" navigateTo={navigateTo} />
            <View style={styles.btnBack}>
                <BtnBackPage navigation={navigation} />
            </View>
            <ScrollView style={styles.page} >


                <ScrollImage isActive={imageIndex == 4 ? false : true} userImage={project.images} setUserImage={(image: string) => { }} />


                <View style={styles.containerFilho}>
                    <View style={styles.containerDates} >
                        <View style={styles.conatinerDate}>
                            <Text style={styles.titleDate}>Criado em:  </Text>
                            <Text style={styles.date}>{dateMask(project.create_at)}</Text>
                        </View>

                        <Text style={styles.traco}>|</Text>

                        <View style={styles.conatinerDate}>
                            <Text style={styles.titleDate}>Prazo término: </Text>
                            <Text style={styles.date}>{dateMask(project.estimated_deadline)}</Text>
                        </View>
                    </View>

                    <View style={styles.containerProfile}>
                        <View style={styles.containerNameImage}>
                            <Image style={styles.image} source={{ uri: project.user.profile_picture }} />
                            <View>
                                <Text style={styles.nameUser}>{project.user.first_name} {project.user.last_name}</Text>
                                <Text style={styles.nicknameUser}>@{project.user.nickname}</Text>
                            </View>
                        </View >
                        <View>
                            <Text style={styles.value}>Valor estimado:</Text>
                            <Text style={styles.price}> R$ {project.value}</Text>
                        </View>
                    </View>

                    <View style={styles.containerTitle}>
                        <Text style={styles.nameProject}>{project.name}</Text>
                        <Text style={styles.describle}>{project.description}</Text>

                        <View style={styles.categ}>

                            <Image style={styles.divisor} source={require("../../../assets/icons/divisor.png")} />
                            {
                                project.categories.map((category: any) => {
                                    return <Text style={styles.categorySelected}>{category.name}</Text>

                                })
                            }

                            <Image style={styles.divisor} source={require("../../../assets/icons/divisor.png")} />
                        </View>



                        <View style={styles.button}>
                            <LoginButton type="dark" action={() => freelancerProject()} isLoad={projectLoad} title="Declarar interesse" />
                        </View>
                    </View>



                </View>
            </ScrollView>


        </>
    )

}

const styles = StyleSheet.create({

    containerFilho: {
        width: Dimensions.get('window').width,
        height: "auto",
        backgroundColor: '#fff',
    },

    containerDates: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerProfile: {
        height: Dimensions.get('window').height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerTitle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        padding: 20,
    },
    containerImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.21,
        backgroundColor: "blue"
    },
    containerNameImage: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
    },
    image: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get("window").width * 0.15,
        borderRadius: 100,
    },
    nameUser: {
        fontSize: 14,
        fontWeight: "400",
        paddingStart: 10,

    },
    nicknameUser: {
        fontSize: 14,
        fontWeight: "300",
        paddingStart: 10,
        color: '#B3B3B3'
    },
    value: {
        fontSize: 14,
        fontWeight: "400",
        color: '#B3B3B3'
    },
    price: {
        fontSize: 14,
        fontWeight: "500",
        color: '#30A851'
    },
    nameProject: {
        fontSize: 16,
        fontWeight: "bold",
    },
    titleDate: {
        fontSize: 14,
        fontWeight: "400",
    },
    traco: {
        fontSize: 25,
        fontWeight: "300",
        color: '#999999',

    },
    date: {
        fontSize: 14,
        fontWeight: "400",
        color: '#999999'
    },
    categ: {
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    divisor: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get("window").width * 0.005,
        borderRadius: 100,
        marginTop: 10
    },
    conatinerDate: {
        flexDirection: "row"
    },
    describle: {
        fontSize: 14,
        fontWeight: "300",
        color: '#4D4D4D'
    },
    categories: {
        margin: Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.05,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: 'row'
    },
    categorySelected: {
        paddingHorizontal: Dimensions.get('window').width * 0.06,
        margin: Dimensions.get('window').width * 0.03,
        height: Dimensions.get('window').height * 0.035,
        width: "auto",
        backgroundColor: "#C6D2FF",
        borderRadius: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        textAlign: 'center'
    },
    button: {
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10
    },
    btnBack: {
        width: Dimensions.get('window').width,
        height: Dimensions.get("window").height * 0.12,
        backgroundColor: "#fff",
        alignItems: 'flex-end',
        justifyContent: 'center',
        display: 'flex',
    },
    page: {
        backgroundColor: '#fff'
    }



})