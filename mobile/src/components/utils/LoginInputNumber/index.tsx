import React, { useState } from "react"
import { Text, StyleSheet, View, TextInput, Dimensions, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaskInput from 'react-native-mask-input';
interface ILoginInputNumber {
    title: string
    value: string
    name: string
    iconName: string
    isPassword?: boolean
    hasError: boolean
    handleChange: (text: string, name: string) => void
    onClickIcon?: () => void
    maxLength: number
    keuboardType: string
}

export const LoginInputNumber = ({ title, value, name, iconName, handleChange, isPassword, onClickIcon, hasError, maxLength, keuboardType }: ILoginInputNumber) => {

    const [inputTitle, serInputTitle] = useState(false)
    const [phone, setPhone] = React.useState('')

    return (


        <View style={[styles.container, hasError ? { borderColor: "#FF6666" } : { borderColor: "#D3C5F8" }]}>



            {inputTitle ? <Text style={styles.inputTitle} >{title}</Text> : null}
            <View style={styles.inputContainer}>

                <TextInput maxLength={maxLength} keyboardType={"numeric"} secureTextEntry={isPassword} value={value} onChangeText={(text) => handleChange(text, name)} onFocus={() => serInputTitle(true)} placeholder={inputTitle ? "" : title} style={styles.input} ></TextInput>
        

                <Pressable style={styles.inputIcon} onPress={() => onClickIcon ? onClickIcon() : null}>
                    <Icon size={Dimensions.get('window').height * 0.025} name={iconName} style={[styles.inputIcon, hasError ? { color: "#FF6666" } : { color: "#46307B" }]} />
                </Pressable>



            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.06,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        alignItems: "flex-start"
    },
    inputContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
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
    input: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').height * 0.05,
        color: "#979797",
    },
    inputIcon: {
        width: Dimensions.get('window').width * 0.06,
    }
});