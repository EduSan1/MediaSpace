import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"

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
                get api
                img
                info
            </div>

            <div className="Icon_bar_nav">
          teste
            </div>



        </div>






    );
}

export default NavegationBar