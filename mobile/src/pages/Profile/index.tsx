import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Pressable } from "react-native";
import api from "../../../service";
import * as SecureStore from 'expo-secure-store';
import TabBar from "../../components/utils/TabBar";
import ProfileNavigation from "./Body";
import { ICategory, IUser } from "./interfaces";
import { MyProjectsPage } from "./Pages/MyProjects";
import { ProjectsToWorkPage } from "./Pages/ProjectsToWork";

interface IProfile {
    navigation: any
    route: any
}

const Profile = ({ navigation, route }: IProfile) => {

    const [currentPage, setCurrentPage] = useState<"myProjects" | "projectsToWork">("myProjects")
    const [userCategories, setUserCategories] = useState<ICategory[]>([])
    const [user, setUser] = useState<IUser>({
        id: "",
        first_name: "",
        last_name: "",
        nickname: "",
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8",
        biography: "",
        birth_date: "",
        cpf: "",
        create_at: "",
        gender: {
            id: "",
            gender: "",
        },
        mail: "",
        is_active: true,
        is_authenticated: true,
        update_at: ""
    })

    const getUserInfo = async () => {
        const userId = await SecureStore.getItemAsync('userId')

        api.get(`user/${userId}`).then((res) => {
            setUser(res.data.data)
            setUserCategories(res.data.data.teams[0].team.categories)
        })
    }

    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
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
                        <Pressable onPress={() => navigation.navigate("EditUser", {
                            user: user
                        })} style={styles.profileImageContainer}>
                            <Image source={{ uri: user.profile_picture }} style={styles.profileImage}></Image>
                        </Pressable>
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
                            <ProfileNavigation setCurrentPage={setCurrentPage} currentPage={currentPage} isFreelancer={userCategories.length > 0} />
                            {
                                currentPage === "myProjects" &&
                                <MyProjectsPage navigation={navigation} user={user} ></MyProjectsPage>
                            }
                            {
                                currentPage === "projectsToWork" &&
                                <ProjectsToWorkPage navigation={navigation} user={user}></ProjectsToWorkPage>
                            }

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
        height: 20,

    },
    body: {
        width: "100%",
        minHeight: "100%",
        height: "auto",
        backgroundColor: "#fff",
        borderTopEndRadius: 60,
        borderTopStartRadius: 60
    }
})

export default Profile