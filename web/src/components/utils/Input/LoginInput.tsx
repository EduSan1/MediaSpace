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
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    
}


const InputLoign = ({ valueLogin , icon, typeInput, name, placeholder, handleChange }: IInput) => {

    return (

        <>
            <div className="input_icon_login">
                <span className="spanIcon" > {icon } </span>
                <input value={valueLogin} onChange={(event : React.ChangeEvent<HTMLInputElement>) => handleChange(event)} className="Input_Login"  type={typeInput} name={name} placeholder={placeholder} />

            </div>

        </>





    );


}

export default InputLoign;