import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ToastAndroid } from "react-native"
import { LoginButton } from "../../components/utils/LoginButton"
import { LoginTextArea } from "../../components/utils/LoginTextArea"
import { LoginInputNumber } from "../../components/utils/LoginInputNumber"
import { LoginImageProject } from "../../components/utils/LoginImageProject"
import { RegisterProjectDriven } from "../../components/utils/RegisterProjectDriven"
import { CheckboxComponent } from "../../components/utils/subCategory";
import { CategoryButton } from "../../components/utils/CategoryButton";
import { SubcategoryButton } from "../../components/utils/SubcategoryButton"
import api from "../../../service";
import * as SecureStore from"expo-secure-store"
import G from "glob"
import  BtnBackPage  from "../../components/utils/BtnBackPage"

interface IRegisterProject {
    navigation: any
}

export const RegisterProject = ({ navigation }: IRegisterProject) => {
    const [imageIndex, setImageIndex] = useState(0)
    const [isLoad, setIsLoad] = useState(false)
    const [categories, setCategories] = useState([{}])
    const [user, setUser] = useState()
    
    const setUserId = async () => {
        const userId = await SecureStore.getItemAsync('userId')
        setProjectRegister({...projectRegister, user: {id : userId || ""}})
    }

    const dateMask = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d{4})/, "$1/$2")
    }

    const onlyNumbers = (value: string) => {
        return value
            .replace(/\.|\(|\)|\-|\//g, '');
    }

    const dateToSend = (value: string) => {

        return onlyNumbers(value)
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d{2})(\d{4})/, "$3-$2-$1")
    }


    const [projectRegister, setProjectRegister] = (useState)({
        name: "",
        description: "",
        value: "",
        estimated_deadline: "",
        images: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
            }
        ],
        categories: [
            {
                id: ""
            }
        ],
        sub_categories: [
            {
                id: ""
            },
        ],
        user: {
            id: ""
        }
    })


    useEffect(() => {
        console.log(projectRegister)
    },[projectRegister])


    const addToProject = (id: string, name: "sub_categories" | "categories") => {
        setProjectRegister({
            ...projectRegister, [name]: [
                ...projectRegister[name], { id: id }
            ]
        })
    }
    const removeFromCategories = (object: [{}], name: "sub_categories" | "categories") => {
        setProjectRegister({ ...projectRegister, [name]: object })
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
            removeFromCategories(categoryToRemove, "categories")
        }
    }

    const removeSubcategory = (id: string) => {
        const subCategoriesFilter = projectRegister.sub_categories.filter((subcategory: any) => subcategory.id !== id)
        setProjectRegister({ ...projectRegister, sub_categories: subCategoriesFilter })
    }

    const handleChange = (text: string, name: string) => {

        
        if (name == "estimated_deadline") {
            setProjectRegister(
                {
                    ...projectRegister,
                    [name]: dateMask(text)
                }
            )
        } else {
            setProjectRegister(
                {
                    ...projectRegister,
                    [name]: text
                }
            )
        }
    }

    const handleUserPicture = (text: any) => {
        let newImages = projectRegister.images

        newImages[imageIndex] = { url: text }

        setProjectRegister({

            ...projectRegister,
            images: newImages
        })

        setImageIndex(imageIndex + 1)
    }


    const [hasError, setHasError] = useState(false)
    const [projectLoad, setProjectLoad] = useState(false)

    const registerProject = async () => {

       
        const projectApi = { 
            ...projectRegister,
            estimated_deadline: dateToSend(projectRegister.estimated_deadline),
            categories : projectRegister.categories.filter((category : any) => category.id !== ""),
            sub_categories : projectRegister.sub_categories.filter((sub_categories : any) => sub_categories.id !== "")

        }
         console.log(projectApi)

        
        setProjectLoad(true)
        console.log(projectApi)
        api.post("/project", projectApi).then((res: any) => {

            if(res.data.statusCode === 201){
                navigation.navigate("ListProject", {
                    projectId: res.data.data.id,
                })
            } else {
                ToastAndroid.show("res.data.message", 10)
            }
            console.log(res.data)
        })
       
        setProjectLoad(false)

    }



    useEffect(() => {
        console.log(projectRegister.estimated_deadline)
    }, [projectRegister])

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })
        setUserId()
    }, [])

    useEffect (()=>{
        api.get("/user").then((res:any)=>{
            setUser(res.data)
        })
    }, [])

    return (
        <>
        {/* <BtnBackPage action={() => navigation.navigate("ListProject")}/> */}
            <View style={styles.scrollContainer}>



                <ScrollView
                    style={styles.container}>
                    <Text style={styles.title}>{`Criação de projeto`}</Text>
                    <View style={styles.view}>
                        <LoginInputNumber type="default" name="name" iconName="person-outline" value={projectRegister.name} handleChange={handleChange} hasError={hasError} title="Nome do Projeto" maxLength={100} />
                        <LoginTextArea name="description" value={projectRegister.description} handleChange={handleChange} title="Descrição" maxLength={800} />


                        <View style={styles.textArea}>
                            <Text style={styles.text1}>Categorais</Text>
                        </View>
                        <View style={styles.areaContainer1}>
                            <ScrollView horizontal={true} style={styles.sectionCategory}>
                                {
                                    categories?.map((category: any) => {
                                        return <CategoryButton key={category.id} id={category.id} setSubCategories={findSubCategories} icon="s" action={() => console.log("a")} category={category.name} />
                                    })
                                }
                            </ScrollView>
                        </View>
                        <View style={styles.textArea}>
                            <Text style={styles.text1}>Sub-Categorais</Text>
                        </View>
                        <View style={styles.areaContainer2}>
                            <ScrollView horizontal={true} style={styles.sectionSubCategory}>
                                {
                                    subcategoriesToRender?.map((category: any) => {
                                        return category.sub_categories.map((subcategory: any) => {
                                            return <SubcategoryButton key={subcategory.id} id={subcategory.id} setSubCategories={(check: boolean) => check ? removeSubcategory(subcategory.id) : addToProject(subcategory.id, "sub_categories")} subcategory={subcategory.name} />
                                        })
                                    })
                                }
                            </ScrollView>


                        </View>



                        <LoginImageProject isActive={imageIndex == 4 ? false : true} userImage={projectRegister.images} setUserImage={(image: string) => handleUserPicture(image)} />
                        <LoginInputNumber type="numeric" name="estimated_deadline" iconName="today" value={projectRegister.estimated_deadline} handleChange={handleChange} hasError={hasError} title="Prazo estimado da entrega" maxLength={10} />
                        <LoginInputNumber type="numeric" name="value" iconName="attach-money" value={projectRegister.value.toString()} handleChange={handleChange} hasError={hasError} title="Valor estimado (BRL)" maxLength={12} />

                 



                        <View style={styles.button}>
                            <LoginButton type="light" action={() => registerProject()} isLoad={projectLoad} title="Publicar" />
                        </View>

                    </View>




                </ScrollView>


            </View >



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
        backgroundColor: "#fff"
    },
    scrollContainer: {
        height: Dimensions.get('window').height * 1,
        width: Dimensions.get('window').width,
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
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 1,
        backgroundColor: "#fff",
        display: 'flex',
    },
    view: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 2,
        justifyContent: "space-around",
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
        height: Dimensions.get('window').height * 0.5,
        borderWidth: 1,
        borderColor: "#D3C5F8",
        borderRadius: 10,
        display: 'flex',
        flexWrap: 'wrap'

    },
    button: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10

    },
    checkBoost: {
        width: Dimensions.get('window').width * 0.79,
        height: Dimensions.get("window").width * 0.7,
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    checkBoostView: {
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get("window").width * 0.7,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#B275FF",
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitleCheck: {
        fontSize: 26,
        color: "#808080",
        fontWeight: '300'
    },
    titleCheck: {
        fontSize: 14,
        fontWeight: '300'
    },
    image: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get("window").width * 0.25,
    },
    describleCheck: {
        height: Dimensions.get("window").width * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    describleText: {
        fontSize: 10,
        fontWeight: '300'
    },
    titleChecked: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get("window").width * 0.08,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    textTitle: {
        fontSize: 20,
        paddingEnd: 5,
    },
    textTitle2: {
        fontSize: 20,
        color: '#ff6666',
    },
    textTitle3: {
        fontSize: 12,
        color: '#808080',
    },



    sectionSubCategory: {
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height,
        flexWrap: "wrap",
    },
    sectionCategory: {
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.3,
        flexDirection: "row",
    },
    text1: {
        fontSize: Dimensions.get("window").width * 0.04,
        color: "#979797",
    },
    areaContainer1: {
        display: "flex",
        height: Dimensions.get('window').height * 0.10,
        // width: Dimensions.get('window').width * 0.90,    
        marginBottom: 35,

    },
    areaContainer2: {
        height: Dimensions.get('window').height * 0.10,
        marginBottom: 50,
        borderColor: "#DEDEDE"
        // elevation:7,
    },

})