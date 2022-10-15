import React, { useState } from "react";
import { AiOutlineHome, AiOutlineRise, AiOutlineLogout } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { BiRocket, BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import IconBar from "../Icon";
import ImageComponent from "../imageComponent/imageComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const NavegationBar = () => {

    const [open, setOpen] = useState(false);

    return (


        <div className={open ? "Container_navegation_Open" : "Container_navegation"}>
            <span className="Menu_bar_icon">
                <div className="logo_img">
                    {<img src="../assets/img/LogoBlack.svg" className="visible_img" alt="" />}
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
                <ImageComponent src="../assets/img/profileTeste.svg" alt="" className="photo_user_img" />
                <span className="InfoName_user">
                    <h2>Cardmon</h2>
                    <h4>@CardamonViolet</h4>
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

                <div className="btns">
                    button
                </div>

            </div>

            <div className={!open ? "Container_icon_nav" : "Container_icon_nav_open"}>
                <div className={!open ? "icons_all_navBar" : "icons_all_navBar_open"}>
                    <ul>
                        <li> <Link to={'/'} className='Link_NextPage'> <IconBar Icon={<AiOutlineHome />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open '} /></Link></li>
                        <li> <Link to={'/'}className='Link_NextPage'>  <IconBar Icon={<AiOutlineRise />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link></li>
                        <li> <Link to={'/'}className='Link_NextPage'><IconBar Icon={<BsChatText />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link></li>
                        <li> <Link to={'/'}className='Link_NextPage'><IconBar Icon={<BiUser />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link></li>

                    </ul>
                </div>
                <div className="rocket_icon">
                    <ImageComponent src="../assets/img/Iconrocket.svg" alt="" className="" />
                </div>
                <div className="Logout_icon_nav">

                    <ul>
                        <li>
                            <Link to={'/'} className='Link_NextPage'><IconBar Icon={<AiOutlineLogout />} text={'Logout'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} /></Link>
                        </li>
                    </ul>




                </div>


            </div>




        </div>






    );
}

export default NavegationBar