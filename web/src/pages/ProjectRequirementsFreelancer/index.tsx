import React, { useEffect, useState } from "react";
import SearchBar from "../../components/HeaderPage/Search";
import CardShip from "../../components/ProjectRequiremens/CardShip";
import HistoryTrack from "../../components/utils/HistoryTrack";
import NavegationBar from "../../components/utils/navegation";
import InputBtn from "../../components/utils/Button/InputBtn";
import api from "../../service";
import { stringify } from "querystring";
import { useParams } from "react-router-dom";

const ProjectsrequirementsFreelancer = () => {


    const [modal, setmodal] = useState(false);
    const [valuePorcent, setvalue] = useState();

    const { projectId } = useParams()




    const [requerimenteproject, setRequerimenteproject] = useState({
        name: "",
        id: "",
        estimated_value: "",
        description: ""
    });

    const converteValue = () => {
        const value = parseFloat(requerimenteproject.estimated_value)
        const porcente = parseFloat(requerimente.gain_percentage)

        const valueAll = (porcente / 100) * value;

        //  setvalue(valueAll);

    }

    const [requerimente, setRequerimente] = useState({
        id: "",
        description: "",
        gain_percentage: "",
        title: "",
        valueAll: 20




    }

    );


    useEffect(() => {
        api.get(`/requirement/${projectId}`)
            .then((res) => {
                setRequerimenteproject(res.data.data.project);
                setRequerimente(res.data.data);
            })

    }, [])


    useEffect(() => {

        console.log(requerimente)

    }, [requerimente])

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



                                <CardShip CardClasse="" desciption={requerimente.description} issue="" layout={requerimente.title} numberissue={1} percentage={requerimente.gain_percentage} value={20} />







                            </div>
                        </div>

                        <div className="footer">
                            <span className="tittle_Value_text"><h1>Valor total do projeto: {requerimenteproject.estimated_value} </h1></span>
                            <div className="revision_requisition">
                                <h1>Revisão de requisitos</h1>
                                <p> Caso esteja interessado em fazer mudanças ou adaptações nos requisitos, solicite uma revisão, só é permitido a edição assim que o cliente e o(s) prestador(es) aceitarem a solicitação.</p>
                            </div>
                        </div>
                        <div className="btn_requirements">
                            <span className="Btn_send">
                                <InputBtn className="submit_add" name="" onClick={() => { }} typeInput={"Submit"} valueBtn={'Adicionar requisito'} enable />
                            </span>
                            <span className="Btn_Add">
                                <InputBtn className="submit_send" name="" onClick={() => { }} typeInput={"Submit"} valueBtn={'Enviar'} enable />
                            </span>

                        </div>
                    </div>

                </section>
            </div>


        </main>
    )

}




export default ProjectsrequirementsFreelancer;