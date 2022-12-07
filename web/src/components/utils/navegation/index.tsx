import React, { useState } from "react";
import { AiOutlineHome, AiOutlineRise, AiOutlineLogout } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { BiRocket, BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import IconBar from "../Icon";
import ImageComponent from "../imageComponent/imageComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { decodeToken, useJwt } from "react-jwt";


const NavegationBar = () => {

    const [open, setOpen] = useState(false);

    const userJwt = localStorage.getItem('userDetails');
    const { decodedToken, isExpired }: any = useJwt(userJwt ? userJwt : "");

  


    return (

        <section id="Navegationbar">
            <div className={open ? "Container_navegation_Open" : "Container_navegation"}>
                <span className="Menu_bar_icon">
                    <div className="logo_img">
                        {<img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FlogoColorPlay.png?alt=media&token=6a99a7e2-f527-4cb6-a6b2-532babc7b078" className="visible_img" alt="" />}
                    </div>
                    <button className="Button_menu">
                        <IconBar Icon={!open ? <FaBars onClick={() => {
                            setOpen(!open);
                        }} /> : <IoClose onClick={() => {
                            setOpen(!open);
                        }} />} text={''} className='Span_icon' />
                    </button>
                </span>

                <div className={!open ? "photo_User_container" : "photo_User_container_open"}>
                    <ImageComponent src={decodedToken?.userDetails?.profile_picture} alt="" className="photo_user_img"  />
                    <span className="InfoName_user">
                        <h2>{decodedToken?.userDetails?.first_name}</h2>
                        <h4>@{decodedToken?.userDetails?.nickname}</h4>
                    </span>
                    <div className="Info_data">
                        <span>
                            <h2>5.7K</h2>
                            <h4>seguidores</h4>
                        </span>
                        <span>
                            <h2>4.8</h2>
                            <h4> Avaliação</h4>
                        </span>
                        <span>
                            <h2>2</h2>
                            <h4>Equipes</h4>
                        </span>
                    </div>

                    {/* <div className="btns">
                        button
                    </div> */}

                </div>

                <div className={!open ? "Container_icon_nav" : "Container_icon_nav_open"}>
                    <div className={!open ? "icons_all_navBar" : "icons_all_navBar_open"}>
                        <ul>
                            <li> <Link to={'/home'} className='Link_NextPage'> <IconBar Icon={<AiOutlineHome />} text={'Home'} className={!open ? 'icon_navBar' : 'icon_navBar_open '} /></Link></li>
                            <li> <Link to={'/projects'} className='Link_NextPage'>   <img src="../assets/img/perfil/project.svg" alt="" title={'Projetos'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /> </Link></li>
                            <li> <Link to={'/Menssagens'} className='Link_NextPage'><IconBar Icon={<BsChatText />} text={'Mensagens'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link></li>
                            <li> <Link to={'/Eventes'} className='Link_NextPage'><IconBar Icon={<MdRssFeed />} text={'Eventos'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link></li>
                            <li> <Link to={'/Perfil'} className='Link_NextPage'><IconBar Icon={<BiUser />} text={'Perfil'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link></li>

                        </ul>
                    </div>
                    <div className="rocket_icon">
                        <ImageComponent src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FnavegationRocket.png?alt=media&token=943002f9-91ea-453c-94d6-7a9792b0f9a5" alt="" className="" />
                    </div>
                    <div className="Logout_icon_nav">

                        <ul>
                            <li>
                                <Link to={'/'} className='Link_NextPage'><IconBar Icon={<AiOutlineLogout onClick={() => { localStorage.removeItem('userDetails'); }} />} text={'Logout'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link>
                            </li>
                        </ul>

                    </div>


                </div>

            </div>
        </section>






    );
}

export default NavegationBar