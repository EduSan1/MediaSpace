import React, { useState } from "react";
import InputProject from "../../pages/CreateProject/components/Input";



const ModalRequirements = () => {

    const [requirements, setRequirements] = useState(
        {
            title: "Nill",
            description: "Won",
            gain_percentage: 0.2,
            project: {
                id: "4c72d504-5e51-490d-a831-a3ad9c3fbed8"
            }
        }
    )
    return (
        <>
            <div className="container_modal_requirements">

                <div>
                    <InputProject label={"Nome do requisito"} maxLenght={100} name={"title"} handleChange={() => { }} />
                    <input type='number' id="teste" step='0.01' min="0.01" max="100.00" placeholder='0.00' />
                </div>


                <div className="container_description_project">
                    <label className="subtitulo_projects">Descrição <span> * </span></label>
                    <div>
                        <textarea />
                        <span>0/800</span>
                    </div>

                </div>


            </div>

        </>)

}

export default ModalRequirements