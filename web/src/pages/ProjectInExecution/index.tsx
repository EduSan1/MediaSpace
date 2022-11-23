import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/HeaderPage/Search";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import DetailsCard from "./DetailsCard";
import ProjectInExecutionCard from "./ProjectInExecutionCard";

const ProjectInExecution = () => {

    const navigate = useNavigate()
    const [projects, setProjects] = useState([])

    useEffect(() => {

        api.get("/project").then((res: any) => {
            setProjects(res.data.data)
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
                            <h2>Projeto em execução</h2> 

                            <div className="project-page-projects-card-container">
                                {
                                    projects.map((project: any) => {
                                        if (project.is_active === true){
                                            return <ProjectInExecutionCard user={project.user} id={project.id} name={project.name} description={project.description} image={project.images} />  
                                        }
                                        
                                    })
                                }
                                
                                {/* {
                                    projects.map((project: any) => {
                                        if (project.is_active === true){
                                            return <DetailsCard id={project.id} create_at={project.create_at} estimated_deadline={project.estimated_deadline}/>  
                                        }
                                        
                                    })
                                } */}

                                <div className="view-requirements">
                                    <img src="" alt="" />
                                    <p>Visualizar os requisitos técnicos do projeto</p>
                                </div>

                                <div className="timeline-container">
                                    
                                    <h2>Andamento</h2>

                                    <ul className="timeline">
                                        <li className="active">01</li>
                                        <li className="active">02</li>
                                        <li className="active">03</li>
                                        <li className="active">04</li>
                                        <li className="active">05</li>
                                        <li className="active">06</li>
                                        <li className="active">07</li>
                                        <li className="active">08</li>
                                        <li className="active">09</li>
                                    </ul>

                                </div>

                                <div className="validation-container">
                                        <h3>Validação</h3>
                                        <p>Valide as entregas feitas pelo(s) prestador(es).</p>
                                        <p>Caso uma delas não atenda aos seus requisitos, você pode recusá-la até que te satisfaça</p>
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
