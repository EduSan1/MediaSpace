import { StackRouterOptions } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
        categories: [{}],
        images: [
            {
                url : ""
            }
        ]
    })

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any)=>{
            setProject(res.data.data)
            console.log(res.data.data)
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
                           <View style={styles.containerDate}>
                            <Text style={styles.title}>Criado em: {project.create_at} </Text>
                            <Text style={styles.title}>Prazo término: {project.estimated_deadline}</Text>
                        </View>

                   <View style={styles.containerProfile}>
                            <Image style={styles.image} source={require("../../../assets/icons/facebook.png")} /> 
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

                                <Text style={styles.title}>Subcategoria</Text>
                                {
                                    project.sub_categories.map((sub_category : any) => {
                                        return <Text style={styles.categorySelected}>{sub_category.name}</Text>

                                    })
                                }
                            </View>

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
        padding: 10

    },


})