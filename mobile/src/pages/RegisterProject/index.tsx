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
import G from "glob"
import  BtnBackPage  from "../../components/utils/BtnBackPage"

interface IRegisterProject {
    navigation: any
}

export const RegisterProject = ({ navigation }: IRegisterProject) => {
    const [imageIndex, setImageIndex] = useState(0)
    const [isLoad, setIsLoad] = useState(false)
    const [categories, setCategories] = useState([{}])

    const dateMask = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d{4})/, "$1/$2")
    }


    const [project, setproject] = (useState)({
        name: "",
        description: "",
        value: "",
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




    const addToProject = (id: string, name: "sub_categories" | "categories") => {
        setproject({
            ...project, [name]: [
                ...project[name], { id: id }
            ]
        })
    }
    const removeFromCategories = (object: [{}], name: "sub_categories" | "categories") => {
        setproject({ ...project, [name]: object })
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
        const subCategoriesFilter = project.sub_categories.filter((subcategory: any) => subcategory.id !== id)
        setproject({ ...project, sub_categories: subCategoriesFilter })
    }

    useEffect(() => {
        //     api.get("/category").then((res: any) => {
        //         setCategories(res.data)
        //     })
        //     console.log(userId)
        setCategories([
            {
                id: "29a6f6c8-552e-41b5-b7ec-c26f59b85144",
                "name": "Programação",
                "icon": "aaaaaa",
                "is_active": true,
                "create_at": "2022-10-03T16:03:47.814Z",
                "update_at": "2022-10-11T18:50:00.000Z",
                "sub_categories": [
                    {
                        "id": "d44094c0-204d-409f-82a0-d7bfa30cea6c",
                        "name": "Java",
                        "is_active": true,
                        "create_at": "2022-10-03T16:04:36.730Z",
                        "update_at": "2022-10-11T18:50:55.000Z"
                    },
                    {
                        "id": "7d5008cc-f901-4f82-abed-67618045dd82",
                        "name": "JavaScript",
                        "is_active": true,
                        "create_at": "2022-10-03T16:04:31.999Z",
                        "update_at": "2022-10-11T18:50:16.000Z"
                    }
                ]
            },
            {
                "id": "35a1debd-45ea-4151-8c38-9bfc1a0328d0",
                "name": "Design",
                "icon": "teste",
                "is_active": true,
                "create_at": "2022-09-28T19:28:39.352Z",
                "update_at": "2022-10-11T18:47:24.000Z",
                "sub_categories": [
                    {
                        "id": "bde617c5-3c4f-4f96-9d03-131e07fd1b54",
                        "name": "Logo",
                        "is_active": true,
                        "create_at": "2022-10-11T18:49:30.152Z",
                        "update_at": "2022-10-11T18:49:30.152Z"
                    },
                    {
                        "id": "9796fbed-13f0-49a6-bb29-442abdd4a8a8",
                        "name": "3d",
                        "is_active": true,
                        "create_at": "2022-10-11T18:47:50.604Z",
                        "update_at": "2022-10-11T18:47:50.604Z"
                    },
                    {
                        "id": "9283e980-4fa9-458a-be10-aa86327184db",
                        "name": "Adobe Photoshop",
                        "is_active": true,
                        "create_at": "2022-10-11T18:49:26.249Z",
                        "update_at": "2022-10-11T18:53:40.000Z"
                    },
                    {
                        "id": "8921ad8a-5580-442c-ac87-3dea9f2b2ad5",
                        "name": "Ícones",
                        "is_active": true,
                        "create_at": "2022-10-11T18:49:35.832Z",
                        "update_at": "2022-10-11T18:49:35.832Z"
                    }
                ]
            },
            {
                "id": "f7b6ae02-b5e8-4ed6-8984-b629eb293796",
                "name": "Arte",
                "icon": "aaaaaa",
                "is_active": true,
                "create_at": "2022-09-28T19:29:01.880Z",
                "update_at": "2022-10-11T18:52:03.000Z",
                "sub_categories": [
                    {
                        "id": "c9e1072a-5717-4c12-b864-09bfa784784b",
                        "name": "Realista",
                        "is_active": true,
                        "create_at": "2022-09-28T19:47:51.513Z",
                        "update_at": "2022-10-11T18:52:45.000Z"
                    },
                    {
                        "id": "aea06656-a732-44df-80c6-69ec361da75f",
                        "name": "Anime",
                        "is_active": true,
                        "create_at": "2022-09-28T19:47:55.887Z",
                        "update_at": "2022-10-11T18:52:19.000Z"
                    },
                    {
                        "id": "47f592c0-5a95-4dc5-9167-453e3f06219e",
                        "name": "Cartoon",
                        "is_active": true,
                        "create_at": "2022-09-28T19:47:59.990Z",
                        "update_at": "2022-10-11T18:54:46.000Z"
                    },
                    {
                        "id": "2f96a279-258c-4ec5-adc9-10df528c491b",
                        "name": "Retrato",
                        "is_active": true,
                        "create_at": "2022-09-28T19:47:36.820Z",
                        "update_at": "2022-10-11T18:54:08.000Z"
                    }
                ]
            }
        ])
    }, [])



    const handleChange = (text: string, name: string) => {

        console.log(name)
        if (name == "estimated_deadline") {
            setproject(
                {
                    ...project,
                    [name]: dateMask(text)
                }
            )
        } else {
            setproject(
                {
                    ...project,
                    [name]: text
                }
            )
        }
    }

    const handleUserPicture = (text: any) => {

        console.log("images => ", text)
        let newImages = project.images

        newImages[imageIndex] = { url: text }

        setproject({

            ...project,
            images: newImages
        })

        setImageIndex(imageIndex + 1)
    }


    const [hasError, setHasError] = useState(false)
    const [projectLoad, setprojectLoad] = useState(false)

    const registerProject = () => {
        const projectApi = { ...project, estimated_deadline: "10-10-2022" }
        setprojectLoad(true)
        api.post("/project", projectApi).then((res: any) => {

            console.log(res.data)
        })
        setprojectLoad(false)

    }

    useEffect(() => {
        console.log(project.estimated_deadline)
    }, [project])

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })
    }, [])

    return (
        <>
        <BtnBackPage action={() => navigation.navigate("ListProject")}/>
            <View style={styles.scrollContainer}>



                <ScrollView
                    style={styles.container}>
                    <Text style={styles.title}>{`Criação de projeto`}</Text>
                    <View style={styles.view}>
                        <LoginInputNumber type="default" name="name" iconName="person-outline" value={project.name} handleChange={handleChange} hasError={hasError} title="Nome do Projeto" maxLength={100} />
                        <LoginTextArea name="description" value={project.description} handleChange={handleChange} title="Descrição" maxLength={800} />


                        {/* <View style={styles.textArea}>
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
                                            return <CheckboxComponent key={subcategory.id} onClickFunction={(check: boolean) => check ? removeSubcategory(subcategory.id) : addToProject(subcategory.id, "sub_categories")} title={subcategory.name} id={subcategory.id} />
                                        })
                                    })
                                }
                            </ScrollView>
                        </View>


                        <LoginImageProject isActive={imageIndex == 4 ? false : true} userImage={project.images} setUserImage={(image: string) => handleUserPicture(image)} />
                         <Attachment isActive={imageIndex == 4 ? false : true} userAttachment={project.attachments} setUserAttachment={(attachment: string) => handleUserPicture(attachment)}/> 
                        <LoginInputNumber type="numeric" name="estimated_deadline" iconName="today" value={project.estimated_deadline} handleChange={handleChange} hasError={hasError} title="Prazo estimado da entrega" maxLength={10} />
                        <LoginInputNumber type="numeric" name="value" iconName="today" value={project.value.toString()} handleChange={handleChange} hasError={hasError} title="Valor estimado (BRL)" maxLength={1} />

                        <projectDriven />

                    </View>

                    <View style={styles.button}>
                        <LoginButton type="light" action={() => { console.log('teste') }} isLoad={projectLoad} title="Publicar" />
                    </View> */}

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



                        <LoginImageProject isActive={imageIndex == 4 ? false : true} userImage={project.images} setUserImage={(image: string) => handleUserPicture(image)} />
                        {/* <Attachment isActive={imageIndex == 4 ? false : true} userAttachment={project.attachments} setUserAttachment={(attachment: string) => handleUserPicture(attachment)}/> */}
                        <LoginInputNumber type="numeric" name="estimated_deadline" iconName="today" value={project.estimated_deadline} handleChange={handleChange} hasError={hasError} title="Prazo estimado da entrega" maxLength={10} />
                        <LoginInputNumber type="numeric" name="value" iconName="attach-money" value={project.value.toString()} handleChange={handleChange} hasError={hasError} title="Valor estimado (BRL)" maxLength={12} />

                        <RegisterProjectDriven />



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
    button: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.18,
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