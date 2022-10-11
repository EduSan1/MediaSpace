import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions, Image } from "react-native";
import { LoginButton } from "../utils/LoginButton";
import { CheckboxComponent } from "../utils/subCategory";
import { CategoryButton } from "../utils/CategoryButton";

export const CompleteRegisterFreelancer = () => {

    const [check, setCheck] = useState("")
    const [isLoad, setIsLoad] = useState(false)
    const [categories, setCategories] = useState([
     
        {
            "id": "859c7fb7-9c8e-4bb2-88ef-605502ebbeaa",
            "name": "gean",
            "icon": "4",
            "is_active": true,
            "create_at": "2022-10-09T14:23:30.453Z",
            "update_at": "2022-10-09T14:23:30.453Z",
            "sub_categories": [
                {
                    "id": "236e4f79-6ea3-4893-b653-2262c1dc7c62",
                    "name": "Gean1",
                    "is_active": true,
                    "create_at": "2022-10-09T14:23:56.387Z",
                    "update_at": "2022-10-09T14:23:56.387Z"
                },
                {
                    "id": "4b99388f-1f15-4dca-a2e1-33e6f5d9a69b",
                    "name": "Gean4",
                    "is_active": true,
                    "create_at": "2022-10-09T14:24:08.816Z",
                    "update_at": "2022-10-09T14:24:08.816Z"
                },
                {
                    "id": "56dd13ae-7f62-4c35-8e65-d44f374f747c",
                    "name": "Gean2",
                    "is_active": true,
                    "create_at": "2022-10-09T14:24:01.498Z",
                    "update_at": "2022-10-09T14:24:01.498Z"
                },
                {
                    "id": "93bf2cc9-281e-4f27-b071-2eed1babbf39",
                    "name": "Gean3",
                    "is_active": true,
                    "create_at": "2022-10-09T14:24:05.010Z",
                    "update_at": "2022-10-09T14:24:05.010Z"
                }
            ]
        },  
        {
            "id": "d4a10075-3171-4998-91ab-30b17b8ef2f3",
            "name": "edu",
            "icon": "4",
            "is_active": true,
            "create_at": "2022-10-09T14:23:40.482Z",
            "update_at": "2022-10-09T14:23:40.482Z",
            "sub_categories": [
                {
                    "id": "491b682d-06e3-4082-a0da-926f9cdc9b77",
                    "name": "Edu4",
                    "is_active": true,
                    "create_at": "2022-10-09T14:24:38.154Z",
                    "update_at": "2022-10-09T14:24:38.154Z"
                },
                {
                    "id": "7ad0514e-5fe2-4dcb-a5c4-a854d0b0edbe",
                    "name": "Edu1",
                    "is_active": true,
                    "create_at": "2022-10-09T14:24:25.500Z",
                    "update_at": "2022-10-09T14:24:25.500Z"
                },
                {
                    "id": "b8e249e5-c38f-4e28-aa6d-6920e9a6f3b1",
                    "name": "Edu2",
                    "is_active": true,
                    "create_at": "2022-10-09T14:24:29.360Z",
                    "update_at": "2022-10-09T14:24:29.360Z"
                },
                {
                    "id": "f0cb8180-c8ed-4f53-a969-239c7b6b494f",
                    "name": "Edu3",
                    "is_active": true,
                    "create_at": "2022-10-09T14:24:33.863Z",
                    "update_at": "2022-10-09T14:24:33.863Z"
                }
            ]
        },
   
    ])
    const [userRegister, setUserRegister] = useState({
        name: {
            "id": check
        },

    })

    const [subCategories, setSubCategories] = useState<any>([])

    const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {

        const categoryFilter : any = categories.find((category: any) => category.id === idCategory)

        if (action === "ADD") {
            setSubCategories([ ...subCategories, ...categoryFilter.sub_categories ])
        }else {
            let subcategoriesFilter = categoryFilter.sub_categories.filter((subCategoryFilter: any) => subCategories.filter((subcategory : any) => subcategory.id !== subCategoryFilter.id))
            // subcategoriesFilter = subcategoriesFilter
            console.log(JSON.stringify(subcategoriesFilter))

            // setSubCategories(subcategoriesFilter)
        }

    }



    useEffect(() => {
        setUserRegister({
            ...userRegister,
            name: {
                "id": check
            }
        })
    }
        , [check]
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Com quais tipos de serviços você deseja trabalhar?`}</Text>

            {/* Categorias */}

            <View style={styles.textArea}>
                <Text style={styles.text1}>Categorais</Text>
            </View>

            <View style={styles.areaContainer1}>
                <ScrollView horizontal={true} style={styles.sectionCategory}>
                    {
                        categories?.map((category: any) => {
                            return <CategoryButton id={category.id} setSubCategories={findSubCategories} icon="s" action={() => console.log("a")} category={category.name} />
                        })
                    }
                </ScrollView>
            </View>



            {/* SubCategorias */}
            <View style={styles.textArea}>
                <Text style={styles.text1}>Sub-Categorais</Text>
            </View>

            <View style={styles.areaContainer2}>
                <ScrollView style={styles.sectionSubCategory}>

                    {
                        subCategories?.map((subcategory: any) => {
                            return <CheckboxComponent title={subcategory.name} id={subcategory.id} />
                        })
                    }

                </ScrollView>
            </View>

            <LoginButton isLoad={isLoad} action={() => console.log("a")} type="dark" title="Continuar" />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:"black",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        // backgroundColor: "#34f45f",
        alignItems: "center",
    },
    sectionSubCategory: {
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.3,
        flexWrap: "wrap",
    },
    sectionCategory: {
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.3,
        flexDirection: "row",
    },
    title: {
        marginHorizontal: 20,
        height: Dimensions.get('window').height * 0.07,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center"
    },
    textArea: {
        width: "80%"
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
        height: Dimensions.get('window').height * 0.20,
        marginBottom: 50,
        borderWidth: 2,
        borderColor: "#DEDEDE"
        // elevation:7,
    },
})