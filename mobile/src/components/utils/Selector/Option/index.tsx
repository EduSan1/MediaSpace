
import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

interface IOptionProps {
    title: string
    action: () => void
}

const Option = ({ title, action }: IOptionProps) => {

    return (
        <>

            <Pressable onPress={() => action()} style={styles.option}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>


        </>

    )

}
const styles = StyleSheet.create({

    title: {
        fontWeight: "800",
        fontSize: 26
    },
    container: {
        width: "100%",
        height: "auto"
        ,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    option: {
        width: "100%",
        height: 80,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 30,
        paddingRight: 30,
        borderTopColor: "#EAEAEA",
        borderTopWidth: 2,

    }
})

export default Option