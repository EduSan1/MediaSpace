
import React from "react";
import { View, StyleSheet, Image, Dimensions, Pressable } from "react-native";

interface IProfileNavigation {
    isFreelancer: boolean
    currentPage: "myProjects" | "projectsToWork"
    setCurrentPage: React.Dispatch<React.SetStateAction<"myProjects" | "projectsToWork">>
}

export default function ProfileNavigation({ isFreelancer, currentPage, setCurrentPage }: IProfileNavigation) {


    return (
        <>
            <View style={styles.profileNavigationContainer}>

                <Pressable onPress={() => setCurrentPage("myProjects")} style={currentPage === "myProjects" ? styles.itemSelected : styles.item}>
                    <Image style={styles.image} source={require("../../../../assets/icons/graphicsIcon.png")}></Image>
                </Pressable >

                {
                    isFreelancer &&
                    <Pressable onPress={() => setCurrentPage("projectsToWork")} style={currentPage === "projectsToWork" ? styles.itemSelected : styles.item}>
                        <Image style={styles.image} source={require("../../../../assets/icons/graphicsIcon.png")}></Image>
                    </Pressable >
                }


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