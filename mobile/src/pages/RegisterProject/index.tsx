import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native"
import { LoginButton } from "../../components/utils/LoginButton"
import { LoginTextArea } from "../../components/utils/LoginTextArea"
import { LoginInputNumber } from "../../components/utils/LoginInputNumber"
import { LoginImageProject } from "../../components/utils/LoginImageProject"
import { RegisterProjectDriven } from "../../components/utils/RegisterProjectDriven"
import { CheckboxComponent } from "../../components/utils/subCategory";
import { CategoryButton } from "../../components/utils/CategoryButton";
import api from "../../../service";

interface IRegisterProject {
    navigation : any
    userId: any
}

export const RegisterPreject = ({navigation, userId} : IRegisterProject) => {
    const [imageIndex, setImageIndex] = useState(0)
    const [categories, setCategories] = useState([])

    const dateMask = (value: string) =>{
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d{4})/, "$1/$2")
    }


    const [registerProject, setRegisterProject] = (useState)({
        name: "",
        description: "vfddh6y",
        estimated_value: "",
        estimated_deadline: "",
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
        attachments: [
            {
                url: "Jorge"
            },
            {
                url: "Cleiton"
            },
            {
                url: "Jordania"
            }
        ],
        categories: [
            {
                id: "859c7fb7-9c8e-4bb2-88ef-605502ebbeaa"
            }
        ],
        sub_categories: [
            {
                id: "4b99388f-1f15-4dca-a2e1-33e6f5d9a69b"
            },
            {
                id: "56dd13ae-7f62-4c35-8e65-d44f374f747c"
            }
        ],
        user: {
            id:""
        }
    })
    const addToProject = (id: string, name: "sub_categories" | "categories") => {
        setRegisterProject({
            ...registerProject, [name]: [
                ...registerProject[name], { id: id }
            ]
        })
    }

    const removeFromProject = (object: [{}], name: "sub_categories" | "categories") => {
        setRegisterProject({ ...registerProject, [name]: object })
    }
    const [subcategoriesToRender, setSubategoriesToRender] = useState<any>([])

    const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {
        const categoryFilter: any = categories.find((category: any) => category.id === idCategory)

        if (action === "ADD") {
            setSubategoriesToRender([...subcategoriesToRender, categoryFilter])
            addToProject(categoryFilter.id, "categories")
        } else {
            const categoryFilter = subcategoriesToRender.filter((category: any) => category.id !== idCategory)
            setSubategoriesToRender(categoryFilter)
            const categoryToRemove = categoryFilter.map((category: any) => {
                return { id: category.id }
            })
            removeFromProject(categoryToRemove, "categories")
        }
    }

    const removeSubcategory = (id: string) => {
        // console.log(id)
        const subCategoriesFilter = registerProject.sub_categories.filter((subcategory: any) => subcategory.id !== id)
        setRegisterProject({ ...registerProject, sub_categories: subCategoriesFilter })
    }

    // useEffect(() => {
    //     console.log("registerProject => ", registerProject)
    // }, [registerProject])

    // useEffect(() => {
    //     api.get("/category").then((res: any) => {
    //         setCategories(res.data)
    //     })
    //     console.log(userId)
    // }, [])

    const handleChange = (text: string, name: string) => {
        if (name == "estimated_deadline") {
            setRegisterProject(
                {
                    ...registerProject,
                    [name]: dateMask(text)
                }
            )
        }else{
            setRegisterProject(
                {
                    ...registerProject,
                    [name]: text
                }
            )
        }
    }

    const handleUserPicture = (text: any) => {

        console.log("images => ", text)
        let newImages = registerProject.images

        newImages[imageIndex] = {url : text}

        setRegisterProject({
                
                ...registerProject,
                images: newImages
        })

        setImageIndex(imageIndex + 1)
    }

    const [hasError, setHasError] = useState(false)
    const [registerProjectLoad, setRegisterProjectLoad] = useState(false)

    useEffect(() => {},[registerProject])

    return (
    <>
        <View style={styles.navigationBar}></View>
        <View style={styles.scrollContainer}>

     

            <ScrollView
                style={styles.container}>
                <Text style={styles.title}>{`Criação de projeto`}</Text>
                <View style={styles.view}>
                    <LoginInputNumber type="default" name="name" iconName="person-outline" value={registerProject.name} handleChange={handleChange} hasError={hasError} title="Nome do Projeto" maxLength={100} />
                    <LoginTextArea name="description" value={registerProject.description} handleChange={handleChange} title="Descrição" maxLength={800} />


                    <LoginImageProject isActive={imageIndex == 4 ? false : true} userImage={registerProject.images} setUserImage={(image: string) => handleUserPicture(image)} />
                    {/* <Attachment isActive={imageIndex == 4 ? false : true} userAttachment={registerProject.attachments} setUserAttachment={(attachment: string) => handleUserPicture(attachment)}/> */}
                    <LoginInputNumber type="numeric" name="estimated_deadline"  iconName="today" value={registerProject.estimated_deadline} handleChange={handleChange} hasError={hasError} title="Prazo estimado da entrega" maxLength={10} />
                    <LoginInputNumber type="numeric" name="estimated_value"  iconName="today" value={registerProject.estimated_value.toString()} handleChange={handleChange} hasError={hasError} title="Valor estimado (BRL)" maxLength={400} />
                   
                    <RegisterProjectDriven/>
     
                </View>

                <View style={styles.button}>
                    <LoginButton type="light" action={() => { console.log('teste') }} isLoad={registerProjectLoad} title="Publicar" />
                </View>



            </ScrollView>


        </View>

        <View style={styles.bar}></View>

    </>
    )
}

