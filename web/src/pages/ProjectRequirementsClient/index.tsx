import React ,{ useEffect, useState }from "react";
import SearchBar from "../../components/HeaderPage/Search";
import CardShip from "../../components/ProjectRequiremens/CardShip";
import HistoryTrack from "../../components/utils/HistoryTrack";
import NavegationBar from "../../components/utils/navegation";
import InputBtn from "../../components/utils/Button/InputBtn";
import api from "../../service";

interface Iid{
    id:string
}

const ProjectsvisualizationFreelancer = ({id}:Iid) => {

    const [modal, setmodal] = useState(false);
    const [requerimenteproject, setRequerimenteproject] = useState({
        name:"",
        id:"",
        estimated_value:"",
        description:""
    });

    const [requerimente, setRequerimente] = useState({});
    

    useEffect(() => {
    api.get(`/requirement/dc55eb4f-79e9-4381-9df6-d3a5f6d759f6`)
    .then((res)=>{
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
                                <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={"25"} value={20} />
                                <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={"25"} value={20} />
                                <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={"25"} value={20} />
                                <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={"25"} value={20} />


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
                                <InputBtn className="submit_add" name="" onClick={() => { }} typeInput={"Submit"} valueBtn={'Solicitar revisão'} enable />
                            </span>
                        </div>
                    </div>

                </section>
            </div>


        </main>
    )

}


export default ProjectsvisualizationFreelancer;