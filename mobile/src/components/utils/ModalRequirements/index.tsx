import React, { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, Image, ScrollView, Dimensions, Modal, Button,Pressable, TextInput} from "react-native";
import { BtnConfirmRequirements } from "../btnConfirmRequeriments";

interface IModalRequirements {
    
    onClose: () => void
    requirementId?: string

}
export default function ModalRequirements({requirementId, onClose}:IModalRequirements) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return(
                    <Modal
                    animationType="fade"
                    visible={!isModalVisible}
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
                                <Text style={style.TextInputModal}>Titulo</Text>
                                </View>
                                <TextInput style={style.InputTitleModal} placeholder="Titulo..."></TextInput>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Descrião</Text>
                                </View>
                                <TextInput style={style.InputDescModal} placeholder="Descriçâo..."></TextInput>
                                <View style={style.TextBoxModal}>
                                <Text style={style.TextInputModal}>Porcentual</Text>
                                </View>
                                <TextInput maxLength={3} keyboardType = 'numeric' style={style.InputTitleModal} placeholder="Porcentual..."></TextInput>
                                
                                <View style={style.boxBtn}>
                                    <BtnConfirmRequirements action={() => toggleModal()}/>
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
