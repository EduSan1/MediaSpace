import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/HeaderPage/Search";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import ProjectCard from "./ProjectCard";

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
                                        return <ProjectCard user={project.user} id={project.id} name={project.name} description={project.description} image={project.images} />
                                    })
                                }

                                <div className="timeline-container">
                                    <ul className="timeline">
                                        <li className="active">01</li>
                                        <li>02</li>
                                        <li>03</li>
                                    </ul>
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
