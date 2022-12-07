import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View } from "react-native"

interface IBtnConfirmRequirements {
    action: () => void
    label: string
    color: "#f66" | "#B275FF"
}
export const BtnConfirmRequirements = ({ action, label, color }: IBtnConfirmRequirements) => {
    return (
        <Pressable onPress={() => action()} style={{ ...styles.btnStyle, backgroundColor: color }}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>

    )

}
const styles = StyleSheet.create({

    btnStyle: {
        marginBottom: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.4,
        minHeight: Dimensions.get('window').width * 0.12,
        height: "auto",
        justifyContent: "center",
        borderRadius: Dimensions.get('window').width * 0.018,
        padding: 10
    },
    text: {
        textAlign: "center",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "700",
        color: "#fff",
    },
})