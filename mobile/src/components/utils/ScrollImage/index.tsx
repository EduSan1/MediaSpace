import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { firebase } from '../../../constants/firebase'
import { LoginButtonUpload } from '../LoginButtonUpload'

interface ILoadImage {
    userImage: { url: string; }[],
    setUserImage: (image: string) => void
    isActive: boolean
}

export const ScrollImage = ({ userImage, setUserImage, isActive }: ILoadImage) => {
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
        <>


            <ScrollView
                style={styles.containerImage}
                horizontal={true}
                pagingEnabled>

                {
                    userImage.map((image: any) => {
                        return <Image style={styles.image} source={{ uri: image.url }} />

                    })
                }
            </ScrollView>




        </>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,

    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width,
        resizeMode: 'contain',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#000',

    },
})