import React, { useState } from "react";
import { AiOutlineHome, AiOutlineRise, AiOutlineLogout } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { BiRocket, BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import IconBar from "../Icon";
import ImageComponent from "../imageComponent/imageComponent";



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

            <div className="photo_User_container">
                <ImageComponent src="../assets/img/profileTeste.svg" alt="" className="photo_user_img" />
            </div>

            <div className="Container_icon_nav">
                <div className={!open ? "icons_all_navBar" : "icons_all_navBar_open"}>
                    <IconBar Icon={<AiOutlineHome />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open '} />
                    <IconBar Icon={<AiOutlineRise />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} />
                    <IconBar Icon={<BsChatText />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} />
                    <IconBar Icon={<BiUser />} text={'teste'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} />

                </div>
                <div className="Logout_icon_nav">
                    
                    <IconBar Icon={<AiOutlineLogout />} text={'Logout'} className={!open ? 'icon_navBar' : 'icon_navBar_open'} />


                </div>


            </div>




        </div>






    );
}

export default NavegationBar