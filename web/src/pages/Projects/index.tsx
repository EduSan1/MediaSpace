import React from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import Interestedserver from "../../components/project";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import { useState,useEffect } from "react";

const ProjectsrequirementsFreelancer = () => {


  

    const [ProjectAllFreelancer, setProjectAllFreelancer] = useState([])
    const [ProjectAll, setProjectAll] = useState([[[{}]]])

    const user = localStorage.getItem('userDetailes');
    const { decodedToken, isExpired } = useJwt(user ? user : "");
    const typeInput = "checkbox";


    useEffect(() => {
        api.get("/project/1").then((res) => {
            setProjectAllFreelancer(res.data.data.interest)
        })
    }, [])

    useEffect(() => {
        api.get("/project/1").then((res) => {
            setProjectAll(res.data.data)
        })
    }, [])

    console.log(ProjectAll)




    return (

        
            <main id="ContentPage">

                <NavegationBar user={user} />
                <div className="Container">
                    <SearchBar />
                    <section className="section_main_Project">
                            
                             <header className="Tittles_Description">
                              
                                 {/* {
                                    ProjectAll.map((setProject:any) =>
                                        
                                    <span className="Big_Tittle">  <h1> Nome do projeto - {setProject.name} </h1>  </span>
                                    <span className="small_Tittle"> <h3> {setProject.description} </h3>   </span>
                                    
                                    )

                                 }
                                       */}
                                    
                              
                               
                             </header>

                             <div className="SearchBar_candidates">
                             <SearchBar />
                             </div>

                             <div className="candidates">
                                <div className="item_perfil">
                                {
                                ProjectAllFreelancer.map((setProjectAll:any) =>
                                    <Interestedserver type={typeInput} name={setProjectAll.team.name} nickname={setProjectAll.team.nickname} photo={setProjectAll.team.profile_picture}/>
                                    
                                  )
                                }
                                  </div>
                             </div>
                        
                  

                    </section>
                </div>
            </main>

        

    );

  
}

export default ProjectsrequirementsFreelancer ;