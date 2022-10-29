import React from "react";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";


const Projects = () => {

    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_Project">

                    {/* <header className="Tittles_Description">
                                <span className="Big_Tittle">  <h1> Nome do projeto - Candidatos </h1>  </span>
                                <span className="small_Tittle"> <h3> tse</h3>   </span>
                             </header>

                             <div className="SearchBar_candidates">
                             <SearchBar />
                             </div>

                             <div className="candidates">
                                   <div>marcus</div>
                                   <div>laise</div>
                                   <div>eduardo</div>
                                   <div>gabriel</div>
                             </div> */}

                    <img alt="project" src={"../../../public/assets/img/projects.png"} />



                </section>
            </div>
        </main>



    );
}

export default Projects;