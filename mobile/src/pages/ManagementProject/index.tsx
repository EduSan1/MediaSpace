import React from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView, Dimensions } from "react-native";

const ManagementProject = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
        height: "auto",
        backgroundColor: "#f67"
    }

})

export default ManagementProject