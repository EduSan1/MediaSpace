import React, { useState } from "react"
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native"
import { LoginInput } from "../../components/utils/LoginInput"
import { LoginButton } from "../../components/utils/LoginButton"
import { LoginTextArea } from "../../components/utils/LoginTextArea"
import { CheckboxComponent } from "../../components/utils/subCategory"
import { LoginInputNumber } from "../../components/utils/LoginInputNumber"
import { LoginImage } from "../../components/utils/LoginImage"
import { LoginImageProject } from "../../components/utils/LoginImageProject"
import { Attachment } from "../../components/utils/Attachment"
import { LoginBoost } from "../../components/utils/LoginBoost"
export const RegisterPreject = () => {

    const [check, setCheck] = useState("")
    const [registerProject, setRegisterProject] = (useState)({
        nameProject: "",
        describle: "",
        date: "",
        price:"",
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae",
    })
    const handleChange = (text: string, name: string) => {
        setRegisterProject(
            {
                ...registerProject,
                [name]: text
            }
        )
    }

    const handleUserPicture = (text: string) => {
        setRegisterProject(
            {
                ...registerProject,
                profile_picture: text
            }
        )
    }

    const [hasError, setHasError] = useState(false)
    const [registerProjectLoad, setRegisterProjectLoad] = useState(false)

    return (
    <>
        <View style={styles.navigationBar}></View>
        <View style={styles.scrollContainer}>

     

            <ScrollView
                style={styles.container}>
                <Text style={styles.title}>{`Criação de projeto`}</Text>
                <View style={styles.view}>
                    <LoginInput name="first_name" iconName="person-outline" value={registerProject.nameProject} handleChange={handleChange} hasError={hasError} title="Nome do Projeto" maxLength={100} />
                    <LoginTextArea name="describle" value={registerProject.describle} handleChange={handleChange} title="Descrição" maxLength={800} />

                    <View style={styles.textArea}>
                        <Text style={styles.text1}>Categorais</Text>
                    </View>

                    <View style={styles.areaContainer1}>
                        <ScrollView
                            horizontal={true}
                            style={styles.sectionCategory}>

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

                    <LoginImageProject userImage={registerProject.profile_picture} setUserImage={(image: string) => handleUserPicture(image)} />
                    <Attachment userAttachment={registerProject.profile_picture} setUserAttachment={(image: string) => handleUserPicture(image)}/>
                    <LoginInputNumber name="date" keuboardType="numeric" iconName="today" value={registerProject.date} handleChange={handleChange} hasError={hasError} title="Prazo estimado da entrega" maxLength={8} />
                    <LoginInputNumber name="price" keuboardType="numeric" iconName="today" value={registerProject.price} handleChange={handleChange} hasError={hasError} title="Valor estimado (BRL)" maxLength={40} />
                   
                    <View style={styles.checkBoost}>
                        <View style={styles.checkBoostView}>
                            <Text>Gratuito</Text>
                            <LoginBoost check={check} setCheck={setCheck}  value="G" />
                        </View>
                        <View style={styles.checkBoostView}>
                        <Text>R$50</Text>
                            <LoginBoost check={check} setCheck={setCheck} value="P" />
                        </View>              
                    </View>
                </View>

                <View style={styles.button}>
                    <LoginButton type="light" action={() => { console.log('teste') }} isLoad={registerProjectLoad} title="Publicar" />
                </View>



            </ScrollView>


        </View>

        <View style={styles.bar}></View>

    </>
    )
}

const styles = StyleSheet.create({
    title: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.07,
        textAlign: "center",
        fontSize: Dimensions.get("window").width * 0.05,
        fontWeight: 'bold',
        color: "#B275FF",
        textAlignVertical: "center",
        backgroundColor:"#fff"
    },
    scrollContainer: {
        height: Dimensions.get('window').height * .80,
        width: Dimensions.get('window').width,
    },
    bar : {
        height: Dimensions.get('window').height * .08,
        width: Dimensions.get('window').width,
        backgroundColor:"#f3fff1"
    },
    navigationBar : {
        height: Dimensions.get('window').height * .12,
        width: Dimensions.get('window').width,
        backgroundColor:"#f3fff1"
    },
    container: {
        width: Dimensions.get('window').width,
        height: "100%",
        backgroundColor: "#fff",
        display: 'flex',
    },
    view: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 2.7,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    textArea: {
        width: "100%"
    },
    text1: {
        fontSize: Dimensions.get("window").width * 0.04,
        color: "#000",
    },
    areaContainer1: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#DEDEDE",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap:'wrap'
    },
    sectionSubCategory: {
        flexDirection: "row",
        width: Dimensions.get('window').width * 0.7,

    },
    sectionCategory: {
        width: Dimensions.get('window').width * 0.85,
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
    
    },
    button: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1 ,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10

    },
    checkBoost:{
        width: Dimensions.get('window').width * 0.79,
        height: Dimensions.get("window").width * 0.7,
        justifyContent: 'space-between',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',  
    },
    checkBoostView:{
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get("window").width * 0.7,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:"#B275FF",
        alignItems: 'center',
        justifyContent:'center'
    }
})