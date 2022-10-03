import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { MdLock } from "react-icons/md";
import { Value } from "sass";
interface IInput {
    icon: ReactNode,
    typeInput: string,
    name: string,
    placeholder: string,
    label: string,
    valueLogin: string,
    className: "Input_Login" | "inputRegister" | "InputError" | "Input_PassWordRecovery",
    hasError: boolean
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,



}

const InputLogin = ({ icon, typeInput, name, placeholder, label, handleChange, className, hasError, valueLogin }: IInput) => {



    return (

        <>
            <div className="containerInput">
                <div className="container_label">
                    <label>{label}</label>
                </div>
                <div className="input_icon_login">
                    <span className={hasError ? "erroIcon" : "IconNormal"} id="spanIcon" > {icon} </span>
                    <input value={valueLogin} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} className={className} type={typeInput} name={name} placeholder={placeholder} />
                </div>
            </div>
        </>
    );

}

export default InputLogin;
