import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Alert, Pressable, ActivityIndicator, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { firebase } from '../../../constants/firebase'
import { LoginButtonUpload } from '../LoginButtonUpload'
import { async } from '@firebase/util'
import * as DocumentPicker from 'expo-document-picker';

interface ILoadAttachment {
    userAttachment: { url: string; }[],
    setUserAttachment: (attachment: string) => void
    isActive : boolean
}

export const Attachment = ({userAttachment, setUserAttachment, isActive}: ILoadAttachment) => {
    const [singleFile, setSingleFile] = useState(false)
    
    const uploadFiles = async() => {
        if(singleFile != null){
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'File Upload');

        }
    }

}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.4,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        display:'flex',
        justifyContent: 'space-evenly',
        position:'relative',
        alignItems:'center',
        color: '$B275FF',
        borderColor: '#D3C5F8',
    },
    inputTitle:{
        backgroundColor: '#fff',
        position: 'absolute',
        paddingLeft: 5,
        paddingRight: 5,
        color:'#979797',
        top: -14,
        left: 10
    },
    view:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.30,
        display:'flex',
    },
    scroll:{
        width: Dimensions.get('window').width * 0.8,
        display: 'flex',
    },
    textButton: {
        fontSize: 10,
        color: '#B275FF',
    },

})