import React from "react";
import ModalPassword from "../../components/perfil/ModalPassword";
import PerfilCard from "../../components/perfil/PerfilCard/Client";
import SideNav from "../../components/perfil/SideNav";
import Interestedserver from "../../components/project";
import HistoryTrack from "../../components/utils/HistoryTrack";
import { ImStatsDots } from "react-icons/im";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import InputSelect from "../../components/perfil/InputSelect";
import PortifolioCard from "../../components/perfil/Card/portifolio";
import ProjectCard from "../Projects/ProjectCard";
import ProjectCardPerfil from "../../components/perfil/Card/project";


const teste = () => {

    const teste = ['var', 'brasil', 'conts', 'feiooo', 'bluuu']

    return (

        <main className="Divetste">

            <ModalPassword value="teste"/>
            {/* <PerfilCard/> */}
            {/* <SideNav  className="Nav_bar_Client" icon={<ImStatsDots onClick={() =>{console.log("Ptojecto")}}/>} icon2={<HiOutlineClipboardDocumentList/>} icon3 icon4 icon5/>
           <SideNav  className="" icon={<ImStatsDots onClick={() =>{console.log("Ptojecto")}}/>} icon2={<HiOutlineClipboardDocumentList/>} icon3={<HiOutlineClipboardDocumentList/>} icon4={<HiOutlineClipboardDocumentList/>} icon5={<HiOutlineClipboardDocumentList/>}/> */
            }
            {/* <InputSelect optValue={'teste'} classnameOption={''} idSelect={''} icon={<HiOutlineClipboardDocumentList/>} />
            */}

            {/* <PortifolioCard/> */}
            {/* <ProjectCardPerfil/> */}
             
        </main>






    );

}



export default teste;