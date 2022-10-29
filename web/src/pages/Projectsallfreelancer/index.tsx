import React from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import Interestedserver from "../../components/project";
import NavegationBar from "../../components/utils/navegation";

const ProjectsSelecetAllFreelancer = () => {

    const user = localStorage.getItem('userDetailes');
    const { decodedToken, isExpired } = useJwt(user ? user : "");

    return (

        
            <main id="ContentPage">

                <NavegationBar />
                <div className="Container">
                    <SearchBar />
                    <section className="section_main_Project">
                             
                             <header className="Tittles_Description">
                                <span className="Big_Tittle">  <h1> Nome do projeto - Candidatos </h1>  </span>
                                <span className="small_Tittle"> <h3> O Batman (inicialmente chamado o Bat-Man) também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, </h3>   </span>
                             </header>

                             <div className="SearchBar_candidates">
                             <SearchBar />
                             </div>

                             <div className="candidates">
                                
                             <Interestedserver type={"submit"} name="gean" nickname="gean" photo="../assets/img/astronaut.svg"/>
                             <Interestedserver type={"submit"} name="gean" nickname="gean" photo="../assets/img/astronaut.svg"/>
                             <Interestedserver type={"submit"} name="gean" nickname="gean" photo="../assets/img/astronaut.svg"/>
                             <Interestedserver type={"submit"} name="gean" nickname="gean" photo="../assets/img/astronaut.svg"/>

                             </div>
                        
                  

                    </section>
                </div>
            </main>

        

    );
}

export default ProjectsSelecetAllFreelancer;