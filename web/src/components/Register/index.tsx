import React, {useEffect, useState} from "react";
import InputLogin from "../utils/Input/LoginInput";
import { FaUserAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";

const RegisterSpace = () => {

    const [inputs, setInputs] = React.useState({
        first_name: '',
        last_Name: '',
        nickname: '',
        birth_date: '',
        cpf: '',
        mail: '',
        password: '',
        biography: '',
    })
    
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setInputs({
            ...inputs, [event.target.name] : event.target.value
        })
    }
    
     //useEffect(() => {
      //  console.log(inputs)
    //}, [inputs])


    return (
        <>
            <div className="page_register">
                <div className="title_page" >
                    <h1>Faça seu Cadastro</h1>
                </div>
                <div className="container_inputs">
                    <div className="teste">
                        <InputLogin valueLogin={inputs.first_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleChange(event)}} typeInput={"text"} placeholder={"Nome"} icon={<FaUserAlt className="IconLogin" />} name={"first_name"} label={"Nome"} className={"inputRegister"} />
                    </div>
                </div>
            </div>



        </>
    )
}

export default RegisterSpace;