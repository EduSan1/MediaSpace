import React, { useState, useEffect } from "react"
import { View, StyleSheet, Dimensions, ScrollView, Text, Image } from "react-native"
import { ScrollImage } from "../../components/utils/ScrollImage";
import { LoginButton } from "../../components/utils/LoginButton";
import api from "../../../service";
import { BtnNewProject } from "../../components/utils/BtnNewProject";

interface IProject {
    navigation: any
}

export const Project = ({ navigation }: IProject) => {

    const [imageIndex, setImageIndex] = useState(0)
    const [projectLoad, setProjectLoad] = useState(false)
    const [categories, setCategories] = useState([{}])
    const [hasError, setHasError] = useState(false)

    const [project, setProject] = (useState)({
        images: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            }
        ],
        dataInico: "02/02/2022",
        dataTermino: "02/02/2023",
        imagemPerfil: { url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae" },
        valor: "19.650,00",
        titulo: "MediaSpace",
        descricao: " teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste",
        anexos: "",
        categoria: "PROGRAMAÇÃO",
        subCategoria: "JAVA",



    })


    const handleUserPicture = (text: any) => {

        console.log("images => ", text)
        let newImages = project.images

        newImages[imageIndex] = { url: text }

        setProject({

            ...project,
            images: newImages
        })

        setImageIndex(imageIndex + 1)
    }

    useEffect(() => { }, [project])


    return (
        <>
        <BtnNewProject  action={() => navigation.navigate('RegisterProject')}/>
            <View style={styles.navigationBar}></View>
            <Text>Project</Text>
            {/* <View style={styles.fix}>
                <ScrollView style={styles.container}>
                    <ScrollImage isActive={imageIndex == 4 ? false : true} userImage={project.images} setUserImage={(image: string) => handleUserPicture(image)} />

                    <View style={styles.containerFilho}>
                        <View style={styles.containerDate}>
                            <Text style={styles.title}>Criado em: {project.dataInico} </Text>
                            <Text style={styles.title}>Prazo término: {project.dataTermino}</Text>
                        </View>

                        <View style={styles.containerProfile}>
                            <Image style={styles.image} source={require("../../../assets/icons/facebook.png")} />
                            <Text style={styles.title}>Valor estiamdo: {project.valor}</Text>
                        </View>

                        <View style={styles.containerTitle}>
                            <Text style={styles.title2}>{project.titulo}</Text>
                            <Text style={styles.describle}> {project.descricao}</Text>

                            <View style={styles.categories}>
                                <Text style={styles.title}>Categoria</Text>
                                <Text style={styles.categorySelected}>{project.categoria}</Text>

                                <Text style={styles.title}>Subcategoria</Text>
                                <Text style={styles.categorySelected}>{project.subCategoria}</Text>
                            </View>

                            <View style={styles.button}>
                                <LoginButton type="light" action={() => console.log('teste')} isLoad={projectLoad} title="Participar" />
                            </View>
                        </View>



                    </View>
                </ScrollView>
            </View> */}

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