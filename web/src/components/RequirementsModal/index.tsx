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
            title: "",
            description: "",
            gain_percentage: "",
            project: {
                id: projectId
            }
        }
    )

    const [limitGainPercentage, setLimitGainPercentage] = useState({
        gainPercentage: [
            {
                gain_percentage: 0,
                is_active: true
            }
        ]
    })

    const [gainPercentageEdit, setGainPercentageEdit] = useState(0)

    const [caracteres, setCaracteres] = React.useState({
        caracteres: requirements.title
    })

    const numberCaracteres = (event: any) => {
        setCaracteres({
            ...caracteres, caracteres: event.target.value.length
        })
    }

    const [error, setError] = useState({
        title: "",
        description: "",
        gain_percentage: ""
    })

    const handleErrors = (errorMensage: string, nameInput: string) => {
        setError({ ...error, [nameInput]: errorMensage })
    }

    const gainPorcentageLimit = (valueCurrent: string) => {

        let currentPercentage = 0
        let validate = true

        for (let i = 0; limitGainPercentage.gainPercentage.length > i; i++) {
            if (limitGainPercentage.gainPercentage[i].is_active) {
                currentPercentage = limitGainPercentage.gainPercentage[i].gain_percentage + currentPercentage
            }
        }

        let valueCurrentToFloat = parseFloat(valueCurrent)

        if (requirementId) {
            const percentageEdit = currentPercentage - gainPercentageEdit
            if (percentageEdit + valueCurrentToFloat > 100) {
                validate = false
            } else {
                validate = true
            }
        } else {
            if (currentPercentage + valueCurrentToFloat > 100) {
                validate = false
            } else {
                validate = true
            }
        }

        return validate
    }

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

        if (gainPorcentageLimit(requirements.gain_percentage) === false) {
            handleErrors("O valor ultrapassa 100%", "gain_percentage")
            validate = false
        }

        if (validate) {
            createEditRequirements();
        }
    }

    const defineAction = () => {
        let action = "Criar"
        if (requirementId) {
            action = "Editar"
        }
        return action
    }

    console.log("valor antes da ediçaõ " + gainPercentageEdit)
    gainPorcentageLimit(requirements.gain_percentage)

    const createEditRequirements = () => {
        if (defineAction() === "Criar") {
            api.post('/requirement', requirements).then((res) => {
                if (res.data.statusCode !== 201) {
                    window.alert(res.data.message)
                } else {
                    window.alert(res.data.message)
                    onClose()
                }
            })
        }
        else if (defineAction() === "Editar") {
            const requirementToSend = {
                title: requirements.title,
                description: requirements.description,
                gain_percentage: requirements.gain_percentage
            }
            api.put(`/requirement/${requirementId}`, requirementToSend).then((res) => {
                if (res.data.statusCode !== 200) {
                    window.alert("Não foi possível editar o requisito")
                } else {
                    window.alert(res.data.message)
                    onClose()
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

    useEffect(() => {
        if (requirementId) {
            api.get(`/requirement/${requirementId}`).then((res: any) => {
                setRequirements({
                    ...requirements,
                    gain_percentage: res.data.data.gain_percentage,
                    description: res.data.data.description,
                    title: res.data.data.title
                })

                setGainPercentageEdit(res.data.data.gain_percentage)

            })
        }
    }, [])

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setLimitGainPercentage({ gainPercentage: res.data.data.requirements })
        })

    }, [])

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
                            <InputProject value={requirements.title} onFocus={() => { handleErrors("", "title") }} label={"Nome do requisito"} maxLenght={100} name={"title"} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />

                            <div className="container_input_project">
                                <label className="subtitulo_projects">Percentual de ganho<span> * </span></label>
                                <div className="conatainer_input_message_error">
                                    <input value={requirements.gain_percentage} className={"input_gain_requirement"} type="number" min={0} name="gain_percentage" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} onFocus={() => { handleErrors("", "gain_percentage") }} onChangeCapture={() => { }} />

                                    <p>{error.gain_percentage}</p>
                                </div>
                            </div>
                        </div>

                        <div className="container_description_requirement">
                            <label className="subtitulo_projects">Descrição <span> * </span></label>
                            <div>
                                <textarea value={requirements.description} name="description" onChangeCapture={(event: React.ChangeEvent<HTMLTextAreaElement>) => { numberCaracteres(event) }} onChange={({ target }) => { requirements.description = target.value }} onFocus={() => { handleErrors("", "description") }} />
                                <span>{caracteres.caracteres}/800</span>

                                <p>{error.description}</p>

                            </div>

                        </div>
                    </div>

                    <div className="footer_modal">
                        <InputBtn typeInput={'submit'} name={'btnCadastrarRequisito'} className={'btn_register_requirements'} valueBtn={defineAction()} onClick={() => validation()} />
                    </div>


                </div>
            </div>

        </>)

}

export default ModalRequirements