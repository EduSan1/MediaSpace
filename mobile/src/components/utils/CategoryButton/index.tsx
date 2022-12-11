import React, { useState } from "react"
import { Text, StyleSheet, Dimensions, Pressable, Image } from "react-native"

interface ICategoryButton {
    id: string
    action?: (id: string) => void
    category: string
    icon: string
    setSubCategories: (id: string, action: "REMOVE" | "ADD") => void

}


export const CategoryButton = ({ id, action, icon, category, setSubCategories }: ICategoryButton) => {

    const [isSelected, setIsSelected] = useState(false)

    const onSelected = () => {
        setIsSelected(!isSelected)
        setSubCategories(id, isSelected ? "REMOVE" : "ADD")
        action && action(id)
    }


    return (
        <Pressable onPress={() => onSelected()} style={isSelected ? styles.categorySelected : styles.category}>
            <Text style={isSelected ? styles.btnTextSelected : styles.btnText}>{category}</Text>
            <Image style={styles.icon} source={{ uri: icon }} />
        </Pressable>

    )
}
const styles = StyleSheet.create({
    category: {
        paddingHorizontal: Dimensions.get('window').width * 0.07,
        margin: Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: "#C6D2FF",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center"
    },
    btnTextSelected: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.045,
        fontWeight: '300',
        color: "#FFF",
        marginRight: 10

    },
    categorySelected: {
        paddingHorizontal: Dimensions.get('window').width * 0.07,
        margin: Dimensions.get('window').width * 0.02,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: "#75A5FF",
        borderRadius: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    btnText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.045,
        fontWeight: '300',
        color: "#000",
        marginRight: 10
    },
    icon: {
        width: 20,
        height: 20
    }
});