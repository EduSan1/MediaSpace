import React from "react";
import { Text, SafeAreaView, View, StyleSheet, Image } from "react-native";
import WavyBackground from "react-native-wavy-background";
// import LogoMediaSpace from '../../assets/icons/MediaSpaceLogo.svg'

const StartHome = () => {
    return (
        <SafeAreaView style={style.body}>
            <View style={style.sectionIcon}>
                <Image style={style.icon} source={require('../../assets/icons/MediaSpaceLogo.png')} />
                <Text style={style.textWelcome} > Bem Vindo!</Text>
                <Text style={style.textInfo}>Se prepare para explorar diversos trabalhos de multimídia.</Text>
            </View>
            <View>
                <View>
                    <WavyBackground
                        bottom={true}
                        height={100}
                        width={700}
                        amplitude={17}
                        frequency={3}
                        offset={60}
                        color="#B275FF"
                        />
                </View>
                <View style={style.section}>
                    <Text style={style.textStart}>Vamos lá!</Text>
                </View>
                    <Image style={style.imageConstelacao} source={require('../../assets/img/constelacao.png')}/>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    body: {
        height: "100%",
        width: "100%",
        // backgroundColor:"blue"

    },
    section: {
        height: "40%",
        width: "100%",
        backgroundColor: '#B275FF',
        
    },
    textStart: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFFFFF",
    },
    sectionIcon: {
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center"

    },
    icon: {
        alignItems: "center",
        width:150,
        height:150,

    },
    textWelcome: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: "center",
        color: "#935DCA",
        paddingVertical:20
    },
    textInfo: {
        fontSize: 16,
        fontWeight: '900',
        textAlign: "center",
        color: "#BCA7F4",
        paddingTop:10,
        paddingHorizontal:50,
    },
    imageConstelacao:{
        // zIndex:10,
        height: "75%",
        width: "100%",
        // backgroundColor:"black",
        position:"absolute",
 
    },
})

export default StartHome