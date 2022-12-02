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

const ProfileClient = () => {


    const profileDice = async () => {
        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "");
        await setUser(user.userDetails);

    }


    const [user, setUser] = useState({
        nickname: "",
        first_name: "",
        profile_picture: "",
        biography: "",
        id: ""
    })








    const [select, setSelected] = useState('')
    console.log(select)

    const [statusProject, setStatusProject] = useState({
        AWAITING_START: [],
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: []
    })

    const [selectedProject, setSelectedProjects] = useState([])

    const changeProjects = (status: keyof typeof statusProject) => {

        setSelectedProjects(statusProject[status])

    }

    useEffect(() => {
        api.get(`/project/user/${user.id}`).then((res: any) => {
            console.log(res.data.data)
            setStatusProject(res.data.data)

            setSelectedProjects(res.data.data.AWAITING_START)
            console.log(res.data)
        })
    }, [user])

    useEffect(() => {
        profileDice()
    }, [])



    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_perfil">

                    {
                        <PerfilCard nickname={user.nickname} first_name={user.first_name} profile_picture={user.profile_picture} biography={user.biography} />
                    }


                    <div className="Div_main_Perfil">
                        <SideNav className="Nav_bar_Client" icon={<ImStatsDots onClick={() => { console.log("Ptojecto") }} />} icon2={<HiOutlineClipboardDocumentList />} icon3 icon4 icon5 />
                        <span className="name_Poject"><h2>Projetos</h2></span>

                        <InputSelect onChange={(event: any) => { changeProjects(event?.target.value) }} setSelectedProjects={() => { }} classnameOption={''} idSelect={''} />


                        <div className="Main_Card">
                            <div className="project-page-projects-card-container">
                                {
                                    selectedProject?.map((project: any) => {
                                        return <ProjectCard categories={project.categories} description={project.description} id={project.id} image={project.images} name={project.title} user={{ first_name: "", nickname: "", profile_picture: "" }} value={20} />
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