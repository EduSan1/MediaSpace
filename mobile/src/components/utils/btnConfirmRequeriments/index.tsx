import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View} from "react-native"

interface IBtnConfirmRequirements{
    action: () => void 
}
export const BtnConfirmRequirements = ({action}:IBtnConfirmRequirements) => {
    return (
        <Pressable onPress={() => action()} style={styles.btnStyle}>
            <Text style={styles.text}>Confirmar</Text>
        </Pressable>

    )

}
const styles = StyleSheet.create({

    btnStyle:{
        marginBottom:Dimensions.get('window').height * 0.1,
        borderWidth:1,
        borderColor:"#B275FF",
        width: Dimensions.get('window').width * 0.4,
        height:Dimensions.get('window').width * 0.12,
        justifyContent:"center",
        borderRadius:Dimensions.get('window').width * 0.018,
    },
    text: {
        textAlign:"center",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "700",
  
    },
})