import React from "react"
import  {View, StyleSheet, Dimensions, ScrollView, Text} from "react-native"
import { ScrollImage } from "../../components/utils/ScrollImage"

export const Project = () =>{


    return(
        <>
        <View style={styles.navigationBar}></View>
        
        <View style= {styles.container}>
        <ScrollImage/>
        
        <View>
            <Text>Criado em:</Text>
            <Text>Prazo término:</Text>
        </View>

        <View>
            <Text>Perfil</Text>
            <Text>Valor estiamdo:</Text>
        </View>


        <View>
            <Text>Titulo</Text>
        </View>

        <View>
            <Text>Descrião</Text>
        </View>

        <View>
            <Text>Documentos em anexos</Text>
        </View>

        <View>
            <Text>Categoria e sub-categoria</Text>
        </View>
        </View>

        <View style={styles.bar}></View>
        </>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#546789',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height *0.8 
    },
    bar : {
        height: Dimensions.get('window').height * .08,
        width: Dimensions.get('window').width,
        backgroundColor:"#f3fff1"
    },
    navigationBar : {
        height: Dimensions.get('window').height * .12,
        width: Dimensions.get('window').width,
        backgroundColor:"#f3fff1"
    },
   
})