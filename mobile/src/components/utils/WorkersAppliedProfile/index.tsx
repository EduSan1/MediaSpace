import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button } from "react-native";
import { BtnRequirementsOpenProfile } from "../btnRequerimentsOpenProfile";

export default function WorkersAppliedProfile() {
    return(
        <View style={style.cardProfile}>
            <View style={style.iconProfile}></View>
            <View style={style.textBox}>
            <Text style={style.textName}>UserProfile</Text>
            <Text style={style.textNick}>@User</Text>
            </View>
            <BtnRequirementsOpenProfile/>
        </View>
    )
}
const style = StyleSheet.create({
    cardProfile:{
        marginTop:Dimensions.get('window').height * 0.02,
        flexDirection:"row",
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.10,
        backgroundColor:"#C6D2FF",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
    },
    iconProfile:{
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        borderRadius:1000,
        backgroundColor:"#FFF",
        marginHorizontal:10,
    },
    textBox:{
        width: Dimensions.get('window').width * 0.37,
        height: Dimensions.get('window').width * 0.15,
        // backgroundColor:"black"
        // marginLeft:"20",
        
    },
    textName: {
        textAlign:"left",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "400",
  
    },
    textNick: {
        textAlign:"left",
        fontSize: Dimensions.get('window').height * 0.023,
        fontWeight: "200",
        color:"#808080",
  
    },
})