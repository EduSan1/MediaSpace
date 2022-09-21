import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { MdLock } from "react-icons/md";

interface IInput {
    icon : ReactNode,
    typeInput : string,
    name : string,
    placeholder : string
}


const InputLoign = ({icon,typeInput,name,placeholder} : IInput) =>{
  
    return(
      

        <div className="input_icon_login">

           {icon}
            <input className="Input_Login" type={typeInput} name={name} placeholder={placeholder}/>
        
        </div>



    );


}

export default InputLoign;