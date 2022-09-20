import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { MdLock } from "react-icons/md";

interface IInput {
    icon : ReactNode,
    typeInput : string
}


const InputLoign = ({icon,typeInput} : IInput) =>{
  
    return(
      

        <div className="input_icon_login">

           {icon}
            <input className="Input_Login" type={typeInput} name="loginText" placeholder="username@mediaspace.com"/>
        
        </div>



    );


}

export default InputLoign;