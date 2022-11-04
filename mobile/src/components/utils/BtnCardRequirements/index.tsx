import React from "react"
import { Image, Text, StyleSheet, Dimensions,Pressable, View,} from "react-native"


export const BtnCardRequirements= () => {
    return (
        <Pressable style={style.sectionProject}>
            <Text style={style.titleRequeriments}>Novo Requisito</Text>
                <View style={style.IconBox}>
                    <Image style={style.icon} source={require('../../../../assets/icons/MoreIcon.png')}/>
                </View>


        </Pressable>
    )

}
const style = StyleSheet.create({

    sectionProject: {
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').height * 0.22,
    alignSelf:"center",
    marginVertical: 20,
    backgroundColor: "#CECCFD",
    borderWidth:3,  
    borderStyle:"dashed",
    borderColor:"#FFF",
    alignItems:"center",
    justifyContent:"space-evenly",
    },
    textIcon:{
        flexDirection:"row"
    },
    IconBox:{
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        backgroundColor:"rgba(117, 165, 255, 0.3)",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100

    },
    icon:{
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
    },
    titleRequeriments:{
        fontSize:18,
        fontWeight:"700",
        color:"#FFF",
    },
    
})