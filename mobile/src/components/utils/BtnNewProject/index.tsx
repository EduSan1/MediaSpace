import React from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View} from "react-native"

interface IBtnNewProject {
    action: () => void
    // isLoad: boolean
}

export const BtnNewProject = ({ action }: IBtnNewProject) => {
    return (
        <View style={styles.headerNav}>

        <Pressable onPress={() => action()}style={styles.btnStyle}>
            <Image style={styles.icon} source={require('../../../../assets/icons/MoreIcon.png')}/>
        </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({

    btnStyle:{
        position:"absolute",
        // backgroundColor:'rgba(0,0,0,0.1)',
        backgroundColor:'rgba(117, 165, 255, 0.8)',
        width: Dimensions.get('window').width * 0.13,
        height:Dimensions.get('window').width * 0.13,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        
    },
    icon:{
        
        width: Dimensions.get('window').width * 0.06,
        height:Dimensions.get('window').width * 0.05,
        margin:10,
    },
    headerNav:{
        marginTop:Dimensions.get('window').height * 0.83,
        position:"absolute",
        width:Dimensions.get('window').width * 0.2,
        height:Dimensions.get('window').width* 0.2,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"flex-end",
        // backgroundColor:"green",
        zIndex: 1,
        
    }
})