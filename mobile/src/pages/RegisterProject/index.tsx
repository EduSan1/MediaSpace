import React, { useEffect, useState } from "react"
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
    const [imageIndex, setImageIndex] = useState(0)
    const [registerProject, setRegisterProject] = (useState)({
        name: "dasdasd",
        description: "asdasdasd",
        estimated_value: 10.50,
        estimated_deadline: "2022-12-31",
        images: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FIconFreelancer.png?alt=media&token=eff6a703-bdf0-46d4-a136-c31a31f37eae"
            }
        ],
        attachments: [
            {
                url: "Jorge"
            },
            {
                url: "Cleiton"
            },
            {
                url: "Jordania"
            }
        ],
        categories: [
            {
                id: "859c7fb7-9c8e-4bb2-88ef-605502ebbeaa"
            }
        ],
        sub_categories: [
            {
                id: "4b99388f-1f15-4dca-a2e1-33e6f5d9a69b"
            },
            {
                id: "56dd13ae-7f62-4c35-8e65-d44f374f747c"
            }
        ],
        user: {
            id: "71e89063-c775-4c13-bd29-7ee9ba2c4847"
        }
    })
    const handleChange = (text: string, name: string) => {
        setRegisterProject(
            {
                ...registerProject,
                [name]: text
            }
        )
    }

    const handleUserPicture = (text: any) => {

        console.log("images => ", text)
        let newImages = registerProject.images

        newImages[imageIndex] = {url : text}

        setRegisterProject({
                
                ...registerProject,
                images: newImages
        })

        setImageIndex(imageIndex + 1)
    }

    const [hasError, setHasError] = useState(false)
    const [registerProjectLoad, setRegisterProjectLoad] = useState(false)

    useEffect(() => {
        console.log("imag1231232e =>", registerProject.images)
    },[registerProject])

    return (
    <>
        <View style={styles.navigationBar}></View>
        <View style={styles.scrollContainer}>

     

            <ScrollView
                style={styles.container}>
                <Text style={styles.title}>{`Criação de projeto`}</Text>
                <View style={styles.view}>
                    <LoginInput name="name" iconName="person-outline" value={registerProject.name} handleChange={handleChange} hasError={hasError} title="Nome do Projeto" maxLength={100} />
                    <LoginTextArea name="description" value={registerProject.description} handleChange={handleChange} title="Descrição" maxLength={800} />

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

                    <LoginImageProject isActive={imageIndex == 4 ? false : true} userImage={registerProject.images} setUserImage={(image: string) => handleUserPicture(image)} />
                    {/* <Attachment userAttachment={registerProject.attachments} setUserAttachment={(attachment: string, index : number) => handleUserPicture(attachment, index)}/> */}
                    <LoginInputNumber name="estimated_deadline" keuboardType="numeric" iconName="today" value={registerProject.estimated_deadline} handleChange={handleChange} hasError={hasError} title="Prazo estimado da entrega" maxLength={10} />
                    <LoginInputNumber name="estimated_value" keuboardType="numeric" iconName="today" value={registerProject.estimated_value.toString()} handleChange={handleChange} hasError={hasError} title="Valor estimado (BRL)" maxLength={400} />
                   

                   <View style={styles.titleChecked}>
                        <Text style={styles.textTitle}>Impulsionamento</Text>
                        <Text style={styles.textTitle2}>(recurso pago)</Text>
                        <Text style={styles.textTitle3}>Tenha um alcance maior com sua publicação.</Text>

                   </View>
                    <View style={styles.checkBoost}>
                        <View style={styles.checkBoostView}>
                            <Text style={styles.titleCheck}>Padrão</Text>
                            <Text style={styles.subtitleCheck}>Gratuito</Text>
                            <Image style={styles.image} source={require("../../../assets/img/ellipse.png")} />
                            <LoginBoost check={check} setCheck={setCheck}  value="G" />
                        </View>

                        <View style={styles.checkBoostView}>
                            <Text style={styles.titleCheck}>Impulsionado</Text>
                            <Text style={styles.subtitleCheck}>R$50</Text>
                            <Image style={styles.image} source={require("../../../assets/img/ellipses.png")} />
                            <LoginBoost check={check} setCheck={setCheck} value="P" />
                        </View> 

                        <View style={styles.describleCheck}>
                            <Text style={styles.describleText}>Com a opção ‘’impulsionado‘’ você tem a sua publicação divulgada com um maior alcance, sendo anunciada nos primeiros resultados de exibição na plataforma. 
                            </Text>
                            <Text style={styles.describleText}>
                                Incluídos no impulsionamento:
                                Pagamento único (uma vez para cada publicação);
                                Maior visibilidade;
                                Destaque na exibição
                            </Text>
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
        height: Dimensions.get('window').height * 0.18 ,
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
    },
    subtitleCheck:{
        fontSize: 26,
        color:"#808080",
        fontWeight:'300'
    },
    titleCheck:{
        fontSize: 14,
        fontWeight:'300'
    },
    image:{
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get("window").width * 0.25,
    },
    describleCheck:{
        height: Dimensions.get("window").width * 0.2,
        alignItems: 'center',
        justifyContent:'center'
    },
    describleText:{
        fontSize: 10,
        fontWeight:'300'
    },
    titleChecked:{
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get("window").width * 0.08,
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    textTitle:{
        fontSize: 20,
        paddingEnd: 5,
    },
    textTitle2:{
        fontSize: 20,
        color:'#ff6666',
    },
    textTitle3:{
        fontSize: 12,
        color:'#808080',
    }

})