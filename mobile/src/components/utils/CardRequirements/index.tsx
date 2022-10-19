import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View, ScrollView,} from "react-native"


export const CardRequirements= () => {
    return (
        <View style={style.sectionProject}>
            <View style={style.textIcon}>
                <Image style={style.icon} source={require('../../../../assets/icons/checkedImage.png')}/>
                <Text style={style.textStatusRequeriments}>01 - Entregue</Text>
            </View>
            <Text style={style.titleRequeriments}>Layout</Text>
            <Text style={style.TextRequirements}>O layout define como o app inteiro será representado bla bla bla </Text>
                <View style={style.cardRequirements}>
                    <Text style={style.TextCardRequirements}>Porcentagem do valor: 25%</Text>
                    <Text style={style.TextCardRequirements}> Valor = R$ 500,00</Text>
                </View>
        </View>
    )

}
const style = StyleSheet.create({

    sectionProject: {
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').height * 0.22,
    alignSelf:"center",
    marginVertical: 20,
    // backgroundColor: "blue",
    },
    textIcon:{
        flexDirection:"row"
    },
    icon:{
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06,
    },
    textStatusRequeriments:{
        fontSize:18,
        color:"#75A5FF",
        fontWeight:"300",
        paddingLeft:10,
    },
    titleRequeriments:{
        marginLeft:Dimensions.get('window').width * 0.08,
        fontSize:18,
    },
    TextRequirements:{
        marginLeft:Dimensions.get('window').width * 0.08,
        fontSize:15,
        color:"#808080",
    },
    cardRequirements:{
        marginLeft:Dimensions.get('window').width * 0.08,
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.10,
        backgroundColor:"#CECCFD",
        borderRadius:10,
    },
    TextCardRequirements:{
        marginTop:10,
        marginLeft:Dimensions.get('window').width * 0.02,
        fontSize:17,
        color:"#756DE6",
    }

})