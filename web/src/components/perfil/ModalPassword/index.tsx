import React, { useState,useEffect } from "react";
import InputBtn from "../../utils/Button/InputBtn";
import InputLogin from "../../utils/Input/LoginInput";





const ModalPassword = () => {

    const [password, setpassword] = useState({
        "password":''
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setpassword({
          ...password,
          [event.target.name]: event.target.value
    
        })
    
      };

      const reshiterpassword = () =>{
        console.log('foi');
      }


      const validate = () => {
        const validate = false;

           if(!password){
            console.log('tem algo');
           }else{
            console.log('nao tem algo');
           }


           if(password){
              reshiterpassword();
           }
      }


    return (


        <div className="Modal_all">
            
            <h1>Confirme sua senha</h1>
            <InputLogin disable className="InputModalPerfil" valueLogin={password.password} handleChange={(event: React.ChangeEvent<HTMLInputElement>)=>{handleChange(event)}} hasError={false} icon={''} label={''} maxlength={255} name={'password'} placeholder={''} typeInput={'text'} />
            <h4>esqueci minha senha</h4>

            <div className="btn_cancel_Continue">
            <InputBtn className="btnCancelar" name="" onClick={() =>{}} typeInput={'Button'} valueBtn={"cancelar"}/>
            <InputBtn className="btnContinuar" name="" onClick={() =>{}} typeInput={'Button'} valueBtn={"continuar"}/>
            </div>

        </div>

    )


}





export default ModalPassword;