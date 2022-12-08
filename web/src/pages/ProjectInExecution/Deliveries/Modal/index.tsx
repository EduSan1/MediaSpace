import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from "firebase/storage"
import React, { useEffect, useState } from "react"
import { storage } from "../../../../constants/firebase"
import api from "../../../../service"
import jwt from "jwt-decode"
import InputProject from "../../../CreateProject/components/Input"
import DeliveryCard from "./DeliveryCard"
import { parseJsonText } from "typescript"

interface IDeliveryModal {
    projectName: string
    requirementId: string
    onClose: () => void
    onSend: () => void
}

interface IProject {
    name: string
}
interface IDelivery {
    title: string,
    description: string,
    files: {
        url: string
    }[],
    requirements:
    {
        id: string
    }[],
    user:
    {
        id: string
    }[]

}

const DeliveryModal: React.FC<IDeliveryModal> = ({ projectName, onClose, requirementId, onSend }) => {

    const [requirement, setRequirement] = useState({
        title: ""
    })

    const [delivery, setDelivery] = useState<IDelivery>({
        title: "a",
        description: "a",
        files: [],
        requirements: [
            {
                id: requirementId
            }
        ],
        user: [
            {
                id: ""
            }
        ]
    })
    const [progressPorcent, setPorgessPorcent] = useState(0);


    const uploadDelivery = (event: any) => {
        event.preventDefault();
        const file = event.target.files[0]
        if (!file) return
        const storageRef = ref(storage, `deliveries/${file.name}`)
        const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                console.log(progress)
                setPorgessPorcent(progress);
            },
            error => { alert(error) },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                    console.log(url)
                    setDelivery({ ...delivery, files: [...delivery.files, { url: url }] })
                })
            }
        )
    }

    const handleDelivery = (value: string, name: keyof typeof delivery) => {
        setDelivery({ ...delivery, [name]: value })
    }

    const postDelivery = async () => {
        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "")
        const deliveryToSend = { ...delivery, user: [{ id: user.userDetails.id }] }
        console.log(JSON.stringify(deliveryToSend))
        api.post(`/delivery`, deliveryToSend).then((res: any) => {
            console.log(res.data)
            onSend()
        })
    }

    const getRequirement = () => {
        api.get(`/requirement/${requirementId}`).then((res: any) => {
            setRequirement(res.data.data)
        })
    }

    useEffect(() => {
        getRequirement()
    }, [])

    useEffect(() => {
        console.log(delivery);
    }, [delivery])

    useEffect(() => {
        console.log("progresso => ", progressPorcent);
    }, [progressPorcent])

    return (
        <div className="delivery-modal-background">
            <div className="delivery-modal-container">
                <div className="delivery-modal-header">
                    <h2>{projectName} - {requirement.title}</h2>
                    <p onClick={() => onClose()}>✖</p>
                </div>
                <div className="delivery-modal-form">
                    <div className="delivery-modal-form-section">
                        <InputProject handleChange={(event) => handleDelivery(event.target.value, "title")} label="Titulo" maxLenght={100} name="title" onFocus={() => { }} value={delivery.title} />
                        <InputProject handleChange={(event) => handleDelivery(event.target.value, "description")} label="Descrição" maxLenght={800} name="title" onFocus={() => { }} value={delivery.description} />
                    </div>
                    <div className="delivery-modal-form-section files-modal">
                        <div>
                            <label className="subtitulo_projects">Anexos<span> * </span></label>
                            <p className="paragraph_projects" >Envie um arquivo relacionado a sua entrega</p>
                        </div>


                        <div className="deliveries-modal-requirements-deliveries">
                            {
                                delivery.files.map((delivery: { url: string }, index) => <DeliveryCard deliveryLink={delivery.url} index={index} onRemove={(index: number) => console.log(index)} />)
                            }
                        </div>

                        <label className="add_file" htmlFor="add_file">Adicionar arquivo</label>

                        <input type="file" onChange={(event: any) => uploadDelivery(event)} id="add_file" />
                    </div>
                </div>
                <div className="delivery-modal-footer-container">
                    <button onClick={() => postDelivery()} className="delivery-modal-button">Realizar Entrega</button>
                </div>
            </div>
        </div>
    )
}

export default DeliveryModal


