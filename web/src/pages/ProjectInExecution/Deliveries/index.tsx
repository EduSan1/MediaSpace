import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRequirement } from "..";

interface IDeliveriesPage {
    requirement: IRequirement
    index: number
}

const Deliveries = ({ requirement, index }: IDeliveriesPage) => {

    const navigate = useNavigate()

    return (
        <div className="deliveries-card">

            <div className="delivery-card-details-container">
                <div className="delivery-card-details">
                    <div className="requirement-box">
                        <h2 className="requirement-counter">Entregue - {index}</h2>
                        <h2 className="requirement-title"> {requirement.title}</h2>
                    </div>
                    {/*<p>{requirement[0].delivery[0].title}</p>
                    <p>{requirement[0].delivery[0].description}</p>
                    <p>{requirement[0].delivery[0].create_at}</p>*/}
                </div>
            </div>

        </div>

    );
}

export default Deliveries;