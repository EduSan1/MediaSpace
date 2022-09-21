import React from "react";
import InputLoign from "../Login/LoginInput";
import {FaUserAlt} from "react-icons/fa"


const RegisterSpace = () => {
    return (
        <>
        <span className="container_inputs">       
                <InputLoign typeInput={"date"} icon={<FaUserAlt className="IconLogin" />} />
        </span>
        
          
        </>
    )
}

export default RegisterSpace;