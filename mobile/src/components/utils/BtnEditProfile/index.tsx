import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View} from "react-native"

interface IBtnEditProfile{
    action: () => void 
}
export const BtnEditProfile = ({action}:IBtnEditProfile) => {
    return (
        <Pressable onPress={() => action()} style={styles.btnStyle}>
            <Text style={styles.text}>Editar</Text>
        </Pressable>

    )

}
const styles = StyleSheet.create({

    btnStyle:{

        marginTop:Dimensions.get('window').height * 0.01,
        borderWidth:1,
        borderColor:"#B275FF",
        width: Dimensions.get('window').width * 0.2,
        height:Dimensions.get('window').width * 0.09,
        justifyContent:"center",
        borderRadius:Dimensions.get('window').width * 0.18,
    },
    text: {
        textAlign:"center",
        fontSize: Dimensions.get('window').height * 0.02,
        fontWeight: "400",
  
    },
})