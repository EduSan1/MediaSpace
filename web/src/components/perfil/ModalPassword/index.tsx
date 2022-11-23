import React from "react";
import InputLogin from "../../utils/Input/LoginInput";



const ModalPassword = () => {


    return (


        <div className="Modal_all">
            
            <h1>Confirme sua senha</h1>
            <InputLogin className="InputModalPerfil" valueLogin="" handleChange={()=>{}} hasError={false} icon={''} label={''} maxlength={255} name={''} placeholder={''} typeInput={'text'} />
            <h4>esqueci minha senha</h4>


        </div>

    )


}





export default ModalPassword;