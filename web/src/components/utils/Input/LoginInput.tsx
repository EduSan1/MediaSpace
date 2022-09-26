import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { MdLock } from "react-icons/md";
import { Value } from "sass";
interface IInput {
    icon: ReactNode,
    typeInput: string,
    name: string,
    placeholder: string,
    valueLogin: string,
    className:string,
    hasError: boolean
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void,

    
}


const InputLoign = ({ valueLogin , typeInput, name, placeholder, handleChange, icon, className, hasError}: IInput) => {

    return (

        <>
            <div className="input_icon_login">
                <span className={hasError ? "erroIcon" : "IconNormal"} id="spanIcon"> {icon} </span>
                <input value={valueLogin} onChange={(event : React.ChangeEvent<HTMLInputElement>) => handleChange(event)} className={className}  type={typeInput} name={name} placeholder={placeholder}  />

            </div>

        </>





    );


}

export default InputLoign;