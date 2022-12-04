import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IDetails {
    id: string
    create_at: string,
    //deliveries: string,
    estimated_deadline: string
}

const DetailsCard = ({ id, create_at, estimated_deadline }: IDetails) => {

    const navigate = useNavigate()

    return (
        <div className="details-card">

            <div className="card-details-container">
                <div className="card-details">
                    <h3>Detalhes:</h3>
                    <p>Criado em: {create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                    <p>Término estimado: {estimated_deadline.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                </div>
            </div>

        </div>

    );
}

export default DetailsCard;