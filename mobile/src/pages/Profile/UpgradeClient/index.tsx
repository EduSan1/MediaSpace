import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, TextInput, ImageBackground } from "react-native";
import { BtnUpdateProfile } from "../../../components/BtnUpdtateProfile";
import BtnBackPage from "../../../components/utils/BtnBackPage";
import { CategoryButton } from "../../../components/utils/CategoryButton";
import { CheckboxComponent } from "../../../components/utils/subCategory";
import api from "../../../../service"

interface IUpgradeClient {
    navigation: any
    userId: any
}

const UpgradeClient = ({ navigation,userId }: IUpgradeClient) => {

    const [isLoad, setIsLoad] = useState(false)
    const [categories, setCategories] = useState([])
    const [freelancer, setFreelancer] = useState({
        categories: [],
        sub_categories: [],
        userId: userId
    })

    const addToFreelancer = (id: string, name: "sub_categories" | "categories") => {
        setFreelancer({
            ...freelancer, [name]: [
                ...freelancer[name], { id: id }
            ]
        })
    }

    const removeFromFreelancer = (object: [{}], name: "sub_categories" | "categories") => {
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
            const categoryToRemove = categoryFilter.map((category: any) => {
                return { id: category.id }
            })
            removeFromFreelancer(categoryToRemove, "categories")
        }
    }

    const removeSubcategory = (id: string) => {
        console.log(id)
        const subCategoriesFilter = freelancer.sub_categories.filter((subcategory: any) => subcategory.id !== id)
        setFreelancer({ ...freelancer, sub_categories: subCategoriesFilter })
    }

    const registerFreelancer = () => {
        setIsLoad(true)
        api.post("/freelancer", freelancer).then((res: any) => {
            if (res.data.statusCode === 200) {
                navigation.navigate("CheckMail")
            } else {
                ToastAndroid.show(res.data.message, 10)
            }
        })
        setIsLoad(false)

    }



    return(
        <>
        <BtnBackPage navigation={navigation} />

        <SafeAreaView style={styles.body}>
        
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
                                return <CheckboxComponent key={subcategory.id} onClickFunction={(check: boolean) => check ? removeSubcategory(subcategory.id) : addToFreelancer(subcategory.id, "sub_categories")} title={subcategory.name} id={subcategory.id} />
                            })
                        })
                    }
                </ScrollView>
            </View>





                <View style={styles.containerBtn}>
                
                <BtnUpdateProfile type="dark" title="Cancelar" action={console.log}/>
                <BtnUpdateProfile type="light" title="Confirmarr" action={console.log}/>
                </View>
        </SafeAreaView>
            
        </>
    )
}
const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent:"center"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "500",
    },
    containerBtn:{
        flexDirection:"row",
        justifyContent:"space-evenly"
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
})
export default UpgradeClient