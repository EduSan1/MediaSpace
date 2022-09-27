import React, { ReactNode } from "react";


interface IInput {
    icon: ReactNode,
    typeInput: string,
    name: string,
    placeholder: string,
    label: string,
    classNameInput: "Input_Login" | "inputRegister",
}

const InputLogin = ({ icon, typeInput, name, placeholder, label, classNameInput }: IInput) => {



    return (

        <>
            <div className="containerInput">
                <div className="containerLabel">
                    <label>{label}</label>
                </div>
                <div className="input_icon_login">
                    <span className="spanIcon" > {icon} </span>
                    <input className={classNameInput} type={typeInput} name={name} placeholder={placeholder} />
                </div>
            </div>


        </>

    );

}

export default InputLogin;
