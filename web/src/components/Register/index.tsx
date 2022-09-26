import React from "react";
import InputLoign from "../utils/Input/LoginInput";
import { FaUserAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";


//const [inputs, setInputs] = React.useState({
//    first_name: '',
//    last_Name: '',
//    nickname: '',
//    birth_date: '',
//    cpf: '',
//    mail: '',
//    password: '',
//    biography: '',
//}); 

//const [errors, setErrors] = React.useState({});

//const handlerErrors = (errorMenssage: string, //input: string) => {
//    setErrors((prevState) => ({ ...prevState, [input]: errorMenssage }));
//  }



const RegisterSpace = () => {
    return (
        <>  
            <div className="pageRegister">
                <div className="titlePage" >
                    <h1>Faça seu Cadastro</h1>
                </div>
                <span className="containerInputs">
                    <span className="teste">
                        <InputLoign typeInput={"text"} placeholder={"Nome"} icon={<FaUserAlt className="IconLogin" />} name={"first_name"} label = {"Nome"}/>
                        <InputLoign typeInput={"text"} placeholder={"Sobrenome"} icon={<FaUserAlt className="IconLogin" />} name={"last_name"} label = {"Sobrenome"}/>
                        <InputLoign typeInput={"text"} placeholder={"Nickname"} icon={<FaUserAlt className="IconLogin" />} name={"nickname"} label = {"Nickname"}/>
                        <InputLoign typeInput={"text"} placeholder={"Celular"} icon={<MdPhone className="IconLogin" />} name={"last_name"} label = {"Celular"}/>
                        <InputLoign typeInput={"text"} placeholder={"CPF"} icon={<HiIdentification
                            className="IconLogin" />} name={"cpf"} label = {"CPF"}/>

                    </span>
                    <span className="teste">
                        <InputLoign typeInput={"text"} placeholder={"Nome"} icon={<FaUserAlt className="IconLogin" />} name={"first_name"} label = {"Nome"}/>
                        <InputLoign typeInput={"text"} placeholder={"Sobrenome"} icon={<FaUserAlt className="IconLogin" />} name={"last_name"} label = {"Sobrenome"}/>

                    </span>
                    
                   
                </span>
            </div>
            


        </>
    )
}

export default RegisterSpace;