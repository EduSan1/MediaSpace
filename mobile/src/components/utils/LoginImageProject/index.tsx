import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Alert, Pressable, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { firebase } from '../../../constants/firebase'
import { LoginButtonUpload } from '../LoginButtonUpload'

interface ILoadImage {
    userImage: { url: string; }[],
    setUserImage: (image: string) => void
    isActive : boolean
}

export const LoginImageProject = ({ userImage, setUserImage, isActive }: ILoadImage) => {
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
        var ref = firebase.storage().ref("projectImages/").child(fileName).put(blob)

        try {
            const status = await ref
        } catch (error) {
            console.log(error)
        }

      
        setUserImage(await firebase.storage().ref("projectImages/").child(fileName).getDownloadURL())

        setUploading(false)


    }

    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Imagens de referências</Text>
            <View style={styles.containerImage}>
            <Image style={styles.image} source={{ uri: userImage[0].url }} />
            <Image style={styles.image} source={{ uri: userImage[1].url }} />
            <Image style={styles.image} source={{ uri: userImage[2].url }} />
            <Image style={styles.image} source={{ uri: userImage[3].url }} />
            </View>
            {
                  isActive ?
                  <Text style={styles.text}>Escolha um arquivo jpg, png, gif...</Text>
                  : null
            }
         
            
            {uploading ?
                <ActivityIndicator size='large' color="#B275FF"/>
                :
                isActive ?
                <LoginButtonUpload type="dark" action={() => searchImage()} title="Selecionar Imagem" />
                : null
            }
            {/* <Pressable onPress={() => setUserImage("https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/profilePicture%2FIconFreelancer.png?alt=media&token=ee6655ad-113c-40e0-9c3e-ef10b9c9bb57")}>
                <Text style={styles.textButton}>Remover imagem</Text>
            </Pressable> */}
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.5,
        borderWidth: 1,
        borderRadius: 10,
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
        width: Dimensions.get('window').width * 0.8,
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',        
    },
    image: {
        width: Dimensions.get("window").width * 0.4,
        height: Dimensions.get("window").width * 0.3,
        resizeMode: 'contain',
        display: 'flex',
        alignItems:'center',
        marginBottom: 10,
        borderColor: '#000',
        
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