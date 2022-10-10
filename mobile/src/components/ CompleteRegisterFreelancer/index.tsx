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
            "id": "30a57a03-96c6-42c2-b098-32e8756d2b62",
            "name": "123456",
            "icon": "123",
            "is_active": true,
            "create_at": "2022-09-28T23:23:10.927Z",
            "update_at": "2022-09-28T23:23:10.927Z",
            "sub_categories": [
                {
                    "id": "30cd530f-e380-412c-8fc7-3707506cb71d",
                    "name": "aaaaa",
                    "is_active": false,
                    "create_at": "2022-09-29T23:23:12.567Z",
                    "update_at": "2022-09-29T23:26:51.000Z"
                },
                {
                    "id": "72b1a1c4-961c-485a-aa67-ac406d2447a8",
                    "name": "2",
                    "is_active": true,
                    "create_at": "2022-09-29T23:23:19.043Z",
                    "update_at": "2022-09-29T23:23:19.043Z"
                },
                {
                    "id": "9d243ac6-c8f7-4ae8-81d9-2ec6dd2565b3",
                    "name": "3",
                    "is_active": true,
                    "create_at": "2022-09-29T23:23:23.237Z",
                    "update_at": "2022-09-29T23:23:23.237Z"
                }
            ]
        },
        {
            "id": "7979b446-b804-4f33-88d9-a1c60f147516",
            "name": "teste123321123321",
            "icon": "123",
            "is_active": false,
            "create_at": "2022-09-28T23:22:07.202Z",
            "update_at": "2022-09-28T23:26:26.000Z",
            "sub_categories": []
        },
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
            "id": "a16b6bf4-1d3e-4319-b01c-ada96ac55dd1",
            "name": "4",
            "icon": "4",
            "is_active": true,
            "create_at": "2022-10-02T23:46:10.174Z",
            "update_at": "2022-10-02T23:46:10.174Z",
            "sub_categories": []
        },
        {
            "id": "bdec6f7c-d71c-4125-b8e1-9db47303270b",
            "name": "2",
            "icon": "2",
            "is_active": true,
            "create_at": "2022-10-02T23:45:46.634Z",
            "update_at": "2022-10-02T23:45:46.634Z",
            "sub_categories": []
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
        {
            "id": "d9314b8f-7cf8-4cba-a8da-69c579073b98",
            "name": "3",
            "icon": "3",
            "is_active": true,
            "create_at": "2022-10-02T23:46:04.564Z",
            "update_at": "2022-10-02T23:46:04.564Z",
            "sub_categories": []
        }
    ])
    const [userRegister, setUserRegister] = useState({
        name: {
            "id": check
        },

    })

    const [subCategories, setSubCategories] = useState([{}])

    const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {

       const filter : any = categories.find((category : any) => category.id === idCategory)
       console.log(filter)

    //    setSubCategories({...subCategories, filter.sub_categories})
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
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                    <CheckboxComponent title="Figma" id="Figma" />
                    <CheckboxComponent title="3D" id="3d" />
                    <CheckboxComponent title="JavaScrpit" id="js" />
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                    <CheckboxComponent title="Figma" id="Figma" />
                    <CheckboxComponent title="3D" id="3d" />
                    <CheckboxComponent title="JavaScrpit" id="js" />
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
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