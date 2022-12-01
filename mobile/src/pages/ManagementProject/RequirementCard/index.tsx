import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions, Pressable, ScrollView } from "react-native";
import api from "../../../../service";
import { IProject } from "../../Profile/interfaces";
import { DownloadFile, IDelivery } from "./DownloadFile";

interface IRequirementCard {
    numberOfRequirements: number
    requirement: IRequirement
}
export interface IRequirement {
    id: string,
    title: string,
    description: string,
    gain_percentage: number,
    is_accepted: boolean,
    is_delivered: boolean,
    is_active: boolean,
    create_at: string,
    update_at: string,
    delivery: Array<IDelivery>
}

export const RequirementCard = ({ requirement, numberOfRequirements }: IRequirementCard) => {
    return (
        <View style={styles.requirementContainer}>
            <Text style={styles.requirementTitle}>Requisito - {requirement.title}</Text>
            {
                requirement.delivery.map((delivery: any, index: number) => {

                    if (delivery.is_active) {
                        if (delivery.is_accepted === true) {


                            return (
                                <View style={styles.deliveryContainer}>
                                    <View style={styles.deliveryTitleContainer}>
                                        <View style={styles.check}>
                                            <Image style={styles.checkIcon} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2Fcheck.png?alt=media&token=47cec9bb-d486-42fa-a1fa-3208f4bb6730" }} />
                                        </View>
                                        <Text style={styles.deliveryTitle}>{`${index + 1}/${numberOfRequirements} - ${delivery.title}`}</Text>
                                    </View>
                                    <DownloadFile delivery={delivery} />
                                    <Text style={styles.deliveryAccepted}>Validado ✓</Text>
                                </View>

                            )
                        }


                        else if (delivery.is_accepted === false)
                            return (

                                <View style={styles.deliveryContainer}>
                                    <View style={styles.deliveryTitleContainer}>
                                        <View style={styles.check}>
                                            <Image style={styles.checkIcon} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2Fcheck.png?alt=media&token=47cec9bb-d486-42fa-a1fa-3208f4bb6730" }} />
                                        </View>
                                        <Text style={styles.deliveryTitle}>{`${index + 1}/${numberOfRequirements} - ${delivery.title}`}</Text>
                                    </View>
                                    <DownloadFile delivery={delivery} />

                                    <Text style={styles.deliveryNotAccepted}>Recusada ✕</Text>
                                </View>
                            )

                        else
                            return (
                                <>
                                    <View style={styles.deliveryContainer}>
                                        <View style={styles.deliveryTitleContainer}>
                                            <View style={styles.check}>
                                                <Image style={styles.checkIcon} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2Fcheck.png?alt=media&token=47cec9bb-d486-42fa-a1fa-3208f4bb6730" }} />
                                            </View>
                                            <Text style={styles.deliveryTitle}>{`${index + 1}/${numberOfRequirements} - ${delivery.title}`}</Text>
                                        </View>
                                        <DownloadFile delivery={delivery} />
                                        <View style={styles.deliveryButtonContainer}>
                                            <Pressable style={{ ...styles.deliveryButton, backgroundColor: "#B275FF" }}><Text style={styles.deliveryButtonText}>Aceitar</Text></Pressable>
                                            <Pressable style={{ ...styles.deliveryButton, backgroundColor: "#FF6666" }}><Text style={styles.deliveryButtonText}>Recusar</Text></Pressable>
                                        </View>
                                    </View>

                                </>
                            )
                    }

                })

            }
            {
                requirement.delivery.length === 0 &&
                <Text>Aguardando entrega</Text>
            }


        </View>
    )
}
const styles = StyleSheet.create({

    requirementContainer: {

        height: "auto",
        width: "100%",
        borderTopWidth: 2,
        paddingTop: 5,
        borderColor: "#DBDFE8",
    },
    deliveryTitleContainer: {
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    requirementTitle: {
        fontSize: 18,
        color: "#75A5FF",
        fontWeight: "400",
        marginBottom: 4
    },
    check: {
        height: Dimensions.get('window').height * 0.02,
        width: Dimensions.get('window').height * 0.02,
        borderRadius: 100,
        backgroundColor: "#75A5FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    checkIcon: {
        width: "80%",
        height: "80%",
    },
    deliveryTitle: {
        fontSize: 14,
        color: "#888",
        fontWeight: "400"
    },
    deliveryContainer: {
        width: "100%",
        height: Dimensions.get('window').height * 0.24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    deliveryAccepted: {
        fontSize: 20,
        color: "#5FAC67",
        fontWeight: "700"
    },
    deliveryNotAccepted: {
        fontSize: 20,
        color: "#FF6666",
        fontWeight: "700"
    },
    deliveryButtonContainer: {
        width: "60%",
        height: Dimensions.get('window').height * 0.04,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    deliveryButton: {
        width: "45%",
        height: "100%",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    deliveryButtonText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "700"
    }
})