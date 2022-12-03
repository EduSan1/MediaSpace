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



const ProfileFreelancer = () => {


    const [user,setUser] = useState({
        nickname: "",
        first_name:"",
        profile_picture:"",
        biography:""
    })

    const [userCategories,setUserCategories] = useState({
        name:"",
        icon:""
    })
 

  const profileDice = async ()  => {

        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "");
        setUser(user.userDetails);
        setUserCategories(user.userDetails.teams[0].team.categories[0]);

    }
     


    useEffect(() => {

    },[user,userCategories])

    useEffect(() => {
        profileDice();
            },[])
    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_perfil">

                    <PerfilCardFreelancer profile_picture={user.profile_picture} nickname={user.nickname} first_name={user.first_name} biography={user.biography} categories={[{name:userCategories.name,icon:userCategories.icon}]}/>

                    <div className="Div_main_Perfil">

                        <SideNav className="" icon={<ImStatsDots onClick={() => { console.log("Ptojecto") }} />} icon2={<HiOutlineClipboardDocumentList />} icon3={<HiOutlineClipboardDocumentList />} icon4={<HiOutlineClipboardDocumentList />} icon5={<HiOutlineClipboardDocumentList />} /> 
                        <span className="name_Poject"><h2>Projetos</h2></span>

                        <InputSelect onChange={()=>{}} classnameOption={''} idSelect={''} setSelectedProjects={()=>{}}/>

                        <div className="Main_Card_freelancer">

                            <PortifolioCard />
                        </div>
                    </div>


                </section>
            </div>
        </main>



    );
}

export default ProfileFreelancer;