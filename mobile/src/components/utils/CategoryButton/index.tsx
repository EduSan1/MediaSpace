import React from "react"
import { Text, StyleSheet, Dimensions, Pressable, ActivityIndicator } from "react-native"
interface ILoginButton {
    action: () => void
    type: "light" | "dark"
    title: string
    isLoad: boolean
}

export const CategoryButton = ({ action, type, title, isLoad }: ILoginButton) => {

    return (
        <Pressable onPress={() => isLoad ? null : action()} style={type === "light" ? styles. category : styles.categorySelected}>
            {isLoad ?
                <ActivityIndicator size="large" color="#B275FF" />
                :
                <Text style={type === "light" ? styles.textButton : styles.darkText}>{title}</Text>
            }
        </Pressable>

    )
}
const styles = StyleSheet.create({
    category: {
        width: Dimensions.get('window').width * 0.67,
        height: Dimensions.get('window').height * 0.07,
        backgroundColor: "#B275FF",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.04,
        fontWeight: 'bold',
        color: "#fff",
    },
    categorySelected: {
        
        paddingHorizontal:Dimensions.get('window').width * 0.07,
        margin:Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: "#75A5FF",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    darkText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.045,
        fontWeight: '300',
        color: "#FFF",

    }
});