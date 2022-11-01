import { StackRouterOptions } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import api from "../../../service";
import { BtnNewProject } from "../../components/utils/BtnNewProject";
import HeaderSearch from "../../components/utils/HeaderSearch";
import { LoginButton } from "../../components/utils/LoginButton";
import { ScrollImage } from "../../components/utils/ScrollImage";
import TabBar from "../../components/utils/TabBar";


interface IProject {
    navigation: any
    route : any
}

export const Project = ({ navigation, route }: IProject) => {
    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    const dateMask = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d{4})/, "$1/$2")
    }
    const {projectId} = route.params


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
                url : ""
            }
        ]
    })

    const handleChange = (text : string, name : string) => {
        if ( name === "update_at" ) {
            setProject(
                {
                    ...project,
                    [name]: dateMask(text)               
                }
            )
        }else {
            setProject(
                {
                    ...project,
                    [name] : text
                }
            )
        }
    }

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any)=>{
            setProject(res.data.data)
         })
     }, [])


    return (
        <>
            <TabBar currentScreen="Project" navigateTo={navigateTo} />
            <View style={styles.navigationBar}></View>

            <View style={styles.fix}>
                <ScrollView style={styles.container}> 
                 <ScrollImage isActive={imageIndex == 4 ? false : true} userImage={project.images} setUserImage={(image: string)  => {} } /> 

                    <View style={styles.containerFilho}>
                           <View style={styles.containerDate} >
                            <Text style={styles.title3} >Criado em: {project.create_at} </Text>
                            <Text style={styles.title3}>Prazo término: {project.estimated_deadline}</Text>
                        </View>

                   <View style={styles.containerProfile}>
                            <Image style={styles.image} source={{uri : project.user.profile_picture }} /> 
                            <Text style={styles.title}>Valor estiamdo: {project.value}</Text>
                        </View>

                        <View style={styles.containerTitle}>
                            <Text style={styles.title2}>{project.name}</Text>
                            <Text style={styles.describle}> {project.description}</Text>

                             <View style={styles.categories}>
                                <Text style={styles.title}>Categoria</Text>
                                {
                                    project.categories.map((category : any) => {
                                        return <Text style={styles.categorySelected}>{category.name}</Text>

                                    })
                                }
                             </View>

                                
                                <Text style={styles.title}>Subcategoria</Text>
                                {
                                    project.sub_categories.map((sub_category : any) => {
                                        return <Text style={styles.categorySelected}>{sub_category.name}</Text>

                                    })
                                }
                            

                             <View style={styles.button}>
                                <LoginButton type="light" action={() => console.log('teste')} isLoad={projectLoad} title="Participar" />
                            </View>
                        </View>



                    </View> 
                </ScrollView>  
            </View>

            <View style={styles.bar}></View>
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
        height: Dimensions.get('window').height * 2,
    },
    containerFilho: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 2,
    },
    bar: {
        height: Dimensions.get('window').height * .08,
        width: Dimensions.get('window').width,
        backgroundColor: "#f3fff1"
    },
    navigationBar: {
        height: Dimensions.get('window').height * .12,
        width: Dimensions.get('window').width,
        backgroundColor: "#f3fff1"
    },
    containerDate: {
        height: Dimensions.get('window').height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 34,
        justifyContent: 'space-around'
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
    image: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get("window").width * 0.2,
        borderRadius: 100
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title2: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    title3: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    describle: {
        fontSize: 16
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
        margin: Dimensions.get('window').width * 0.01,
        height: Dimensions.get('window').height * 0.04,
        backgroundColor: "#75A5FF",
        borderRadius: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        textAlign: 'center'

    },
    button: {
        width: Dimensions.get('window').width,
        justifyContent: "center",
        alignItems: "center",
        padding: 10

    },


})