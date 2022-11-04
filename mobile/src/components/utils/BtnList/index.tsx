import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View} from "react-native"

interface IBtnList {
    title: string
    onPress : () => void
}
export const BtnList = ({title, onPress}:IBtnList) => {
    return (
        <Pressable onPress={() => onPress()} style={styles.btnStyle}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>

    )

}
const styles = StyleSheet.create({

    btnStyle:{
        backgroundColor:"#894AB8",
        width: Dimensions.get('window').width * 0.3,
        height:Dimensions.get('window').width * 0.08,
        justifyContent:"center",
        borderRadius:Dimensions.get('window').width * 0.1,
    },
    text: {
        textAlign:"center",
        color:"#FFF",
        fontSize: Dimensions.get('window').height * 0.015,
        fontWeight: "700",
  
    },
})