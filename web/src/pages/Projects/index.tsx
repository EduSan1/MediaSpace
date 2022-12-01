import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/HeaderPage/Search";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import ProjectCard from "./ProjectCard";

const ProjectsrequirementsFreelancer = () => {

    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState([])

    const findSubCategories = () => {

    }

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })

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
                        <div className="project-page-create-container">
                            <div className="project-page-crete-options">
                                <h1>Inicie seu lançamento</h1>
                                <p>Crie sua ideia para que os freelnacers da plataforma possam executa-la</p>
                                <button onClick={() => navigate("/projects/createProjects")}>Crie seu projeto</button>
                            </div>

                        </div>
                        <div className="project-page-filter-container">

                            <div className="project-page-filter-icon">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            {
                                categories.map((category: any) =>
                                    <ButtonCategories category={category.name} name={category} icon={category.icon} id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />
                                )
                            }


                        </div>

                        <div className="project-page-projects-container">
                            <h2>Projetos</h2>

                            <div className="project-page-projects-card-container">
                                {
                                    projects.map((project: any) => {
                                        return <ProjectCard user={project.user} id={project.id} name={project.name} description={project.description} value={project.value} image={project.images} categories={project.categories} />
                                    })
                                }



                            </div>


                        </div>
                    </div>

                </section>
            </div>
        </main>



    );


}

export default ProjectsrequirementsFreelancer;
