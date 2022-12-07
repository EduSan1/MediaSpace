import React, { useEffect, useState } from "react";
import SearchBar from "../../components/HeaderPage/Search";
import { CardShip, CardShipRegister } from "../../components/ProjectRequiremens/CardShip";
import HistoryTrack from "../../components/utils/HistoryTrack";
import NavegationBar from "../../components/utils/navegation";
import InputBtn from "../../components/utils/Button/InputBtn";
import api from "../../service";
import { useParams } from "react-router-dom";
import ModalRequirements from "../../components/RequirementsModal";



const ProjectsrequirementsFreelancer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { projectId } = useParams()

    const [requerimenteproject, setRequerimenteproject] = useState({
        name: "",
        requirements: [],
        value: "",
    });

    const converteValue = (valueProject: string, porcenteRequirement: string) => {
        const value = parseFloat(valueProject)
        const porcente = parseFloat(porcenteRequirement)

        const valueAll = (porcente / 100) * value;

        return valueAll;
    }

    const getRequirements = () => {
        api.get(`/project/${projectId}`)
            .then((res) => {
                // setRequerimenteproject({
                //     ...requerimenteproject, name: res.data.data.name, requirement: res.data.data.requirements, value: res.data.data.value
                // })
                setRequerimenteproject(res.data.data)
            })
    }

    useEffect(() => {
        getRequirements()
    }, [])


    return (
        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main">

                    <div className="ContainerPage" >
                        <div className="Requesit_name">
                            <span className="Components_projeteste"> <HistoryTrack name="Perfil > Projeto em execução > Requisitos técnicos" link={'/home'} classSpanDiv={"historyTrack"} /> </span>



                            <span className="Tittle_name_project"> <h1>Requisitos técnicos - { } </h1></span>


                        </div>


                        <div className="ContainerTecnicos">
                            <div>

                                {
                                    requerimenteproject.requirements.map((requirement: any, index) => {
                                        if (requirement.is_active !== false) {
                                             index++;
                                            return <CardShipRegister idUserCreater={false} CardClasse="" description={requirement.description} issue="" layout={requirement.title} numberissue={index++} percentage={requirement.gain_percentage} value={converteValue(requerimenteproject.value, requirement.gain_percentage)} requirementId={requirement.id} getRequirements={getRequirements} />
                                        }
                                    })
                                }

                            </div>
                        </div>

                        <div className="footer">
                            <span className="tittle_Value_text"><h1>Valor total do projeto: {requerimenteproject.value} </h1></span>
                            <div className="revision_requisition">
                                <h1>Revisão de requisitos</h1>
                                <p> Caso esteja interessado em fazer mudanças ou adaptações nos requisitos, solicite uma revisão, só é permitido a edição assim que o cliente e o(s) prestador(es) aceitarem a solicitação.</p>
                            </div>
                        </div>
                        <div className="btn_requirements">


                            <span className="Btn_send">
                                <button className="submit_add" onClick={() => { setIsModalVisible(true) }}>Adicionar</button>
                            </span>
                            {isModalVisible ? <ModalRequirements onClose={() => { getRequirements(); setIsModalVisible(false) }} /> : null}
                            {/* <span className="Btn_Add">
                                <InputBtn className="submit_send" name="" onClick={() => { }} typeInput={"Submit"} valueBtn={'Enviar'} enable />
                            </span> */}

                        </div>
                    </div>

                </section>
            </div>


        </main>
    )

}




export default ProjectsrequirementsFreelancer;