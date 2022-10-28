import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView ,Dimensions} from "react-native";
import HeaderSearch from "../../components/utils/HeaderSearch";
import TabBar from "../../components/utils/TabBar";

interface IMassages {
    navigation : any
}


export default function Messages({navigation}:IMassages){
    const navigateTo = (screen : string) => {
        navigation.navigate(screen)
    }

    return (
     <>
     <TabBar currentScreen="Messages" navigateTo={navigateTo}/>
        <SafeAreaView style={style.body}>
        <ScrollView style={style.Scroll}>
            <HeaderSearch label={"Pesquisar..."}  />
            <Text style={style.text}>Messages</Text>
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