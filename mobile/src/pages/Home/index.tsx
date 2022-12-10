import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HeaderSearch from "../../components/utils/HeaderSearch";
import TabBar from "../../components/utils/TabBar";
import BtnBackPage from "../../components/utils/BtnBackPage";
import api from "../../../service";
import { CategoryButton } from "../../components/utils/CategoryButton";
import PostCard, { IPost } from "./PostCard";

interface IHome {
    navigation: any
}

export default function Home({ navigation }: IHome) {



    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    const [isLoad, setIsLoad] = useState(false)
    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [selectedCategories, setselectedCategories] = useState<string[]>([])

    const findSubCategories = () => { }

    const changeCategories = (id: string) => {
        if (selectedCategories.find((idCategory: string) => idCategory === id)) {
            setselectedCategories(selectedCategories.filter((idCategory: string) => idCategory !== id))
        } else {
            setselectedCategories([...selectedCategories, id])
        }

    }

    const getPosts = () => {
        console.log(selectedCategories)
        api.get(`/post?page=1&take=100&search=&categories=${selectedCategories.join()}`).then((res: any) => {
            setPosts(res.data.data.data[0])
        })
    }

    useEffect(() => {
        getPosts()
    }, [selectedCategories])

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })
        getPosts()

    }, [])

    return (
        <>
            <TabBar currentScreen="Home" navigateTo={navigateTo} />
            <SafeAreaView style={styles.body}>
                <ScrollView style={styles.Scroll}>
                    <HeaderSearch label={"Pesquisar..."} />

                    <View>
                        <Text style={styles.title}>Portfólios</Text>
                    </View>

                    <ScrollView
                        style={styles.category}
                        horizontal>
                        <View style={styles.containerTraco}>
                            <View style={styles.traco1}></View>
                            <View style={styles.traco2}></View>
                            <View style={styles.traco3}></View>
                        </View>

                        {
                            categories.map((category: any) =>
                                <CategoryButton category={category.name} icon={category.icon} id={category.id} key={category.id} action={(id: string) => changeCategories(id)} setSubCategories={findSubCategories} />
                            )
                        }

                    </ScrollView>
                    <View style={styles.cardContainer}>
                        {
                            posts.map((post: IPost) =>
                                <PostCard navigation={navigation} post={post} />
                            )
                        }
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    Scroll: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    title: {
        width: "100%",
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    category: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        paddingTop: 20,

    },
    containerTraco: {
        width: Dimensions.get("window").width * 0.1,
        height: Dimensions.get("window").width * 0.1,
        paddingLeft: 5,
        paddingTop: 20,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    traco1: {
        width: Dimensions.get("window").width * 0.05,
        height: Dimensions.get("window").width * 0.01,
        backgroundColor: '#C6D2FF',
        borderRadius: 10
    },
    traco2: {
        width: Dimensions.get("window").width * 0.04,
        height: Dimensions.get("window").width * 0.01,
        backgroundColor: '#C6D2FF',
        borderRadius: 10
    },
    traco3: {
        width: Dimensions.get("window").width * 0.03,
        height: Dimensions.get("window").width * 0.01,
        backgroundColor: '#C6D2FF',
        borderRadius: 10
    },
    cardContainer: {
        width: "100%",
        minHeight: Dimensions.get("window").height * 0.7,
        height: "auto",
        paddingLeft: 5,
        paddingTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 40

    }
})