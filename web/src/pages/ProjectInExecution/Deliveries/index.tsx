import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IRequirement {
    requirement: [
        { 
            "title": string,
            "is_delivered": boolean,
            "delivery": [
                {
                    "title": string,
                    "description": string,
                    "create_at": string,
                    "files": [
                        {
                            "url": string
                        }
                    ]
                }
            ]
     
        }
    ],
}

const Deliveries = ({ requirement }: IRequirement) => {

    const navigate = useNavigate()

    const requirementDeliveryStatus = () => {
    
        let is_delivered = false
            
        if (requirement[0].is_delivered === true) {
            is_delivered = true
        }
        return is_delivered
    }

    return (
        <div className="deliveries-card">

            <div className="delivery-card-details-container">
                <div className="delivery-card-details">

                    {
                        requirement.map((requirement: any) => {

                            return <div>
                                    <div className="delivery-upperline-divisor"></div>
                                    <div className="requirement-box">
                                        
                                        <h2 className="requirement-counter">Entregue - 0</h2>
                                        <h2 className="requirement-title"> {requirement.title}</h2>
                                    </div>
                            
                                    <div className="deliveries">
                                                {requirement.delivery.map((delivery: any)=>{
                                                    return <div className="delivery-info"> 
                                                                <ul className="indicator">
                                                                    <li className="active"></li>
                                                                </ul>

                                                                <div className="delivery-data">
                                                                    <p>{delivery.title}</p>
                                                                    <p>{delivery.description}</p>
                                                                    {/*{delivery.files.map((file: any)=>{
                                                                        return <p>{file.url}</p>
                                                                    })}*/}
                                                                    <p className="delivery-date">{delivery.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                                                                </div>
                                                        </div>

                                                })}
                                            </div>
                                            <div className="delivery-lowerline-divisor"></div>
                                    </div>
                            
                        })
                    }

                </div>
            </div>

        </div>

    );
}

export default Deliveries;