import React, { ReactNode } from "react";


interface IInput {
    icon: ReactNode,
    typeInput: string,
    name: string,
    placeholder: string,
    label: string
}

const InputLogin = ({icon, typeInput, name, placeholder, label}: IInput) => {

   
    
    return (

        <>
            <div className="containerInput">
                <div className="containerLabel">
                    <label>{label}</label>
                </div>
                <div className="input_icon_login">
                    <span className="spanIcon" > {icon} </span>
                    <input className="Input_Login" type={typeInput} name={name} placeholder={placeholder} />
                </div>
            </div>


        </>

    );

}

export default InputLogin;
