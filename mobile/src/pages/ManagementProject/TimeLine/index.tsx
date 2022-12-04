import React, { useEffect, useState } from "react";
import { FullMetadata, getMetadata, getStorage, ref } from "firebase/storage";
import { Linking, Pressable, Text, StyleSheet, Image, View, Dimensions } from "react-native";
import { IRequirement } from "../RequirementCard";
import { IDelivery } from "../RequirementCard/DownloadFile";

interface ITimeLine {
    requirements: Array<IRequirement>
}


export const TimeLine = ({ requirements }: ITimeLine) => {

    const renderChecks = (requirement: IRequirement) => {
        let deliveryAccepted: number = 0

        requirement.delivery.map((delivery: IDelivery) => {
            if (delivery.is_accepted)
                deliveryAccepted = 1
            if (delivery.is_accepted === false)
                deliveryAccepted = 2
        })

        if (deliveryAccepted == 1)
            return (
                <View style={styles.accepted}>
                    <Image style={styles.checkIcon} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2Fcheck.png?alt=media&token=47cec9bb-d486-42fa-a1fa-3208f4bb6730" }} />
                </View>
            )
        else if (deliveryAccepted == 2) {

        } else
            return <View style={styles.recuse} />

    }

    return (
        <View style={styles.timeLineContainer}>
            {
                requirements.map((requirement: IRequirement, index: number) => {
                    return (
                        <View style={styles.requirementContainer}>
                            {

                                renderChecks(requirement)

                            }
                            {
                                requirement.delivery.length === 0 && requirements.length !== index + 1 && <View style={{ ...styles.checkLine, backgroundColor: "#ccc" }} />
                            }
                            {
                                requirement.delivery.map((delivery: IDelivery) => {
                                    return requirements.length !== index + 1 && delivery.is_accepted !== false &&
                                        <View style={{ ...styles.checkLine, backgroundColor: delivery.is_accepted === true ? "#75A5FF" : "#ccc" }} />
                                }
                                )
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    timeLineContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: Dimensions.get('window').height * 0.04,
        width: "auto"
    },
    requirementContainer: {
        width: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accepted: {
        height: Dimensions.get('window').height * 0.04,
        width: Dimensions.get('window').height * 0.04,
        borderRadius: 100,
        backgroundColor: "#75A5FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    recuse: {
        height: Dimensions.get('window').height * 0.04,
        width: Dimensions.get('window').height * 0.04,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#75A5FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    checkIcon: {
        width: "80%",
        height: "80%",
    },
    checkLine: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.005
    }
})