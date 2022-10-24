import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View} from "react-native"
export const BtnRequirementsOpenProfile  = () => {
    return (
        <Pressable style={styles.btnStyle}>
            <Text style={styles.text}>Abrir Perfil</Text>
        </Pressable>

    )

}
const styles = StyleSheet.create({

    btnStyle:{
        borderWidth:1,
        borderColor:"#B275FF",
        width: Dimensions.get('window').width * 0.3,
        height:Dimensions.get('window').width * 0.1,
        justifyContent:"center",
        borderRadius:Dimensions.get('window').width * 0.018,
    },
    text: {
        textAlign:"center",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "700",
  
    },
})