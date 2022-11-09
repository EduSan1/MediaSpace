import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import HeaderSearch from "../../components/utils/HeaderSearch";
import TabBar from "../../components/utils/TabBar";

interface IProfile {
    navigation: any
}

export default function Profile({ navigation }: IProfile) {
    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }
    return (
        <>
            <TabBar currentScreen="Profile" navigateTo={navigateTo} />
            <SafeAreaView style={styles.body}>
                <ScrollView style={styles.Scroll}>
                    <LinearGradient style={styles.header} colors={['#1B2469', '#6C5CBB']}>
                        <View style={styles.profileNavigationContainer}></View>
                        <View style={styles.profileImageContainer}>
                            <Image source={{ uri: "https://pbs.twimg.com/media/ElW7PfVW0AAeg04.jpg" }} style={styles.profileImage}></Image>
                        </View>
                        <View style={styles.profileDetailsContainer}>
                            <View style={styles.details}>
                                <Text style={styles.name}>Nome</Text>
                                <Text style={styles.nickname}>@Nickname</Text>
                            </View>
                            <Text style={styles.description}>Descricao</Text>
                        </View>
                        <View style={styles.profileCategoriesContainer}>
                            <View style={styles.categoryCard}>
                                <Text>Categoria</Text>
                            </View>
                        </View>
                    </LinearGradient>
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
    text: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "500",
    },
    header: {
        width: Dimensions.get('window').width,
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column"

    },
    profileNavigationContainer: {
        width: "100%",
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: "#d3d4d390"
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
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: "#a3f4f390",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",

    },
    profileImage: {
        width: Dimensions.get('window').height * 0.13,
        height: Dimensions.get('window').height * 0.13,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 3
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
    description: {
        fontWeight: "500",
        // backgroundColor: "#fff",

        fontSize: 14,
        color: "#fff"
    },



    categoryCard: {
        width: "auto",
        height: Dimensions.get('window').height * 0.05,
        backgroundColor: "#fda",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})