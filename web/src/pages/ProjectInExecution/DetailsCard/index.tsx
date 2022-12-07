import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IDetails {
    id: string
    create_at: string,
    //deliveries: string,
    estimated_deadline: string
    numberOfRequirements: number
    numberOfDeliveries: number
    startDate: string
}

const DetailsCard = ({ id, create_at, estimated_deadline, numberOfDeliveries, numberOfRequirements, startDate }: IDetails) => {

    return (
        <div className="details-card">
            <div className="card-details-container">
                <div className="card-details">
                    <h3>Detalhes:</h3>
                    <p>Criado em: {create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                    <p>Inicio do projeto: {startDate}</p>
                    <p>Quantidade de requisitos: {numberOfRequirements}</p>
                    <p>Quantidade de entregas: {numberOfDeliveries}</p>
                    <p>Término estimado: {estimated_deadline.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                </div>
            </div>

        </div>

    );
}

export default DetailsCard;