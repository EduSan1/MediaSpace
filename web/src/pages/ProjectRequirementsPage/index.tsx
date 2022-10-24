import React from "react";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";



const ProjectsrequirementsFreelancer = () => {

    return (
        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main">

                    <div className="ContainerPage" >
                        <div className="TesteRequesito">
                        <span className="Components_projeteste"> <p>componente</p> </span>
                        <span> <h1>Requisitos técnicos - Nome do projeto </h1></span>
                        </div>
                       

                        <div className="ContainerTecnicos">
                            <div> componente</div>
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