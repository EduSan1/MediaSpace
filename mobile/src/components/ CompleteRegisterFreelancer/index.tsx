import React, { useState, useEffect } from "react";
import { StyleSheet,View, ScrollView,Text,Dimensions, Image  } from "react-native";
import { LoginButton } from "../utils/LoginButton";
import { CheckboxComponent } from "../utils/subCategory";

export const RegisterFreelancerComplete = () => {

    const [check, setCheck] = useState("")

    const [userRegister, setUserRegister] = useState({
        name: {
            "id": check
        },

    })
    useEffect(() => {
        setUserRegister({
            ...userRegister,
            name: {
                "id": check
            }
        })
    }
        , [check]
    )

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{`Com quais tipos de serviços você deseja trabalhar?`}</Text>

            {/* Categorias */}

            <View style={styles.textArea}>
                <Text style={styles.text1}>Categorais</Text>
            </View>

            <View style={styles.areaContainer1}>
                <ScrollView style={styles.sectionCategory}>
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                    <CheckboxComponent title="Figma" id="Figma" />
                    <CheckboxComponent title="3D" id="3d" />
                    <CheckboxComponent title="JavaScrpit" id="js" />
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                    <CheckboxComponent title="Figma" id="Figma" />
                    <CheckboxComponent title="3D" id="3d" />
                    <CheckboxComponent title="JavaScrpit" id="js" />
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                </ScrollView>
            </View>

            

            {/* SubCategorias */}
            <View style={styles.textArea}>
                <Text style={styles.text1}>Sub-Categorais</Text>
            </View>

            <View style={styles.areaContainer1}>
                <ScrollView style={styles.sectionSubCategory}>
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                    <CheckboxComponent title="Figma" id="Figma" />
                    <CheckboxComponent title="3D" id="3d" />
                    <CheckboxComponent title="JavaScrpit" id="js" />
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                    <CheckboxComponent title="Figma" id="Figma" />
                    <CheckboxComponent title="3D" id="3d" />
                    <CheckboxComponent title="JavaScrpit" id="js" />
                    <CheckboxComponent title="Adobe Photoshop" id="Adobe Photoshop" />
                </ScrollView>
            </View>

                <LoginButton action={() => console.log("a")} type="dark" title="Continuar"/>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor:"black",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        // backgroundColor: "#34f45f",
        alignItems:"center",
        
    },
    sectionSubCategory:{
        flexDirection:"row",
        width: Dimensions.get('window').width * 0.90 ,
        height: Dimensions.get('window').height * 0.3,
        flexWrap:"wrap",
        
    },
    sectionCategory:{
        flexDirection:"row",
        width: Dimensions.get('window').width * 0.90 ,
        height: Dimensions.get('window').height * 0.3,
        flexWrap:"wrap",

        
    },
    title: {
        marginHorizontal:20,
        height: Dimensions.get('window').height * 0.07,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",

        textAlignVertical: "center"
    },
    textArea:{
        width:"80%"    },
    text1: {
        fontSize: Dimensions.get("window").width * 0.04,
        color: "#979797",
    },
    areaContainer1:{
        height: Dimensions.get('window').height * 0.20,      
        marginBottom:15,
        borderWidth:2,
        borderColor:"#DEDEDE",
    },
    areaContainer2:{
        height: Dimensions.get('window').height * 0.20,      
        marginBottom:15,
        borderWidth:2,
        borderColor:"#DEDEDE"
        // elevation:7,
    },
})