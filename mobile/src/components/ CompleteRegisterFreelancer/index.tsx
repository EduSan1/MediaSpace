import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions, Image } from "react-native";
import { LoginButton } from "../utils/LoginButton";
import { CheckboxComponent } from "../utils/subCategory";
import { CategoryButton } from "../utils/CategoryButton";
import api from "../../../service";

export const CompleteRegisterFreelancer = () => {

    const [check, setCheck] = useState("")
    const [isLoad, setIsLoad] = useState(false)
    const [categories, setCategories] = useState([])
    const [freelancer, setFreelancer] = useState({
        categories: [],
        sub_categories: [],
        userId: "be630814-7236-4d49-b076-5603efa2f21c"
    })

    const addToFreelancer = (id: string, name: "sub_categories" | "categories") => {
        setFreelancer({
            ...freelancer, [name]: [
                ...freelancer[name], { id: id }
            ]
        })
    }

    const RemoveFromFreelancer = (object: [{}], name: "sub_categories" | "categories") => {
        setFreelancer({ ...freelancer, [name]: object })
    }

    const [subcategoriesToRender, setSubategoriesToRender] = useState<any>([])

    const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {
        const categoryFilter: any = categories.find((category: any) => category.id === idCategory)

        if (action === "ADD") {
            setSubategoriesToRender([...subcategoriesToRender, categoryFilter])
            addToFreelancer(categoryFilter.id, "categories")
        } else {
            const categoryFilter = subcategoriesToRender.filter((category: any) => category.id !== idCategory)
            setSubategoriesToRender(categoryFilter)
            RemoveFromFreelancer(categoryFilter.map((category: any) => { id: category.id }), "categories")
        }
    }

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })
    }, [])

    return (
        <View style={styles.container}>
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
                <ScrollView style={styles.sectionSubCategory}>
                    {
                        subcategoriesToRender?.map((category: any) => {
                            return category.sub_categories.map((subcategory: any) => {
                                return <CheckboxComponent key={subcategory.id} title={subcategory.name} id={subcategory.id} />
                            })
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