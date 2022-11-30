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
import {CardShip} from "../../../components/ProjectRequiremens/CardShip";
import NavegationBar from "../../../components/utils/navegation";
import ProjectCard from "../../Projects/ProjectCard";
import jwt from "jwt-decode"
import { async } from "@firebase/util";
import api from "../../../service";

const ProfileClient = () => {

    const [user,setUser] = useState({
        nickname: "",
        first_name:"",
        profile_picture:"",
        biography:"",
        id:""
    })

    const [statusProject, setStatusProject] = useState({
        AWAITING_START: [],
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: []
    })



  const profileDice = async ()  => {

        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "");
        setUser(user.userDetails);

    }

    const handleChange = () => {
        

    }
    
    useEffect(() => {

    },[user])

    useEffect(() => {
        profileDice();
            },[])


    useEffect(()=>{
        api.get(`/project/user/${user.id}`).then((res: any) => {
                setStatusProject({
                    ...statusProject, AWAITING_START : res.data.data.AWAITING_START
                          
                })
        })
    },[]
    )

    console.log(statusProject)

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

                        <InputSelect optValue={''} classnameOption={''} idSelect={''} icon={<HiOutlineClipboardDocumentList />}  />
                        

                        <div className="Main_Card">
                            <div className="project-page-projects-card-container">
                                
                                {
                                    statusProject.AWAITING_START.map((project:any) =>{
                                        return <ProjectCard categories={project.categories} description={project.description} id={project.id} image={[{ url: "TSTERT" }]} name={project.name} user={{ first_name: "", nickname: "", profile_picture: "" }} value={project.value} />
                                    })
                                    
                                }
                                
                                {/* <ProjectCard categories={'ASAS'} description={"TESTE"} id={"NOTH"} image={[{ url: "TSTERT" }]} name={"NAME"} user={{ first_name: "", nickname: "", profile_picture: "" }} value={20} /> */}
                            </div>

                        </div>
                    </div>


                </section>
            </div>
        </main>



    );
}

export default ProfileClient;