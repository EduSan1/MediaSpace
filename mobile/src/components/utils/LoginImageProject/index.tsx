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

export const LoginImageProject = ({ userImage, setUserImage }: ILoadImage) => {
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
            <Text style={styles.inputTitle}>Imagens de referências</Text>
            <View style={styles.containerImage}>
            <Image style={styles.image} source={{ uri: userImage }} />
            <Image style={styles.image} source={{ uri: userImage }} />
            <Image style={styles.image} source={{ uri: userImage }} />
            <Image style={styles.image} source={{ uri: userImage }} />
            </View>
            <Text style={styles.text}>Escolha um arquivo jpg, png, gif...</Text>
            
            {uploading ?
                <ActivityIndicator size='large' color="#B275FF"/>
                :
                <LoginButtonUpload type="dark" action={() => searchImage()} title="Selecionar Imagem" />
            }
            <Pressable onPress={() => setUserImage("https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/profilePicture%2FIconFreelancer.png?alt=media&token=ee6655ad-113c-40e0-9c3e-ef10b9c9bb57")}>
                <Text style={styles.textButton}>Remover imagem</Text>
            </Pressable>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.4,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-evenly",
        position: "relative",
        alignItems: "center",
        color: '#B275FF',
        borderColor: '#D3C5F8',
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
    containerImage:{
        width: Dimensions.get('window').width * 0.79,
        justifyContent: 'space-between',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',        
    },
    image: {
        width: Dimensions.get("window").width * 0.38,
        height: Dimensions.get("window").width * 0.22,
        display: 'flex',
        alignItems:'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 10,
        color: '#D3C5F8'
    },

    textButton: {
        fontSize: 10,
        color: '#B275FF',
    },

})