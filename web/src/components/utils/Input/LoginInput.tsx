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
    className: "Input_Login" | "input_register" | "InputError" | "input_register_error" | "Input_PassWordRecovery" | "Input_one" | "Input_two"| "teste",
    hasError: boolean
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    maxlength: number
}

const InputLogin = ({ icon, typeInput, name, placeholder, label, handleChange, className, hasError, valueLogin, maxlength }: IInput) => {



    return (

        <>
            <div className="containerInput">
                <div className="container_label">
                    <label>{label}</label>
                </div>
                <div className="input_icon_login">
                    <span className={hasError ? "erroIcon" : "IconNormal"} > {icon} </span>
                    <input value={valueLogin} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} className={className} type={typeInput} name={name} placeholder={placeholder} maxLength={maxlength} />
                </div>
            </div>
        </>
    );

}

export default InputLogin;
