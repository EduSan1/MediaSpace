import React, { useState } from "react";
import InputProject from "../../pages/CreateProject/components/Input";
import { MdClose } from "react-icons/md"
import InputBtn from "../utils/Button/InputBtn"
import api from "../../service";

interface IModalRequirements {
    action: "Criar" | "Editar",
    onClose: () => void
    requirementId?: string
}


const ModalRequirements = ({ action, onClose, requirementId }: IModalRequirements) => {

    const [requirements, setRequirements] = useState(
        {
            id: "",
            title: "",
            description: "",
            gain_percentage: 0,
            project: {
                id: ""
            }
        }
    )

    const funcao = () => {
        if (action === "Criar") {
            api.post("/requirement", requirements).then((res) => {
                if (res.data.statusCode !== 201) {
                    window.alert("Não foi possível criar o requisito")
                } else {
                    console.log("deu certo")
                }
            })
        }
        else if (action === "Editar") {
            console.log("Rota editar")
        } else {
            console.log("Deu ruim")
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequirements({
            ...requirements, [event.target.name]: event.target.value
        })
        console.log(requirements)
    }

    const handleOutsideClick = (event: any) => {
        if (event.target.id === "container_modal") {
            onClose()
        }
    }


    return (
        <>
            <div id="container_modal" className="container_modal_requirements" onClick={(event) => { handleOutsideClick(event) }}>

                <div className="modal_requirements">
                    <div className="header_modal">
                        <h1>{action} requisito</h1>
                        <span onClick={() => { onClose() }}><MdClose /></span>
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

                    <div className="footer_modal">
                        <InputBtn typeInput={'submit'} name={'btnCadastrarRequisito'} className={'btn_register_requirements'} valueBtn={action} onClick={() => { funcao() }} />
                    </div>


                </div>
            </div>

        </>)

}

export default ModalRequirements