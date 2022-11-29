import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IRequirement {
    requirement: [
        { 
            "title": string,
            "delivery": [
                {
                    "title": string,
                    "description": string,
                    "create_at": string
                }
            ]
     
        }
    ],
}

const Deliveries = ({ requirement }: IRequirement) => {

    const navigate = useNavigate()

    return (
        <div className="deliveries-card">

            <div className="delivery-card-details-container">
                <div className="delivery-card-details">
                    <div className="requirement-box">
                        <h2 className="requirement-counter">Entregue - 0</h2>
                        <h2 className="requirement-title"> {requirement[0].title}</h2>
                    </div>
                    <p>{requirement[0].delivery[0].title}</p>
                    <p>{requirement[0].delivery[0].description}</p>
                    <p>{requirement[0].delivery[0].create_at}</p>
                </div>
            </div>

        </div>

    );
}

export default Deliveries;