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

                    <div className="delivery-upperline-divisor"></div>

                    <div className="requirement-box">
                        <h2 className="requirement-counter">Entregue - 0</h2>
                        <h2 className="requirement-title"> {requirement[0].title}</h2>
                    </div>


                    {
                        requirement.map((requirement: any) => {

                            return <div className="deliveries">
                                        {requirement.delivery.map((delivery: any)=>{
                                            return <div className="delivery-info"> 
                                                         <ul className="indicator">
                                                            <li className="desactive"></li>
                                                        </ul>

                                                        <div className="delivery-data">
                                                            <p>{delivery.title}</p>
                                                            <p>{delivery.description}</p>
                                                            <p>{delivery.create_at}</p>
                                                         </div>
                                                   </div>

                                        })}
                                    </div>
                            
                        })
                    }

                    <div className="delivery-lowerline-divisor"></div>

                </div>
            </div>

        </div>

    );
}

export default Deliveries;