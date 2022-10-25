import React from "react";
import SearchBar from "../../components/HeaderPage/Search";
import CardShip from "../../components/ProjectRequiremensPage/CardShip";
import HistoryTrack from "../../components/utils/HistoryTrack";
import NavegationBar from "../../components/utils/navegation";



const ProjectsrequirementsFreelancer = () => {

    return (
        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main">

                    <div className="ContainerPage" >
                        <div className="Requesit_name">
                        <span className="Components_projeteste"> <HistoryTrack name="Perfil > Projeto em execução > Requisitos técnicos" link={'/home'} classSpanDiv={"historyTrack"}/> </span>
                        <span className="Tittle_name_project"> <h1>Requisitos técnicos - Nome do projeto </h1></span>
                        </div>
                       

                        <div className="ContainerTecnicos">
                            <div> 
                            <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={25} />
                            <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={25} />
                            <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={25} />
                            <CardShip CardClasse="" desciption="O layout define como o app inteiro será representado bla bla bla " issue="" layout="" numberissue={1} percentage={25} />
                            
                            
                            </div>
                        </div>

                        <div className="footer">
                            <span><h1>value</h1></span>
                            <div>
                                Revisão de requisitos
                                Caso esteja interessado em fazer mudanças ou adaptações nos requisitos, solicite uma revisão, só é permitido a edição assim que o cliente e o(s) prestador(es) aceitarem a solicitação.
                            </div>
                        </div>
                        <div>
                            button
                        </div>
                    </div>

                </section>
            </div>


        </main>
    )

}


export default ProjectsrequirementsFreelancer;