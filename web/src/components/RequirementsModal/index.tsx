import React, { useState, useEffect } from "react";
import InputProject from "../../pages/CreateProject/components/Input";
import { MdClose } from "react-icons/md"
import InputBtn from "../utils/Button/InputBtn"
import api from "../../service";
import { useParams } from 'react-router-dom';

interface IModalRequirements {
    onClose: () => void
    requirementId?: string
}

const ModalRequirements = ({ onClose, requirementId }: IModalRequirements) => {
    const { projectId } = useParams()
    const [requirements, setRequirements] = useState(
        {
            id: requirementId,
            title: "",
            description: "",
            gain_percentage: 0,
            project: {
                id: "eaae1d8d-8756-4b27-83ef-b1a47aa87b28"
            }
        }
    )

    console.log(requirements)

    useEffect(() => {
        api.get(`/requirement/${requirementId}`).then((res: any) => {
            // setRequirements({
            //     ...requirements, title: res.data.data.title
            // })

            console.log(res)

        })
    }, [])

    console.log(requirements)

    const [error, setError] = useState({
        title: "",
        description: "",
        gain_percentage: ""
    })

    const handleErrors = (errorMensage: string, nameInput: string) => {
        setError({ ...error, [nameInput]: errorMensage })
    }

    const gainPorcentageLimit = (valueCurrent: string) => {


    }

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            // (res.data.data.gain_percentage)

        })
    }, [])

    const validation = () => {
        let validate = true;

        if (!requirements.title) {
            validate = false
            handleErrors("Por favor preencha o campo obrigatório", 'title')
        }

        if (!requirements.description) {
            validate = false
            handleErrors("Por favor preencha o campo obrigatório", 'description')
        }
        if (!requirements.gain_percentage) {
            handleErrors("Por favor preencha o campo obrigatório", "gain_percentage")
            validate = false
        }
        if (validate) {
            createEditRequirements();
        }
    }
    console.log(error)

    const defineAction = () => {
        let action = "Criar"
        if (requirementId) {
            action = "Editar"
        }
        return action
    }

    const createEditRequirements = () => {
        if (defineAction() === "Criar") {

            api.post("/requirement", requirements).then((res) => {
                if (res.data.statusCode !== 201) {
                    console.log(res.data.statusCode)
                    window.alert("Não foi possível criar o requisito")
                } else {
                    console.log("deu certo")
                }
            })
        }
        else if (defineAction() === "Editar") {
            api.put(`/requirement/${requirementId}`, requirements).then((res) => {
                if (res.data.statusCode !== 201) {
                    window.alert("Não foi possível editar o requisito")
                } else {
                    console.log("deu certo")
                }
            })
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequirements({
            ...requirements, [event.target.name]: event.target.value
        })
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
                        <h1>{defineAction()} requisito</h1>
                        <span onClick={() => { onClose() }}><MdClose /></span>
                    </div>
                    <div className="alignment_inputs_requirements">
                        <div className="alignment_name_percentage_requirements">
                            <InputProject onBlur={(event: React.ChangeEvent<HTMLInputElement>) => { }} label={"Nome do requisito"} maxLenght={100} name={"title"} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />

                            <div className="container_input_project">
                                <label className="subtitulo_projects">Percentual de ganho<span> * </span></label>
                                <div className="conatainer_input_message_error">
                                    <input className={"input_gain_requirement"} type="number" min={0} name="gain_percentage" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} onFocus={() => { handleErrors("", "gain_percentage") }} />

                                    <p>{error.gain_percentage}</p>
                                </div>
                            </div>
                        </div>

                        <div className="container_description_requirement">
                            <label className="subtitulo_projects">Descrição <span> * </span></label>
                            <div>
                                <textarea name="description" onChange={({ target }) => { requirements.description = target.value }} onBlur={({ target }) => { console.log(target) }} onFocus={() => { handleErrors("", "description") }} />
                                <span>0/800</span>

                                <p>{error.description}</p>

                            </div>

                        </div>
                    </div>

                    <div className="footer_modal">
                        <InputBtn typeInput={'submit'} name={'btnCadastrarRequisito'} className={'btn_register_requirements'} valueBtn={defineAction()} onClick={() => { validation() }} />
                    </div>


                </div>
            </div>

        </>)

}

export default ModalRequirements