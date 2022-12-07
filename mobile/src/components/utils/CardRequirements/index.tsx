import React from "react"
import { Image, Text, StyleSheet, Dimensions, View, } from "react-native"
import { IRequirement } from "../../../pages/ManagementProject/RequirementCard"

interface ICardRequirements {
    requirement: IRequirement
    projectValue: number
}

export const CardRequirements = ({ requirement, projectValue }: ICardRequirements) => {
    return (
        <View style={style.sectionProject}>
            <Text style={style.titleRequeriments}>{requirement.title}</Text>
            <Text style={style.TextRequirements}>{requirement.description}</Text>
            <View style={style.cardRequirements}>
                <Text style={style.TextCardRequirements}>Porcentagem do valor: {requirement.gain_percentage}%</Text>
                <Text style={style.TextCardRequirements}>Valor = R$ {projectValue * requirement.gain_percentage / 100}</Text>
            </View>
        </View>
    )

}
const style = StyleSheet.create({

    sectionProject: {
        width: Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.15,
        alignSelf: "center",
        marginVertical: 20,
        // backgroundColor: "blue",
    },
    textIcon: {
        flexDirection: "row"
    },
    icon: {
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06,
    },
    textStatusRequeriments: {
        fontSize: 18,
        color: "#75A5FF",
        fontWeight: "300",
        paddingLeft: 10,
    },
    titleRequeriments: {
        marginLeft: Dimensions.get('window').width * 0.08,
        fontSize: 18,
    },
    TextRequirements: {
        marginLeft: Dimensions.get('window').width * 0.08,
        fontSize: 15,
        color: "#808080",
    },
    cardRequirements: {
        marginLeft: Dimensions.get('window').width * 0.08,
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.10,
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#CECCFD",
        borderRadius: 10,
    },
    TextCardRequirements: {
        marginLeft: Dimensions.get('window').width * 0.02,
        fontSize: 17,
        color: "#756DE6",
    }

})