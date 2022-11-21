import React from "react";
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

const Perfil = () => {

    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_perfil"> 
                
           <PerfilCard/>

           <div className="Div_main_Perfil">
          <SideNav  className="Nav_bar_Client" icon={<ImStatsDots onClick={() =>{console.log("Ptojecto")}}/>} icon2={<HiOutlineClipboardDocumentList/>} icon3 icon4 icon5/>
         <span className="name_Poject"><h2>Projetos</h2></span>

         <InputSelect optValue={'teste'} classnameOption={''} idSelect={''} icon={<HiOutlineClipboardDocumentList/>} />
            
            <div className="Main_Card">
              
            </div>
           </div>
                 
                
                </section>
            </div>
        </main>



    );
}

export default Perfil;