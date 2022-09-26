import React, { ReactNode } from "react";


interface IInput {
    icon: ReactNode,
    typeInput: string,
    name: string,
    placeholder: string
}



const InputLoign = ({ icon, typeInput, name, placeholder }: IInput) => {

    return (

        <>
            <div>
                <div className="containerLabel">
                    <label className="labelInput"> Nome: </label>
                </div>
                <div className="input_icon_login">
                    <span className="spanIcon" > {icon} </span>
                    <input className="Input_Login" type={typeInput} name={name} placeholder={placeholder} />
                </div>
            </div>


        </>





    );


}



export default InputLoign;
