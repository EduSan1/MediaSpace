
import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";


export default function ProfileNavigation() {


    return (
        <>
            <View style={styles.profileNavigationContainer}>

                <View style={styles.itemSelected}>
                    <Image style={styles.image} source={require("../../../../assets/icons/graphicsIcon.png")}></Image>
                </View>

            </View>
        </>
    )

}
const styles = StyleSheet.create({
    profileNavigationContainer: {
        width: "100%",
        height: "auto",
        borderTopEndRadius: 80,
        borderTopStartRadius: 80,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    item: {
        width: "30%",
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    itemSelected: {
        width: "30%",
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#0005",
        borderBottomWidth: 3
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})