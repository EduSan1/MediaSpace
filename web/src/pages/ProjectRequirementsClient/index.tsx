import React ,{ useEffect, useState }from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/HeaderPage/Search";
import CardShip from "../../components/ProjectRequiremens/CardShip";
import HistoryTrack from "../../components/utils/HistoryTrack";
import NavegationBar from "../../components/utils/navegation";
import InputBtn from "../../components/utils/Button/InputBtn";
import api from "../../service";

// interface Iid{
//     id:string
// }

const ProjectRequirementsClient = () => {
    const { projectId } = useParams()
    const [requerimenteproject, setRequerimenteproject] = useState({
        name: "",
        requirement: [],
        value: "", 
    });

    const converteValue = (valueProject: string, porcenteRequirement:string) => {
        const value = parseFloat(valueProject)
        const porcente = parseFloat(porcenteRequirement)

        const valueAll = (porcente / 100) * value;

        return valueAll;

    }

    useEffect(() => {
        api.get(`/project/${projectId}`)
        .then((res) => {
            setRequerimenteproject({
                ...requerimenteproject, name: res.data.data.name, requirement: res.data.data.requirements, value:res.data.data.value
             })

        })

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
                            <span className="Tittle_name_project"> <h1>Requisitos técnicos - {requerimenteproject.name} </h1></span>
                        </div>


                        <div className="ContainerTecnicos">
                            <div>
                            {
                                     requerimenteproject.requirement.map((requirement: any, numberissue = 1) => {
                                        return <CardShip CardClasse="" desciption={requirement.description} issue="" layout={requirement.title} numberissue={numberissue} percentage={requirement.gain_percentage} value={converteValue(requerimenteproject.value,requirement.gain_percentage)} />
                                        numberissue++;
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
                                <InputBtn className="submit_add" name="" onClick={() => { }} typeInput={"Submit"} valueBtn={'Solicitar revisão'} enable />
                            </span>
                            <span className="Btn_send">
                                <InputBtn className="submit_add" name="" onClick={() => { }} typeInput={"Submit"} valueBtn={'Iniciar projeto'} enable />
                            </span>
                        </div>
                    </div>

                </section>
            </div>


        </main>
    )

}


export default ProjectRequirementsClient;