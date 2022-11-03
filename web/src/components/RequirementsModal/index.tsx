import React, { useState } from "react";
import InputProject from "../../pages/CreateProject/components/Input";
import { MdClose } from "react-icons/md"



const ModalRequirements = () => {

    const [requirements, setRequirements] = useState(
        {
            id: "",
            title: "Nill",
            description: "Won",
            gain_percentage: 0.2,
            project: {
                id: "4c72d504-5e51-490d-a831-a3ad9c3fbed8"
            }
        }
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequirements({
            ...requirements, [event.target.name]: event.target.value
        })
        console.log(requirements)
    }


    return (
        <>
            <div className="container_modal_requirements">

                <div className="modal_requirements">
                    <div className="header_modal">
                        <h1>Criar requisito</h1>
                        <span><MdClose /></span>
                    </div>
                    <div className="alignment_inputs_requirements">
                        <div className="alignment_name_percentage_requirements">
                            <InputProject label={"Nome do requisito"} maxLenght={100} name={"title"} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />

                            <div className="container_input_project">
                                <label className="subtitulo_projects">Percentual de ganho<span> * </span></label>
                                <div>
                                    <input className="input_value_project" type="number" min={0} name="gain_percentage" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />
                                </div>
                            </div>
                        </div>

                        <div className="container_description_requirement">
                            <label className="subtitulo_projects">Descrição <span> * </span></label>
                            <div>
                                <textarea name="description" onChange={({ target }) => { requirements.description = target.value }} />
                                <span>0/800</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>)

}

export default ModalRequirements