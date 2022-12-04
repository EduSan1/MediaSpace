import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/HeaderPage/Search";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import DetailsCard from "./DetailsCard";
import ProjectInExecutionCard from "./ProjectInExecutionCard";
import Deliveries from "./Deliveries";

const ProjectInExecution = () => {

    const navigate = useNavigate()
    const { projectId } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {

        api.get("/project").then((res: any) => {
            setProject(res.data.data)
        })
    }, [])

    return (

        <main id="ContentPage">
            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_Project">

                    <div className="projects-page-container">

                        <div className="project-page-projects-container">
                            <h1>Projeto em execução</h1> 

                            <div className="project-page-projects-card-container">

                                {
                                    project.map((project: any) => {
                                        if (project.is_active === true){
                                            return <ProjectInExecutionCard user={project.user} id={project.id} name={project.name} description={project.description} image={project.images}/>  
                                        }
                                        
                                    })
                                }
                                
                                <div className="project-details-cards">

                                {
                                    project.map((project: any) => {
                                        if (project.is_active === true){
                                            return <DetailsCard id={project.id} create_at={project.create_at} estimated_deadline={project.estimated_deadline}/>  
                                        }
                                            
                                    })
                                
                                }

                                <div className="view-requirements">
                                    <img src="" alt="" />
                                    <p>Visualizar os requisitos técnicos do projeto</p>
                                </div>

                                </div>

                                <div className="timeline-container">
                                    
                                    <h1>Andamento</h1>

                                    <ul className="timeline">
                                        <li className="active">01</li>
                                        <li className="active">02</li>
                                        <li className="active">03</li>
                                        <li>04</li>
                                        <li>05</li>
                                        <li>06</li>
                                        <li>07</li>
                                        <li>08</li>
                                        <li>09</li>
                                    </ul>

                                </div>

                                <div className="validation-container">
                                    <h1>Validação</h1>
                                    <p>Valide as entregas feitas pelo(s) prestador(es).</p>
                                    <p className="validation-desc">Caso uma delas não atenda aos seus requisitos, você pode recusá-la até que te satisfaça</p>
                                    
                                    {
                                        project.map((project: any) => {
                                            if (project.is_active === true){
                                                return <Deliveries requirement={project.requirements}/>  
                                            }
                                                
                                        })
                                    }

                                </div>

                            </div>

                            

                        </div>
                    </div>

                </section>
            </div>
        </main>



    );


}

export default ProjectInExecution;
