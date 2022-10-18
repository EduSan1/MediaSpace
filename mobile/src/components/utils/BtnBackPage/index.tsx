import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View} from "react-native"

export const BtnBackPage = () => {
    return (
        <View style={styles.headerNav}>

        <Pressable style={styles.btnStyle}>
            <Image style={styles.icon} source={require('../../../../assets/icons/previous.png')}/>
        </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({

    btnStyle:{
        position:"absolute",
        marginHorizontal:Dimensions.get('window').width * 0.05,
        // marginTop:40,
        backgroundColor:'rgba(0,0,0,0.1)',
        width: Dimensions.get('window').width * 0.1,
        height:Dimensions.get('window').width * 0.1,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        
        width: Dimensions.get('window').width * 0.04,
        height:Dimensions.get('window').width * 0.03,
    },
    headerNav:{
        position:"absolute",
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height * 0.16,
        justifyContent:"center",

        zIndex: 1
    }
})