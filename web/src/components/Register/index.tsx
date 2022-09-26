import React from "react";
import InputLoign from "../utils/Input/LoginInput";
import { FaUserAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";


const [inputs, setInputs] = React.useState({
    first_name: '',
    last_Name: '',
    nickname: '',
    birth_date: '',
    cpf: '',
    mail: '',
    password: '',
    biography: '',
});

const [errors, setErrors] = React.useState({});

const handlerErrors = (errorMenssage: string, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMenssage }));
}

const RegisterSpace = () => {
    return (
        <>

            <span className="container_inputs">
                <span className="teste">
                    <InputLoign typeInput={"text"} placeholder={"Nome"} icon={<FaUserAlt className="IconLogin" />} name={"tese"} />
                </span>





            </span>


        </>
    )
}

export default RegisterSpace;