import React, { useEffect, useState } from "react"
import api from "../../../../service"
import InputProject from "../../../CreateProject/components/Input"

interface IDeliveryModal {
    projectId: string
    onClose: () => void
}

interface IProject {
    name: string
}

const DeliveryModal: React.FC<IDeliveryModal> = ({ projectId, onClose }) => {

    const [project, setProject] = useState<IProject>({
        name: ""
    })

    const getProject = () => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setProject(res.data.data)

        })
    }

    useEffect(() => {
        getProject()
    }, [])

    return (
        <div className="delivery-modal-background">
            <div className="delivery-modal-container">
                <div className="delivery-modal-header">
                    <h2>{project?.name}</h2>
                    <p onClick={() => onClose()} >✖</p>
                </div>
                <div className="delivery-modal-form">
                    <div className="delivery-modal-form-section">
                        <InputProject handleChange={(event) => console.log(event)} label="Titulo" maxLenght={100} name="title" onFocus={() => { }} value="Teste" />

                        <div className="container_description_requirement">
                            <label className="subtitulo_projects">Descrição <span> * </span></label>
                            <div>
                                <textarea maxLength={800} value={""} name="description" onChangeCapture={(event: React.ChangeEvent<HTMLTextAreaElement>) => { }} onChange={({ target }) => { console.log(target.value) }} />
                                <span>{""}/800</span>

                                <p>{"trdyr"}</p>

                            </div>

                        </div>    </div>
                    <div className="delivery-modal-form-section">

                        <InputProject handleChange={(event) => console.log(event)} label="Titulo" maxLenght={100} name="title" onFocus={() => { }} value="Teste" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryModal