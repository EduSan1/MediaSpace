import React, { useEffect, useState } from "react"
import * as SecureStore from "expo-secure-store"
import { Text, TextInput, StyleSheet, Dimensions, Pressable, ActivityIndicator, View, Image } from "react-native"


interface IHeaderSearch {
    label: string
}
export default function HeaderSearch({ label }: IHeaderSearch) {

    const [userImage, setUserImage] = useState("https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f")
    const [hasImage, setHasimage] = useState(false)

    const setImage = async () => {
        const userImage = await SecureStore.getItemAsync('userImage')
        setUserImage(userImage ? userImage : "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8")
    }

    useEffect(() => {
        setImage()

    }, [])

    useEffect(() => {
        setHasimage(true)
    }, [userImage])

    return (

        <View style={styles.style}>
            <View style={styles.formContainer}>
                <Image style={styles.iconSearch} source={require('../../../../assets/icons/searchIcon.png')} />
                <TextInput placeholder="Pesquisar..."></TextInput>
            </View>
            
            {
                hasImage ?
                    <Image style={styles.iconProfile} source={{ uri: userImage }} />

                    :

                    <ActivityIndicator size="large" color="#B275FF" />
            }
            <View>
                <Image style={styles.iconSubMenu} source={require('../../../../assets/icons/MenuSlideIcon.png')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    style: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.13,
        // backgroundColor:"#CDCDCD",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    formContainer: {
        width: Dimensions.get('window').width * 0.65,
        height: Dimensions.get('window').height * 0.05,
        // backgroundColor:"black",
        borderWidth: 1,
        borderRadius: 20,
        border: 10,
        borderColor: "#B7C0D1",
        flexDirection: "row",
        alignItems: "center",
    },
    iconSearch: {
        width: Dimensions.get('window').width * 0.07,
        height: Dimensions.get('window').width * 0.07,
        borderRadius: 100,
        marginHorizontal: Dimensions.get('window').height * 0.01,
    },
    iconProfile: {
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').width * 0.10,
        borderRadius: 100,
        backgroundColor: "black",
        marginHorizontal: Dimensions.get('window').height * 0.015,
    },

    iconSubMenu: {
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
        borderRadius: 100,
        marginHorizontal: Dimensions.get('window').height * 0.01,
    },
    placeholder: {

    }
})