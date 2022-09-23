import React from "react";
import InputLoign from "../Login/LoginInput";
import {FaUserAlt} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import {HiIdentification} from "react-icons/hi";


const RegisterSpace = () => {
    return (
        <>
       
        <span className="container_inputs">
            <span className="teste">
                <InputLoign typeInput={"text"} placeHolder={"Nome"} icon={<FaUserAlt className="IconLogin" />} />   
                <InputLoign typeInput={"text"} placeHolder={"Sobrenome"} icon={<FaUserAlt className="IconLogin" />} />
                <InputLoign typeInput={"text"} placeHolder={"Nickname"}icon={<FaUserAlt className="IconLogin" />} />
                <InputLoign typeInput={"number"} placeHolder={"Celular"} icon={<MdPhone className="IconLogin" />} />
                <InputLoign typeInput={"number"} placeHolder={"CPF"}icon={<HiIdentification className="IconLogin" />} />
            </span>
            
            <div className="teste">
                <InputLoign typeInput={"text"} placeHolder={"Nome"} icon={<FaUserAlt className="IconLogin" />} />   
                <InputLoign typeInput={"text"} placeHolder={"Sobrenome"} icon={<FaUserAlt className="IconLogin" />} />
                <InputLoign typeInput={"text"} placeHolder={"Nickname"}icon={<FaUserAlt className="IconLogin" />} />
                <InputLoign typeInput={"number"} placeHolder={"Celular"} icon={<MdPhone className="IconLogin" />} />
                <InputLoign typeInput={"number"} placeHolder={"CPF"}icon={<HiIdentification className="IconLogin" />} />
            </div>
                       
        </span>
        
          
        </>
    )
}

export default RegisterSpace;