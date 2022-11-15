import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import api from "../../../service";
import * as SecureStore from 'expo-secure-store';
import HeaderSearch from "../../components/utils/HeaderSearch";
import TabBar from "../../components/utils/TabBar";
import ProfileNavigation from "./Body";
import Selector from "../../components/utils/Selector";
import { ListProjectCard } from "../../components/utils/ListProjectCard";
import { ProfileCardProject } from "./ProfileCardProject";

interface IProfile {
    navigation: any
}

interface ICategory {
    name: string
    icon: string
}

interface IUserProjects {

    AWAITING_START: [],
    VALIDATING_REQUIREMENTS: [],
    IN_EXECUTION: [],
    COMPLETE: [],
    CANCELED: []
}

interface IProject {
    id: string
    name: string,
    description: string
    value: number
    images: [{
        url: string
    }]
    categories: any
    user: {
        id: string
        first_name: string
        nickname: string
        profile_picture: string
    },
    navigation: any
}

const Profile = ({ navigation }: IProfile) => {

    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    const [user, setUser] = useState({
        id: "",
        first_name: "",
        last_name: "",
        nickname: "",
        profile_picture: "",
        biography: "",
    })

    const [userCategories, setUserCategories] = useState<ICategory[]>([])

    const [userProject, setUserProject] = useState<IUserProjects>({
        AWAITING_START: [],
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: []
    })

    const [selectedProjects, setSelectedProjects] = useState<IProject[]>([])

    // const userId = { route }

    const getUserInfo = async () => {
        const userId = await SecureStore.getItemAsync('userId')

        api.get(`user/${userId}`).then((res) => {
            setUser(res.data.data)
            setUserCategories(res.data.data.teams[0].team.categories)
        })

        api.get(`/project/user/${userId}`).then((res) => {
            setUserProject(res.data.data)
            setSelectedProjects(res.data.data.AWAITING_START)
        })
    }

    useEffect(() => {
        getUserInfo()
    }, [])


    return (
        <>
            <TabBar currentScreen="Profile" navigateTo={navigateTo} />
            <SafeAreaView style={styles.main}>
                <ScrollView style={styles.Scroll}>
                    <LinearGradient style={styles.header} colors={['#1B2469', '#31418D', '#5A5BB4', '#6C5CBB', '#6C5CBB', '#6C5CBB']}>
                        <View style={styles.profileNavigationContainer}></View>
                        <View style={styles.profileImageContainer}>
                            <Image source={{ uri: user.profile_picture }} style={styles.profileImage}></Image>
                        </View>
                        <View style={styles.profileDetailsContainer}>
                            <View style={styles.details}>
                                <Text style={styles.name}>{user.first_name}</Text>
                                <Text style={styles.nickname}>@{user.nickname}</Text>
                            </View>
                            <Text style={styles.biography}>{user.biography}</Text>
                        </View>

                        <View style={styles.profileCategoriesContainer}>
                            <ScrollView horizontal={true} >
                                {
                                    userCategories.map((category: ICategory) => {
                                        return (
                                            <View style={styles.categoryCard}>
                                                <Text style={styles.categoryName}>{category.name}</Text>
                                                <Image style={styles.categoryIcon} source={{ uri: category.icon }} />
                                            </View>
                                        )
                                    })
                                }


                            </ScrollView>
                        </View>

                        <View style={styles.body}>
                            <ProfileNavigation />
                            <Text style={styles.title}>Projetos</Text>
                            <Selector setSelectedProjects={setSelectedProjects} userProjects={userProject} />
                            <View style={styles.projectContainer}>
                                {
                                    selectedProjects.map((project: IProject) => {
                                        return (
                                            <ProfileCardProject name={project.name} navigation={navigation} user={user} value={project.value} key={project.id} categories={project.categories} description={project.description} id={project.id} image={project.images[0].url} />

                                        )
                                    })
                                }
                            </View>

                        </View>

                    </LinearGradient>
                </ScrollView>
            </SafeAreaView>
        </>
    )

}
const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.9
    },
    Scroll: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.9

    },
    text: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "500",
    },
    header: {
        width: Dimensions.get('window').width,
        height: "auto",
        minHeight: Dimensions.get('window').height,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column"

    },
    profileNavigationContainer: {
        width: "100%",
        height: Dimensions.get('window').height * 0.1,
        // backgroundColor: "#d3d4d390"
    },
    profileImageContainer: {
        width: "90%",
        height: Dimensions.get('window').height * 0.13,
        // backgroundColor: "#a3f4d390"
    },
    profileDetailsContainer: {
        width: "90%",
        minHeight: Dimensions.get('window').height * 0.1,
        height: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingTop: 20
        // backgroundColor: "#f3f4d390"
    },
    profileCategoriesContainer: {
        width: "100%",
        height: "auto",
        padding: 15
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "flex-start",
        // flexDirection: "row",

    },
    projectContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingTop: 20
    },
    profileImage: {
        width: Dimensions.get('window').height * 0.13,
        height: Dimensions.get('window').height * 0.13,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 3
    },
    title: {
        width: "100%",
        height: Dimensions.get('window').height * 0.1,
        display: "flex",
        textAlignVertical: "center",
        paddingLeft: 20,
        fontWeight: "800",
        fontSize: 26,
    },
    details: {
        // height: Dimensions.get('window').height * 0.13,
        marginBottom: 20

    },
    name: {
        fontWeight: "500",
        fontSize: 22,
        color: "#fff"
    },
    nickname: {
        fontWeight: "300",
        fontSize: 14,
        color: "#ccc"
    },
    biography: {
        fontWeight: "500",
        // backgroundColor: "#fff",

        fontSize: 14,
        color: "#fff"
    },
    categoryCard: {
        width: "auto",
        height: Dimensions.get('window').height * 0.05,
        backgroundColor: "#75A5FF",
        display: "flex",
        alignItems: "center",
        padding: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: "space-between",
        flexDirection: "row",
        marginRight: 10
    },
    categoryName: {
        marginRight: 10,
        fontWeight: "600",
        color: "#fff"
    },
    categoryIcon: {
        width: 20,
        // backgroundColor: "#3a4",
        height: 20,

    },
    body: {
        width: "100%",
        minHeight: "100%",
        height: "auto",
        backgroundColor: "#fff",
        borderTopEndRadius: 80,
        borderTopStartRadius: 80
    }
})

export default Profile