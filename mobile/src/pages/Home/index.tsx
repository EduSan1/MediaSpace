import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HeaderSearch from "../../components/utils/HeaderSearch";
import TabBar from "../../components/utils/TabBar";
import BtnBackPage from "../../components/utils/BtnBackPage";
import { BtnEdit } from "../../components/utils/BtnEdit";
import UpgradeClient from "../Profile/UpgradeClient";

interface IHome {
    navigation: any
}

export default function Home({ navigation }: IHome) {

    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    return (
        <>
            <TabBar currentScreen="Home" navigateTo={navigateTo} />
            <BtnBackPage navigation={navigation} />
            <SafeAreaView style={style.body}>
                <ScrollView style={style.Scroll}>
                    <HeaderSearch label={"Pesquisar..."} />
                    <Text style={style.text}>Home</Text>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const style = StyleSheet.create({
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
    
})