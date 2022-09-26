import React, { useState } from 'react'
import {View, TextInput, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'

export default function(){

    return(
    <View>
               <View>
            <View style={style.labelContainer}>
                <Text style={style.text}>E-mail </Text>
            </View>
           <View style={style.input}>
                <TextInput style={style.inputText} placeholder="username@mediaspace.com" />
                <Icon name="email" style={style.icon}/>
            </View>

        </View>
        
    </View>
    )


}

const style = StyleSheet.create({
    input:{
        width: 260,
        height: 45,
        borderColor:"#D3C5F8",
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 40,
        color:"979797",
        display: 'flex',
        justifyContent:'center',
        alignItems:'flex-start'

        
    },
    labelContainer: {
        backgroundColor: "white", 
        alignSelf: "flex-start", 
        paddingHorizontal: 3, 
        marginStart: 10,
        zIndex: 1, 
        elevation: 1,
        shadowColor: "white",
        position: "absolute", 
        top: -12, 
    },
    text:{
        color:'#979797',

    },
    icon:{
        position:'absolute',
        fontSize:25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        marginEnd: '2%',
    },
    inputText:{
        width:'85%'
    }

})