import React from "react";
import IconBar from "../Icon";
import ImageComponent from "../imageComponent/imageComponent";
import { MdFacebook } from "react-icons/md";



 const NavegationBar = () =>{

    return(

    
        <div className="Container_navegation">
                 <button className="">
                     <span>.</span>
                     <span>.</span>
                     <span>.</span>
                 </button>
            <div className="img_Container">

              <ImageComponent src="../assets/img/profileTeste.svg" alt="" className=""/>

                <h1></h1>

            </div>

             <nav className="nav_Bar">
                 <ul>
                    <li><IconBar Icon={<MdFacebook/>} text={'teste'} className='' /></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                 </ul>
            </nav>   
        

        </div>


         
    );
}

export default NavegationBar