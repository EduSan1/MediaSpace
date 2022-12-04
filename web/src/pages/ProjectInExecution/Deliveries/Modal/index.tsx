import React, { useEffect, useState } from "react"
import api from "../../../../service"
import InputProject from "../../../CreateProject/components/Input"

interface IDeliveryModal {
    projectName: string
    requirementId: string
    onClose: () => void
}

interface IProject {
    name: string
}

const DeliveryModal: React.FC<IDeliveryModal> = ({ projectName, onClose, requirementId }) => {

    const [requirement, setRequirement] = useState({
        title: ""
    })

    const [delivery, setDelivery] = useState({
        title: "",
        description: "",
        files: [
            {
                url: ""
            }
        ],
        requirements: [
            {
                id: ""
            }
        ],
        user: [
            {
                id: ""
            }
        ]
    })

    const handleDelivery = (value: string, name: keyof typeof delivery) => {
        setDelivery({ ...delivery, [name]: value })
    }

    const getRequirement = () => {
        api.get(`/requirement/${requirementId}`).then((res: any) => {
            setRequirement(res.data.data)
        })
    }

    useEffect(() => {
        getRequirement()
    }, [])

    return (
        <div className="delivery-modal-background">
            <div className="delivery-modal-container">
                <div className="delivery-modal-header">
                    <h2>{projectName} - {requirement.title}</h2>
                    <p onClick={() => onClose()} >✖</p>
                </div>
                <div className="delivery-modal-form">
                    <div className="delivery-modal-form-section">
                        <InputProject handleChange={(event) => handleDelivery(event.target.value, "title")} label="Titulo" maxLenght={100} name="title" onFocus={() => { }} value={delivery.title} />
                        <InputProject handleChange={(event) => handleDelivery(event.target.value, "description")} label="Description" maxLenght={800} name="title" onFocus={() => { }} value={delivery.description} />
                    </div>
                    <div className="delivery-modal-form-section">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryModal