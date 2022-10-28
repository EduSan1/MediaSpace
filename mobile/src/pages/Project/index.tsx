import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { BtnNewProject } from "../../components/utils/BtnNewProject";
import HeaderSearch from "../../components/utils/HeaderSearch";
import TabBar from "../../components/utils/TabBar";


interface IProject{
    navigation: any
}
export default function Project({navigation}:IProject){
        const navigateTo = (screen : string) => {
            navigation.navigate(screen)
        }

        return (
        <>
        <TabBar currentScreen="Project"  navigateTo={navigateTo}/>
        <BtnNewProject  action={() => navigation.navigate('RegisterProject')}/>
        <ScrollView style={style.Scroll}>
            <SafeAreaView style={style.body}>
                <HeaderSearch label={"Pesquisar..."}  />
                    <Text style={style.text}>Project</Text>
            </SafeAreaView>
        </ScrollView>
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