import React, { useState } from "react"
import { Image, Text, StyleSheet, Dimensions, Pressable, ActivityIndicator, View, Modal} from "react-native"

interface IModal {

    action : () => void
}
export default function ModalAction(){

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      
    return (
        <Modal
        animationType="fade"
        visible={isModalVisible}
        transparent={true}
        onRequestClose={() => {
            setModalVisible(!isModalVisible);
        }}
                        >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Hello World!</Text>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text style={style.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
    </Modal>
    )}
    const style = StyleSheet.create({
        modalView: {
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.5,
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
          button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          buttonOpen: {
            backgroundColor: "#F194FF",
          },
          buttonClose: {
            backgroundColor: "#2196F3",
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center"
          },
          centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
          },
    })