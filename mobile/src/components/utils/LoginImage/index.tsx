import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Alert, Pressable, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { firebase } from '../../../constants/firebase'
import { LoginButtonUpload } from '../LoginButtonUpload'
import { async } from '@firebase/util'

interface ILoadImage {
    userImage: string,
    setUserImage: (image: string) => void
}

export const LoginImage = ({ userImage, setUserImage }: ILoadImage) => {
    // https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/profilePicture%2FIconFreelancer.png?alt=media&token=ee6655ad-113c-40e0-9c3e-ef10b9c9bb57
    const [uploading, setUploading] = useState(false)


    const searchImage = async () => {

        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })

        const source = { uri: result.uri }
        
        if (source.uri != undefined)
            uploadImage(source)

    }

    const uploadImage = async (source: { uri: string }) => {

        setUploading(true)

        const response = await fetch(source.uri);
        const blob = await response.blob();
        const fileName = source.uri.substring(source.uri.lastIndexOf("/") + 1)
        var ref = firebase.storage().ref("profilePicture/").child(fileName).put(blob)

        try {
            const status = await ref

        } catch (error) {
            console.log(error)
        }
        setUserImage(await firebase.storage().ref("profilePicture/").child(fileName).getDownloadURL())

        setUploading(false)


    }

    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Foto de Perfil</Text>
            <Image style={styles.image} source={{ uri: userImage }} />
            <Text style={styles.text}>Escolha um arquivo jpg, png, gif...</Text>
            {uploading ?
                <ActivityIndicator size='large' color="#B275FF" />
                :
                <LoginButtonUpload type="dark" action={() => searchImage()} title="Upload" />
            }
            <Pressable onPress={() => setUserImage("https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/profilePicture%2FIconFreelancer.png?alt=media&token=ee6655ad-113c-40e0-9c3e-ef10b9c9bb57")}>
                <Text style={styles.textButton}>Remover imagem</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.35,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-evenly",
        position: "relative",
        alignItems: "center",
        color: '#B275FF',
        borderColor: '#D3C5F8',
        borderStyle: 'dashed'
    },
    inputTitle: {
        backgroundColor: "#fff",
        position: "absolute",
        paddingLeft: 5,
        paddingRight: 5,
        color: "#979797",
        top: -14,
        left: 10
    },
    image: {
        width: Dimensions.get("window").width * 0.25,
        height: Dimensions.get("window").width * 0.25,
        borderRadius: Dimensions.get("window").width * 0.2,
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        fontSize: 10,
        color: '#D3C5F8'
    },
    textButton: {
        fontSize: 10,
        color: '#B275FF',
        fontWeight: 'bold'
    }

})