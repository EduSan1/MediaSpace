import React, { useState, useEffect } from "react"
import { View, StyleSheet, Dimensions, ScrollView, Text, Image } from "react-native"
import { ScrollImage } from "../../components/utils/ScrollImage";
import { LoginButton } from "../../components/utils/LoginButton";
import api from "../../../service";
import TabBar from "../../components/utils/TabBar";


interface IProject {
    navigation: any
    route: any
}

export const ProjectOwner = ({ navigation, route }: IProject) => {
    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    const [imageIndex, setImageIndex] = useState(0)
    const [projectLoad, setProjectLoad] = useState(false)
    const [categories, setCategories] = useState([{}])
    const [hasError, setHasError] = useState(false)
    const { projectId } = route.params

    const [projectOwner, setProjectOwner] = (useState)({
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


    const handleUserPicture = (text: any) => {

        console.log("images => ", text)
        let newImages = projectOwner.images

        newImages[imageIndex] = { url: text }

        setProjectOwner({

            ...projectOwner,
            images: newImages
        })

        setImageIndex(imageIndex + 1)
    }

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setProjectOwner(res.data.data)
        })
    }, [])


    return (
        <>
            <TabBar currentScreen="ProjectOwner" navigateTo={navigateTo} />


            <ScrollView style={styles.container}>
                <ScrollImage isActive={imageIndex == 4 ? false : true} userImage={projectOwner.images} setUserImage={(image: string) => { }} />

                <View style={styles.containerFilho}>
                    <View style={styles.containerDate}>
                        <Text style={styles.date}>Criado em: {projectOwner.create_at} </Text>
                        <Text style={styles.date}>Prazo término: {projectOwner.estimated_deadline}</Text>
                    </View>

                    <View style={styles.containerProfile}>
                        <Image style={styles.image} source={{ uri: projectOwner.user.profile_picture }} />
                        <Text style={styles.title}>Valor estiamdo: {projectOwner.value}</Text>
                    </View>

                    <View style={styles.containerTitle}>
                        <Text style={styles.title2}>{projectOwner.name}</Text>
                        <Text style={styles.describle}> {projectOwner.description}</Text>

                        <View style={styles.categories}>
                            <Text style={styles.title}>Categoria</Text>
                            {
                                projectOwner.categories.map((category: any) => {
                                    return <Text style={styles.categorySelected}>{category.name}</Text>

                                })
                            }

                            <Text style={styles.title}>Subcategoria</Text>
                            {
                                projectOwner.sub_categories.map((sub_category: any) => {
                                    return <Text style={styles.categorySelected}>{sub_category.name}</Text>

                                })
                            }
                        </View>

                        <View style={styles.button}>
                            <LoginButton type="light" action={() => console.log('teste')} isLoad={projectLoad} title="Executar Projeto" />
                        </View>

                        <Text style={styles.title}>Prestadores que se candidataram</Text>
                    </View>



                </View>
            </ScrollView>


        </>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: "flex",
        height: Dimensions.get('window').height * 0.01,
    },
    fix: {
        width: Dimensions.get('window').width,

    },
    containerFilho: {
        width: Dimensions.get('window').width,
        height: "auto",
    },
    bar: {
        height: Dimensions.get('window').height * .08,
        width: Dimensions.get('window').width,
        backgroundColor: "#f3fff1"
    },

    containerDate: {
        height: Dimensions.get('window').height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 34,
        padding: 20,
        justifyContent: 'space-around'
    },
    containerProfile: {
        height: Dimensions.get('window').height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-around'
    },
    containerTitle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        padding: 20,
    },
    image: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get("window").width * 0.2,
        borderRadius: 100
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    describle: {
        fontSize: 16
    },
    categories: {
        margin: Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.25,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    categorySelected: {
        paddingHorizontal: Dimensions.get('window').width * 0.06,
        margin: Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.04,
        backgroundColor: "#75A5FF",
        borderRadius: 100,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        textAlign: 'center'

    },
    button: {
        width: Dimensions.get('window').width,
        justifyContent: "center",
        alignItems: "center",

    },
    date: {
        fontSize: 10
    }


})