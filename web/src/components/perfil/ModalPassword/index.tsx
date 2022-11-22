import React from "react";
import InputBtn from "../../utils/Button/InputBtn";
import InputLogin from "../../utils/Input/LoginInput";

interface ImodalPassword{
    value:string
}

const ModalPassword = ({value}:ImodalPassword) => {


    return (


        <div className="Modal_all">
            
            <h1>Confirme sua senha</h1>
            <InputLogin className="InputModalPerfil" valueLogin={value} handleChange={()=>{}} hasError={false} icon={''} label={''} maxlength={255} name={''} placeholder={''} typeInput={'text'} />
            <h4>esqueci minha senha</h4>

            <div className="btn_cancel_Continue">
            <InputBtn className="btnCancelar" name="" onClick={() =>{}} typeInput={'Button'} valueBtn={"cancelar"}/>
            <InputBtn className="btnContinuar" name="" onClick={() =>{}} typeInput={'Button'} valueBtn={"continuar"}/>
            </div>

        </div>

    )


}





export default ModalPassword;