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

const ModalRequirements = ({ onClose, requirementId}: IModalRequirements) => {
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
        {gain_percentage: 0,
        is_active: true}
    ]
})

console.log(limitGainPercentage)

    const [caracteres, setCaracteres] = React.useState({
        caracteres: 0
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

    const gainPorcentageLimit = () => {
        
        let currentPercentage= 0

        for(let i= 0; limitGainPercentage.gainPercentage.length > i; i++)
        {
            if(limitGainPercentage.gainPercentage[i].is_active){
                currentPercentage = limitGainPercentage.gainPercentage[i].gain_percentage + currentPercentage
            }
        }

        let valueRestantPercentage = 100 - currentPercentage 
        return valueRestantPercentage

    }

    gainPorcentageLimit()

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

    const defineAction = () => {
        let action = "Criar"
        if (requirementId) {
            action = "Editar"
        }
        return action
    }

    const createEditRequirements = () => {
        if (defineAction() === "Criar") {
            console.log("LimitGainPercentage")
            api.post('/requirement', requirements).then((res) => {
                if (res.data.statusCode !== 201) {
                    console.log(res)
                    window.alert("Não foi possível criar o requisito")
                } else {
                    window.alert(res.data.message)
                    onClose()

                }
            })
        }
        else if (defineAction() === "Editar") {
            console.log("editar")
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
        api.get(`/requirement/${requirementId}`).then((res: any) => {
            setRequirements({
                ...requirements,
                gain_percentage: res.data.data.gain_percentage,
                description: res.data.data.description,
                title: res.data.data.title
            })
        })
    }, [])

    useEffect(()=>{
        api.get(`/project/${projectId}`).then((res: any) => {
           setLimitGainPercentage({gainPercentage:res.data.data.requirements})
        })

    },[])

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
                                    <input value={requirements.gain_percentage} className={"input_gain_requirement"} type="number" min={0}  max={gainPorcentageLimit()} name="gain_percentage" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} onFocus={() => { handleErrors("", "gain_percentage") }} />

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