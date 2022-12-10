import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Pressable } from "react-native";
import { CategoryCard } from "../../../components/utils/CategoryCard";


export interface IPost {
    id: string,
    title: string,
    description: string,
    is_active: boolean,
    categories:
    {
        id: string,
        name: string,
        icon: string,
        is_active: boolean,
        create_at: string,
        update_at: string
    }[],
    images:
    {
        id: string,
        url: string
    }[],
    team: {
        id: string,
        name: string,
        nickname: string,
        profile_picture: string
    }
}

interface IPostCard {
    post: IPost
    navigation?: any
}

const PostCard = ({ post, navigation }: IPostCard) => {
    return (
        <Pressable onPress={() => navigation && navigation.navigate("FreelancerProfile", { freelancerId: post.team.id })} style={styles.containerCard}  >


            <View style={styles.imagecontainer}>
                <Image style={{ width: "100%", height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: post.images[0].url }} />
            </View>
            {
                navigation &&
                <View style={styles.profile}>
                    <Image style={{ width: "13%", height: "100%", borderRadius: 100, marginRight: 10 }} source={{ uri: post.team.profile_picture }} />
                    <Text style={styles.nameArroba}>@{post.team.nickname}</Text>
                </View>
            }

            <View style={styles.describle}>
                <Text style={styles.nameProject}>{post.title} </Text>
                <Text style={styles.description}> {post.description}</Text>
            </View>
            <View style={styles.category}>
                <CategoryCard category={post.categories[0].name} icon={post.categories[0].icon} key={post.categories[0].id} />
                {
                    post.categories[1] &&
                    <CategoryCard category={post.categories[1].name} icon={post.categories[1].icon} key={post.categories[1].id} />

                }
                {
                    post.categories.length > 2 ? <Text>...</Text> : null
                }
            </View>

        </Pressable>
    );
}

const styles = StyleSheet.create({

    containerCard: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get("window").height * 0.45,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D3C5F8',
        backgroundColor: "#fff",
        marginBottom: 20

    },

    imagecontainer: {
        width: "100%",
        height: Dimensions.get("window").height * 0.2,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,


    },
    profile: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get("window").height * 0.05,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    describle: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get("window").height * 0.1,


    },
    category: {
        width: Dimensions.get('window').width * 0.8,
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

export default PostCard