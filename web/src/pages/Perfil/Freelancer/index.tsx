import React, { useEffect, useState } from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import { useJwt } from "react-jwt";
import SearchBar from "../../../components/HeaderPage/Search";
import PortifolioCard from "../../../components/perfil/Card/portifolio";
import InputSelect from "../../../components/perfil/InputSelect";
import PerfilCard from "../../../components/perfil/PerfilCard/Client";
import PerfilCardFreelancer from "../../../components/perfil/PerfilCard/freelancer";
import SideNav from "../../../components/perfil/SideNav";
import NavegationBar from "../../../components/utils/navegation";
import jwt from "jwt-decode"
import InputSelectFreelancer from "./SelectIInput";
import api from "../../../service";
import { Navigate, useNavigate } from "react-router-dom";
import ProjectCard from "../../Projects/ProjectCard";
import { AiOutlineProfile } from "react-icons/ai";



const ProfileFreelancer = () => {

    const navigate = useNavigate()

    const [userCategories, setUserCategories] = useState({
        name: "",
        icon: ""
    })


    const profileDice = async () => {

        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "");
        setUser(user.userDetails);
        setUserCategories(user.userDetails.teams[0].team.categories[0]);

    }




    const [user, setUser] = useState({
        nickname: "",
        first_name: "",
        profile_picture: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8",
        biography: "",
        id: ""
    })



    useEffect(() => {

    }, [user, userCategories])





    const [select, setSelected] = useState('IN_EXECUTION')


    const [statusProject, setStatusProject] = useState({
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: [],

    })

    const [selectedProject, setSelectedProjects] = useState([])


    const changeProjects = (status: keyof typeof statusProject) => {
        console.log(statusProject)
        setSelectedProjects(statusProject[status])
        setSelected(status)

    }

    useEffect(() => {
        api.get(`/project/freelancer/${user.id}`).then((res: any) => {

            setStatusProject(res.data.data)

            setSelectedProjects(res.data.data.IN_EXECUTION)

        })
    }, [user])

    useEffect(() => {
        profileDice()

        // () => navigate(`/projects/${id}`)
    }, [])

    const roteProject = (id: string) => {
        console.log(select)
        if (select === 'AWAITING_START') {
            navigate(`/projects/${id}`)
        } else if (select === 'VALIDATING_REQUIREMENTS') {
            navigate(`/projects/requirements/${id}`)
        } else if (select === 'IN_EXECUTION') {
            navigate(`/projectInExecution/${id}`)
        } else if (select === 'COMPLETE') {
            navigate(`/projectInExecution/${id}`)
        } else if (select === 'CANCELED') {
            console.log('COMPLETE')
        }



    }
    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_perfil">

                    <PerfilCardFreelancer profile_picture={user.profile_picture} nickname={user.nickname} first_name={user.first_name} biography={user.biography} categories={[{ name: userCategories.name, icon: userCategories.icon }]} />

                    <div className="Div_main_Perfil">

                        <SideNav className="" icon={<ImStatsDots />} icon2={<AiOutlineProfile />} icon3 icon4 icon5 />
                        <span className="name_Poject"><h2>Projetos</h2></span>

                        <InputSelectFreelancer onChange={(event: any) => { changeProjects(event?.target.value) }} idSelect={''} setSelectedProjects={() => { }} classnameOption={''} />

                        <div className="Main_Card">

                            <div className="project-page-projects-card-container">
                                {
                                    selectedProject?.map((project: any) => {
                                        return <ProjectCard onClick={() => { roteProject(project.id) }} categories={project.categories} description={project.description} id={project.id} image={project.images} name={project.name} user={{ first_name: project.user.first_name, nickname: project.user.nickname, profile_picture: project.user.profile_picture }} value={20} />
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

export default ProfileFreelancer;