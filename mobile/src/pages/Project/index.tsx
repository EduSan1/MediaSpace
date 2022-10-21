import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { BtnNewProject } from "../../components/utils/BtnNewProject";
import HeaderSearch from "../../components/utils/HeaderSearch";


interface IProject{
    navigation: any
}
export default function Project({navigation}:IProject){
        // navigation.navigate("NavigationScreen")
        // const [isLoad, setIsLoad] = useState(false)
        return (
        <>
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