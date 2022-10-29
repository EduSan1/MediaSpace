import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions} from "react-native";
import HeaderSearch from "../../components/utils/HeaderSearch";
import TabBar from "../../components/utils/TabBar";

interface IProfile {
    navigation : any
}

export default function Profile({navigation} : IProfile){
    const navigateTo = (screen : string) => {
        navigation.navigate(screen)
    }
    return (
        <>
        <TabBar currentScreen="Profile" navigateTo={navigateTo}/>
        <SafeAreaView style={style.body}>
        <ScrollView style={style.Scroll}>
            <HeaderSearch label={"Pesquisar..."}  />
            <Text style={style.text}>Profile</Text>
            </ScrollView>
        </SafeAreaView>
        </>
        )
    
}
const style = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    Scroll:{
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    text:{
        textAlign:"center",
        fontSize:50,
        fontWeight:"500",
    }
})