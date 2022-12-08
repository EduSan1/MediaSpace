import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRequirement } from "..";
import api from "../../../service";
import DeliveryModal from "./Modal";

interface IDeliveriesPage {
    requirement: IRequirement
    openModal: (requirementId: string) => void
    isOwner: boolean
    isFreelancer: boolean
    reload: () => void
}

const Deliveries = ({ requirement, openModal, reload, isOwner, isFreelancer }: IDeliveriesPage) => {

    const denyRequirement = (id: string) => {
        api.post(`delivery/deny/${id}`).then((res: any) => {
            console.log(res.data.message)
            reload()
        })
    }

    const acceptRequirement = (id: string) => {
        api.post(`delivery/accept/${id}`).then((res: any) => {
            console.log(res.data.message)
            reload()
        })
    }


    return (
        <div className="deliveries-card">

            <div className="delivery-card-details-container">
                <div className="delivery-card-details">

                    <div>
                        <div className="delivery-upperline-divisor"></div>
                        <div className="requirement-box">

                            <h2 className="requirement-counter">Requisito - </h2>
                            <h2 className="requirement-title"> {requirement.title}</h2>
                        </div>

                        <div className="deliveries">
                            {
                                requirement.delivery.length === 0 &&
                                <div>

                                    <p>Aguardando entrega</p>
                                    {
                                        isFreelancer &&
                                        <button onClick={() => openModal(requirement.id)}>ABRIR MODAL DE CADASTRO DE ENTREGA</button>
                                    }

                                </div>

                            }
                            {requirement.delivery.map((delivery: any) => {
                                return <div className="delivery-info">
                                    <ul className="indicator">
                                        <li className="active"></li>
                                    </ul>

                                    {
                                        delivery.is_accepted === true &&
                                        <div className="delivery-data">
                                            <p>{delivery.title}</p>
                                            <p>{delivery.description}</p>
                                            <p className="accept">Aceita ✓</p>
                                            <p className="delivery-date">{delivery.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                                        </div>
                                    }

                                    {
                                        delivery.is_accepted === false &&
                                        <div className="delivery-data">
                                            <p>{delivery.title}</p>
                                            <p>{delivery.description}</p>
                                            <p className="refused">Recusada ✕</p>
                                            {
                                                requirement.delivery.filter((delivery: any) => delivery.is_accepted === true).length === 0 &&
                                                isFreelancer &&
                                                <button onClick={() => openModal(requirement.id)}>ABRIR MODAL DE CADASTRO DE ENTREGA</button>
                                            }
                                            <p className="delivery-date">{delivery.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                                        </div>
                                    }

                                    {
                                        delivery.is_accepted === null &&
                                        <div className="delivery-data">
                                            <p>{delivery.title}</p>
                                            <p>{delivery.description}</p>
                                            {
                                                isOwner &&
                                                <>
                                                <div className="container-buttons">
                                                    <button onClick={() => acceptRequirement(delivery.id)} >Aceitar</button>
                                                    <button onClick={() => denyRequirement(delivery.id)}>Recusar</button>
                                                </div>
                                                   
                                                </>
                                            }
                                            <p className="delivery-date">{delivery.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                                        </div>
                                    }
                                </div>
                            })}
                        </div>
                        <div className="delivery-lowerline-divisor"></div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Deliveries;