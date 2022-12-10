import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button, Pressable } from "react-native";
import { BtnRequirementsOpenProfile } from "../btnRequerimentsOpenProfile";

interface IWorkersAppliedProfile {
    id: string
    name: string
    nickname: string
    icon: string
    navigation: any
}
export default function WorkersAppliedProfile({ name, nickname, icon, id, navigation }: IWorkersAppliedProfile) {
    return (
        <Pressable style={style.cardProfile}>
            <Image source={{ uri: icon }} style={style.iconProfile} />

            <View style={style.textBox}>

                <Text style={style.textName}>{name}</Text>
                <Text style={style.textNick}>@{nickname}</Text>
            </View>
            <BtnRequirementsOpenProfile onPress={() => navigation.navigate("FreelancerProfile", { freelancerId: id })} />
        </Pressable>
    )
}
const style = StyleSheet.create({
    cardProfile: {
        marginTop: Dimensions.get('window').height * 0.02,
        flexDirection: "row",
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.10,
        backgroundColor: "#C6D2FF",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
    },
    iconProfile: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        borderRadius: 1000,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
    },
    textBox: {
        width: Dimensions.get('window').width * 0.37,
        height: Dimensions.get('window').width * 0.15,
        // backgroundColor:"black"
        // marginLeft:"20",

    },
    textName: {
        textAlign: "left",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "400",

    },
    textNick: {
        textAlign: "left",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "200",
        color: "#808080",

    },
})