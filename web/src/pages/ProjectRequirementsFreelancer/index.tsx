import React, { useEffect, useState } from "react";
import SearchBar from "../../components/HeaderPage/Search";
import CardShip from "../../components/ProjectRequiremens/CardShip";
import HistoryTrack from "../../components/utils/HistoryTrack";
import NavegationBar from "../../components/utils/navegation";
import InputBtn from "../../components/utils/Button/InputBtn";
import api from "../../service";




const ProjectsrequirementsFreelancer = (id:any) => {


    const [modal, setmodal] = useState(false);
    const [requerimenteproject, setRequerimenteproject] = useState({
        name:"",
    });

    const [requerimente, setRequerimente] = useState({});
    

    useEffect(() => {
    api.get(`/requirement/47063063-3330-4f53-8372-b71ef426f720`)
    .then((res)=>{
        setRequerimenteproject(res.data.data.project);
        setRequerimente(res.data.data);
    })

    }, [])


    useEffect(() => {

        console.log(requerimenteproject)
    
    }, [requerimenteproject])

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

                               
                                <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={20} value={20} />



                            </div>
                        </div>

                        <div className="footer">
                            <span className="tittle_Value_text"><h1>Valor total do projeto: $2000 </h1></span>
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