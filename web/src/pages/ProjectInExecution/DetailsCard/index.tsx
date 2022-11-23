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
        <div onClick={() => navigate(`/projects/${id}`)} className="details-card">

            <div className="card-details-container">
                <div className="card-details">
                    <h3>Detalhes:</h3>
                    <p>{create_at}</p>
                    <p>{estimated_deadline}</p>
                </div>
            </div>

        </div>

    );
}

export default DetailsCard;