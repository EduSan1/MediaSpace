import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/HeaderPage/Search";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import jwt from "jwt-decode"
import DetailsCard from "./DetailsCard";
import ProjectInExecutionCard from "./ProjectInExecutionCard";
import Deliveries from "./Deliveries";
import DeliveryModal from "./Deliveries/Modal";

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
        id: string
        first_name: string,
        nickname: string,
        profile_picture: string
    },
    images: {
        url: string
    }[],
    management: {
        create_at: string
        team_project_management: {
            team: {
                name: string,
                nickname: string,
                profile_picture: string,
            }
        }[]
    }
    create_at: string,
    estimated_deadline: string
    requirements: Array<IRequirement>
}



const ProjectInExecution = () => {

    const navigate = useNavigate()
    const { projectId } = useParams()
    const [modalVisible, setModalVisible] = useState(false)
    const [modal, setModal] = useState(<></>)
    const [loggedUserId, setLoggedUserId] = useState("")
    const [freelancerId, setFreelancerId] = useState("")

    const [project, setProject] = useState<IProject>({
        id: "",
        name: "",
        description: "",
        user: {
            id: "",
            first_name: "",
            nickname: "",
            profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8"
        },
        images: [{
            url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
        }],
        management: {
            create_at: "",
            team_project_management: [{
                team: {
                    name: "",
                    nickname: "",
                    profile_picture: "",
                }
            }]
        },
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

    const getProject = () => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setProject(res.data.data)
            setFreelancerId(res.data.data.management.team_project_management.find((team: any) => team.is_active !== false).team.id)
        })

        const userJwt = localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "")

        setLoggedUserId(user.userDetails.id)
    }

    useEffect(() => {
        getProject()
    }, [])

    const resetDelivery = () => {
        setModalVisible(false)
        getProject()
    }

    const openModal = (id: string) => {
        setModal(<DeliveryModal onClose={() => setModalVisible(false)} onSend={() => resetDelivery()} requirementId={id} projectName={project.name} />
        )
        setModalVisible(!modalVisible)

        console.log(id)
    }


    return (

        <main id="ContentPage">
            <NavegationBar />
            <div className="Container">
                <section className="section_main_Project">

                    <div className="projects-page-container">

                        <div className="project-page-projects-container">
                            <h1>Projeto em execução - {project.name}</h1>

                            <div className="page-projects-in-execution-container">

                                <div className="container-project-in-execution">
                                    <ProjectInExecutionCard freelancer={{
                                        first_name: project.management.team_project_management[0].team.name,
                                        nickname: project.management.team_project_management[0].team.nickname,
                                        profile_picture: project.management.team_project_management[0].team.profile_picture
                                    }} user={project.user} id={project.id} name={project.name} description={project.description} image={project.images} />
                                    <div className="project-details-cards">


                                        <DetailsCard id={project.id}
                                            create_at={project.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}
                                            estimated_deadline={project.estimated_deadline.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}
                                            numberOfRequirements={project.requirements.length}
                                            numberOfDeliveries={project.requirements.filter((requirement: any) => requirement.delivery.length > 0).length}
                                            startDate={project.management && project.management.create_at.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")
                                            }
                                        />

                                        <div className="view-requirements">
                                            <img src="" alt="" />
                                            <p>Visualizar os requisitos técnicos do projeto</p>
                                        </div>

                                    </div>

                                </div>



                                <div className="timeline-container">

                                    <h1>Andamento</h1>

                                    <ul className="timeline">
                                        {
                                            project.requirements.map((requirement: any) => requirement.is_accepted && <li className={requirement.delivery.filter((delivery: any) => delivery.is_accepted === true).length === 0 ? "" : "active"}></li>)
                                        }
                                    </ul>

                                </div>

                                <div className="validation-container">
                                    <h1>Validação</h1>
                                    <p>Valide as entregas feitas pelo(s) prestador(es).</p>
                                    <p className="validation-desc">Caso uma delas não atenda aos seus requisitos, você pode recusá-la até que te satisfaça</p>

                                    {
                                        project.requirements.map((requirement: any) => {
                                            if (requirement.is_active === true) {
                                                return <Deliveries isFreelancer={freelancerId === loggedUserId} isOwner={project.user.id === loggedUserId} reload={getProject} openModal={openModal} requirement={requirement} />
                                            }

                                        })
                                    }

                                </div>

                            </div>



                        </div>
                    </div>

                </section>
            </div>
            {
                modalVisible &&
                modal
            }
        </main>



    );


}

export default ProjectInExecution;
