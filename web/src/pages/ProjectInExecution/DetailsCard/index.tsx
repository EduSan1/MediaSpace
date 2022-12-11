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

            <div className="card-details">
                <h3>Detalhes:</h3>
                <p>Criado em: <span>{create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</span></p>
                <p>Inicio do projeto: <span>{startDate}</span></p>
                <p>Quantidade de requisitos: <span>{numberOfRequirements}</span></p>
                <p>Quantidade de entregas: <span>{numberOfDeliveries}</span></p>
                <p>Término estimado: <span>{estimated_deadline.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</span></p>
            </div>

        </div>

    );
}

export default DetailsCard;