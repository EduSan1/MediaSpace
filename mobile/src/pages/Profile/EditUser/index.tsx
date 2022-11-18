import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import api from "../../../../service";
import * as SecureStore from 'expo-secure-store';
import TabBar from "../../../components/utils/TabBar";
import Icon from 'react-native-vector-icons/MaterialIcons';


interface IEditUser {
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

const EditUser = ({ navigation }: IEditUser) => {

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
        birth_date: "",
        cpf: "",
        mail: "",
        gender: {
            id: "",
            gender: "Masculino",
        },
    })

    const [userCategories, setUserCategories] = useState<ICategory[]>([])

    const getUserInfo = async () => {
        const userId = await SecureStore.getItemAsync('userId')

        api.get(`user/${userId}`).then((res) => {
            setUser(res.data.data)
            res.data.data.teams[0].team.categories &&
                setUserCategories(res.data.data.teams[0].team.categories)
        })
    }

    useEffect(() => {
        getUserInfo()
    }, [])


    return (
        <>
            <TabBar currentScreen="Profile" navigateTo={navigateTo} />
            <SafeAreaView style={styles.main}>
                <ScrollView style={styles.scroll}>
                    <LinearGradient style={styles.header} colors={['#1B2469', '#31418D', '#5A5BB4']}>
                    </LinearGradient>
                    <View style={styles.editContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Suas Informações</Text>
                            <Icon size={Dimensions.get('window').height * 0.04} name={"lock-outline"} style={{ color: "#75A5FF" }} />
                        </View>
                    </View>
                    <View style={styles.profileImageContainer}>
                        <Image source={{ uri: user.profile_picture }} style={styles.profileImage}></Image>
                        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                        <Text style={styles.nickname}>@{user.nickname}</Text>
                    </View>



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
    scroll: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.9,
        position: "relative"

    },
    header: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column"

    },
    editContainer: {
        width: "100%",
        minHeight: Dimensions.get('window').height * 0.75,
        height: "auto",
        backgroundColor: "#fff"
    },
    profileImageContainer: {
        width: "100%",
        height: Dimensions.get('window').height * 0.1,
        position: "absolute",
        top: Dimensions.get('window').height * 0.15,
        display: "flex",
        alignItems: "center",
    },
    profileImage: {
        width: Dimensions.get('window').height * 0.2,
        height: Dimensions.get('window').height * 0.2,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 3,

    },
    title: {
        width: "auto",
        height: Dimensions.get('window').height * 0.1,
        display: "flex",
        textAlignVertical: "center",
        paddingLeft: 20,
        color: "#75A5FF",
        fontWeight: "400",
        fontSize: 26,
        marginRight: 10,
    },
    titleContainer: {
        width: "100%",
        paddingTop: Dimensions.get('window').height * 0.2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: 'row'
    },
    name: {
        fontWeight: "300",
        fontSize: 22,
        color: "#000"
    },
    nickname: {
        fontWeight: "300",
        fontSize: 14,
        color: "#b3b3b3"
    }
})

export default EditUser