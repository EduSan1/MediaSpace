import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Pressable } from "react-native";
import { BtnRequirementsOpenProfile } from "../btnRequerimentsOpenProfile";

export default function BtnWorkerSelectdProfile() {
    const [isSelected, setIsSelected] = useState(false)

    const onSelected = () => {
        setIsSelected(!isSelected)
    }
    return(
        <Pressable onPress={() => onSelected()} style={isSelected ? style.cardProfile : style.cardProfileSelected}>
            <View style={style.iconProfile}></View>
            <View style={style.textBox}>
            <Text style={style.textName}>UserProfile</Text>
            <Text style={style.textNick}>@User</Text>
            </View>
            {/* <View style={style.checked}>
                <View style={style.checkedCirlce}/>
            </View> */}

        </Pressable>
    )
}
const style = StyleSheet.create({
    cardProfile:{
        marginTop:Dimensions.get('window').height * 0.02,
        flexDirection:"row",
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.10,
        backgroundColor:"#F1F4FF",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
        borderWidth:2,
        borderColor:"#75A5FF",
    },
    cardProfileSelected:{
        marginTop:Dimensions.get('window').height * 0.02,
        flexDirection:"row",
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.10,
        // backgroundColor:"#FFF",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
    },
    iconProfile:{
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        borderRadius:1000,
        backgroundColor:"#CBCBCB",
        marginHorizontal:10,
    },
    textBox:{
        width: Dimensions.get('window').width * 0.50,
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
    checked:{
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
        borderRadius:1000,
        backgroundColor:"#75A5FF",
        justifyContent:"center",
        alignItems:"center"
    },
    checkedCirlce:{
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06,
        borderRadius:1000,
        backgroundColor:"#75A5FF",
        borderColor:"#FFF",
        borderWidth:2,
    
    },
    Unchecked:{
        display:"none"
    }
})