const styles = StyleSheet.create({
    title: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        color: "#B275FF",
        textAlignVertical: "center",
        backgroundColor:"#fff"
    },
    scrollContainer: {
        height: Dimensions.get('window').height * .80,
        width: Dimensions.get('window').width,
    },
    bar : {
        height: Dimensions.get('window').height * .08,
        width: Dimensions.get('window').width,
        backgroundColor:"#f3fff1"
    },
    navigationBar : {
        height: Dimensions.get('window').height * .12,
        width: Dimensions.get('window').width,
        backgroundColor:"#f3fff1"
    },
    container: {
        width: Dimensions.get('window').width,
        height: "100%",
        backgroundColor: "#fff",
        display: 'flex',
    },
    view: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 2.2,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    textArea: {
        width: "100%"
    },
    text: {
        backgroundColor: "#fff",
        position: "absolute",
        paddingLeft: 5,
        paddingRight: 5,
        color: "#979797",
        top: -14,
        left: 10,
        fontSize: 14
    },
    areaContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.2,
        borderWidth: 1,
        borderColor: "#D3C5F8",
        borderRadius: 10,
        display: 'flex',
        flexWrap: 'wrap'

    },
    sectionCategory: {
        width: Dimensions.get('window').width * 0.85,
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
    },
    button: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.18 ,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10

    },
    checkBoost:{
        width: Dimensions.get('window').width * 0.79,
        height: Dimensions.get("window").width * 0.7,
        justifyContent: 'space-between',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',  
    },
    checkBoostView:{
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get("window").width * 0.7,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:"#B275FF",
        alignItems: 'center',
        justifyContent:'center'
    },
    subtitleCheck:{
        fontSize: 26,
        color:"#808080",
        fontWeight:'300'
    },
    titleCheck:{
        fontSize: 14,
        fontWeight:'300'
    },
    image:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get("window").width * 0.25,
    },
    describleCheck:{
        height: Dimensions.get("window").width * 0.2,
        alignItems: 'center',
        justifyContent:'center'
    },
    describleText:{
        fontSize: 10,
        fontWeight:'300'
    },
    titleChecked:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get("window").width * 0.08,
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    textTitle:{
        fontSize: 20,
        paddingEnd: 5,
    },
    textTitle2:{
        fontSize: 20,
        color:'#ff6666',
    },
    textTitle3:{
        fontSize: 12,
        color:'#808080',
    }

})