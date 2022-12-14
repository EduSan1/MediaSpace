import React from "react"
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, ToastAndroid, Pressable } from "react-native"
import api from "../../../../service";
import { CategoryButton } from "../CategoryButton";
import { CategoryCard } from "../CategoryCard";
import * as SecureStore from "expo-secure-store"


interface IProject {
    id: string
    name: string,
    description: string
    value: number
    image: string
    categories: any
    user: {
        id: string
        first_name: string
        nickname: string
        profile_picture: string
    },
    navigation: any
}

export const ListProjectCard = ({ id, name, description, value, image, categories, user, navigation }: IProject) => {
    console.log(user)

    const userProject = async () => {

        const userId = await SecureStore.getItemAsync('userId')

        api.get(`/project/${id}`).then((res: any) => {
            if (user.id === userId) {
                navigation.navigate("ProjectOwner", {
                    projectId: res.data.data.id,


                })
            } else {
                navigation.navigate("Project", {
                    projectId: res.data.data.id,
                    userId: userId
                })
            }
            console.log(res.data)
        })
    }
    return (

        <Pressable onPress={() => userProject()}>
            <View style={styles.containerCard}  >


                <View style={styles.imagecontainer}>
                    <Image style={{ width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: image }} />
                </View>

                <View style={styles.profile}>
                    <Image style={{ width: "20%", height: "100%", borderRadius: 100 }} source={{ uri: user.profile_picture }} />
                    <Text style={styles.nameArroba}> @{user.nickname}</Text>
                </View>

                <View style={styles.describle}>
                    <Text style={styles.nameProject}> {name}</Text>
                    <Text numberOfLines={3} style={styles.description}> {description}</Text>
                </View>

                <View style={styles.value}>
                    <Text style={styles.description}> Valor estimado:</Text>
                    <Text style={styles.description}> {value}</Text>
                </View>
                <View style={styles.category}>
                    <CategoryCard category={categories[0].name} icon={categories[0].icon} key={categories[0].id} />
                    {
                        categories[1] &&
                        <CategoryCard category={categories[1].name} icon={categories[1].icon} key={categories[1].id} />

                    }
                    {
                        categories.length > 2 ? <Text>...</Text> : null
                    }
                </View>

            </View>
        </Pressable>


    )
}

const styles = StyleSheet.create({

    containerCard: {
        width: Dimensions.get('window').width * 0.45,
        minHeight: Dimensions.get("window").height * 0.35,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3C5F8',
        backgroundColor: "#fff",
        marginBottom: 20,
        height: "auto",

    },

    imagecontainer: {
        width: Dimensions.get('window').width * 0.44,
        height: Dimensions.get("window").height * 0.1,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,


    },
    profile: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get("window").height * 0.035,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    describle: {
        width: Dimensions.get('window').width * 0.44,
        minHeight: Dimensions.get("window").height * 0.05,
        height: "auto",

    },
    value: {
        width: Dimensions.get('window').width * 0.44,
        height: Dimensions.get("window").height * 0.035,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    category: {
        width: Dimensions.get('window').width * 0.44,
        height: Dimensions.get("window").height * 0.03,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5

    },
    nameArroba: {
        fontSize: 12
    },
    nameProject: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12,
    },

})