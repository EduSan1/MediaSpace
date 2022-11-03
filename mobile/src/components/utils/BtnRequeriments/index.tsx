import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View} from "react-native"

interface IBtnRequirements {
    title: string
    action : () => void
}
export const BtnRequirements = ({title, action}:IBtnRequirements) => {
    return (
        <Pressable onPress={() => action()} style={styles.btnStyle}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>

    )

}
const styles = StyleSheet.create({

    btnStyle:{
        marginBottom:Dimensions.get('window').height * 0.1,
        backgroundColor:"#B275FF",
        width: Dimensions.get('window').width * 0.4,
        height:Dimensions.get('window').width * 0.12,
        justifyContent:"center",
        borderRadius:Dimensions.get('window').width * 0.018,
    },
    text: {
        textAlign:"center",
        color:"#FFF",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "700",
  
    },
})