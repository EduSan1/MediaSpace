import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button,Pressable, TextInput, ToastAndroid} from "react-native";
import api from "../../../../service";
import { BtnConfirmRequirements } from "../btnConfirmRequeriments";

interface IModalRequirements {
    
    onClose: () => void
    requirementId?: string
    navigation: any
    route: any

}
export default function ModalRequirements({navigation, route, requirementId, onClose}:IModalRequirements) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [hasError, setHasError] = useState(false)
    const [requirementLoad, setRequirementLoad] = useState(false)
    const {projectId} = route.params

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const [createModal, setCreateModal] = (useState) ({
            title: "",
            description: "",
            gain_percentage: 0.2,
            project: {
                id: "4c72d504-5e51-490d-a831-a3ad9c3fbed8"
            }
    })

    const modalCreate = async () =>{

        const modalApi = {
            ...createModal
        }

        setRequirementLoad(true)
        console.log(createModal)
        api.post("/requirement", modalApi).then((res: any)=>{

            if(res.data.statusCode === 201){
                navigation.navigate("", {
                    modalId: res.data.data.id,
                })
            }else {
                ToastAndroid.show("res.data.message", 10)
            }
            console.log(res.data)
        })

        setRequirementLoad(false)

    }

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any)=>{
            setCreateModal(res.data.data)
        })
    }, [])
    return(
                    <Modal
                    animationType="fade"
                    visible={isModalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(!isModalVisible);
                    }}>
                    <View style={style.centeredView}>
                        <View style={style.modalView}>

                            <View style={style.headerModal}>
                                <View style={style.BoxTextModal}>
                                    <Text style={style.TitleModal}>Criar Requisito</Text>
                                </View>
                                <View style={style.BoxBtnModal}>
                                    <Pressable
                                        style={style.buttonClose}
                                        onPress={() => setModalVisible(!isModalVisible)}>
                                        <Image style={style.IconClose} source={require('../../../../assets/icons/CloseIconX.png')}/>
                                    </Pressable>
                                </View>
                            </View>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Titulo </Text>
                                </View>
                                <TextInput style={style.InputTitleModal} placeholder="Titulo...">{createModal.title}</TextInput>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Descrião</Text>
                                </View>
                                <TextInput style={style.InputDescModal} placeholder="Descriçâo...">{createModal.description}</TextInput>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Porcentual</Text>
                                </View>
                                <TextInput maxLength={3} keyboardType = 'numeric' style={style.InputTitleModal} placeholder="Porcentual...">{createModal.gain_percentage}</TextInput>
                                
                                <View style={style.boxBtn}>
                                    <BtnConfirmRequirements action={() => modalCreate()}/>
                                </View>
                        </View>
                    </View>
                    </Modal>

)}
const style = StyleSheet.create({
 // modal
modalView: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.8,
    position:"absolute",
    zIndex:1,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    // backgroundColor: "green",
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    alignItems:"center",
    justifyContent:"center"
},
IconClose:{
    width: Dimensions.get('window').width * 0.07,
    height: Dimensions.get('window').width * 0.07,
},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  headerModal:{
    // backgroundColor:"black",
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.064,
    flexDirection:"row"
  },
  BoxTextModal:{
    // backgroundColor:"black",
    width: Dimensions.get('window').width * 0.60,
    height: Dimensions.get('window').height * 0.064,
    justifyContent:"center"
  },
  TitleModal:{
    color:"#75A5FF",
    fontSize: Dimensions.get('window').height * 0.03,
    fontWeight: "900",
    marginStart:20
},
  BoxBtnModal:{
    width: Dimensions.get('window').width * 0.30,
    height: Dimensions.get('window').height * 0.064,
    alignItems:"flex-end",

},
InputTitleModal: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.06,
    // backgroundColor:"black",
    borderWidth: 1,
    borderRadius: 5,
    border: 10,
    borderColor: "#000",
    flexDirection: "row",

},
InputDescModal: {
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.25,
    // backgroundColor:"black",
    borderWidth: 1,
    borderRadius: 5,
    border: 10,
    borderColor: "#000",
    flexDirection: "row",

},
TextInputModal:{
    
    fontSize: Dimensions.get('window').height * 0.024,
    fontWeight: "300",
    
},
TextBoxModal:{
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.05,
    marginTop:Dimensions.get('window').height * 0.01,
},
boxBtn:{
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.05,
    marginTop:Dimensions.get('window').height * 0.02,
    alignItems:"flex-end"
},
all:{
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').height * 0.05,
    backgroundColor:"black"
}
})
