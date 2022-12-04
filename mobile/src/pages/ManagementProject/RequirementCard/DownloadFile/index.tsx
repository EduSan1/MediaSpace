import React, { useEffect, useState } from "react";
import { FullMetadata, getMetadata, getStorage, ref } from "firebase/storage";
import { Linking, Pressable, Text, StyleSheet, Image, View, Dimensions } from "react-native";

interface IDownloadFile {
    delivery: IDelivery
}

export interface IDelivery {
    id: string,
    title: string,
    description: string,
    is_accepted: boolean,
    is_active: boolean,
    create_at: string,
    files: [
        {
            id: string,
            url: string
        }
    ]
}


export const DownloadFile = ({ delivery }: IDownloadFile) => {

    const [metadata, setMetadata] = useState<FullMetadata>()

    const getMetadataFromDelivery = async () => {
        const storage = getStorage();
        const forestRef = ref(storage, delivery.files[0].url);

        getMetadata(forestRef)
            .then((metadata: FullMetadata) => {
                setMetadata(metadata)
                console.log(metadata)
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
                console.log(error)

            })
    }

    const formatBytes = (bytes: number | undefined, decimals = 2) => {
        if (bytes === undefined)
            return
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    useEffect(() => {
        getMetadataFromDelivery()
    }, [])

    return (
        <Pressable onPress={() => Linking.openURL(delivery.files[0].url)} style={styles.deliveryDocumentContainer}>
            <Image style={styles.imageFile} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfileIcon.png?alt=media&token=892a6315-2670-4682-8e8f-60a79940cc04" }} />
            <View style={styles.deliveryDetailsContainer}>
                <Text numberOfLines={1} style={styles.deliveryTitle}> {metadata?.name}</Text>
                <View style={styles.deliveryDataSizeContainer}>
                    <Text style={styles.deliveryText}> {metadata?.timeCreated.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</Text>
                    <Text style={styles.deliveryText}> {formatBytes(metadata?.size)}</Text>
                </View>
            </View>
            <Image style={styles.imageDownload} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FdownloadIcon.png?alt=media&token=e5612317-2001-4336-9eb0-52e20a8a3dd9" }} />


        </Pressable>
    )
}


const styles = StyleSheet.create({
    deliveryDocumentContainer: {
        width: "90%",
        height: "45%",
        backgroundColor: "#E2E8FF",
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    imageFile: {
        width: Dimensions.get("window").width * 0.1,
        height: Dimensions.get("window").width * 0.1,
        backgroundColor: "#E2E8FF",
        borderRadius: 15,
        display: "flex",
    },
    deliveryDetailsContainer: {
        width: "70%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",

    },
    deliveryTitle: {
        width: "100%",
        height: "50%",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 13,
        fontWeight: "500",
        textAlignVertical: "center",
    },
    deliveryText: {

        fontSize: 10,
        fontWeight: "400",
        textAlignVertical: "center",
    },
    deliveryDataSizeContainer: {
        width: "100%",
        height: "50%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    imageDownload: {
        width: Dimensions.get("window").width * 0.09,
        height: Dimensions.get("window").width * 0.09,
        backgroundColor: "#E2E8FF",
        borderRadius: 15,
        display: "flex",
    },
})