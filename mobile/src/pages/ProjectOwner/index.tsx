import React, { useState, useEffect } from "react"
import { View, StyleSheet, Dimensions, ScrollView, Text, Image } from "react-native"
import { ScrollImage } from "../../components/utils/ScrollImage";
import { LoginButton } from "../../components/utils/LoginButton";
import api from "../../../service";
import BtnBackPage from "../../components/utils/BtnBackPage"
import { CategoryButton } from "../../components/utils/CategoryButton";



interface IProject {
    navigation: any
    route: any
}

export const ProjectOwner = ({ navigation, route }: IProject) => {
    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    const dateMask = (value: string) => {
        return value
            .split("T")[0].replace(/(\d{4})-(\d{2})-(\d{2})/, "$1/$2/$3")
    }

    const [imageIndex, setImageIndex] = useState(0)
    const [projectLoad, setProjectLoad] = useState(false)
    const [categories, setCategories] = useState([{}])
    const [hasError, setHasError] = useState(false)
    const { projectId } = route.params

    const [projectOwner, setProjectOwner] = useState({
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
            profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8",
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


    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setProjectOwner(res.data.data)
        })
    }, [])


    return (
        <>

            <View style={styles.btnBack}>
                <BtnBackPage navigation={navigation} />
            </View>

            <ScrollView style={styles.page}>

                <ScrollImage isActive={imageIndex == 4 ? false : true} userImage={projectOwner.images} setUserImage={(image: string) => { }} />

                <View style={styles.containerFilho}>
                    <View style={styles.containerDates}>

                        <View style={styles.containerDate}>
                            <Text style={styles.date}>Criado em: </Text>
                            <Text>{dateMask(projectOwner.create_at)}</Text>

                        </View>

                        <Text style={styles.traco}>|</Text>

                        <View style={styles.containerDate}>
                            <Text style={styles.date}>Prazo t??rmino: </Text>
                            <Text>{dateMask(projectOwner.estimated_deadline)}</Text>
                        </View>

                    </View>

                    <View style={styles.containerProfile}>
                        <View style={styles.containerNameImage}>
                            <Image style={styles.image} source={{ uri: projectOwner.user.profile_picture }} />
                            <View>
                                <Text style={styles.nameUser}>{projectOwner.user.first_name} {projectOwner.user.last_name}</Text>
                                <Text style={styles.nicknameUser}>@{projectOwner.user.nickname}</Text>
                            </View>

                        </View >
                        <View>
                            <Text style={styles.value}>Valor estimado:</Text>
                            <Text style={styles.price}> R$ {projectOwner.value}</Text>
                        </View>
                    </View>

                    <View style={styles.containerTitle}>
                        <Text style={styles.nameProject}>{projectOwner.name}</Text>
                        <Text style={styles.describle}> {projectOwner.description}</Text>

                        <View style={styles.categ}>

                            <Image style={styles.divisor} source={require("../../../assets/icons/divisor.png")} />
                            {
                                projectOwner.categories.map((category: any) => {
                                    return <CategoryButton action={() => { }} category={category.name} icon={category.icon} id={category.id} setSubCategories={() => { }} />

                                })
                            }

                            <Image style={styles.divisor} source={require("../../../assets/icons/divisor.png")} />
                        </View>
                    </View>

                    <View style={styles.button}>
                        <LoginButton type="dark" action={() => navigation.navigate("WorkersAppliedPage", { projectId: projectId })} isLoad={projectLoad} title="Visualizar Interessados" />
                    </View>


                    <View style={styles.button}>
                        <LoginButton type="light" action={() => navigation.navigate("WorkersSelectedPage", { projectId: projectId, projectName: projectOwner.name })} isLoad={projectLoad} title="Executar Projeto" />
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
        backgroundColor: '#fff'
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
        height: "auto",
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    divisor: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get("window").width * 0.005,
        borderRadius: 100,
    },
    containerDate: {
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
        textAlignVertical: "center",
        borderRadius: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        textAlign: 'center'
    },
    button: {
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10,

    },
    btnBack: {
        width: Dimensions.get('window').width,
        height: Dimensions.get("window").height * 0.12,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    page: {
        backgroundColor: '#fff'
    }




})