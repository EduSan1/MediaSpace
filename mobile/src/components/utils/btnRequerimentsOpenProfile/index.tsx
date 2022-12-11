import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View } from "react-native"

interface IBtn {
    onPress: () => void
}

export const BtnRequirementsOpenProfile = ({ onPress }: IBtn) => {
    return (
        <Pressable onPress={() => onPress()} style={styles.btnStyle}>
            <Text style={styles.text}>Abrir perfil</Text>
        </Pressable>

    )

}
const styles = StyleSheet.create({

    btnStyle: {
        borderWidth: 1,
        backgroundColor: "#FFF",
        borderColor: "#B275FF",
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.1,
        justifyContent: "center",
        borderRadius: Dimensions.get('window').width * 0.018,
    },
    text: {
        textAlign: "center",
        fontSize: Dimensions.get('window').height * 0.020,
        fontWeight: "600",
        color: "#B275FF"

    },
})