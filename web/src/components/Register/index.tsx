import React from "react";
import InputLogin from "../utils/Input/LoginInput";
import { FaUserAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";


// 

// const [errors, setErrors] = React.useState({});

// const handlerErrors = (errorMenssage: string, input: string) => {
//     setErrors((prevState) => ({ ...prevState, [input]: errorMenssage }));
// }

// const validate = () => {
//     let validate = true

//     if (!inputs.first_name || !inputs.last_Name || !inputs.nickname || !inputs.cpf || !inputs.mail || !inputs.password) {
//         validate = false
//         handlerErrors("Preencha os campos obrigatótrios", "first_name" )
//     }
// }

const RegisterSpace = () => {
    return (
        <>
            <div className="pageRegister">
                <div className="titlePage" >
                    <h1>Faça seu Cadastro</h1>
                </div>
                <span className="containerInputs">
                    <span className="teste">
                        <InputLogin valueLogin="teste" hasError={false} handleChange={() => {}} typeInput={"text"} placeholder={"Nome"} icon={<FaUserAlt className="IconLogin" />} name={"first_name"} label={"Nome"} className={"inputRegister"} />
                    </span>
                </span>
            </div>



        </>
    )
}

export default RegisterSpace;