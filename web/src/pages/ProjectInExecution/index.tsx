import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/HeaderPage/Search";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import DetailsCard from "./DetailsCard";
import ProjectInExecutionCard from "./ProjectInExecutionCard";
import Deliveries from "./Deliveries";

interface IDelivery {
    id: string,
    title: string,
    description: string,
    is_accepted: boolean,
    is_active: boolean,
    create_at: string,
    files: [
        {
            id: string,
            url: string
        }
    ]
}
export interface IRequirement {
    id: string,
    title: string,
    description: string,
    gain_percentage: number,
    is_accepted: boolean,
    is_delivered: boolean,
    is_active: boolean,
    create_at: string,
    update_at: string,
    delivery: Array<IDelivery>
}
interface IProject {
    id: string,
    name: string,
    description: string,
    user: {
        first_name: string,
        nickname: string,
        profile_picture: string
    },
    images: {
        url: string
    }[]
    create_at: string,
    estimated_deadline: string
    requirements: Array<IRequirement>
}

const ProjectInExecution = () => {

    const navigate = useNavigate()
    const { projectId } = useParams()
    const [project, setProject] = useState<IProject>({
        id: "",
        name: "",
        description: "",
        user: {
            first_name: "",
            nickname: "",
            profile_picture: ""
        },
        images: [{
            url: ""
        }],
        create_at: "",
        estimated_deadline: "",
        requirements: [{
            id: "",
            title: "",
            description: "",
            gain_percentage: 0,
            is_accepted: false,
            is_delivered: false,
            is_active: false,
            create_at: "",
            update_at: "",
            delivery: [{
                id: "",
                title: "",
                description: "",
                is_accepted: false,
                is_active: false,
                create_at: "",
                files: [
                    {
                        id: "",
                        url: ""
                    }
                ]
            }]
        }
        ]
    })

    useEffect(() => {

        api.get(`/project/${projectId}`).then((res: any) => {
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
                            <h2>Projeto em execução</h2>

                            <div className="project-page-projects-card-container">
                                <ProjectInExecutionCard user={project.user} id={project.id} name={project.name} description={project.description} image={project.images} />
                                <div className="project-details-cards">


                                    <DetailsCard id={project.id} create_at={project.create_at} estimated_deadline={project.estimated_deadline} />


                                    <div className="view-requirements">
                                        <img src="" alt="" />
                                        <p>Visualizar os requisitos técnicos do projeto</p>
                                    </div>

                                </div>

                                <div className="timeline-container">

                                    <h2>Andamento</h2>

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
                                    <h3>Validação</h3>
                                    <p>Valide as entregas feitas pelo(s) prestador(es).</p>
                                    <p>Caso uma delas não atenda aos seus requisitos, você pode recusá-la até que te satisfaça</p>
                                    {
                                        project.requirements.map((requirement: any, index: number) => {
                                            if (requirement.is_active === true) {
                                                return <Deliveries requirement={requirement} index={index++} />
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
