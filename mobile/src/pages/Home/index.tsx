import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import HeaderSearch from "../../components/utils/HeaderSearch";
export default function Home(){
    return (
        <SafeAreaView style={style.body}>
            <ScrollView style={style.Scroll}>
            <HeaderSearch label={"Pesquisar..."}  />
            <Text style={style.text}>Home</Text>
            </ScrollView>
        </SafeAreaView>
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