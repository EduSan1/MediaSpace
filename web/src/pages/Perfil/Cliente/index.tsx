import React, { useEffect, useState } from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import { useJwt } from "react-jwt";
import SearchBar from "../../../components/HeaderPage/Search";
import PortifolioCard from "../../../components/perfil/Card/portifolio";
import ProjectCardPerfil from "../../../components/perfil/Card/project";
import InputSelect from "../../../components/perfil/InputSelect";
import PerfilCard from "../../../components/perfil/PerfilCard/Client";
import SideNav from "../../../components/perfil/SideNav";
import NavegationBar from "../../../components/utils/navegation";
import ProjectCard from "../../Projects/ProjectCard";
import jwt from "jwt-decode"
import { async } from "@firebase/util";
import api from "../../../service";
import { Value } from "sass";
import { useNavigate } from "react-router-dom";
import { AiOutlineProfile } from "react-icons/ai";


const ProfileClient = () => {

    const navigate = useNavigate()


    const profileDice = async () => {
        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "");
        await setUser(user.userDetails);

    }

    const [user, setUser] = useState({
        nickname: "",
        first_name: "",
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8",
        biography: "",
        id: ""
    })








    const [select, setSelected] = useState('AWAITING_START')


    const [statusProject, setStatusProject] = useState({
        AWAITING_START: [],
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: []
    })

    const [selectedProject, setSelectedProjects] = useState([])

    const changeProjects = (status: keyof typeof statusProject) => {

        setSelectedProjects([])
        setSelectedProjects(statusProject[status])
        setSelected(status)


    }

    useEffect(() => {
        console.log("PROBLEMA user =>", user)
        console.log("PROBLEMA ROTA =>", `/project/user/${user.id}`)
        user.id &&
            api.get(`/project/user/${user.id}`).then((res: any) => {

                console.log("PROBLEMA obj =>", res)

                setStatusProject(res.data.data)

                setSelectedProjects(res.data.data.AWAITING_START)

            })
    }, [user])

    useEffect(() => {
        profileDice()


    }, [])

    const roteProject = (id: string) => {
        console.log(select);

        if (select == 'AWAITING_START') {


            navigate(`/projects/${id}`)

        }
        else if (select == 'VALIDATING_REQUIREMENTS')
            navigate(`/projects/requirements/${id}`)
        else if (select == 'IN_EXECUTION')
            navigate(`/projectInExecution/${id}`)
        else if (select == 'COMPLETE')
            navigate(`/projectInExecution/${id}`)
        else if (select == 'CANCELED')
            console.log('COMPLETE')
    }

    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <section className="section_main_perfil">

                    {
                        <PerfilCard nickname={user.nickname} first_name={user.first_name} profile_picture={user.profile_picture} biography={user.biography} />
                    }


                    <div className="Div_main_Perfil">
                        <SideNav className="Nav_bar_Client" icon icon2 icon3 icon4 icon5 onClick={() => { }} />
                        <span className="name_Poject"><h2>Projetos</h2></span>

                        <InputSelect onChange={(event: any) => { changeProjects(event?.target.value) }} setSelectedProjects={() => { console.log('test') }} classnameOption={''} idSelect={''} />


                        <div className="Main_Card">
                            <div className="project-page-projects-card-container">
                                {

                                    selectedProject?.map((project: any) => {
                                        return <ProjectCard onClick={() => { roteProject(project.id) }} categories={project.categories} description={project.description} id={project.id} image={project.images} name={project.name} user={{ first_name: user.first_name, nickname: user.nickname, profile_picture: user.profile_picture }} value={20} key={user.id} />
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

export default ProfileClient;