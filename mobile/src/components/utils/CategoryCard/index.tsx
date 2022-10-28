import React, { useState } from "react"
import { Text, StyleSheet, Dimensions, Pressable, ActivityIndicator } from "react-native"

interface ICategoryCard {

    category: string
    icon: string
    
}


export const CategoryCard = ({ icon, category }: ICategoryCard) => {

   


    

    return (
        <Pressable style={styles.category}>
                <Text style={styles.btnText}>{category}</Text>
        </Pressable>

    )
}
const styles = StyleSheet.create({
    category: {
        paddingHorizontal:Dimensions.get('window').width * 0.01,
        width: Dimensions.get('window').width * 0.19,
        height: Dimensions.get('window').height * 0.03,
        backgroundColor: "#C6D2FF",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight:5
    },
    btnText: {
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.02,
        fontWeight: '300',
        color: "#000",

    }
});