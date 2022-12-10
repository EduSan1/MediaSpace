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
import { async } from "@firebase/util";
import PostModal from "./Modal";

export interface IPost {

    id: string,
    title: string,
    description: string,
    is_active: boolean,
    images:
    {
        id: string,
        url: string
    }[],
    categories:
    {
        id: string,
        name: string,
        icon: string,
        is_active: boolean,
        create_at: string,
        update_at: string
    }[]

}



const ProfileFreelancer = () => {

    const navigate = useNavigate()

    const [userCategories, setUserCategories] = useState({
        name: "",
        icon: ""
    })



    const [currentPage, setCurrentPage] = useState("portfolio");
    const [currentPageoption, setCurrentPageoption] = useState(true);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [modalVisible, setModalVisible] = useState(false)


    const getUserPosts = (userId: string) => {
        api.get(`/freelancer/${userId}`).then((res: any) => {
            setPosts(res.data.data.teams[0].team.posts)
        })
    }


    const profileDice = async () => {

        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "");
        setUser(user.userDetails);
        console.log(user)
        getUserPosts(user.userDetails.id)
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

    }, [user, userCategories, currentPageoption])



    const [selectedProject, setSelectedProjects] = useState([])

    const [selectedMyProject, setSelectedMyProjects] = useState([])



    const [select, setSelected] = useState('AWAITING_START')
    const [text, setText] = useState('Meus Projetos')





    const [statusProject, setStatusProject] = useState({
        AWAITING_START: [],
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: []
    })


    const [statusmyProject, setStatusmyProject] = useState({
        AWAITING_START: [],
        VALIDATING_REQUIREMENTS: [],
        IN_EXECUTION: [],
        COMPLETE: [],
        CANCELED: []
    })


    const changeProjects = (status: keyof typeof statusProject) => {

        setSelectedProjects(statusProject[status])
        setSelectedMyProjects(statusmyProject[status])
        setSelected(status)


    }

    const closeModal = () => {
        setModalVisible(false)
    }

    useEffect(() => {
        profileDice()
    }, [])

    useEffect(() => {
        user.id &&
            api.get(`/project/user/${user.id}`).then((res: any) => {
                setStatusmyProject(res.data.data)
                setSelectedMyProjects(res.data.data.AWAITING_START)
                setCurrentPage('portfolio')
            })
    }, [user])

    useEffect(() => {
        user.id &&
            api.get(`/project/freelancer/${user.id}`).then((res: any) => {
                setStatusProject(res.data.data)
                setSelectedProjects(res.data.data.IN_EXECUTION)
            })
    }, [user])




    const roteProject = (id: string) => {
        if (select == 'AWAITING_START') {
            navigate(`/projects/${id}`)
        }
        else if (select === 'VALIDATING_REQUIREMENTS') {
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
                        <SideNav className="" icon icon2={<AiOutlineProfile onClick={() => { setCurrentPage('my work'); setText('Projetos'); setSelected('IN_EXECUTION'); setCurrentPageoption(false) }} />} icon3 setCurrentPage={setCurrentPage} icon4 icon5 onClick={() => { setCurrentPage('myProjects'); setText('Meus Projetos'); setCurrentPageoption(true) }} />

                        {
                            currentPage === "portfolio" ?

                                <>
                                    <span className="name_profile_portfolio"><h2>Meu Portfólio</h2> <p onClick={() => setModalVisible(true)}>Adicionar +</p></span>
                                    <div className="profile-portfolio-container-c">
                                        {
                                            posts.map((post: IPost) => {
                                                return <PortifolioCard post={post} />
                                            })
                                        }
                                    </div>


                                </>

                                :
                                <>


                                    <span className="name_Poject"><h2>{text}</h2></span>

                                    <InputSelectFreelancer onChange={(event: any) => { changeProjects(event?.target.value) }} idSelect={''} classnameOption={''} optiondisable={currentPageoption} />

                                    <div className="Main_Card">

                                        <div className="project-page-projects-card-container">

                                            {currentPage == "myProjects" &&
                                                selectedMyProject?.map((project: any) => {
                                                    return <ProjectCard onClick={() => { roteProject(project.id) }} categories={project.categories} description={project.description} id={project.id} image={project.images} name={project.name} user={{ first_name: user.first_name, nickname: user.nickname, profile_picture: user.profile_picture }} value={20} key={user.id} />
                                                })

                                            }

                                            {
                                                currentPage == "my work" &&
                                                selectedProject?.map((project: any) => {
                                                    return <ProjectCard onClick={() => { roteProject(project.id) }} categories={project.categories} description={project.description} id={project.id} image={project.images} name={project.name} user={{ first_name: project.user.first_name, nickname: project.user.nickname, profile_picture: project.user.profile_picture }} value={20} />
                                                })
                                            }
                                        </div>

                                    </div>
                                </>

                        }


                    </div>


                </section>
            </div>
            {
                modalVisible &&
                <PostModal onPost={() => {
                    closeModal()
                    getUserPosts(user.id)
                }} onClose={closeModal} />
            }
        </main>



    );
}

export default ProfileFreelancer;